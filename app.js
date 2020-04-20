
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
const keys = require('./keys.json');
const PORT = process.env.PORT;
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
var Jimp = require('jimp');
const url = process.env.MONGOLAB_URI;
const nodemailer = require('nodemailer');

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
    //Start this file here
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


//Start the Server
serv.listen(process.env.PORT || 8000);
//serv.listen(2000);
console.log("Server started.");






const rundatabase = require("./server/rundatabase.js");
//rundatabase.runDatabase(mongo);

const functions = require("./server/test.js");
// functions.randInt2();







//////Socket Info, Receiving, and Sending////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){

    socket.id = Math.random();
    var socketidnum = socket.id;
    
    require('./server/authentication.js')(socket, socketidnum);
    require('./server/budgetApp.js')(socket, socketidnum);
    require('./server/gameMafia.js')(socket, socketidnum);
    require('./server/gamePartyPack.js')(socket, socketidnum);
    require('./server/hayleySecret.js')(socket, socketidnum);
    require('./server/listRandomizer.js')(socket, socketidnum);
    require('./server/otherGames.js')(socket, socketidnum);
    require('./server/robinMain.js')(socket, socketidnum);
    require('./server/test.js')(socket, socketidnum);

   

});



