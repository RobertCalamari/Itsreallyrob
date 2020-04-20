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


function isGameUnlocked(game, data){
	  var answer = 0;
	  
	  for(var i in data){
	    
	    if(data[i][0] == game && data[i][3] == "yes"){
	      answer++;
	    }
	  }
	  if(answer == 0){
	    return false;
	  }else{
	    return true;
	  }
	}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


module.exports = function(socket, socketidnum) {

 	socket.id = socketidnum;
 	SOCKET_LIST = authJS.getSocketList();
	plist = authJS.getpList();
	rlist = authJS.getrList();

   socket.on('standardCorrectAnswer',function(data){

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
                    //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                }
                else{
                    if(data.username == items[0].username  && data.tid == items[0].loggedin){
                        
                        //MATH
                        if(data.game == "math"){
                          if(data.answer == "-2027" ){
                            addToGoogleSheetSecret(items[0].database, ["math", "final", "yes", "yes", data.answer]);
                            addToGoogleSheetSecret(items[0].database, ["picmem", "-", "no", "yes", ""]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username, game:data.game, msg: "WOW! What a cute number!"});
                          }else{
                            addToGoogleSheetSecret(items[0].database, ["math", "x", "no", "yes", data.answer]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username, game:data.game});
                          }   
                        }
                         //PICMEM  
                        else if(data.game == "picmem"){
                             var questionlist = [[1, "Monster Minigolf"],[2, "Firefly"],[3, "Most Recent Yankee Game"],[4, "Washington D.C."],[5, "NJIT"],[6, "Top Golf"],[7, "WAS NOT TOGETHER"],[8, "WAS NOT TOGETHER"],[9, "Big Chill"],[10, "Dage Parking lot"],[11, "WAS NOT TOGETHER"],[12, "First Hike Together"],[13, "WAS NOT TOGETHER"],[14, "San Diego Zoo"],[15, "First Yankee Game"],[16, "WAS NOT TOGETHER"],[17, "Aunt's Birthday Party"],[18, "Hawaii"],[19, "Halloween"],[20, "WAS NOT TOGETHER"],[21, "Second Date"],[22, "WAS NOT TOGETHER"],[23, "WAS NOT TOGETHER"],[24, "WAS NOT TOGETHER"],[25, "WAS NOT TOGETHER"],[26, "Firefly"],[27, "Lost River Caverns"],[28, "Red Bank"],[29, "Miss Wedding"],[30, "Poconos Hike"],[31, "WAS NOT TOGETHER"],[32, "H20 Apartment"],[33, "Asbury Park"],[34, "Hawaii Hike"],[35, "Labor Day"],[36, "Calamari Amazing Race"],[37, "WAS NOT TOGETHER"],[38, "Hawaii Beach"],[39, "Tri Delt Formal"],[40, "Atlantic City"],[41, "Christmas Party"],[42, "Tattoo"],[43, "Johnny Mac's"],[44, "21st Birthday"],[45, "Ocean City"],[46, "Pumpkin Picking"],[47, "Carly's Birthday"],[48, "Boston"],[49, "Fourth of July"],[50, "Beer Olympics"]];
                            
                             var thelist = data.list;
                             var scorecounter = 0;

                             for(var i in thelist){
                              if(thelist[i][0] == undefined || thelist[i][0] == ""){
                                if(thelist[i][1] == "WAS NOT TOGETHER"){
                                  scorecounter++;
                                }
                              }else{
                                if(thelist[i][1] == questionlist[thelist[i][0]-1][1]){
                                  scorecounter++;
                                  
                                }else{
                                  if(thelist[i][1] == "WAS NOT TOGETHER"){
                                    scorecounter++;
                                  }
                                }
                              } 
                            }
                            scorecounter = (scorecounter*2);
                            var other = scorecounter + " || " + data.list;
                            if(scorecounter >= 84 ){
                              addToGoogleSheetSecret(items[0].database, ["picmem", "final", "yes", "yes", other]);
                              addToGoogleSheetSecret(items[0].database, ["crossword", "-", "no", "yes", ""]);
                              SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username, game:data.game, msg: "So many memories!"});
                            }else{
                              addToGoogleSheetSecret(items[0].database, ["picmem", "x", "no", "yes", other]);
                              SOCKET_LIST[socket.id].emit('responseanswer',{answer:"showpercent", username:data.username, percent:scorecounter, game:data.game});
                            }      
                        }
                        //CROSSWORD
                        else if(data.game == "crossword"){
                              var answer = "htteoefedyargl";
                              var fakeanswer ="lgryeedefotath";
                              var thenewanswer = data.answer;
                              for(var i in data.answer){
                                if(answer.indexOf(data.answer[i]) == -1){

                                }else{
                                  answer = answer.replace(data.answer[i], "");
                                }
                              }

                              if(answer == "" && (14 == thenewanswer.length)){
                                addToGoogleSheetSecret(items[0].database, ["crossword", "final", "yes", "yes", data.answer]);
                                addToGoogleSheetSecret(items[0].database, ["pichunt", "-", "no", "yes", ""]);
                                SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username, game:data.game, msg: "OK. That is enough of Robert."});
                              }else{
                                addToGoogleSheetSecret(items[0].database, ["crossword", "x", "no", "yes", data.answer]);
                                SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username, game:data.game});
                              }      
                        }
                        //PICHUNT
                        else if(data.game == "pichunt"){
                          if(data.answer == "RobIsCool" ){
                            addToGoogleSheetSecret(items[0].database, ["pichunt", "final", "yes", "yes", data.answer]);
                            addToGoogleSheetSecret(items[0].database, ["piccompare", "-", "no", "yes", ""]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username, game:data.game, msg: "I'm an explorer!"});
                          }else{
                            addToGoogleSheetSecret(items[0].database, ["pichunt", "x", "no", "yes", data.answer]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username, game:data.game});
                          }   
                        }
                        //PICCOMPARE 
                        else if(data.game == "piccompare"){
                            addToGoogleSheetSecret(items[0].database, ["piccompare", "final", "yes", "yes", data.answer]);
                            addToGoogleSheetSecret(items[0].database, ["jigsaw", "-", "no", "yes", ""]);
                        }
                        //JIGSAW 
                        else if(data.game == "jigsaw"){
                          if(data.answer == "50" ){
                            addToGoogleSheetSecret(items[0].database, ["jigsaw", "final", "yes", "yes", data.answer]);
                            addToGoogleSheetSecret(items[0].database, ["piccompare", "-", "no", "yes", ""]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"correct", username:data.username, game:data.game, msg: "That was a waste of my time."});
                          }else{
                            addToGoogleSheetSecret(items[0].database, ["jigsaw", "x", "no", "yes", data.answer]);
                            SOCKET_LIST[socket.id].emit('responseanswer',{answer:"incorrect", username:data.username, game:data.game});
                          }   
                        }
                    }else{
                        //SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 

   socket.on('getSecretData',function(data){

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
                    SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    
                }
                else{
                    
                    if(data.username == items[0].username && data.tid == items[0].loggedin){ 
                      //console.log("searching " + data.thegame);
                      //console.log("info --------------------------------------" + data.info);
                        var sendhtml = "";             
                        if(data.thegame == "crossword"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Crossword Puzzle
                                <br><br>
                                <div style="width: 648px; margin: auto;">
                                  This is the Robert Crossword Puzzle! How well do you know me? Type in your answers below to find what each of the letters are, located in the red boxes. Make sure to not use any spaces, even if an answer has two or more words.
                                  <div style="position: relative; left: 50%; transform: translateX(-50%);width: 504px;">
                                  <img src='../../img/secret/aboutrobcrossword.png' alt=''  >`;

                            var listofcwa = [[3,"27.4px","128px",6],[5,"49px","23px", 4],[7,"68px","147px", 14],[10,"109px","84px", 5],[12,"128px","181px", 7],[13,"150px","67px", 5],[14,"149px","413px", 4],[15,"170px","188px", 7],[17,"230px","225px", 6]];
                            var listofcwd = [[1,"8px","145px", 8],[2,"29px","84px", 5],[4,"27.3px","268px", 4],[6,"48px","308px", 11],[8,"68px","369px", 9],[9,"68px","411px", 7],[11,"129px","67px", 3],[16,"210px","247px", 4]];
                            sendhtml += `<div>`;
                            for(var a in listofcwa){
                               sendhtml += `
                                    <div id="cw` + listofcwa[a][0] + `adiv" class='crossworddiv' style="top:` + listofcwa[a][1] + `;left:` + listofcwa[a][2] + `;"></div>
                               `;
                            }
                            for(var d in listofcwd){
                               sendhtml += `
                                    <div id="cw` + listofcwd[d][0] + `ddiv" class='crossworddiv' style="top:` + listofcwd[d][1] + `;left:` + listofcwd[d][2] + `;"></div>
                               `;
                            }
                            sendhtml += `</div></div><br><br><div style="margin: auto; width: 500px;"><div style="float:left;">`;
                            for(var a in listofcwa){
                               sendhtml += `
                                    ` + listofcwa[a][0] + ` Across: <input id="cw` + listofcwa[a][0] + `a" class='crosswordinput' maxlength="` + listofcwa[a][3] + `" type="text"></input><br>
                               `;
                            }
                            sendhtml += `</div><div style="padding-left: 14px; float: left;">`;
                            for(var d in listofcwd){
                               sendhtml += `
                                    ` + listofcwd[d][0] + ` Down: <input id="cw` + listofcwd[d][0] + `d" class='crosswordinput' maxlength="` + listofcwd[d][3] + `" type="text"></input><br>
                               `;
                            }      
                               sendhtml +=`</div></div><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                               Put all of the letters that are in the red boxes in here:<br>
                                  <input id="crosswordanswer" type="text" name="theanswer">
                                  <input class='button4' id='submitcrosswordbutton' type='button' value='SUBMIT' onclick='submitCrosswordAnswer()'/>
                                  <br>
                                  <div id="corsswordresponse" style="color:black;"></div>
                               <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                                </div>
                            `;          
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "picmem"){
                          if(isGameUnlocked(data.thegame, data.info)){

                            var questionlist = [[1, "Monster Minigolf"],[2, "Firefly"],[3, "Most Recent Yankee Game"],[4, "Washington D.C."],[5, "NJIT"],[6, "Top Golf"],[7, "WAS NOT TOGETHER"],[8, "WAS NOT TOGETHER"],[9, "Big Chill"],[10, "Dage Parking lot"],[11, "WAS NOT TOGETHER"],[12, "First Hike Together"],[13, "WAS NOT TOGETHER"],[14, "San Diego Zoo"],[15, "First Yankee Game"],[16, "WAS NOT TOGETHER"],[17, "Aunt's Birthday Party"],[18, "Hawaii"],[19, "Halloween"],[20, "WAS NOT TOGETHER"],[21, "Second Date"],[22, "WAS NOT TOGETHER"],[23, "WAS NOT TOGETHER"],[24, "WAS NOT TOGETHER"],[25, "WAS NOT TOGETHER"],[26, "Firefly"],[27, "Lost River Caverns"],[28, "Red Bank"],[29, "Miss Wedding"],[30, "Poconos Hike"],[31, "WAS NOT TOGETHER"],[32, "H20 Apartment"],[33, "Asbury Park"],[34, "Hawaii Hike"],[35, "Labor Day"],[36, "Calamari Amazing Race"],[37, "WAS NOT TOGETHER"],[38, "Hawaii Beach"],[39, "Tri Delt Formal"],[40, "Atlantic City"],[41, "Christmas Party"],[42, "Tattoo"],[43, "Johnny Mac's"],[44, "21st Birthday"],[45, "Ocean City"],[46, "Pumpkin Picking"],[47, "Carly's Birthday"],[48, "Boston"],[49, "Fourth of July"],[50, "Beer Olympics"]];
                            var numberlist = [];
                            shuffleArray(questionlist);
                            sendhtml = `
                            <div style="width: 1200px;margin: auto;">
                                Picture Memory
                                <br><br>
                                Here is a chance to test your memory! Below are 50 various pictures that were taken since we started dating, and below that are the names of the events/places of those pictures. Your job is to put the correct picture number next to the matching name of the event/place. There are 12 "WAS NOT TOGETHER" pictures mixed in. You can leave those boxes blank. You need to get a score of 84% or higher.
                                <br><br>
  
                            `;
                            for(var i=1; i<=50; i++){
                              sendhtml += `
                                <div class="picmemoryimage">
                                  <img src='../../img/secret/mem (` + i + `).jpg' alt='' style="max-width: 200px;">
                                  <br>
                                  Picture #` + i + `
                                </div>
                                
                            `;
                            }
                            sendhtml += `
                            <br><br>
                            <div style="max-width:248px; margin: auto; text-align: right; padding-right: 37px;">
                            `;
                            for(var i in questionlist){
                               sendhtml += `
                                    <div style="max-width:300px;display: inline-block;">` + questionlist[i][1] + `</div><div style="max-width:70px;display: inline-block; padding-left: 12px;"> <input id="picmemoryanswer` + questionlist[i][1] + `" class='picmeminput' type="text"></input></div><br>
                               `;
                            }   
                                
                            sendhtml += `
                            </div><br><br>
                                <input class='button4' id='submitpicmembutton' type='button' value='SUBMIT' onclick='submitPicmemAnswer()'/>
                                <br>
                                <div id="corsswordresponse" style="color:black;"></div>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            </div>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "pichunt"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Riddle Hunt
                                <br><br>
                                Now your on your third task, congrats for you. On a hunt you'll go with riddles, find them all and get a prize, too!
                                <br><br>
                                <div style="width: 383px;background-color: white;color: black;padding: 18px 32px;margin: auto;border-style: groove;border-radius: 40px;">The next clue hangs out with it's four friends: Sally the Snake, Larry the Lion, Ethan the Eagle, and Bobby the Badger. It's always stuck behind them while they have a magical time.<br><br> Remember this number: 8</div>
                                <br><br>
                                Final Clue Code: <input id="pichuntanswer" type="text" name="theanswer">
                                <br><br>
                                <input class='button4' id='submitpichuntbutton' type='button' value='SUBMIT' onclick='submitPichuntAnswer()'/>
                                <br>
                                <div id="corsswordresponse" style="color:black;"></div>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "jigsaw"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Jigsaw Puzzle
                                <br><br>
                                QUICK! Look behind your white clothes drawers in your closet! You will find a puzzle that you must complete! Once you complete it, get the sum of all the numbers and write the answer below. Good luck with this one lol.
                                <br><br>
                                Number Code: <input id="jigsawanswer" type="text" name="theanswer">
                                <br><br>
                                <input class='button4' id='submitjigsawbutton' type='button' value='SUBMIT' onclick='submitJigsawAnswer()'/>
                                <br>
                                <div id="corsswordresponse" style="color:black;"></div>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "piccompare"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Where's Hayley??
                                <br><br>
                                Hayley has ran off! Can you find her? If you click a part of the image that is not Hayley, then you will have to restart from the beginning. This is to prevent cheating.
                                <br><br>
                                <div id="whcontainer1" style="position: relative; width: 600px; margin: auto;">
                                  <input class='button4' id='backbutton' type='button' value='Zoom' onclick='whMakeImageBigger("1")'/><br>
                                  <div id="whImgContainter1" class="whImgContainter" style="width: 30px; height: 90px; right: 96px; top: 37px;">
                                  </div>
                                    <img id="whImg1" src='../../img/secret/wh1.jpg' alt='' style="width: 600px;">
                                  <br><br>
                                </div>  
                                <div id="whcontainer2" style="display:none; position: relative; width: 600px; margin: auto;">
                                  <input class='button4' id='backbutton' type='button' value='Zoom' onclick='whMakeImageBigger("2")'/><br>
                                  <div id="whImgContainter2" class="whImgContainter" style="width: 16px; height: 27px; right: 210px; top: 318px;">
                                  </div>
                                    <img id="whImg2" src='../../img/secret/wh2.jpg' alt='' style="width: 600px;">
                                  <br><br>
                                </div>  
                                <div id="whcontainer3" style="display:none; position: relative; width: 600px; margin: auto;">
                                  <input class='button4' id='backbutton' type='button' value='Zoom' onclick='whMakeImageBigger("3")'/><br>
                                  <div id="whImgContainter3" class="whImgContainter" style="width: 10px; height: 16px; right: 118px; top: 134px;">
                                  </div>
                                    <img id="whImg3" src='../../img/secret/wh3.jpg' alt='' style="width: 600px;">
                                  <br><br>
                                </div>  
                                <div id="whcontainer4" style="display:none; position: relative; width: 600px; margin: auto;">
                                  <input class='button4' id='backbutton' type='button' value='Zoom' onclick='whMakeImageBigger("4")'/><br>
                                  <div id="whImgContainter4" class="whImgContainter" style="width: 13px; height: 16px; right: 74px; top: 177px;">
                                  </div>
                                    <img id="whImg4" src='../../img/secret/wh4.jpg' alt='' style="width: 600px;">
                                  <br><br>
                                </div>  
                                <div id="whcontainer5" style="display:none; position: relative; width: 600px; margin: auto;">
                                  <input class='button4' id='backbutton' type='button' value='Zoom' onclick='whMakeImageBigger("5")'/><br>
                                  <div id="whImgContainter5" class="whImgContainter" style="width: 12px; height: 38px; right: 63px; top: 128px;">
                                  </div>
                                    <img id="whImg5" src='../../img/secret/wh5.jpg' alt='' style="width: 600px;">
                                  <br><br>
                                </div>  
                                <div id="whcontainer6" style="display:none; position: relative; width: 600px; margin: auto;">
                                  <input class='button4' id='backbutton' type='button' value='Zoom' onclick='whMakeImageBigger("6")'/><br>
                                  <div id="whImgContainter6" class="whImgContainter" style="width: 12px; height: 25px; left: 65px; top: 188px;">
                                  </div>
                                    <img id="whImg6" src='../../img/secret/wh6.jpg' alt='' style="width: 600px;">
                                  <br><br>
                                </div>  
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else if(data.thegame == "math"){
                          if(isGameUnlocked(data.thegame, data.info)){
                            sendhtml = `
                                Math
                                <br><br>
                                Answer all of these Math Problems:
                                <br><br>
                                (1*1*1*1*1*1*1)+(1*1)+(1*1*1*1*1*1*1*1*1*1*1*1)+(1*1*1*1)+(1*1*1*1*1*1)+(1*1*1*1)+(1) = <input id="mathAnswer1" class='crosswordinput' type="text"></input>
                                <br><br>
                                5+9-8+2-1+0+14+5+9+2+4-50+13+4+9 = <input id="mathAnswer2" class='crosswordinput' type="text"></input>
                                <br><br>
                                40,798-34,752-4,029 = <input id="mathAnswer3" class='crosswordinput' type="text"></input>
                                <br><br><br>
                                Now that you have your three answers, complete the equation below!
                                <br><br>
                                <div id="answer1Div" style="display:inline-block;"></div>-<div id="answer2Div" style="display:inline-block;"></div>-<div id="answer3Div" style="display:inline-block;"></div> = <input id="mathFinalAnswer" class='crosswordinput' style="display:inline-block;" type="text"></input>
                                <br><br>
                                <input class='button4' id='submitmathbutton' type='button' value='SUBMIT' onclick='submitMathAnswer()'/>
                                <br><br>
                                <input class='button4' id='backbutton' type='button' value='BACK' onclick='goBackMain()'/>
                            `;
                          }else{
                            sendhtml = "notunlocked";
                          }
                        }else{
                            sendhtml = "notunlocked";
                          
                        }

                        //console.log("sending the goods " + sendhtml);
                        SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"ue", username:data.username, game:data.thegame, HTML:sendhtml});

                    }else{

                        SOCKET_LIST[socket.id].emit('robinHomeScreenData',{answer:"dne", username:data.username});
                    }
                }
            });
          
        });
    }); 

  
};