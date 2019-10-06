
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
const PORT = process.env.PORT;
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var Jimp = require('jimp');
const url = process.env.MONGOLAB_URI;

//This allows use of other folders
app.use('/client',express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/css'));
app.use(express.static(__dirname + '/client/img'));
app.use(express.static(__dirname + '/client/js'));
app.use(express.static(__dirname + '/client/fonts'));
app.use(express.static(__dirname + '/client/pages'));
app.use(express.static(__dirname + '/client'));
app.use(cookieParser());

app.get('/',function(req, res) {
    //Start this file
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/home',function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.get('/robin', (req, res)=>{ 
    res.sendFile(__dirname + '/client/pages/robin/robin.html');
});
app.get('/shop', (req, res)=>{ 
    res.sendFile(__dirname + '/client/pages/shop.html');
});
app.get('/games', (req, res)=>{ 
    res.sendFile(__dirname + '/client/pages/games/gameshome.html');
});
app.get('/painting', (req, res)=>{ 
    res.sendFile(__dirname + '/client/pages/painting/painting.html');
});
app.get('/blog', (req, res)=>{ 
    res.sendFile(__dirname + '/client/pages/blog/page1.html');
});
app.get('/secret', (req, res)=>{ 
    res.sendFile(__dirname + '/client/pages/secret/secret.html');
});
app.get('/logout', (req, res)=>{ 
    mongo.connect(url, (err, client) => {
      if (err) {
        console.error(err)
        return
      }
      const db = client.db('heroku_k7f7n63h');
      const collection = db.collection('logins');
      cuser = req.cookies['username'];
        collection.find({"username": cuser}).toArray((err, items) => {
            if(items[0]==undefined){
                    
            }else if(items[0].permalogin == false){
                collection.updateOne({username: cuser}, {'$set': {'loggedin': "lgdot"}}, (err, item) => {
                    
                });
            }
        });
    });
    res.clearCookie('username');
    res.sendFile(__dirname + '/client/pages/robin/robin.html');
});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/client/error.html');
});

var moneyData = [];
var settingMoneyData = [];

function authorize(credentials, callback, user, databaseID) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, user, databaseID);
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
      console.log('Reading Rows');
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




function addToGoogleSheet(spreadsheet, data){
    var doc = new GoogleSpreadsheet(spreadsheet);

    doc.useServiceAccountAuth(creds, function (err) {

        if(data.save == "" || data.save == "NaN" || data.save == "undefined" || data.save == undefined){
            var amtsaved = 0;
            var spending = 0;
        }else{
            var amtsaved = data.paynet*data.save;
            var spending = data.paynet-amtsaved;
        }
        console.log('Adding Rows Rows');
      doc.addRow(1, { Type: data.type, Date: data.date, Name: data.name, Amount: data.amount, Category_1: data.cat1, Category_2: data.cat2, Paycheck_Total: data.paytotal, Paycheck_Net: data.paynet, Investments: data.invest, Taxes_Taken_Out: data.taxes, Percentage_To_Save: data.save, Saved: amtsaved, Spending: spending }, function(err) {

      //doc.addRow(1, { Type: 'Purchase', Date: '02-04-2019', Name: 'the world', Amount: '36', Category_1: 'Food', Category_2: 'Lunch', Paycheck_Total: '', Paycheck_Net: '', Investments: '', Taxes_Taken_Out: '' }, function(err) {

          if(err) {
            console.log(err);
          }

      });

    });
}

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

// mongo.connect(url, (err, client) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //...
//   const db = client.db('heroku_k7f7n63h');
//  //const collection = db.collection('clicks');

//     const collection = db.collection('paintings');
 
//     collection.find().toArray((err, items) => {
//       for(var i in items){
//           saveFromImgur(items[i].imgur + '.jpg', items[i].img);
//           console.log(items[i].imgur + '.jpg');
//       }
//     });
// });

// function saveFromImgur(imgurfile, name){
//         var savePainting = './client/img/paintings/' + name;
//         var saveSmallPainting = './client/img/paintings/smallpaintings/' + name;
//         var filetoget = 'https://www.opensourcemacsoftware.org/wp-content/uploads/2011/08/fabien-conus-smallimage.jpg';

//         Jimp.read(filetoget, (err, image) => {
//               if (err) throw err;               
              
//               image
//                   //.resize(image.bitmap.height*2, image.bitmap.height) // resize
//                   .quality(5) // set JPEG quality
//                   .greyscale() // set greyscale
//                   .resize(600, 600)
//                   .write(saveSmallPainting); // save 
//         });  
// }

//////////////////////////////////////////////////////////////bcrypt////////////////////////////////////////////////////////////////////////////////
// const saltRounds = 15;
// const myPlaintextPassword = '1234';
// const someOtherPlaintextPassword = 'not_bacon';
// var hashed;
// //This is to hash a password
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//         hashed = hash;
//         console.log("This is new hash: " + hash);// Store hash in your password DB.
// });

// setTimeout(function(){ 

// // Load hash from your password DB.
// bcrypt.compare(myPlaintextPassword, hashed, function(err, res) {
//     // res == true
//     console.log("1" + res);
// });
// bcrypt.compare(someOtherPlaintextPassword, hashed, function(err, res) {
//     // res == false
//     console.log("2" + res);
// });
 

// }, 3000);


//////////////////////////////////////////////////////JIMP - change vertical files to horizontal/////////////////////////////////////////////////////////////////////////////////
// function runchanger(num, callback){
//     if(num == 95){
//         console.log("DONE");
//     }
//     else{
//         var filetoget = './client/img/imgprcss/tochange/pics (' + num + ').jpg';
//          var filechanged = './client/img/imgprcss/changed/changeme (' + num + ').jpg';
//          var filechangedkeep = './client/img/imgprcss/changed/pics (' + num + ').jpg';


//          Jimp.read(filetoget, (err, image) => {
//               if (err) throw err;
//               console.log(num + " - were her changing the image - width:" + image.bitmap.width + " | height: " + image.bitmap.height);
                
//                     var colorbotright = image
//                     .clone()
//                     .getPixelColor(image.bitmap.width-5, image.bitmap.height-5);

//                     var colortopright = image
//                     .clone()
//                     .getPixelColor(image.bitmap.width-5, 5);

//                     var colorbotleft = image
//                     .clone()
//                     .getPixelColor(5, image.bitmap.height-5);

//                     var colortopleft = image
//                     .clone()
//                     .getPixelColor(5, 5);

//                     if(colorbotright == 0 && colortopright == 0 && colorbotleft == 0 && colortopleft == 0){
//                         image
//                         .write(filechanged);
//                         callback(num-1, runchanger);
//                     }else{
//                         var theheight = image.bitmap.height;
//                         var thewidth = image.bitmap.width;

//                         if(thewidth < theheight){
//                          Jimp.read(filetoget, (err, newimage) => {
//                           if (err) throw err;
                            
//                                 image
//                                 .resize(theheight*1.2, theheight) // resize
//                                 .blur(15)
//                                 .greyscale(); // set greyscale

//                                 image
//                                 .quality(100) // set JPEG quality
//                                 .composite( newimage, (image.bitmap.width-thewidth)/2, 0 )
//                                 .write(filechangedkeep); // save
//                                 console.log("------------------------------------- new width:" + image.bitmap.height*1.2 + " | new height: " + image.bitmap.height);
//                                 callback(num-1, runchanger);
//                         });
//                       }else{
//                         image
//                             //.resize(image.bitmap.height*2, image.bitmap.height) // resize
//                             .quality(100) // set JPEG quality
//                             //.greyscale() // set greyscale
//                             .write(filechangedkeep); // save
//                             callback(num-1, runchanger);
//                             console.log("------------------------------------------------------- NORMAL");
//                       }
//                     }

                

                
//         });     
        
//     }
    
// }

// function savePicSomewhereElse(){
//         var filetoget = './client/img/imgprcss/tochange/1.jpg';
//          var filechangedkeep = './client/img/imgprcss/changed/pics.jpg';


//          Jimp.read(filetoget, (err, image) => {
//               if (err) throw err;               
              
//               image
//                   //.resize(image.bitmap.height*2, image.bitmap.height) // resize
//                   .quality(100) // set JPEG quality
//                   .greyscale() // set greyscale
//                   .write(filechangedkeep); // save
//                   console.log("------------------------------------------------------- NORMAL");
            
                    
//         });   
// }

     
//runchanger(96, runchanger);
// savePicSomewhereElse();



///////////////////////////////////////////////////////////DATABASE/////////////////////////////////////////////////////
// //const url = 'mongodb://localhost:27017';
// mongo.connect(url, (err, client) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //...
//   const db = client.db('heroku_k7f7n63h');
//  //const collection = db.collection('clicks');

//     const collection = db.collection('paintings');
//     var counter = 0;
//     for(var i in oldpaintings){
//       if(oldpaintings[i].buycode == "" || oldpaintings[i].buycode == "NaN" || oldpaintings[i].buycode == "undefined" || oldpaintings[i].buycode == undefined){
//         collection.insertOne({name: oldpaintings[i].name, order: counter, img: oldpaintings[i].img, price: oldpaintings[i].price, sold: oldpaintings[i].sold, material: oldpaintings[i].material, size: oldpaintings[i].size, description: oldpaintings[i].description, type: oldpaintings[i].type, creator: oldpaintings[i].creator}, (err, result) => {

//         })
//       }else{
//         collection.insertOne({name: oldpaintings[i].name, order: counter, img: oldpaintings[i].img, price: oldpaintings[i].price, sold: oldpaintings[i].sold, material: oldpaintings[i].material, size: oldpaintings[i].size, description: oldpaintings[i].description, type: oldpaintings[i].type, creator: oldpaintings[i].creator, buycode: oldpaintings[i].buycode}, (err, result) => {

//         })
//       }
//       counter++
//     }


//     // collection.find().toArray((err, items) => {
//     //   for(var i in items){
//     //     console.log(items[i].username);
//     //     if(items[i].loggedin == true && items[i].permalogin == false){
//     //         collection.updateOne({username: items[i].username}, {'$set': {'loggedin': false}}, (err, item) => {
                
//     //         });
//     //     }
//     //   }
//     // });
// });


serv.listen(process.env.PORT || 8000);
//serv.listen(2000);
console.log("Server started.");




function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


var SOCKET_LIST = {};
var plist = {};
var rlist = {};

//This is a room object. it has the id, name and what game(type) is selected
var Room = function(id,nameid,type,maxp){
   var self = {
    id:id,
    name:nameid,
    gametype:type,
    maxplayers:maxp,
    currplayers:0,
    spectate:"",
    players:[],
    timer:-1
    }
    
    return self;
}


//This is a player object. it has the id, name and what room the player is in
var Player = function(id,nameid,playernm,roomid){
   var self = {
    id:id,
    name:nameid,
    room:roomid,
    playern:playernm,
    loggedin:true,
    score:0,
    pointsreceived:false,
    counterscore:0,
    section:0,
    randnum:0
    }
    //console.log("[ENTITY] - Player Entity Created: " +  nameid);
    return self;
}

//When a room is created it is assigned a room object and added to the list of rooms(rlist)
Room.onCreate = function(socket,nameid, gametype){
    console.log("[CREATION] - ROOM CREATED: " +  nameid);

    //Assign how many players are allowed per gametype
    if(gametype=="Party Pack"){
        maxp = 8;
    }else if(gametype=="Drawing App"){
        maxp = 8;
    }else{
        maxp = 8;
    }

    var room = Room(socket,nameid,gametype,maxp);
    room.spectate=nameid;
    rlist[socket] = room;
}

//When a room disconnects it is deleted from the list of rooms(rlist)
Room.onDisconnect = function(socket){
    delete rlist[socket];
}

//When a player is connected it is assigned a player object and added to the player list(plist)
Player.onConnect = function(socket,nameid,playernm,roomid){
    console.log("[CREATION] - PLAYER CREATED: " +  nameid);
    var player = Player(socket,nameid,playernm,roomid);
    plist[socket] = player;
    
}

//When a player is disconnected they are removed from the player list(plist)
Player.onDisconnect = function(socket){
        delete plist[socket];
}


//I forget
var DEBUG = false;
 
//This is the list of users
var USERS = {
    //Stored as username:password
}

//This is the list of rooms
var ROOMS = {
    //Stored as username:password
}

//Adds a user
var addUser = function(data,cb){
    setTimeout(function(){
        USERS[data.username] = data.room;
        cb();
    },10);
}

//Checks if the room exists
function isValidRoom(data){
    for(var i in ROOMS){
        if(data.room == i){
            return "true";
        }
    }
}

//Adds a room
var addRoom = function(data,cb){
    setTimeout(function(){
        //console.log("[UPDATE] - Added room " + data.room);
        ROOMS[data.room] = data.password;
        cb();
    },10);
}

//Checks if username exists in a room 
var doesUsernameExist = function(data,cb){
    setTimeout(function(){
        var torf = false;
        for(var j in rlist){
            if(data.room == rlist[j].name){
                for(var r in rlist[j].players){
                    if(data.username == rlist[j].players[r].name){
                        torf=true;
                        //console.log("[ROOM CHECK] - User already in room: " +  data.username);
                        break;
                    }else{
                        //console.log("[ROOM CHECK] - User not in room: " +  data.username);
                        torf=false;
                    }
                }
            }
        }
        cb(torf);
    },10);
}

//This sends the new list of players 
var updatePlayerClient = function(data) {

    //Sends list to all players
    for(var i in plist){
        for(var j in rlist){
            if(data.room == rlist[j].name){
                for(var r in rlist[j].players){
                    if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                    {
                        var listofplayers = "";
                        for(var q=0;q<rlist[j].players.length;q++){
                            listofplayers = listofplayers + "Player " + (q+1) +": " + rlist[j].players[q].name + "<br>";
                        }
                        
                        SOCKET_LIST[i].emit('updateplayersclient',{lop:listofplayers,room:data.room,gametype:rlist[j].gametype,allplayers:rlist[j].players});
                        
                    }
                }
            }
        }
    }
}






//////Socket Info, Receiving, and Sending////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){


    //Assign the socket a random number as id and put it in a socket list(the connections)
    socket.id = Math.random();
    SOCKET_LIST[socket.id] = socket;

    socket.on('updatecanvas',function(data){
        for(let i in SOCKET_LIST){
            SOCKET_LIST[i].emit('updatecanvas',{newimg:data.newimg});
        }
    });

    socket.on('refreshPlayerContent',function(data){
        updatePlayerClient(data);
    });






    //Receive from onepagejoin that you click signin//////////////////////////////////
    socket.on('signIn',function(data){

        //Check if the room exists
        if(isValidRoom(data)){
            //Check if username already exists
            doesUsernameExist(data,function(res){
                if(res){
                    //Username exists so lets see if they are a new person trying to log in or was disconnected
                    for(var j in rlist){
                        if(data.room == rlist[j].name){
                            for(var i in plist){

                                if(data.username == plist[i].name && plist[i].room == data.room){

                                    //If player was already created but disconnected then assign the new socket
                                    if(plist[i].loggedin == false){
                                        //console.log("[RECONNECT] - User reconnected: " + plist[i].name);
                                        delete SOCKET_LIST[socket.id];
                                        SOCKET_LIST[plist[i].id] = socket;
                                        socket.id = plist[i].id;
                                        //updatePlayerClient(data);
                                        plist[i].loggedin = true;
                                        for(var r in rlist[j].players){
                                            if(rlist[j].players[r].name == plist[i].name){
                                                socket.emit('signInResponseAgain',{success:true,me:rlist[j].players[r],section:rlist[j].players[r].section,np:plist[socket.id],gametype:rlist[j].gametype,room:data.room,msg1:"Player Created!"});
                                            }
                                        }
                                        break;
                                    }
                                    else{

                                        //If player already in game then deny them access
                                        socket.emit('signInResponse',{success:false,msg1:"Please choose another name!"});   
                                        break;
                                    }
                                }
                            }
                        }
                    }
                } 
                else{

                    //If username doesn't exist then create a player
                    addUser(data,function(){
                        for(var j in rlist){
                            if(data.room == rlist[j].name){
                                for(var r in rlist[j].players){
                                    if(rlist[j].currplayers < rlist[j].maxplayers){
                                        Player.onConnect(socket.id,data.username,2,data.room);
                                        rlist[j].players[rlist[j].players.length]=plist[socket.id];
                                        rlist[j].currplayers++;

                                        console.log("[CONNECTION] - PLAYER CREATED : " +  data.username);
                                        socket.emit('signInResponse',{success:true,gametype:rlist[j].gametype,room:data.room,np:plist[socket.id],msg1:"Player Created!"});
                                        updatePlayerClient(data);
                                        break;
                                    }
                                    else{
                                        socket.emit('signInResponse',{success:false,msg1:"Room is full!"});
                                        break;
                                    }
                                     
                                }                            
                            }
                        }
                    });        
                }
            });
        } 
        else {
            //console.log("[ERROR] - Room does not exist");
            socket.emit('signInResponse',{success:false,msg1:"Room does not exist!"});         
        }
    });

        socket.on('makeroom',function(data){
                if(isValidRoom(data)){
                    socket.emit('roomMakeResponse',{success:false,msg2:"Room is already taken"});
                } 
                else {
                    addRoom(data,function(){
                        console.log("[CONNECTION] - NEW ROOM CONNECTED! : " +  data.room + " | " + data.gametype);
                        Room.onCreate(socket.id,data.room,data.gametype);
                        
                        socket.emit('roomMakeResponse',{success:true,admin:true,room:data.room,gametype:data.gametype});
                    });
                    addUser(data,function(){
                        for(var j in rlist){
                            if(data.room == rlist[j].name){ 
                                    Player.onConnect(socket.id,data.username,"1",data.room);
                                    console.log("[CONNECTION] - PLAYER CREATED : " +  data.username);
                                    rlist[j].players[0]=plist[socket.id];
                                    rlist[j].currplayers++;
                                    updatePlayerClient(data);
                                    socket.emit('signInResponse',{success:true,gametype:data.gametype,room:data.room,np:plist[socket.id],msg1:"Player Created!"});
                                    // socket.emit('updategameclient',{gametype:data.gametype}); 
                               
                            }
                        }
                    });        
                }
            });
///////Disconnects////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //This is when a socket is disconnected from the server
    socket.on('disconnect',function(){
        
        //This searches if the disconnect was a player
        for(var i in plist){
            if(plist[i].id == socket.id){

                var theroom = plist[i].room;

                //If it was a player then it allows the player to exit the browser but be able to log back into the game
                console.log("[LOGGED OUT] - User logged out! : " +  plist[i].name);
                plist[socket.id].loggedin = false;

                var deleteroom = true;

                for(var j in rlist){
                    if(plist[i].room == rlist[j].name){
                        for(var r in rlist[j].players){
                            if(rlist[j].players[r].loggedin == true){
                                deleteroom = false;
                                console.log("[----------------------------------------------------------------------------------] - User still logged in! : " +  rlist[j].players[r].name);
                            }
                        }/////////////////////////////////////////////////////Find out how random users keep getting added to rlist///////////////////////////////
                    }
                }
                var roomn = 0;
                if(deleteroom == true){
                    for(var j in rlist){
                        if(theroom == rlist[j].name){
                            roomn = rlist[j].id;
                            for(var r in rlist[j].players){ 
                                delete USERS[rlist[j].players[r].name];
                                delete SOCKET_LIST[rlist[j].players[r].id];
                                Player.onDisconnect(rlist[j].players[r].id);
                            }
                        }
                    }
                    //rlist.splice(roomn, 1); 
                    delete ROOMS[theroom];
                    Room.onDisconnect(roomn);
                }


            }
        }
    });

//////Sending Everything to Clients///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Updates whenever a message is sent
    socket.on('sendMsgToServer',function(data){

        //Updates on the players list
        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    for(var r in rlist[j].players){
                        if(rlist[j].players[r].name == plist[i].name){
                            var playerName = plist[socket.id].name;
                            SOCKET_LIST[i].emit('addToChat',playerName + ': ' + data.themsg);
                        }
                    }
                }
            }
        }

        //Updates on the rooms list
        for(var j in rlist){
            if(data.room == rlist[j].name){
                 SOCKET_LIST[rlist[j].id].emit('addToChatSpectate',playerName + ': ' + data.themsg);
            }
        }
    });

    socket.on('updategameserver',function(data){

        //Updates on the players list
        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    for(var r in rlist[j].players){
                        if(rlist[j].players[r].name == plist[i].name){
                        var playerName = plist[socket.id].name;
                        SOCKET_LIST[i].emit('updategameclient',{gametype:rlist[j].gametype});
                        }
                    }
                }
            }
        }
    });


    socket.on('startgamepartypack',function(data){
        plist[socket.id].counterscore = 0;
        plist[socket.id].pointsreceived = false;  

        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    for(var r in rlist[j].players){
                        if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                        {
                           SOCKET_LIST[i].emit('partypackupdate',{room:data.room});
                            
                        }
                    }
                }
            }
        }
    });

     socket.on('resetcounterscore',function(data){
        plist[socket.id].counterscore = 0;                 
    });

    socket.on('addtocounterscore',function(data){
        plist[socket.id].counterscore++;            
    });

    socket.on('updatesection',function(data){
        for(var j in rlist){
            if(data.room == rlist[j].name){
                for(var r in rlist[j].players){
                    rlist[j].players[r].section = data.section;
                }
                    
            }
        }     
    });

    socket.on('getrandomnum',function(data){
        var randdiff = Math.floor(Math.random() * data.num); 
        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    for(var r in rlist[j].players){
                        rlist[j].players[r].randnum = randdiff;
                        if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                        {
                           SOCKET_LIST[i].emit('giverandomnum',{room:data.room,rnum:randdiff});
                            
                        }
                    }
                }
            }
        }
    });

    socket.on('partyPackTimerStart',function(data){

        var croom;
        for(var j in rlist){
            if(data.room == rlist[j].name){
                croom = j;
            }
        }
        if(rlist[croom].timer < 0){
            rlist[croom].timer = data.starttime;
            for(var i in plist){
                for(var j in rlist){
                    if(data.room == rlist[j].name){
                        for(var r in rlist[j].players){
                            if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                            {
                               SOCKET_LIST[i].emit('updateMathTimer',{room:data.room,ended:false,newtime:rlist[croom].timer});
                                
                            }
                        }
                    }
                }
            }
            var mathtimerint = setInterval(function() {
                rlist[croom].timer--;
                
                if (rlist[croom].timer <= 0) {
                    for(var i in plist){
                        for(var j in rlist){
                            if(data.room == rlist[j].name){
                                for(var r in rlist[j].players){
                                    if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                                    {
                                       SOCKET_LIST[i].emit('updateMathTimer',{room:data.room,ended:true,newtime:rlist[croom].timer});
                                       rlist[croom].timer = -1; 
                                    }
                                }
                            }
                        }
                    }
                    clearInterval(mathtimerint);
                }else{
                    for(var i in plist){
                        for(var j in rlist){
                            if(data.room == rlist[j].name){
                                for(var r in rlist[j].players){
                                    if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                                    {
                                       SOCKET_LIST[i].emit('updateMathTimer',{room:data.room,ended:false,newtime:rlist[croom].timer});
                                        
                                    }
                                }
                            }
                        }
                    }
                }
            }, 1000);


        }
    });


    socket.on('partyPackUpdateClient',function(data){
        
        if(data.message == 0){
            plist[socket.id].counterscore = 0;
            plist[socket.id].pointsreceived = false;
        } 
        else if(data.message == 1){
            sendMessage(data.room, 0);
            setTimeout(function() {
                sendMessage(data.room, 1);
                setTimeout(function() {
                    sendMessage(data.room, 2);
                    setTimeout(function() {
                        sendMessage(data.room, 3);
                        setTimeout(function() {
                            sendMessage(data.room, 4);                            
                        } ,1500);
                    } ,1500);
                } ,1500);
            } ,6000);
        }else if(data.message == 2){
            setTimeout(function() {
                sendMessage(data.room, 5);  
            } ,6000);
        }
    });

    function sendMessage(droom, mess){
        for(var i in plist){
            for(var j in rlist){
                if(droom == rlist[j].name){
                    for(var r in rlist[j].players){
                        if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                        {
                           SOCKET_LIST[i].emit('partyPackUpdateServer',{room:droom,message:mess});
                            
                        }
                    }
                }
            }
        }
    }

    socket.on('endPartyPackMath',function(data){

        var mathlow = [];
        var sortinglist = [];
        var finallist = [];           
        listitem = 0;


        for(var j in rlist){
            if(data.room == rlist[j].name){

                if(rlist[j].players[rlist[j].players.length-1].id == socket.id){
                    var counterzero = 0;
                    for(var z in rlist[j].players){
                        if(rlist[j].players[z].counterscore == 0){
                            counterzero++;
                        }
                        sortinglist[z] = rlist[j].players[z];
                    }


                    while(finallist.length < rlist[j].players.length){
                        var topscore = 0;
                        for(var z in sortinglist){
                            if(sortinglist[z].counterscore >= topscore){
                                topscore = sortinglist[z].counterscore;
                                listitem = z; 
                            }
                        }
                        finallist[finallist.length] = sortinglist[listitem];   
                        sortinglist.splice(listitem, 1); 
                        
                    }

                    if(counterzero == rlist[j].players.length){

                    }else{

                        for(var z in rlist[j].players){
                            if(rlist[j].players[z].name == finallist[0].name   &&  rlist[j].players[z].pointsreceived == false){  
                                rlist[j].players[z].score += 100;
                                rlist[j].players[z].pointsreceived = true;
                                mathlow[0] = rlist[j].players[z];
                            }
                            for(var y in finallist){
                                if(y==0){

                                }else{
                                    if(finallist[0].counterscore == finallist[y].counterscore){
                                        if(rlist[j].players[z].name == finallist[y].name  &&  rlist[j].players[z].pointsreceived == false){
                                            rlist[j].players[z].score += 100;
                                            rlist[j].players[z].pointsreceived = true;
                                            mathlow[mathlow.length] = rlist[j].players[z];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    for(var r in rlist[j].players){
                        if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                        {
                            if(rlist[j].players[rlist[j].players.length-1].id == socket.id){

                                SOCKET_LIST[i].emit('endPartyPackMathAll',{room:data.room,winners:mathlow,mathallplayers:finallist});
                            }
                            
                        }
                    }
                }
            }
        }

    });

    socket.on('showCurrentScores',function(data){
        var sortinglist = [];
        var finallist = [];           
        listitem = 0;

        setTimeout(function() {
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    if(rlist[j].players[rlist[j].players.length-1].id == socket.id){
                        for(var z in rlist[j].players){
                            sortinglist[z] = rlist[j].players[z];
                        }


                        while(finallist.length < rlist[j].players.length){
                            var topscore = 0;
                            for(var z in sortinglist){
                                if(sortinglist[z].score >= topscore){
                                    topscore = sortinglist[z].score;
                                    listitem = z; 
                                }
                            }
                            finallist[finallist.length] = sortinglist[listitem];    
                            sortinglist.splice(listitem, 1); 
                            
                        }
                    }
                }
            }


            for(var i in plist){
                for(var j in rlist){
                    if(data.room == rlist[j].name){
                        for(var r in rlist[j].players){
                            if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                            {
                                if(rlist[j].players[rlist[j].players.length-1].id == socket.id){

                                    SOCKET_LIST[i].emit('updateCurrentScore',{room:data.room,orderedlistofplayers:finallist});
                                }
                                
                            }
                        }
                    }
                }
            }
        } ,8000);
    });

    
    socket.on('addtoclick',function(data){
        
        var current = 0;
        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('test');



            // collection.find().toArray((err, items) => {
            //   console.log(items)
            // })

              collection.find({"button": "One"}).toArray((err, items) => {
              current = (items[0].amt+ 1);
                  SOCKET_LIST[socket.id].emit('updatelick',{number:current});


              collection.updateOne({button: "One"}, {'$set': {amt: current}}, (err2, item) => {

                });



            });
          
        });



    });
    socket.on('pageloadtest',function(data){
        
        var current = 0;
        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('test');

            // collection.find().toArray((err, items) => {
            //   console.log(items)
            // })

          collection.find({"button": "One"}).toArray((err, items) => {
              current = (items[0].amt);
                  SOCKET_LIST[socket.id].emit('updatelick',{number:current});



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
                        SOCKET_LIST[socket.id].emit('authenticate',{answer:"ue", username:data.username, nid:rand});
                        
                        collection.updateOne({username: data.username}, {'$set': {'loggedin': rand}}, (err, item) => {
                      
                        });
                    }else{
                        
                        SOCKET_LIST[socket.id].emit('authenticate',{answer:"pnc"});
                    }
                }                  

            });
          
        });
    });

    socket.on('addNewRandomItem',function(data){

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

                }
                else{
                    
                    if(data.username == items[0].username && data.tid == items[0].loggedin){   
                        var newlist = items[0].randomizer;
                        newlist[data.listnum][items[0].randomizer[data.listnum].length] = data.newitem;

                        collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                      
                        });
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item has been added!"});
                                     
                        
                    }else{

                    }
                }
            });
          
        });
    });

    socket.on('deleteRandomItem',function(data){

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

                }
                else{
                    
                    if(data.username == items[0].username && data.tid == items[0].loggedin){   
                        var newlist = items[0].randomizer;
                        newlist[data.listnum].splice(data.itemnum, 1); 

                        collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                      
                        });
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item has been removed!"});              
                        
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
                          SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"ue", username:data.username, userData:items[0], budgetData:moneyData[items[0].username], autoamttosave:items[0].autoamttosave});
                        });
                    }else{
                        SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 

   socket.on('addPictureToMLab',function(data){

        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('logins');
          const paintingsCollection = db.collection('paintings');
          var paintnum = 0;

          paintingsCollection.find().toArray((err, items) => {
            for(var i in items){
                if(items[i].order > paintnum){
                  paintnum = items[i].order;
                  console.log(paintnum + " | " + items[i].order);
                }
            }
            paintnum++;
            console.log(paintnum);

            collection.find({"username": data.username}).toArray((err, items) => {
                if(items[0]==undefined){
                    SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                }
                else{
                    
                    if(data.username == items[0].username && data.tid == items[0].loggedin){      
                       if(data.name == "" || data.imgurl == "" ||  data.price == "" ||  data.avail == "" ||  data.material == "" ||  data.size == "" ||  data.desc == "" ||  data.creator == ""){
                          SOCKET_LIST[socket.id].emit('addPictureToMLab',{answer:"err", msg:"Please fill out all data points!"});
                       }else{
                          paintingsCollection.insertOne({name: data.name, order: paintnum, img: "fromtheweb", price: data.price, sold: data.avail, material: data.material, size: data.size, description: data.desc, type: "painting", creator: data.creator, imgur: data.imgurl, buycode: data.paypalcode}, (err, result) => {

                          })
                          SOCKET_LIST[socket.id].emit('addPictureToMLab',{answer:"done", msg:"Picture has been added!"});       
                        }

                    }else{
                        SOCKET_LIST[socket.id].emit('addPictureToMLab',{answer:"err", msg:"Honestly, don't know how you broke this one!"});
                    }
                }
            });
          });
        });
    }); 

  socket.on('standardCorrectAnswer',function(data){

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
                        //CROSSWORD
                        if(data.game == "crossword"){
                              var answer = "htteoefedyargl";
                              var fakeanswer ="lgryeedefotath";
                              var thenewanswer = data.answer;
                              for(var i in data.answer){
                                if(answer.indexOf(data.answer[i]) == -1){

                                }else{
                                  answer = answer.replace(data.answer[i], "");
                                }
                              }

                              if(answer == "" && (14 == thenewanswer.length)){
                                addToGoogleSheetSecret(items[0].database, ["crossword", "final", "yes", "yes", data.answer]);
                                addToGoogleSheetSecret(items[0].database, ["picmem", "-", "no", "yes", ""]);
                                SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username});
                              }else{
                                addToGoogleSheetSecret(items[0].database, ["crossword", "x", "no", "yes", data.answer]);
                                SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username});
                              }      
                        }
                        //PICMEM  
                        else if(data.game == "picmem"){
                             var questionlist = [[1, "Monster Minigolf"],[2, "Firefly"],[3, "Most Recent Yankee Game"],[4, "Washington D.C."],[5, "NJIT"],[6, "Top Golf"],[7, "WAS NOT TOGETHER"],[8, "WAS NOT TOGETHER"],[9, "Big Chill"],[10, "Dage Parking lot"],[11, "WAS NOT TOGETHER"],[12, "First Hike Together"],[13, "WAS NOT TOGETHER"],[14, "San Diego Zoo"],[15, "First Yankee Game"],[16, "WAS NOT TOGETHER"],[17, "Aunt's Birthday Party"],[18, "Hawaii"],[19, "Halloween"],[20, "WAS NOT TOGETHER"],[21, "Second Date"],[22, "WAS NOT TOGETHER"],[23, "WAS NOT TOGETHER"],[24, "WAS NOT TOGETHER"],[25, "WAS NOT TOGETHER"],[26, "Firefly"],[27, "Lost River Caverns"],[28, "Red Bank"],[29, "Miss Wedding"],[30, "Poconos Hike"],[31, "WAS NOT TOGETHER"],[32, "H20 Apartment"],[33, "Asbury Park"],[34, "Hawaii Hike"],[35, "Labor Day"],[36, "Calamari Amazing Race"],[37, "WAS NOT TOGETHER"],[38, "Hawaii Beach"],[39, "Tri Delt Formal"],[40, "Atlantic City"],[41, "Christmas Party"],[42, "Tattoo"],[43, "Johnny Mac's"],[44, "21st Birthday"],[45, "Ocean City"],[46, "Pumpkin Picking"],[47, "Carly's Birthday"],[48, "Boston"],[49, "Fourth of July"],[50, "Beer Olympics"]];
                            
                             var thelist = data.list;
                             var scorecounter = 0;

                             for(var i in thelist){
                              if(thelist[i][0] == undefined || thelist[i][0] == ""){
                                if(thelist[i][1] == "WAS NOT TOGETHER"){
                                  scorecounter++;
                                }
                              }else{
                                if(thelist[i][1] == questionlist[thelist[i][0]-1][1]){
                                  scorecounter++;
                                  
                                }else{
                                  if(thelist[i][1] == "WAS NOT TOGETHER"){
                                    scorecounter++;
                                  }
                                }
                              } 
                            }
                            scorecounter = (scorecounter*2);
                            var other = scorecounter + " || " + data.list;
                            if(scorecounter >= 84 ){
                              addToGoogleSheetSecret(items[0].database, ["picmem", "final", "yes", "yes", other]);
                              addToGoogleSheetSecret(items[0].database, ["pichunt", "-", "no", "yes", ""]);
                              SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username});
                            }else{
                              addToGoogleSheetSecret(items[0].database, ["picmem", "x", "no", "yes", other]);
                              SOCKET_LIST[socket.id].emit('responseanswer',{answer:"showpercent", username:data.username, percent:scorecounter});
                            }      
                        }
                        //PICHUNT
                        else if(data.game == "pichunt"){
                          if(data.answer == "RobIsCool" ){
                            addToGoogleSheetSecret(items[0].database, ["pichunt", "final", "yes", "yes", data.answer]);
                            addToGoogleSheetSecret(items[0].database, ["jigsaw", "-", "no", "yes", ""]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username});
                          }else{
                            addToGoogleSheetSecret(items[0].database, ["pichunt", "x", "no", "yes", data.answer]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username});
                          }   
                        }
                        //JIGSAW 
                        else if(data.game == "jigsaw"){
                          if(data.answer == "teehee" ){
                            addToGoogleSheetSecret(items[0].database, ["jigsaw", "final", "yes", "yes", data.answer]);
                            addToGoogleSheetSecret(items[0].database, ["piccompare", "-", "no", "yes", ""]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username});
                          }else{
                            addToGoogleSheetSecret(items[0].database, ["jigsaw", "x", "no", "yes", data.answer]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username});
                          }   
                        }
                         
                    }else{
                        //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 

   socket.on('getSecretData',function(data){

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
                      //console.log("searching " + data.thegame);
                      //console.log("info --------------------------------------" + data.info);
                        var sendhtml = "";             
                        if(data.thegame == "crossword"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Crossword Puzzle
                                <br><br>
                                <div style="width: 802px; margin: auto;">
                                  Your first challenge is the Robert Crossword Puzzle! How well do you know me? Type in your answers below to find what each of the letters are, located in the red boxes. Make sure to not use any spaces, even if an answer has two or more words.
                                  <div style="position: relative; left: 50%; transform: translateX(-50%);width: 504px;">
                                  <img src='../../img/secret/aboutrobcrossword.png' alt=''  >`;

                            var listofcwa = [[3,"27.4px","128px",6],[5,"49px","23px", 4],[7,"68px","147px", 14],[10,"109px","84px", 5],[12,"128px","181px", 7],[13,"150px","67px", 5],[14,"149px","413px", 4],[15,"170px","188px", 7],[17,"230px","225px", 6]];
                            var listofcwd = [[1,"8px","145px", 8],[2,"29px","84px", 5],[4,"27.3px","268px", 4],[6,"48px","308px", 11],[8,"68px","369px", 9],[9,"68px","411px", 7],[11,"129px","67px", 3],[16,"210px","247px", 4]];
                            sendhtml += `<div>`;
                            for(var a in listofcwa){
                               sendhtml += `
                                    <div id="cw` + listofcwa[a][0] + `adiv" class='crossworddiv' style="top:` + listofcwa[a][1] + `;left:` + listofcwa[a][2] + `;"></div>
                               `;
                            }
                            for(var d in listofcwd){
                               sendhtml += `
                                    <div id="cw` + listofcwd[d][0] + `ddiv" class='crossworddiv' style="top:` + listofcwd[d][1] + `;left:` + listofcwd[d][2] + `;"></div>
                               `;
                            }
                            sendhtml += `</div></div><br><br><div style="margin: auto; width: 500px;"><div style="float:left;">`;
                            for(var a in listofcwa){
                               sendhtml += `
                                    ` + listofcwa[a][0] + ` Across: <input id="cw` + listofcwa[a][0] + `a" class='crosswordinput' maxlength="` + listofcwa[a][3] + `" type="text"></input><br>
                               `;
                            }
                            sendhtml += `</div><div style="padding-left: 14px; float: left;">`;
                            for(var d in listofcwd){
                               sendhtml += `
                                    ` + listofcwd[d][0] + ` Down: <input id="cw` + listofcwd[d][0] + `d" class='crosswordinput' maxlength="` + listofcwd[d][3] + `" type="text"></input><br>
                               `;
                            }      
                               sendhtml +=`</div></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                               Put all of the letters that are in the red boxes in here:<br>
                                  <input id="crosswordanswer" type="text" name="theanswer">
                                  <input class='button4' id='submitcrosswordbutton' type='button' value='SUBMIT' onclick='submitCrosswordAnswer()'/>
                                  <br>
                                  <div id="corsswordresponse" style="color:black;"></div>
                               <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                                </div>
                            `;          
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "picmem"){
                          if(isGameUnlocked(data.thegame, data.info)){

                            var questionlist = [[1, "Monster Minigolf"],[2, "Firefly"],[3, "Most Recent Yankee Game"],[4, "Washington D.C."],[5, "NJIT"],[6, "Top Golf"],[7, "WAS NOT TOGETHER"],[8, "WAS NOT TOGETHER"],[9, "Big Chill"],[10, "Dage Parking lot"],[11, "WAS NOT TOGETHER"],[12, "First Hike Together"],[13, "WAS NOT TOGETHER"],[14, "San Diego Zoo"],[15, "First Yankee Game"],[16, "WAS NOT TOGETHER"],[17, "Aunt's Birthday Party"],[18, "Hawaii"],[19, "Halloween"],[20, "WAS NOT TOGETHER"],[21, "Second Date"],[22, "WAS NOT TOGETHER"],[23, "WAS NOT TOGETHER"],[24, "WAS NOT TOGETHER"],[25, "WAS NOT TOGETHER"],[26, "Firefly"],[27, "Lost River Caverns"],[28, "Red Bank"],[29, "Miss Wedding"],[30, "Poconos Hike"],[31, "WAS NOT TOGETHER"],[32, "H20 Apartment"],[33, "Asbury Park"],[34, "Hawaii Hike"],[35, "Labor Day"],[36, "Calamari Amazing Race"],[37, "WAS NOT TOGETHER"],[38, "Hawaii Beach"],[39, "Tri Delt Formal"],[40, "Atlantic City"],[41, "Christmas Party"],[42, "Tattoo"],[43, "Johnny Mac's"],[44, "21st Birthday"],[45, "Ocean City"],[46, "Pumpkin Picking"],[47, "Carly's Birthday"],[48, "Boston"],[49, "Fourth of July"],[50, "Beer Olympics"]];
                            var numberlist = [];
                            shuffleArray(questionlist);
                            sendhtml = `
                            <div style="width: 1200px;margin: auto;">
                                Picture Memory
                                <br><br>
                                Here is a chance to test your memory! Below are 50 various pictures that were taken since we started dating, and below that are the names of the events/places of those pictures. Your job is to put the correct picture number next to the matching name of the event/place. There are 12 "WAS NOT TOGETHER" pictures mixed in. You can leave those boxes blank. You need to get a score of 84% or higher.
                                <br><br>
  
                            `;
                            for(var i=1; i<=50; i++){
                              sendhtml += `
                                <div class="picmemoryimage">
                                  <img src='../../img/secret/mem (` + i + `).jpg' alt='' style="max-width: 200px;">
                                  <br>
                                  Picture #` + i + `
                                </div>
                                
                            `;
                            }
                            sendhtml += `
                            <br><br>
                            <div style="max-width:248px; margin: auto; text-align: right; padding-right: 37px;">
                            `;
                            for(var i in questionlist){
                               sendhtml += `
                                    <div style="max-width:300px;display: inline-block;">` + questionlist[i][1] + `</div><div style="max-width:70px;display: inline-block; padding-left: 12px;"> <input id="picmemoryanswer` + questionlist[i][1] + `" class='picmeminput' type="text"></input></div><br>
                               `;
                            }   
                                
                            sendhtml += `
                            </div><br><br>
                                <input class='button4' id='submitpicmembutton' type='button' value='SUBMIT' onclick='submitPicmemAnswer()'/>
                                <br>
                                <div id="corsswordresponse" style="color:black;"></div>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            </div>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "pichunt"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Riddle Hunt
                                <br><br>
                                Now your on your third task, congrats for you. On a hunt you'll go with riddles, find them all and get a prize, too!
                                <br><br>
                                <div style="width: 383px;background-color: white;color: black;padding: 18px 32px;margin: auto;border-style: groove;border-radius: 40px;">The next clue hangs out with it's four friends: Sally the Snake, Larry the Lion, Ethan the Eagle, and Bobby the Badger. It's always stuck behind them while they have a magical time.</div>
                                <br><br>
                                Final Clue Code: <input id="pichuntanswer" type="text" name="theanswer">
                                <br><br>
                                <input class='button4' id='submitpichuntbutton' type='button' value='SUBMIT' onclick='submitPichuntAnswer()'/>
                                <br>
                                <div id="corsswordresponse" style="color:black;"></div>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "jigsaw"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Jigsaw Puzzle
                                <br><br>
                                QUICK! Look behind your white clothes drawers in your closet! You will find a puzzle that you must complete! Once you complete it, add up all the numbers and write the answer below.
                                <br><br>
                                Number Code: <input id="jigsawanswer" type="text" name="theanswer">
                                <br><br>
                                <input class='button4' id='submitjigsawbutton' type='button' value='SUBMIT' onclick='submitJigsawAnswer()'/>
                                <br>
                                <div id="corsswordresponse" style="color:black;"></div>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "piccompare"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Picture Compare
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "math"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Math Game
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "trivia"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Trivia
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "slide"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Slide Puzzle
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "basement"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Basement
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }

                        //console.log("sending the goods " + sendhtml);
                        SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"ue", username:data.username, game:data.thegame, HTML:sendhtml});

                    }else{

                        SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 


  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

   function isGameUnlocked(game, data){
      var answer = 0;
      
      for(var i in data){
        
        if(data[i][0] == game && data[i][3] == "yes"){
          answer++;
        }
      }
      if(answer == 0){
        return false;
      }else{
        return true;
      }
   }

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
                       addToGoogleSheet(items[0].database, data);
                       SOCKET_LIST[socket.id].emit('robinDataAddedToSpreadsheet',{username:data.username});
                    }else{
                        //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 

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



socket.on('getPaintings',function(data){

        mongo.connect(url, (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          //...
          const db = client.db('heroku_k7f7n63h');
          const collection = db.collection('paintings');


          collection.find().toArray((err, items) => {
              SOCKET_LIST[socket.id].emit('getPaintings',{allpaintings:items});
             // console.log(items);
           })
          // collection.find({"username": data.username}).toArray((err, items) => {
          //       if(items[0]==undefined){
          //           //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
          //       }
          //       else{
                    
                  
          //       }
          //   });
          
        });
    }); 

socket.on('changePicToBW',function(data){

        Jimp.read('./client/img/imgprcss/mypic.png', (err, lenna) => {
          if (err) throw err;
          console.log("were her changing the image - " + data.ptc);
          lenna
            .resize(256, 256) // resize
            .quality(60) // set JPEG quality
            .greyscale() // set greyscale
            .write('./client/img/imgprcss/mypicbw.png'); // save


            SOCKET_LIST[socket.id].emit('changepicbw',{changepicbw:data.ptc});
        });
    }); 


// socket.on('loadtriviaapi',function(data){
// console.log("starting: ");
//     https.get('https://opentdb.com/api.php?amount=10', (resp) => {
//       let data = '';

//       // A chunk of data has been recieved.
//       resp.on('data', (chunk) => {
//         data += chunk;
//       });

//       // The whole response has been received. Print out the result.
//       resp.on('end', () => {
//         console.log("started: " + data);
//         SOCKET_LIST[socket.id].emit('printalltriviadata',{result:data[1]});


//       });

//     }).on("error", (err) => {
//       console.log("Error: " + err.message);
//     });



// }); 


    //Show players list
    socket.on('showplayerslist',function(data){
        console.log("***********************************8******");
        console.log("List of all PLAYERS******");
        for(var i in plist){
            console.log("PLAYER: " +  plist[i].name);
        }
        console.log("List of all Players in USERs******");
        for(var i in USERS){
            console.log("PLAYER: " +  i + " : " + USERS[i]);
        }
    });
});



