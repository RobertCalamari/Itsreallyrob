function authenticate() {
	user=document.getElementById('usernametest').value;
	pass=document.getElementById('passwordtest').value;
	socket.emit('authenticate',{username:user, password:pass});

}

function authenticateanswer(data) {
	if(data.answer == "dne"){
		document.getElementById('answer').innerHTML = "That username does not exist.";
	}else if(data.answer == "ue"){
		setCookie("usernamesh", data.username, 1);
		setCookie("nidsh", data.nid, 1);  
		checkIfLoggedIn();

	}else if(data.answer == "pnc"){
		document.getElementById('answer').innerHTML = "That password is incorrect.";
	}

}

function checkIfLoggedIn(){
	var name = getCookie("usernamesh");
	var thid = getCookie("nidsh");
	if(name ==""){
		document.getElementById('contentdiv').innerHTML = `
				<div id="signindiv">
					<form>
						 Username: <input id="usernametest" type="text" name="username" required><br>
						 Password: <input id="passwordtest" type="password" name="psw" required><br>
						 <input id="signinbutton" style='width:70px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Sign In" onclick="authenticate();" />
					</form> 
					<div id="answer"></div>
				</div>`;

				const signInEvent1 = document.getElementById('usernametest');
				const signInEvent2 = document.getElementById('passwordtest');
				signInEvent1.addEventListener("keyup", function(event) {
				    if (event.key === "Enter") {
				        authenticate();
				    }
				});
				signInEvent2.addEventListener("keyup", function(event) {
				    if (event.key === "Enter") {
				        authenticate();
				    }
				});
	}else{
		
		socket.emit('ciLoggedIn',{username:name, tid:thid});
	}
}

function secretHomeScreenLoad(data,ext,postname) {
	var name = getCookie("usernamesh");
	var thid = getCookie("nidsh");

	var gamelist = [["crossword","Crossword"], ["picmem", "Picture Memories"], ["pichunt", "Riddle Hunt"], ["jigsaw", "Jigsaw Puzzle"], ["piccompare", "Picture Compare"], ["math", "Math Problems"], ["trivia", "Trivia Questions"], ["slide","Slide Puzzle"], ["basement","The Basement"]];
	
	if(postname.status == "refresh"){
		goBackRestart2();
	}
	if(postname.status == "refresh2"){
		goBackMain();
	}

	if(data.answer == "dne"){
		document.getElementById('contentdiv').innerHTML = `
				<div id="signindiv">
					To Sign in:<br>
					<form>
						 Username: <input id="usernametest" type="text" name="username" required><br>
						 Password: <input id="passwordtest" type="password" name="psw" required><br>
						 <input id="signinbutton" style='width:70px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Sign In" onclick="authenticate();" />
					</form> 
					<div id="answer"></div>
				</div>`;
		document.getElementById('answer').innerHTML = "Incorrect Credentials.";

	}else if(data.answer == "ue"){

		// if(postname.game == "crossword"){
		// 	socket.emit('getSecretData',{username:name, tid:thid, thegame:postname.game});
		// }else{
			
			if(data.HTML == "notunlocked" || data.HTML == "" || data.HTML == undefined){
				//console.log(data.budgetData);
				//console.log("--------------");
				document.getElementById('contentdiv').innerHTML = checkifUnlocked(data, data.budgetData, gamelist);

				// for(var i in gamelist){
				// 	document.getElementById('hs' + gamelist[i][0] + 'button').onclick = function () {
				//         socket.emit('getSecretData',{username:data.username, tid:thid, thegame:gamelist[i][0], info:data.budgetData});
				//     }
			 //    }
			    
				document.getElementById('hscrosswordbutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=crossword';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"crossword", info:data.budgetData});
			    }
			    document.getElementById('hspicmembutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=picmem';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"picmem", info:data.budgetData});
			    }
			    document.getElementById('hspichuntbutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=pichunt';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"pichunt", info:data.budgetData});
			    }
			    document.getElementById('hsjigsawbutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=jigsaw';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"jigsaw", info:data.budgetData});
			    }
			    document.getElementById('hspiccomparebutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=piccompare';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"piccompare", info:data.budgetData});
			    }
			    document.getElementById('hsmathbutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=math';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"math", info:data.budgetData});
			    }
			    document.getElementById('hstriviabutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=trivia';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"trivia", info:data.budgetData});
			    }
			    document.getElementById('hsslidebutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=slide';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"slide", info:data.budgetData});
			    }
			    document.getElementById('hsbasementbutton').onclick = function () {
			        //location.href=ext + '/pages/robin/robin.html?game=basement';
			        socket.emit('getSecretData',{username:data.username, tid:thid, thegame:"basement", info:data.budgetData});
			    }
			 //    document.getElementById("fullName").addEventListener("keyup", function() {
				// 	var fullname = document.getElementById('fullName').value;
			 //     	document.getElementById('printedNameArea').innerHTML = fullname;
			 //     }, false);

				// document.getElementById("fullName").addEventListener("paste", function() {
				// 	var fullname = document.getElementById('fullName').value;
			 //     	document.getElementById('printedNameArea').innerHTML = fullname;
			 //     }, false);
			}else{
				document.getElementById('contentdiv').innerHTML = data.HTML;

				if(data.game == "crossword"){
				  document.getElementById("cw3a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw3a").value;
                    document.getElementById("cw3adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw3a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw3a").value;
                    document.getElementById("cw3adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw5a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw5a").value;
                    document.getElementById("cw5adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw5a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw5a").value;
                    document.getElementById("cw5adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw7a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw7a").value;
                    document.getElementById("cw7adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw7a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw7a").value;
                    document.getElementById("cw7adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw10a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw10a").value;
                    document.getElementById("cw10adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw10a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw10a").value;
                    document.getElementById("cw10adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw12a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw12a").value;
                    document.getElementById("cw12adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw12a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw12a").value;
                    document.getElementById("cw12adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw13a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw13a").value;
                    document.getElementById("cw13adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw13a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw13a").value;
                    document.getElementById("cw13adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw14a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw14a").value;
                    document.getElementById("cw14adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw14a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw14a").value;
                    document.getElementById("cw14adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw15a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw15a").value;
                    document.getElementById("cw15adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw15a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw15a").value;
                    document.getElementById("cw15adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw17a").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw17a").value;
                    document.getElementById("cw17adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw17a").addEventListener("paste", function() {
                  var answer = document.getElementById("cw17a").value;
                    document.getElementById("cw17adiv").innerHTML = answer.toLowerCase();
                  }, false);
                  document.getElementById("cw1d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw1d").value;
                    document.getElementById("cw1ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw1d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw1d").value;
                    document.getElementById("cw1ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw2d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw2d").value;
                    document.getElementById("cw2ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw2d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw2d").value;
                    document.getElementById("cw2ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw4d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw4d").value;
                    document.getElementById("cw4ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw4d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw4d").value;
                    document.getElementById("cw4ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw6d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw6d").value;
                    document.getElementById("cw6ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw6d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw6d").value;
                    document.getElementById("cw6ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw8d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw8d").value;
                    document.getElementById("cw8ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw8d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw8d").value;
                    document.getElementById("cw8ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw9d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw9d").value;
                    document.getElementById("cw9ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw9d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw9d").value;
                    document.getElementById("cw9ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw11d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw11d").value;
                    document.getElementById("cw11ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw11d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw11d").value;
                    document.getElementById("cw11ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw16d").addEventListener("keyup", function() {
                  var answer = document.getElementById("cw16d").value;
                    document.getElementById("cw16ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);
                  document.getElementById("cw16d").addEventListener("paste", function() {
                  var answer = document.getElementById("cw16d").value;
                    document.getElementById("cw16ddiv").innerHTML = seperateWord(answer).toLowerCase();
                  }, false);

					// var listofcwa = [3,5,7,10,12,13,14,15,17];
	    //             var listofcwd = [1,2,4,6,8,9,11,16];
	    //             for(var a in listofcwa){
	    //               var theelement1 = "cw" + listofcwa[a] + "a";
	    //               var theelement2 = "cw" + listofcwa[a] + "adiv";
	    //               document.getElementById(theelement1).addEventListener("keyup", function() {
	    //               var answer = document.getElementById(theelement1).value;
	    //                 document.getElementById(theelement2).innerHTML = answer;
	    //               }, false);
	    //               document.getElementById(theelement1).addEventListener("paste", function() {
	    //               var answer = document.getElementById(theelement1).value;
	    //                 document.getElementById(theelement2).innerHTML = answer;
	    //               }, false);
	    //             }
	    //             for(var d in listofcwd){
	    //               var theelement1 = "cw" + listofcwd[d] + "d";
	    //               var theelement2 = "cw" + listofcwd[d] + "ddiv";
	    //               document.getElementById(theelement1).addEventListener("keyup", function() {
	    //               var answer = document.getElementById(theelement1).value;
	    //                 document.getElementById(theelement2).innerHTML = answer;
	    //               }, false);
	    //               document.getElementById(theelement1).addEventListener("paste", function() {
	    //               var answer = document.getElementById(theelement1).value;
	    //                 document.getElementById(theelement2).innerHTML = answer;
	    //               }, false);
	    //             }
				}
			}
			
		// }
	}
}

function seperateWord(word){
	var newword = "";
	for(var i in word){
		newword+= word[i] + "<br>";
	}
	return newword;
}
function goBackMain(){
	location.href='../../pages/secret/secret.html';
}
function goBackRestart(){
	location.href='../../pages/secret/secret.html?status=refresh';
}
function goBackRestart2(){
	location.href='../../pages/secret/secret.html?status=refresh2';
}

function submitCrosswordAnswer(){
	var name = getCookie("usernamesh");
	var thid = getCookie("nidsh");
	var theanswer = document.getElementById('crosswordanswer').value;
	socket.emit('standardCorrectAnswer',{answer:theanswer, username:name, tid:thid, game:"crossword"});
}
function submitPicmemAnswer(){
	var name = getCookie("usernamesh");
	var thid = getCookie("nidsh");
	var answerlist = [];

	var x = document.getElementsByClassName("picmeminput");
	  for (var i = 0; i < x.length; i++) {
	    var theanswer = x[i].value;
	    var theid = x[i].id.replace("picmemoryanswer", "");
		answerlist[i] = [theanswer, theid];
		//console.log(theanswer + " | " + x[i].id);
	  }

	socket.emit('standardCorrectAnswer',{list:answerlist, username:name, tid:thid, game:"picmem"});
}

function submitPichuntAnswer(){
	var name = getCookie("usernamesh");
	var thid = getCookie("nidsh");
	var theanswer = document.getElementById('pichuntanswer').value;
	socket.emit('standardCorrectAnswer',{answer:theanswer, username:name, tid:thid, game:"pichunt"});
}

function submitJigsawAnswer(){
	var name = getCookie("usernamesh");
	var thid = getCookie("nidsh");
	var theanswer = document.getElementById('jigsawanswer').value;
	socket.emit('standardCorrectAnswer',{answer:theanswer, username:name, tid:thid, game:"jigsaw"});
}

function checkifUnlocked(data, thelist, gamelist){
	//console.log(data);
	var printme = "<div style='font-family:Zombie-Holocost;font-size: 38px;'>Hello Hayley</div><br><div style='font-family:Condensed-French;font-size: 20px;'> Below are tasks that you must complete. After completing every third one, you will recieve a reward... Good Luck.</div> ";
	var counter = 1;
	var allclosed = 0;
	
    for(var i in gamelist){
    	//console.log("checking " + gamelist[i][0]);
    	//console.log("RESULT " + isGameUnlocked(gamelist[i][0], data));
    	if(isGameUnlocked(gamelist[i][0], thelist)){
    		printme+=`<input class='button2 secretbutton' id='hs` + gamelist[i][0] + `button' style='padding:45px; font-size:13px;' type='button' value='` + gamelist[i][1] + `' />`;
    		//console.log("this one good!!!!  " + gamelist[i][0] + " --- " + thelist);
	    }else{
	    	printme+=`<input class='button2 secretbutton notclickable' id='hs` + gamelist[i][0] + `button' style='padding:45px; font-size:13px;' type='button' value='??????????' />`;
	    	//console.log("this one bad???  " + gamelist[i][0] + " --- " + thelist);
	    	allclosed++;
	    }
	    if(counter%3 ==0){
	    	printme+="<br>";
	    }
	    counter++;
    }
    if(allclosed == 9){
    	goBackMain();
    }else{
    	return `<div style="padding: 15px; max-width: 1093px; margin: auto;">
				` + printme + ` 
			</div>`;
    }
    
	
	

}

 function isGameUnlocked(game, data){
      var answer = 0;
      
      for(var i in data){
        //console.log("------ " + data[i][0] + " | " + data[i][3]);
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