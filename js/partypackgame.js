
var availgames = ["random","math"];
var theroom = "";
var starttime = 40;
var newquestion;
var currscore = 0;
var randdiff;
var thelist = [];

function startPartyPackGame(theroom){
	socket.emit('startgamepartypack',{room:theroom});
}

function socketPartyPackUpdate(data){
	document.getElementById('playerslabel').style.display = 'none';
	document.getElementById('partypackbutton').style.display = 'none';
	document.getElementById('partypackwelcome').style.display = 'block';
    document.getElementById("partypackwelcome").innerHTML="Welcome to Robert's Party Pack! You will be playing through multiple minigames, competing against one another to receive the most points! Each game is unique, requiring you to overcome your opponents or even join teams with them sometimes!";
	setTimeout(partyPackNextScreen, 7000);
	theroom=data.room;
}

function partyPackNextScreen(){
    document.getElementById("partypackwelcome").innerHTML="";
	//document.getElementById('partypackwelcome').style.display = 'none';
    partyPackMathGame();
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function partyPackMathGame(){
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


	document.getElementById("partypackgamelabel").innerHTML="Math Game";
    document.getElementById('partypackgamelabel').style.display = 'block';
	document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! ";
	setTimeout(function() {
		document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! <br><br> READY!";
		setTimeout(function() {
			document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! <br><br> SET!";
			setTimeout(function() {
				document.getElementById("partypackwelcome").innerHTML="In Math Game, players will complete as many math problems as they can within 40 seconds! Whoever has the most problems done wins! <br><br> GO!";
				setTimeout(partyPackMathStart,1500);
			} ,1500);
		} ,1500);

	} ,6000);
}


function socketPartyPackReceiveRandumNum(data){
	randdiff = data.rnum; 
}


function partyPackMathStart(){
    document.getElementById('partyPackMath').style.display = 'block';
	document.getElementById("partypackwelcome").innerHTML="";

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

    starttime = 40;
    document.getElementById("mathtimer").innerHTML=starttime;
    var mathtimerint = setInterval(function() {
	    starttime--;
	    
	    if (starttime < 0) {
	    	socket.emit('addtocounterscore',{room:theroom,finalscore:currscore});
	    	socket.emit('endPartyPackMath',{room:theroom,finalscore:currscore});
	    	document.getElementById("mathtimer").innerHTML="Times up!";
	        clearInterval(mathtimerint);
	    }else{
			document.getElementById("mathtimer").innerHTML=starttime;
		}
	}, 1000);
}

function socketEndPartyPackMathAll(data){
    document.getElementById('partyPackMath').style.display = 'none';
    document.getElementById('partyPackMathEnd').style.display = 'block';
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
   	setTimeout(function() {
		document.getElementById("partypackgamelabel").innerHTML="Overall Scores:";
    	document.getElementById('partyPackMathEnd').style.display = 'none';
    	document.getElementById('partyPackCurrentStats').style.display = 'block';

    	var orderedplayers = "";
    	for(var w in data.orderedlistofplayers){
	    	if(w == 0){
	    		orderedplayers = data.orderedlistofplayers[w].name + ": " + data.orderedlistofplayers[w].score.toString();
	    	}else{
	    		orderedplayers = orderedplayers + " <br> " + data.orderedlistofplayers[w].name + ": " + data.orderedlistofplayers[w].score.toString();
	    	}

	    }

    	document.getElementById("partyPackLeaderboard").innerHTML=orderedplayers;


	} ,6000);
}




function mathNextQuestion(theroom){
	var youranswer;
	if(document.getElementById("partypackmathanswer").value == ""){
		youranswer = null;
	}else{
		youranswer = document.getElementById("partypackmathanswer").value;
	}
	if(newquestion[0] == youranswer){
		document.getElementById("mathrorw").innerHTML="Correct!";
		//socket.emit('addtocounterscore',{room:theroom});
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
		var randoper1 = Math.floor(Math.random() * 3); 

		if(randoper1 == 0){
			finalanswer = randnum1 + randnum2;
			mathproblem = randnum1 + " + " + randnum2;
		}else if(randoper1 == 1){
			finalanswer = randnum1 - randnum2;
			mathproblem = randnum1 + " - " + randnum2;
		}else{
			finalanswer = randnum1 * randnum2;
			mathproblem = randnum1 + " * " + randnum2;
		}

	}else if(randdiff == 2){

		var randnum1 = Math.floor(Math.random() * 101); 
		var randnum2 = Math.floor(Math.random() * 101); 
		var randnum3 = Math.floor(Math.random() * 101); 
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
			finalanswer = (randnum1 + randnum2) * randnum3;
			mathproblem = "( " + randnum1 + " + " + randnum2 + ") * " + randnum3;
		}else if(randoper1 == 5){
			finalanswer = (randnum1 * randnum2) + randnum3;
			mathproblem = "( " + randnum1 + " * " + randnum2 + ") + " + randnum3;
		}else if(randoper1 == 6){
			finalanswer = (randnum1 * randnum2) * randnum3;
			mathproblem = "( " + randnum1 + " * " + randnum2 + ") * " + randnum3;
		}else if(randoper1 == 7){
			finalanswer = (randnum1 * randnum2) - randnum3;
			mathproblem = "( " + randnum1 + " * " + randnum2 + ") - " + randnum3;
		}else if(randoper1 == 8){
			finalanswer = (randnum1 * randnum2) + randnum3;
			mathproblem = "( " + randnum1 + " - " + randnum2 + ") * " + randnum3;
		}
	}

	return [finalanswer,mathproblem];
}