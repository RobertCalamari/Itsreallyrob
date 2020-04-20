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
const budgetJS = require("./budgetApp.js");







module.exports = function(socket, socketidnum) {

 	socket.id = socketidnum;
 	SOCKET_LIST = authJS.getSocketList();
	plist = authJS.getpList();
	rlist = authJS.getrList();

    

	


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
  
};