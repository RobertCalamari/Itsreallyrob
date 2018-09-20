
var express = require('express');
var app = express();
var serv = require('http').Server(app);
 
app.get('/',function(req, res) {
    //Start this file
    res.sendFile(__dirname + '/client/index.html');
});
//This allows use of other folders
app.use('/client',express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/client/css'));
app.use(express.static(__dirname + '/client/img'));
app.use(express.static(__dirname + '/client/js'));
app.use(express.static(__dirname + '/client/fonts'));
app.use(express.static(__dirname + '/client/pages'));
app.use(express.static(__dirname + '/client'));
 
 //Port is on 2000
//serv.listen(2000);
// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 8000;
// }
serv.listen(process.env.PORT || 8000);

console.log("Server started.");

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
    player1:"",
    player2:"",
    player3:"",
    player4:"",
    player5:"",
    player6:"",
    player7:"",
    player8:""
    }
    
    return self;
}


//This is a player object. it has the id, name and what room the player is in
var Player = function(id,nameid,playernm){
   var self = {
    id:id,
    name:nameid,
    playern:playernm,
    loggedin:true,
    otherinfo:"nothing"
    
    }
    //console.log("[ENTITY] - Player Entity Created: " +  nameid);
    return self;
}

//When a room is created it is assigned a room object and added to the list of rooms(rlist)
Room.onCreate = function(socket,nameid, gametype){
    console.log("[CREATION] - ROOM CREATED: " +  nameid);

    //Assign how many players are allowed per gametype
    if(gametype == "Tic Tac Toe"){
        maxp = 2;
    }
    else{
        maxp = 6;
    }

    var room = Room(socket,nameid,gametype,maxp);
    room.spectate=nameid;
    rlist[socket] = room;
}

//When a room disconnects it is deleted from the list of rooms(rlist)
Room.onDisconnect = function(socket){
    console.log("[DELETION] - Room from list deleted: " + rlist[socket].name);
    delete rlist[socket];
}

//When a player is connected it is assigned a player object and added to the player list(plist)
Player.onConnect = function(socket,nameid,playernm){
    console.log("[CREATION] - PLAYER CREATED: " +  nameid);
    var player = Player(socket,nameid,playernm);
    plist[socket] = player;
    
}

//When a player is disconnected they are removed from the player list(plist)
Player.onDisconnect = function(socket){
        console.log("[DELETION] - Player from list deleted: " + plist[socket].name);
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
        for(var i in rlist){
            if(data.room == rlist[i].name){
                if(data.username == rlist[i].player1 || data.username == rlist[i].player2 || data.username == rlist[i].player3 || data.username == rlist[i].player4 || data.username == rlist[i].player5 || data.username == rlist[i].player6 || data.username == rlist[i].player7 || data.username == rlist[i].player8){
                    torf=true;
                    console.log("[ROOM CHECK] - User already in room: " +  data.username);
                }
                else{
                    console.log("[ROOM CHECK] - User not in room: " +  data.username);
                    torf=false;
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
                if(rlist[j].player1 == plist[i].name || rlist[j].player2 == plist[i].name || rlist[j].player3 == plist[i].name || rlist[j].player4 == plist[i].name || rlist[j].player5 == plist[i].name || rlist[j].player6 == plist[i].name || rlist[j].player7 == plist[i].name || rlist[j].player8 == plist[i].name){
                    
                        var listofplayers = "Player 1: " + rlist[j].player1 + "<br>" + "Player 2: " + rlist[j].player2 + "<br>" + "Player 3: " + rlist[j].player3 + "<br>" + "Player 4: " + rlist[j].player4 + "<br>" + "Player 5: " + rlist[j].player5 + "<br>" + "Player 6: " + rlist[j].player6 + "<br>" + "Player 7: " + rlist[j].player7 + "<br>" + "Player 8: " + rlist[j].player8;

                    SOCKET_LIST[i].emit('updateplayersclient',{lop:listofplayers,gametype:rlist[j].gametype,player1:rlist[j].player1,player2:rlist[j].player2,player3:rlist[j].player3,player4:rlist[j].player4,player5:rlist[j].player5,player6:rlist[j].player6,player7:rlist[j].player7,player8:rlist[j].player8,  });
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




    //Receive from onepagejoin that you click signin//////////////////////////////////
    socket.on('signIn',function(data){

        //Check if the room exists
        if(isValidRoom(data)){
            
            //Check if userna,e already exists
            doesUsernameExist(data,function(res){
                if(res){

                    //Username exists so lets see if they are a new person trying to log in or was disconnected
                    for(var i in rlist){
                        if(data.room == rlist[i].name){
                            for(var j in plist){

                                //Check if player list is in the room already. This makes it so other players can have the same name in other rooms
                                if(plist[j].name == data.username && (rlist[i].player1 == plist[j].name || rlist[i].player2 == plist[j].name || rlist[i].player3 == plist[j].name || rlist[i].player4 == plist[j].name || rlist[i].player5 == plist[j].name || rlist[i].player6 == plist[j].name || rlist[i].player7 == plist[j].name || rlist[i].player8 == plist[j].name))
                                {
                                    //If player was already created but disconnected then assign the new socket
                                    if(plist[j].loggedin == false && plist[j].name == data.username){
                                        console.log("[RECONNECT] - User reconnected: " + plist[j].name);
                                        delete SOCKET_LIST[socket.id];
                                        SOCKET_LIST[plist[j].id] = socket;
                                        socket.id = plist[j].id;
                                        updatePlayerClient(data);
                                        plist[j].loggedin = true;
                                        socket.emit('signInResponse',{success:true,msg1:"Player Created!"});
                                    }
                                    else{

                                        //If player already in game then deny them access
                                        socket.emit('signInResponse',{success:false,msg1:"Please choose another name!"});   
                                    }
                                }
                            }
                        }
                    }
                } 
                else{

                    //If username doesn't exist then create a player
                    addUser(data,function(){
                        for(var i in rlist){
                            if(data.room == rlist[i].name){
                                console.log("[CONNECTION] - PLAYER CONNECTED : " +  data.username);

                                //Create a player assigning them to a player spot and also update player data on client
                                if(rlist[i].player1 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player1");
                                    console.log("--- " + data.username + " is assigned to PLAYER 1");
                                    rlist[i].player1=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player2 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player2");
                                   console.log("--- " + data.username + " is assigned to PLAYER 2");
                                    rlist[i].player2=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player3 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player3");
                                    console.log("--- " + data.username + " is assigned to PLAYER 3");
                                    rlist[i].player3=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player4 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player4");
                                    console.log("--- " + data.username + " is assigned to PLAYER 4");
                                    rlist[i].player4=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player5 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player5");
                                    console.log("--- " + data.username + " is assigned to PLAYER 5");
                                    rlist[i].player5=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player6 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player6");
                                    console.log("--- " + data.username + " is assigned to PLAYER 6");
                                    rlist[i].player6=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player7 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player7");
                                    console.log("--- " + data.username + " is assigned to PLAYER 7");
                                    rlist[i].player7=data.username;
                                    rlist[i].currplayers++;
                                }
                                else if(rlist[i].player8 == "" && rlist[i].currplayers < rlist[i].maxplayers){
                                    Player.onConnect(socket.id,data.username,"player8");
                                    console.log("--- " + data.username + " is assigned to PLAYER 8");
                                    rlist[i].player8=data.username;
                                    rlist[i].currplayers++;
                                    
                                }
                                else{
                                    socket.emit('signInResponse',{success:false,msg1:"Room is full!"});
                                }
                                socket.emit('signInResponse',{success:true,msg1:"Player Created!"});
                                socket.emit('updategameclient',{gametype:data.gametype}); 
                                updatePlayerClient(data);
                            }
                        }
                    });        
                }
            });
        } 
        else {
            console.log("[ERROR] - Room does not exist");
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
                        updatePlayerClient(data);
                        
                        socket.emit('roomMakeResponse',{success:true,admin:true,room:data.room,gametype:data.gametype});
                        socket.emit('updategameclient',{gametype:data.gametype});    
                    });
                    addUser(data,function(){
                        for(var i in rlist){
                            if(data.room == rlist[i].name){ 
                                    Player.onConnect(socket.id,data.username,"player1");
                                    console.log("--- " + data.username + " is assigned to PLAYER 1");
                                    rlist[i].player1=data.username;
                                    rlist[i].currplayers++;
                                    updatePlayerClient(data);
                                    socket.emit('signInResponse',{success:true,msg1:"Player Created!"});
                                    socket.emit('updategameclient',{gametype:data.gametype}); 
                               
                            }
                        }
                    });        
                }
            });
///////Disconnects////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //This is when a socket is disconnected from the server
    socket.on('disconnect',function(){
        
        // //This searches if the disconnect was a player
        // for(var i in plist){
        //     if(plist[i].id == socket.id){

        //         //If it was a player then it allows the player to exit the browser but be able to log back into the game
        //         console.log("[LOGGED OUT] - User logged out! : " +  plist[i].name);
        //         plist[socket.id].loggedin = false;
        //     }
        // }

        // //This searches if the disconnect was a room
        // for(var j in rlist){
        //     if(rlist[j].id == socket.id){

        //         //If it was a room the room gets deleted from the ROOMS list and the SOCKET_LIST
        //         delete ROOMS[rlist[j].name];
        //         delete SOCKET_LIST[socket.id];
        //          for(var i in plist){
        //             //This deleted each player that was in the room
        //             if(rlist[j].player1 == plist[i].name || rlist[j].player2 == plist[i].name || rlist[j].player3 == plist[i].name || rlist[j].player4 == plist[i].name || rlist[j].player5 == plist[i].name || rlist[j].player6 == plist[i].name || rlist[j].player7 == plist[i].name || rlist[j].player8 == plist[i].name){
        //                 //Send the user back to the index page and delete the player from USERS and SOCKET_LIST
        //                 SOCKET_LIST[i].emit('sendBackToIndex',{send:true});
        //                 delete USERS[plist[i].name];
        //                 delete SOCKET_LIST[plist[i].id];
        //                 //This finalizes the player deletion
        //                 Player.onDisconnect(plist[i].id);
        //             }
        //          }
        //         //This finalizes the room deletion
        //          Room.onDisconnect(socket.id);
        //     }
        // }   
    });

//////Sending Everything to Clients///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Updates whenever a message is sent
    socket.on('sendMsgToServer',function(data){

        //Updates on the players list
        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    if(rlist[j].player1 == plist[i].name || rlist[j].player2 == plist[i].name || rlist[j].player3 == plist[i].name || rlist[j].player4 == plist[i].name || rlist[j].player5 == plist[i].name || rlist[j].player6 == plist[i].name || rlist[j].player7 == plist[i].name || rlist[j].player8 == plist[i].name){
                        var playerName = plist[socket.id].name;
                        SOCKET_LIST[i].emit('addToChat',playerName + ': ' + data.themsg);
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
                    if(rlist[j].player1 == plist[i].name || rlist[j].player2 == plist[i].name || rlist[j].player3 == plist[i].name || rlist[j].player4 == plist[i].name || rlist[j].player5 == plist[i].name || rlist[j].player6 == plist[i].name || rlist[j].player7 == plist[i].name || rlist[j].player8 == plist[i].name){
                        var playerName = plist[socket.id].name;
                        SOCKET_LIST[i].emit('updategameclient',{gametype:rlist[j].gametype});
                    }
                }
            }
        }

        // //Updates on the rooms list
        // for(var j in rlist){
        //     if(data.room == rlist[j].name){
        //          SOCKET_LIST[rlist[j].id].emit('updategameclient',{gametype:rlist[j].gametype});
        //     }
        // }
    });



   
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
