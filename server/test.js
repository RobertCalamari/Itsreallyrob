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





var i = "This is my new var";
var j = "This is my 22222222222222222 var";
function randint(){
    console.log(i);
};
function randint2(){
    console.log(j);
};

module.exports.randInt = randint; // export your functuion
module.exports.randInt2 = randint2; // export your functuion

// var io = require('socket.io')(serv,{});
// io.sockets.on('connection', function(socket){

// 	socket.on('secretHEHE',function(data){
//         console.log("This is the data: " + data.send);
//     });




// });


module.exports = function(socket, socketidnum) {

 	socket.id = socketidnum;

  socket.on('secretHEHE',function(data){
        console.log("This is the data: " + data.send);
    });
};