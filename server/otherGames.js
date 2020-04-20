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


module.exports = function(socket, socketidnum) {

 	socket.id = socketidnum;
 	SOCKET_LIST = authJS.getSocketList();
	plist = authJS.getpList();
	rlist = authJS.getrList();

	socket.on('updatecanvas',function(data){
        for(let i in SOCKET_LIST){
            SOCKET_LIST[i].emit('updatecanvas',{newimg:data.newimg});
        }
    });



};