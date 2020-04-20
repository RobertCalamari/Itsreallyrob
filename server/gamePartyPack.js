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

	socket.on('refreshPlayerContent',function(data){
        updatePlayerClient(data);
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

  
};