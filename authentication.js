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
    randnum:0,
    role:""
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
    }else if(gametype=="Mafia"){
        maxp = 20;
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

function getSocketList(){
	return SOCKET_LIST;
}

function getpList(){
	return plist;
}

function getrList(){
	return rlist;
}




module.exports = function(socket, socketidnum) {

	module.exports.getSocketList = getSocketList;
	module.exports.getpList = getpList;
	module.exports.getrList = getrList;

  //Assign the socket a random number as id and put it in a socket list(the connections)
  socket.id = socketidnum;
  SOCKET_LIST[socket.id] = socket;

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


};