
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
    sentall:false
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
    other:"nothing"
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
                                        updatePlayerClient(data);
                                        plist[i].loggedin = true;
                                        socket.emit('signInResponse',{success:true,gametype:rlist[j].gametype,room:data.room,msg1:"Player Created!"});
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
                        }
                    }
                }

                if(deleteroom == true){
                    for(var j in rlist){
                        if(theroom == rlist[j].name){
                            for(var r in rlist[j].players){
                                delete USERS[rlist[j].players[r].name];
                                delete SOCKET_LIST[rlist[j].players[r].id];
                                Player.onDisconnect(rlist[j].players[r].id);
                            }
                        }
                    }
                    delete ROOMS[theroom];
                    Room.onDisconnect(socket.id);
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
        plist[socket.id].counterscore = data.finalscore;            
    });

    socket.on('getrandomnum',function(data){
        var randdiff = Math.floor(Math.random() * data.num); 
        for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                    for(var r in rlist[j].players){
                        if(rlist[j].players[r].name == plist[i].name && rlist[j].name == plist[i].room)
                        {
                           SOCKET_LIST[i].emit('giverandomnum',{room:data.room,rnum:randdiff});
                            
                        }
                    }
                }
            }
        }
    });

    socket.on('endPartyPackMath',function(data){

        var mathlow = [];
        var sortinglist = [];
        var finallist = [];           
        listitem = 0;


        for(var j in rlist){
            if(data.room == rlist[j].name){
                if(rlist[j].players[rlist[j].players.length-1].id == socket.id){
                    for(var z in rlist[j].players){
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

                    for(var z in rlist[j].players){
                        if(rlist[j].players[z].name == finallist[0].name   &&  rlist[j].players[z].pointsreceived == false){  
                            rlist[j].players[z].score += 100;
                            rlist[j].players[z].pointsreceived = true;
                            mathlow[0] = rlist[j].players[z];
                        }
                        for(var y in finallist.players){
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



