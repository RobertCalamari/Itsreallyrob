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

    socket.on('startgamemafia',function(data){

		SOCKET_LIST = authJS.getSocketList();
		plist = authJS.getpList();
		rlist = authJS.getrList();


        var mafiaRoles = [
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Godfather","You are the Mafia. You are immune to the Serial Killer."],
          ["Mafia","You are the Mafia. Work as a team to try and kill everyone else. Number of mafia change depending on how many people there are."],
          ["Cop","May detect one person each night, learning their role."],
          ["Medic","May protect one person from being killed each night. Can only pick themselves once."],
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Vigilante","You can choose one person to shoot each night. If the person you killed was not bad, then you will die the  next night."],
          ["Body Guard","May protect one person from being killed each night. If that person was picked, the body guard dies instead. However, can protect themselves once."],
          ["Detective","May detect one person each night, learning their role."],
          ["Executioner","You are given a random player in the game. Your goal is to get them lynched before you die. If you do, then you win the game."],
          ["Jester","Your goal is to get the rest of the town to lynch you. If you do, then you win the game. If you are alive and town wins, then you lose"],
          ["Lookout","Watch one person at night to see who visits them. "],
          ["Jailor","You may choose one person during the day to jail for the night."],
          ["Escort","Distract someone each night."],
          ["Amnesiac","Remember who you were by selecting a graveyard role."],
          ["Serial Killer","You are working for yourself. Your goal is to be the last one alive. You are allowed to kill one person each night. You can not kill the godfather. You can also not be killed at night."]
        ];

          var playerCount = 0;
          for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                  for(var r in rlist[j].players){
                    playerCount++;
                  }
                }
              }
            }

            

          for(var i in plist){
            for(var j in rlist){
                if(data.room == rlist[j].name){
                  for(var r in rlist[j].players){
                                                  
                            if(playerCount == 5){
                              var mafiaNum = 1;
                              var otherNum = 2;
                              var skAllowed = false;
                            }else if(playerCount == 6){
                              var mafiaNum = 1;
                              var otherNum = 3;
                              var skAllowed = false;
                            }else if(playerCount == 7){
                              var mafiaNum = 2;
                              var otherNum = 3;
                              var skAllowed = false;
                            }else if(playerCount == 8 || playerCount == 9){
                              var mafiaNum = 2;
                              var otherNum = 4;
                              var skAllowed = false;
                            }else if(playerCount == 10 || playerCount == 11){
                              var mafiaNum = 3;
                              var otherNum = 5;
                              var skAllowed = true;
                            }else if(playerCount == 12 || playerCount == 13){
                              var mafiaNum = 3;
                              var otherNum = 6;
                              var skAllowed = true;
                            }else if(playerCount >= 14){
                              var mafiaNum = 3;
                              var otherNum = 7;
                              var skAllowed = true;
                            }

                            var newRoles = [];
                            var roleCounter = 0;
                            var usedNumbers = [];
                            if(mafiaNum == 1){
                              newRoles[0] = ["Godfather","You are the Mafia. You are immune to the Serial Killer."];
                              roleCounter = roleCounter + 1;
                            }else if(mafiaNum == 2){
                              newRoles[0] = ["Godfather","You are the Mafia. You are immune to the Serial Killer."];
                              newRoles[1] = ["Mafia","You are the Mafia. Work as a team to try and kill everyone else. Number of mafia change depending on how many people there are."];
                              roleCounter = roleCounter + 2;
                            }else if(mafiaNum == 3){
                              newRoles[0] = ["Godfather","You are the Mafia. You are immune to the Serial Killer."];
                              newRoles[1] = ["Mafia","You are the Mafia. Work as a team to try and kill everyone else. Number of mafia change depending on how many people there are."];
                              newRoles[2] = ["Mafia","You are the Mafia. Work as a team to try and kill everyone else. Number of mafia change depending on how many people there are."];
                              roleCounter = roleCounter + 3;
                            }
                            
                            if(skAllowed == true){
                              for(var i = 0; i<otherNum; i++){
                                var getRole = Math.floor(Math.random() * (mafiaRoles.length-3))+3;
                                var contGetRole = false;
                                while(contGetRole == false){
                                  if(usedNumbers.includes(getRole)){
                                    var getRole = Math.floor(Math.random() * (mafiaRoles.length-3))+3;
                                  }else{
                                    newRoles[roleCounter] = mafiaRoles[getRole];
                                    roleCounter = roleCounter + 1;
                                    usedNumbers[usedNumbers.length] = getRole;
                                    contGetRole = true;
                                  }
                                }
                              }

                            }else{
                               for(var i = 0; i<otherNum; i++){
                                var getRole = Math.floor(Math.random() * (mafiaRoles.length-4))+3;
                                var contGetRole = false;
                                while(contGetRole == false){
                                  if(usedNumbers.includes(getRole)){
                                    var getRole = Math.floor(Math.random() * (mafiaRoles.length-4))+3;
                                  }else{
                                    newRoles[roleCounter] = mafiaRoles[getRole];
                                    roleCounter = roleCounter + 1;
                                    usedNumbers[usedNumbers.length] = getRole;
                                    contGetRole = true;
                                  }
                                }
                              }
                            }
                            for(var i = roleCounter; i<=(rlist[j].players-1); i++){
                              newRoles[roleCounter] = ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"];
                              roleCounter = roleCounter + 1;
                            }

                            var rolesDone = [];

                            for(var q in rlist[j].players){
                                if(q == 0){
                                  rlist[j].players[q].role = ["Narrator","You are the god of this world!"];
                                }else{
                                  getRole = Math.floor(Math.random() * roleCounter); 
                                  var stillSearching = true;
                                  //rlist[j].players[q].role = ["Test",getRole];
                                  while(stillSearching == true){

                                    if(rolesDone.includes(getRole)){
                                      getRole = Math.floor(Math.random() * roleCounter); 
                                    }else{
                                      rlist[j].players[q].role = newRoles[getRole];
                                      rolesDone[rolesDone.length] = getRole;
                                      stillSearching = false;
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
                          
                           SOCKET_LIST[i].emit('mafiaupdate',{room:data.room, role:rlist[j].players[r].role});
                            
                        }
                    }
                }
            }
        }
    });



};