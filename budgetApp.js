var express = require('express');
var app = express();
var serv = require('http').Server(app);
var cookieParser = require('cookie-parser');
const mongo = require('mongodb').MongoClient;
//const bcrypt = require('bcrypt');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const https = require('https');
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json';
const keys = require('../keys.json');
const PORT = process.env.PORT;
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('../client_secret.json');
var Jimp = require('jimp');
const url = process.env.MONGOLAB_URI;
const nodemailer = require('nodemailer');




const authJS = require("./authentication.js");




var moneyData = [];
var settingMoneyData = [];

function authorize(credentials, callback, user, databaseID, newdata) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, user, databaseID, newdata);
  });
}




function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function readAll(auth, user, databaseID) {
  const sheets = google.sheets({version: 'v4', auth});
  sheets.spreadsheets.values.get({
    spreadsheetId: databaseID,
    range: user+'!A2:Z',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    var fulldata =[];
    var counter = 0;
    if (rows.length) {
      //console.log('Reading Rows');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        //console.log(`${row[0]}, ${row[1]}, ${row[2]}, ${row[3]}, ${row[4]}, ${row[5]}, ${row[6]}, ${row[7]}, ${row[8]}, ${row[9]}`);
        fulldata[counter] = [`${row[0]}`, `${row[1]}`, `${row[2]}`, `${row[3]}`, `${row[4]}`, `${row[5]}`, `${row[6]}`, `${row[7]}`, `${row[8]}`, `${row[9]}`, `${row[10]}`, `${row[11]}`, `${row[12]}`];
        counter++;
      });
      moneyData[user] = fulldata;
    } else {
      console.log('No data found.');
    }
  });
}

async function createNewUserSheet(auth, user, databaseID) {
   const sheets = google.sheets({version: 'v4', auth:client});
   await sheets.spreadsheets.batchUpdate(
      {   spreadsheetId: databaseID,
          resource: {
              requests: [
                  {
                      'addSheet':{
                          'properties':{
                              'title': user
                          }
                      } 
                  }
              ],
          }
      },
      function(err, response) {
          if (err){
            console.log(err);
            return;
          }
          console.log("new user added! - " + user);
  });

   const opt = {
      spreadsheetId:databaseID,
      range: 'blank!A1:M3'
    };

    var data = await sheets.spreadsheets.values.get(opt);
    let dataArray = data.data.values;

    const updateOptions = {
      spreadsheetId:databaseID,
      range: user + '!A1',
      valueInputOption: 'USER_ENTERED',
      resource: { values: dataArray }
    };
    let res = await sheets.spreadsheets.values.update(updateOptions);

}



async function addToGoogleSheet(auth, user, databaseID, thedata) {
   const sheets = google.sheets({version: 'v4', auth:client});
   
   const opt = {
      spreadsheetId:databaseID,
      range: user + '!A:M'
    };

    if(thedata.save == "" || thedata.save == "NaN" || thedata.save == "undefined" || thedata.save == undefined){
        var amtsaved = 0;
        var spending = 0;
    }else{
        var amtsaved = thedata.paynet*thedata.save;
        var spending = thedata.paynet-amtsaved;
    }
    
    var data = await sheets.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    dataArray[dataArray.length] = [thedata.type, thedata.date, thedata.name, thedata.amount, thedata.cat1, thedata.cat2, thedata.paytotal, thedata.paynet, thedata.invest, thedata.taxes, thedata.save, amtsaved, spending];
    //let newDataArray = dataArray.map(function(r){
    //  r.push(data.type, data.date, data.name, data.amount, data.cat1, data.cat2, data.paytotal, data.paynet, data.invest, data.taxes, data.save, amtsaved, spending);
    //  return r;
    //});

    const updateOptions = {
      spreadsheetId:databaseID,
      range: user + '!A1',
      valueInputOption: 'USER_ENTERED',
      resource: { values: dataArray }
    };
    let res = await sheets.spreadsheets.values.update(updateOptions);

}


const client = new google.auth.JWT(
    keys.client_email, null, keys.private_key, ['https://www.googleapis.com/auth/spreadsheets']
  );

client.authorize(function(err,tokens){
  if(err){
    console.log(err);
    return;
  }else{
    console.log('Connected to google sheets!!!');
    //gsrun(client);
    //createNewUserSheet(client, "RobbyTest", '1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ')
  }
});

// //get
async function gsrun(cl){
    const gsapi = google.sheets({version:'v4', auth:cl});

    const opt = {
      spreadsheetId:'1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ',
      range: 'Test!A1:B5'
    };

    var data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    let newdataArray = dataArray.map(function(r){
      r.push(r[0] + '-' + r[1])
      return r;
    });

    console.log(newdataArray);

    const updateOptions = {
      spreadsheetId:'1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ',
      range: 'Test!E1',
      valueInputOption: 'USER_ENTERED',
      resource: { values: newdataArray }
    };
    let res = await gsapi.spreadsheets.values.update(updateOptions);

    //console.log(res);
}


  function checkIfAdminBoxes(credential){
      var toPrint = `<div style="padding: 15px;">
            <input class='button2' id='budgethomebutton' style='padding:45px; font-size:13px;' type='button' value='Budget System' />
            <input class='button2' id='randomizerhomebutton' style='padding:45px; font-size:13px;' type='button' value='List/Randomizer' />
            `;
      if(credential == "Admin"){
          toPrint += `
            <input class='button2' id='addpicturehomebutton' style='padding:45px; font-size:13px;' type='button' value='Add Picture' />
            `;
        }
        toPrint += `
            </div>
            `;
            return toPrint;

    }

// function addToGoogleSheet(spreadsheet, data){
//     var doc = new GoogleSpreadsheet(spreadsheet);

//     doc.useServiceAccountAuth(creds, function (err) {

//         if(data.save == "" || data.save == "NaN" || data.save == "undefined" || data.save == undefined){
//             var amtsaved = 0;
//             var spending = 0;
//         }else{
//             var amtsaved = data.paynet*data.save;
//             var spending = data.paynet-amtsaved;
//         }
//         console.log('Adding Rows Rows');
//       doc.addRow(1, { Type: data.type, Date: data.date, Name: data.name, Amount: data.amount, Category_1: data.cat1, Category_2: data.cat2, Paycheck_Total: data.paytotal, Paycheck_Net: data.paynet, Investments: data.invest, Taxes_Taken_Out: data.taxes, Percentage_To_Save: data.save, Saved: amtsaved, Spending: spending }, function(err) {

//       //doc.addRow(1, { Type: 'Purchase', Date: '02-04-2019', Name: 'the world', Amount: '36', Category_1: 'Food', Category_2: 'Lunch', Paycheck_Total: '', Paycheck_Net: '', Investments: '', Taxes_Taken_Out: '' }, function(err) {

//           if(err) {
//             console.log(err);
//           }

//       });

//     });
// }

function addToGoogleSheetSecret(spreadsheet, data){
    var doc = new GoogleSpreadsheet(spreadsheet);

    doc.useServiceAccountAuth(creds, function (err) {
      console.log('Adding Secret Rows');
      doc.addRow(1, { Section: data[0], Attempt: data[1], Complete: data[2], Unlocked: data[3], Other: data[4] }, function(err) {

      //doc.addRow(1, { Type: 'Purchase', Date: '02-04-2019', Name: 'the world', Amount: '36', Category_1: 'Food', Category_2: 'Lunch', Paycheck_Total: '', Paycheck_Net: '', Investments: '', Taxes_Taken_Out: '' }, function(err) {

          if(err) {
            console.log(err);
          }

      });

    });
}





	


module.exports = function(socket, socketidnum) {

 	socket.id = socketidnum;

 	module.exports.authorize = authorize;
 	var SOCKET_LIST = authJS.getSocketList();
	var plist = authJS.getpList();
	var rlist = authJS.getrList();

  socket.on('setpercenttochange',function(data){

        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('logins');
          collection.find({"username": data.username}).toArray((err, items) => {
                if(items[0]==undefined){
                    //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                }
                else{
                    if(data.username == items[0].username  && data.password == items[0].password){                       
                       collection.updateOne({username: items[0].username}, {'$set': {'autoamttosave': data.percent}}, (err, item) => {
                            
                       });
                       SOCKET_LIST[socket.id].emit('settedpercenttochange',{username:data.username});
                    }else{
                    }
                }
            });
          
        });
    }); 

 socket.on('ciLoggedIn',function(data){

	        mongo.connect(url, (err, client) => {
	          if (err) {
	            console.error(err)
	            return
	          }
	          //...
	          const db = client.db('heroku_k7f7n63h');
	          const collection = db.collection('logins');

	          collection.find({"username": data.username}).toArray((err, items) => {
	                if(items[0]==undefined){
	                    SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
	                }
	                else{
	                    
	                    if(data.username == items[0].username && data.tid == items[0].loggedin){      
	                                     
	                        fs.readFile('credentials.json', (err, content) => {
	                          if (err) return console.log('Error loading client secret file:', err);
	                          authorize(JSON.parse(content), readAll, items[0].username, items[0].database);
	                          
	                          SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"ue", username:data.username, userData:items[0], budgetData:moneyData[items[0].username], autoamttosave:items[0].autoamttosave, boxes:checkIfAdminBoxes(items[0].security)});
	                        });
	                    }else{
	                        SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
	                    }
	                }
	            });
	          
	        });
	    }); 


 socket.on('authenticate',function(data){

        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('logins');

          collection.find({"username": data.username}).toArray((err, items) => {
                //console.log("" + items[0].username + " | " + data.username + data.password);
                //console.log(items[0]);
                if(items[0]==undefined){
                    SOCKET_LIST[socket.id].emit('authenticate',{answer:"dne"});
                }
                else{
                    // comppass = bcrypt.compare(data.password, items[0].password, function(err, res) {
                    //     return res;      
                    // });
                    if(data.password == items[0].password){
                        var rand = Math.random();
                        
                        SOCKET_LIST[socket.id].emit('authenticate',{answer:"ue", username:data.username, nid:rand, boxes: checkIfAdminBoxes(items[0].security)});
                        
                        collection.updateOne({username: data.username}, {'$set': {'loggedin': rand}}, (err, item) => {
                      
                        });
                    }else{
                        
                        SOCKET_LIST[socket.id].emit('authenticate',{answer:"pnc"});
                    }
                }                  

            });
          
        });
    });

  socket.on('createAccount',function(data){

        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('logins');

          collection.find({"username": data.username}).toArray((err, items) => {
                if(items[0]==undefined){

                    fs.readFile('credentials.json', (err, content) => {
                      if (err) return console.log('Error loading client secret file:', err);
                      authorize(JSON.parse(content), createNewUserSheet, data.username, "1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ");
                      
                        collection.insertOne({username: data.username, password: data.password, email: data.useremail, firstname: data.firstname, lastname: data.lastname, security:"user", database:"1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ", randomizer: [["Example","First Entry","Second Entry"]], autoamttosave: 0.5, permalogin: false, loggedin: "lgdot"}, (err, result) => {

                      })
                        SOCKET_LIST[socket.id].emit('authenticate',{answer:"caDONE"});

                    });
                    //createNewUserSheet(client, data.username, "1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ");
                    //gsrun(client);
                    
                    // collection.insertOne({username: data.username, password: data.password, firstname: data.firstname, lastname: data.lastname, security:"user", database:"1OnsWXaZhXBnvsCRCw2uM1arCzWBGQeqW_AVL-UpV7QQ", randomizer: [["Example","First Entry","Second Entry"]], autoamttosave: 0.5, permalogin: false, loggedin: "lgdot"}, (err, result) => {

                    // })
                    // SOCKET_LIST[socket.id].emit('authenticate',{answer:"caDONE"});


                }
                else{
                  SOCKET_LIST[socket.id].emit('authenticate',{answer:"caUE"});
                    
                }                  

            });
          
        });
    });


  socket.on('addToSheet',function(data){

        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('logins');

          collection.find({"username": data.username}).toArray((err, items) => {
                if(items[0]==undefined){
                    //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                }
                else{
                    if(data.username == items[0].username  && data.tid == items[0].loggedin){                       
                       //addToGoogleSheet(items[0].database, data);
                       fs.readFile('credentials.json', (err, content) => {
                          if (err) return console.log('Error loading client secret file:', err);
                          authorize(JSON.parse(content), addToGoogleSheet, data.username, items[0].database, data);

                          SOCKET_LIST[socket.id].emit('robinDataAddedToSpreadsheet',{username:data.username});

                        });
                       
                    }else{
                        //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 



  
};