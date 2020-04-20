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
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item Added", userData:items[0], list:newlist, speclist:data.listnum});
                                     
                        
                    }else{

                    }
                }
            });
          
        });
    });

    socket.on('addNewList',function(data){

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
                        newlist[newlist.length] = [data.listname];

                        collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                      
                        });
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"List Added", list:newlist, userData:items[0], speclist:newlist.length});
                                     
                        
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
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item Deleted", userData:items[0], list:newlist, speclist:data.listnum});              
                        
                    }else{

                    }
                }
            });
          
        });
    }); 

    socket.on('updateRandomItem',function(data){

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
                        newlist[data.listnum][data.itemnum] = data.item;

                        collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                      
                        });
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item Updated", userData:items[0], list:newlist, speclist:data.listnum});              
                        
                    }else{

                    }
                }
            });
          
        });
    }); 

    socket.on('mvupRandomItem',function(data){

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
                        if(parseInt(data.itemnum) == 1){

                        }else{
                          var tomoveone = newlist[data.listnum][data.itemnum];
                          var tomovetwo = newlist[data.listnum][(parseInt(data.itemnum)-1)]; 

                          newlist[data.listnum][(parseInt(data.itemnum)-1)] = tomoveone; 
                          newlist[data.listnum][data.itemnum] = tomovetwo; 

                          collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                        
                          });
                          SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item Moved", userData:items[0], list:newlist, speclist:data.listnum});    

                        }          
                        
                    }else{

                    }
                }
            });
          
        });
    });

     socket.on('mvDraggedRandomList',function(data){

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
                        if(parseInt(data.itemnum) == 1){

                        }else{
                          var tomoveone = newlist[data.firstnum];
                          var tomovetwo = newlist[data.secondnum]; 

                          newlist[data.firstnum] = tomovetwo; 
                          newlist[data.secondnum] = tomoveone; 

                          collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                        
                          });
                          SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"List Added", userData:items[0], list:newlist, speclist:data.listnum});    

                        }          
                        
                    }else{

                    }
                }
            });
          
        });
    });

    socket.on('mvdnRandomItem',function(data){

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
                        
                        if(parseInt(data.itemnum) == newlist[data.listnum].length-1){
                          console.log("Can't do that boss!");
                        }else{
                          var tomoveone = newlist[data.listnum][data.itemnum];
                          var tomovetwo = newlist[data.listnum][(parseInt(data.itemnum)+1)]; 

                          newlist[data.listnum][(parseInt(data.itemnum)+1)] = tomoveone; 
                          newlist[data.listnum][data.itemnum] = tomovetwo; 

                          collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                        
                          });
                          SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"Item Moved", userData:items[0], list:newlist, speclist:data.listnum});    

                        }          
                        
                    }else{

                    }
                }
            });
          
        });
    });

    socket.on('deleteThisList',function(data){

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
                        newlist.splice(data.listnum, 1); 

                        collection.updateOne({username: data.username}, {'$set': {'randomizer': newlist}}, (err, item) => {
                      
                        });
                        SOCKET_LIST[socket.id].emit('refreshPageRandom',{answer:"List Deleted", userData:items[0], list:newlist, speclist:data.listnum});              
                        
                    }else{

                    }
                }
            });
          
        });
    }); 


  
};