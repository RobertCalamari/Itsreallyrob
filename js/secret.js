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

	var gamelist = [["math", "Math Problems"], ["picmem", "Picture Memories"], ["crossword","Crossword"], ["pichunt", "Riddle Hunt"], ["piccompare", "Where's Hayley"], ["jigsaw", "Jigsaw Puzzle"]];
	
	if(postname.status == "refresh"){
		goBackRestart2();
	}
	if(postname.status == "refresh2"){
		goBackMain();
	}

  //setTimeout(function() {

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
  			
  			if(data.HTML == "notunlocked" || data.HTML == "" || data.HTML == undefined || data.HTML == "undefined"){
  				//console.log(data.budgetData);
  				//console.log("--------------");
          if(data.game == "" || data.game == undefined || data.game == "undefined"){
            document.getElementById('contentdiv').innerHTML = checkifUnlocked(data, data.budgetData, gamelist);

            for(let i in gamelist){
              console.log(i + " - GL: " + gamelist[i][0]);
              document.getElementById('hs' + gamelist[i][0] + 'button').onclick = function () {
                    socket.emit('getSecretData',{username:data.username, tid:thid, thegame:gamelist[i][0], info:data.budgetData});
                }
              }
          }
  				
  		
  			}else{
          if(data.HTML == undefined){
            document.getElementById('contentdiv').innerHTML = "Your content is loading...";
          }else{
            document.getElementById('contentdiv').innerHTML = data.HTML;

            if(data.game == "crossword"){

              var listofcwa = [3,5,7,10,12,13,14,15,17];
              var listofcwd = [1,2,4,6,8,9,11,16];
              for(let a in listofcwa){
                let theelement1 = "cw" + listofcwa[a] + "a";
                let theelement2 = "cw" + listofcwa[a] + "adiv";
                document.getElementById(theelement1).addEventListener("keyup", function() {
                let answer = document.getElementById(theelement1).value;
                  document.getElementById(theelement2).innerHTML = answer.toLowerCase();
                }, false);
                document.getElementById(theelement1).addEventListener("paste", function() {
                let answer = document.getElementById(theelement1).value;
                  document.getElementById(theelement2).innerHTML = answer.toLowerCase();
                }, false);
              }
              for(let d in listofcwd){
                let theelement1 = "cw" + listofcwd[d] + "d";
                let theelement2 = "cw" + listofcwd[d] + "ddiv";
                document.getElementById(theelement1).addEventListener("keyup", function() {
                let answer = document.getElementById(theelement1).value;
                  document.getElementById(theelement2).innerHTML = seperateWord(answer).toLowerCase();
                }, false);
                document.getElementById(theelement1).addEventListener("paste", function() {
                let answer = document.getElementById(theelement1).value;
                  document.getElementById(theelement2).innerHTML = seperateWord(answer).toLowerCase();
                }, false);
              }
            }else if(data.game == "piccompare"){

              for(let i = 1;i<=6;i++){
                document.getElementById("whImg"+i).onclick = function () {
                  //showCoords(event, document.getElementById("whImg"+i));
                  //document.getElementById("whcontainer"+(i+1)).style.display = "block";  
                  location.href='../../pages/secret/secret.html';

                }
                document.getElementById("whImgContainter"+i).onclick = function () {
                  //showCoords(event, document.getElementById("whImg"+i));
                  if(i==1){
                    submitPicCompareAnswer();
                    alert("Congrats! You found her! You can now exit if you'd like, or try to find her in the rest of the puzzles for a bonus prize!");
                  }
                  if(i==6){
                    alert("You found the last spot she was hidding! You can now text Rob 'I am not good at hiding...' to see what you won!");
                  }
                  document.getElementById("whcontainer"+(i+1)).style.display = "block";  
                }
              }
            }else if(data.game == "math"){

              for(let i = 1;i<=3;i++){
                document.getElementById("mathAnswer"+i).addEventListener("keyup", function() {
                let answer = document.getElementById("mathAnswer"+i).value;
                  document.getElementById("answer" + i + "Div").innerHTML = answer;
                }, false);
                document.getElementById("mathAnswer"+i).addEventListener("paste", function() {
                let answer = document.getElementById("mathAnswer"+i).value;
                  document.getElementById("answer" + i + "Div").innerHTML = answer;
                }, false);
              }
            }
          }
  				
  			}
  			
  		// }
  	}


  // }, 1000);

}

function showCoords(event, element) {
  var e = window.event
  var relativeX = e.screenX - element.scrollLeft;
  var relativeY = e.screenY - element.scrollTop;
  alert("X:"+relativeX + " | Y:" + relativeY);
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
		console.log(theanswer + " | " + x[i].id);
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

function submitPicCompareAnswer(){
  var name = getCookie("usernamesh");
  var thid = getCookie("nidsh");
  socket.emit('standardCorrectAnswer',{username:name, tid:thid, game:"piccompare"});
}

function submitMathAnswer(){
  var name = getCookie("usernamesh");
  var thid = getCookie("nidsh");
  var theanswer = document.getElementById('mathFinalAnswer').value;
  socket.emit('standardCorrectAnswer',{answer:theanswer, username:name, tid:thid, game:"math"});
}

function whMakeImageBigger(number) {
  window.open(
    "https://www.robertcalamari.com/img/secret/wh" + number + ".jpg",
    '_blank' // <- This is what makes it open in a new window.
  );

  
}

function checkifUnlocked(data, thelist, gamelist){
	//console.log(data);
	var printme = "<div style='font-family:Zombie-Holocost;font-size: 38px;'>Hello Hayley</div><br><div style='font-family:Condensed-French;font-size: 20px;'> Happy Birthday! Since I know you just love big surprises and gifts, I made it... easy for you this year. Below are tasks you must do in order to win your gifts. The first column will give small prizes, while the bigger column will giver the big prizes. I do not care how long this takes you to complete, but you will only get your gifts once you complete each section. GOOD LUCK AHAHHAHAHAH!</div> ";
	var counter = 1;
	var allclosed = 0;
	
    for(var i in gamelist){
    	//console.log("checking " + gamelist[i][0]);
    	//console.log("RESULT " + isGameUnlocked(gamelist[i][0], data));
    	if(isGameUnlocked(gamelist[i][0], thelist)){
    		printme+=`<input class="button2 secretbutton" id="hs` + gamelist[i][0] + `button" style="padding:45px; font-size:13px;" type="button" value="` + gamelist[i][1] + `" />`;
    		//console.log("this one good!!!!  " + gamelist[i][0] + " --- " + thelist);
	    }else{
	    	printme+=`<input class='button2 secretbutton notclickable' id='hs` + gamelist[i][0] + `button' style='padding:45px; font-size:13px;' type='button' value='??????????' />`;
	    	//console.log("this one bad???  " + gamelist[i][0] + " --- " + thelist);
	    	allclosed++;
	    }
	    if(counter%2 ==0){
	    	printme+="<br>";
	    }
	    counter++;
    }

    if(allclosed == 9){
      document.getElementById('contentdiv').innerHTML = "Your content is loading...";
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