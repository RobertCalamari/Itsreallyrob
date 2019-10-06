
var availgames = ["random","math"];
var theroom = "";
var starttime = 40;
var newquestion;
var currscore = 0;
var randdiff;
var thelist = [];
var ranthrough = false;

function startPartyPackGame(theroom){
	socket.emit('startgamepartypack',{room:theroom});
}

function socketPartyPackUpdate(data){
	socket.emit('updatesection',{section:1,room:theroom});
	theroom=data.room;
	document.getElementById('playerslabel').style.display = 'none';
	document.getElementById('partypackbutton').style.display = 'none';
	document.getElementById('partypackwelcome').style.display = 'block';
    document.getElementById("partypackwelcome").innerHTML="Welcome to Robert's Party Pack! You will be playing through multiple minigames, competing against one another to receive the most points! Each game is unique, requiring you to overcome your opponents or even join teams with them sometimes!";
	socket.emit('partyPackUpdateClient',{message:2,room:theroom});
	
}

function partyPackNextScreen(){
    document.getElementById("partypackwelcome").innerHTML="";
	//document.getElementById('partypackwelcome').style.display = 'none';
    partyPackMathGame();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function socketPartyPackUpdateServer(data){
	if(data.message == 5){
		partyPackNextScreen();	
	}else if(data.message == 0){
		document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! ";
	}else if(data.message == 1){
		document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! <br><br> READY!";
	}else if(data.message == 2){
		document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! <br><br> SET!";
	}else if(data.message == 3){
		document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! <br><br> GO!";
	}else if(data.message == 4){
		partyPackMathStart();	
	}

}

function updatePartyPackSec1(sec, data){
	if(sec == 1){
		document.getElementById('playerslabel').style.display = 'none';
		document.getElementById('partypackbutton').style.display = 'none';
		document.getElementById('partypackwelcome').style.display = 'block';
		document.getElementById("partypackwelcome").innerHTML="Welcome to Robert's Party Pack! You will be playing through multiple minigames, competing against one another to receive the most points! Each game is unique, requiring you to overcome your opponents or even join teams with them sometimes!";

	}else if(sec == 2){
		document.getElementById('playerslabel').style.display = 'none';
		document.getElementById('partypackbutton').style.display = 'none';
		document.getElementById('partypackwelcome').style.display = 'block';
		document.getElementById("partypackwelcome").innerHTML="Loading...";
		document.getElementById("partypackgamelabel").innerHTML="Math Game";
    	document.getElementById('partypackgamelabel').style.display = 'block';
		socket.emit('partyPackUpdateClient',{message:0,room:theroom});
		currscore = 0;
		randdiff = data.me.randnum;
		var input = document.getElementById("partypackmathanswer");
		input.addEventListener("keyup", function(event) {
		    event.preventDefault();
		    if (event.keyCode === 13) {
		        document.getElementById("mathnextquestionbutton").click();
		    }
		});
	}else if(sec == 3){
		document.getElementById('playerslabel').style.display = 'none';
		document.getElementById("partypackwelcome").innerHTML="Loading...";
    	document.getElementById('partypackgamelabel').style.display = 'block';
		document.getElementById('partyPackMath').style.display = 'block';
		document.getElementById("partypackwelcome").innerHTML="";
		socket.emit('partyPackUpdateClient',{message:0,room:theroom});
		currscore = 0;
		var input = document.getElementById("partypackmathanswer");
		input.addEventListener("keyup", function(event) {
		    event.preventDefault();
		    if (event.keyCode === 13) {
		        document.getElementById("mathnextquestionbutton").click();
		    }
		});
		randdiff = data.me.randnum;

		if(randdiff == 0){
			document.getElementById("partypackgamelabel").innerHTML="Math Game - Easy Mode";
		}else if(randdiff == 1){
			document.getElementById("partypackgamelabel").innerHTML="Math Game - Medium Mode";
		} else if(randdiff == 2){
			document.getElementById("partypackgamelabel").innerHTML="Math Game - Hard Mode";
		}

		newquestion = selectMathProblem(randdiff);
		document.getElementById("mathproblem").innerHTML=newquestion[1];

		document.getElementById("partypackmathanswer").value = "";
		document.getElementById("partypackmathanswer").focus();
		document.getElementById("partypackmathanswer").select();
	}else if(sec == 4){
		document.getElementById('partyPackMath').style.display = 'none';
	    document.getElementById('partyPackMathEnd').style.display = 'block';
    
    	document.getElementById("mathwinner").innerHTML="Loading...";
    	document.getElementById("mathlop").innerHTML="Loading...";
	}else if(sec == 5){
		
		document.getElementById("partypackgamelabel").innerHTML="Overall Scores:";
		document.getElementById('partyPackMathEnd').style.display = 'none';
		document.getElementById('partyPackCurrentStats').style.display = 'block';

		document.getElementById("partyPackLeaderboard").innerHTML="Loading...";
	}
}

function partyPackMathGame(){
	if(!ranthrough){
		ranthrough = true;
		currscore = 0;
		socket.emit('resetcounterscore',{room:theroom});
		socket.emit('getrandomnum',{num:3,room:theroom});

		var input = document.getElementById("partypackmathanswer");
		input.addEventListener("keyup", function(event) {
		    event.preventDefault();
		    if (event.keyCode === 13) {
		        document.getElementById("mathnextquestionbutton").click();
		    }
		});
		
		socket.emit('updatesection',{section:2,room:theroom});

		document.getElementById("partypackgamelabel").innerHTML="Math Game";
	    document.getElementById('partypackgamelabel').style.display = 'block';
	    socket.emit('partyPackUpdateClient',{message:1,room:theroom});
    }
}


function socketPartyPackReceiveRandumNum(data){
	randdiff = data.rnum; 
}


function partyPackMathStart(){
    document.getElementById('partyPackMath').style.display = 'block';
	document.getElementById("partypackwelcome").innerHTML="";
	socket.emit('updatesection',{section:3,room:theroom});

	if(randdiff == 0){
		document.getElementById("partypackgamelabel").innerHTML="Math Game - Easy Mode";
	}else if(randdiff == 1){
		document.getElementById("partypackgamelabel").innerHTML="Math Game - Medium Mode";
	} else if(randdiff == 2){
		document.getElementById("partypackgamelabel").innerHTML="Math Game - Hard Mode";
	}

	newquestion = selectMathProblem(randdiff);
	document.getElementById("mathproblem").innerHTML=newquestion[1];

	document.getElementById("partypackmathanswer").value = "";
	document.getElementById("partypackmathanswer").focus();
	document.getElementById("partypackmathanswer").select();

    
    //document.getElementById("mathtimer").innerHTML=starttime;
    socket.emit('partyPackTimerStart',{room:theroom,starttime:40});
}

function socketUpdateMathTimer(data){
	if(data.ended){
		ranthrough = false;
    	document.getElementById('partypackmathanswer').removeEventListener("keyup", function(event) {
		    event.preventDefault();
		    if (event.keyCode === 13) {
		        document.getElementById("mathnextquestionbutton").click();
		    }
		});
    	document.getElementById("mathtimer").innerHTML="Times up!";
    	socket.emit('endPartyPackMath',{room:theroom,finalscore:currscore});
	}else{
		document.getElementById("mathtimer").innerHTML=data.newtime;
	}
	
}





function socketEndPartyPackMathAll(data){
    document.getElementById('partyPackMath').style.display = 'none';
    document.getElementById('partyPackMathEnd').style.display = 'block';
    socket.emit('updatesection',{section:4,room:theroom});
    var thewinners = "Winner!";
    var listallplayers = "";
    for(var w in data.winners){
    	if(w == 0){
    		thewinners = data.winners[w].name;
    	}else{
    		thewinners = thewinners + " <br> " + data.winners[w].name;
    	}
    }
    for(var w in data.mathallplayers){
    	if(w == 0){
    		listallplayers = data.mathallplayers[w].name + ": " + data.mathallplayers[w].counterscore.toString();
    	}else{
    		listallplayers = listallplayers + " <br> " + data.mathallplayers[w].name + ": " + data.mathallplayers[w].counterscore.toString();
    	}
    	thelist[thelist.length] = data.mathallplayers[w];
    }
    
    document.getElementById("mathwinner").innerHTML=thewinners;
    document.getElementById("mathlop").innerHTML=listallplayers;
    socket.emit('showCurrentScores',{room:theroom});
}

function socketUpdateCurrentScore(data){
   	
	document.getElementById("partypackgamelabel").innerHTML="Overall Scores:";
	document.getElementById('partyPackMathEnd').style.display = 'none';
	document.getElementById('partyPackCurrentStats').style.display = 'block';
	socket.emit('updatesection',{section:4,room:theroom});

	var orderedplayers = "";
	for(var w in data.orderedlistofplayers){
    	if(w == 0){
    		orderedplayers = data.orderedlistofplayers[w].name + ": " + data.orderedlistofplayers[w].score.toString();
    	}else{
    		orderedplayers = orderedplayers + " <br> " + data.orderedlistofplayers[w].name + ": " + data.orderedlistofplayers[w].score.toString();
    	}

    }

	document.getElementById("partyPackLeaderboard").innerHTML=orderedplayers;
}




function mathNextQuestion(theroom){
	var youranswer;
	if(document.getElementById("partypackmathanswer").value == ""){
		youranswer = null;
	}else{
		youranswer = document.getElementById("partypackmathanswer").value;
	}
	console.log(newquestion[0] + "|||||" + youranswer);
	if(newquestion[0] == youranswer){
		document.getElementById("mathrorw").innerHTML="Correct!";
		socket.emit('addtocounterscore',{room:theroom});
		currscore++;
		setTimeout(function() {
			document.getElementById("mathrorw").innerHTML="";
		} ,1500);
	}else{
		document.getElementById("mathrorw").innerHTML="Incorrect!";
		setTimeout(function() {
			document.getElementById("mathrorw").innerHTML="";
		} ,1500);
	}
	newquestion = selectMathProblem(randdiff);
	document.getElementById("mathproblem").innerHTML=newquestion[1];
	document.getElementById("partypackmathanswer").value = "";
	document.getElementById("partypackmathanswer").focus();
	document.getElementById("partypackmathanswer").select();

}


function selectMathProblem(randdiff){

	var mathproblem = "";
	var finalanswer = 0;

	if(randdiff == 0){

		var randnum1 = Math.floor(Math.random() * 11); 
		var randnum2 = Math.floor(Math.random() * 11); 
		var randoper1 = Math.floor(Math.random() * 2); 

		if(randoper1 == 0){
			finalanswer = randnum1 + randnum2;
			mathproblem = randnum1 + " + " + randnum2;
		}else if(randoper1 == 1){
			finalanswer = randnum1 - randnum2;
			mathproblem = randnum1 + " - " + randnum2;
		}

	}else if(randdiff == 1){

		var randnum1 = Math.floor(Math.random() * 51); 
		var randnum2 = Math.floor(Math.random() * 51); 
		var randnum3 = Math.floor(Math.random() * 11);
		var randoper1 = Math.floor(Math.random() * 3); 

		if(randoper1 == 0){
			finalanswer = randnum1 + randnum2;
			mathproblem = randnum1 + " + " + randnum2;
		}else if(randoper1 == 1){
			finalanswer = randnum1 - randnum2;
			mathproblem = randnum1 + " - " + randnum2;
		}else if(randoper1 == 2){
			finalanswer = randnum1 * randnum3;
			mathproblem = randnum1 + " * " + randnum3;
		}

	}else if(randdiff == 2){

		var randnum1 = Math.floor(Math.random() * 101); 
		var randnum2 = Math.floor(Math.random() * 101); 
		var randnum3 = Math.floor(Math.random() * 101); 
		var randnum4 = Math.floor(Math.random() * 11); 
		var randnum5 = Math.floor(Math.random() * 11); 
		var randnum6 = Math.floor(Math.random() * 11); 
		var randoper1 = Math.floor(Math.random() * 9); 

		if(randoper1 == 0){
			finalanswer = (randnum1 + randnum2) + randnum3;
			mathproblem = "( " + randnum1 + " + " + randnum2 + ") + " + randnum3;
		}else if(randoper1 == 1){
			finalanswer = (randnum1 + randnum2) - randnum3;
			mathproblem = "( " + randnum1 + " + " + randnum2 + ") - " + randnum3;
		}else if(randoper1 == 2){
			finalanswer = (randnum1 - randnum2) + randnum3;
			mathproblem = "( " + randnum1 + " - " + randnum2 + ") + " + randnum3;
		}else if(randoper1 == 3){
			finalanswer = (randnum1 - randnum2) - randnum3;
			mathproblem = "( " + randnum1 + " - " + randnum2 + ") - " + randnum3;
		}else if(randoper1 == 4){
			finalanswer = (randnum1 + randnum2) * randnum4;
			mathproblem = "( " + randnum1 + " + " + randnum2 + ") * " + randnum4;
		}else if(randoper1 == 5){
			finalanswer = (randnum4 * randnum5) + randnum3;
			mathproblem = "( " + randnum4 + " * " + randnum5 + ") + " + randnum3;
		}else if(randoper1 == 6){
			finalanswer = (randnum4 * randnum5) * randnum6;
			mathproblem = "( " + randnum4 + " * " + randnum5 + ") * " + randnum6;
		}else if(randoper1 == 7){
			finalanswer = (randnum4 * randnum5) - randnum3;
			mathproblem = "( " + randnum4 + " * " + randnum5 + ") - " + randnum3;  
		}else if(randoper1 == 8){
			finalanswer = (randnum1 * randnum2) + randnum4;
			mathproblem = "( " + randnum1 + " - " + randnum2 + ") * " + randnum4;
		}
	}

	return [finalanswer,mathproblem];
}  