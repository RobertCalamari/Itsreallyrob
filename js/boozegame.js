var boozelop = [];
var boozeloqs = [];
var boozenorounds = 1;
var roundcounter = 0;
var currentquestion;
var screen = 0;

function startBoozeGame(myscreen){
	if(document.getElementById('boozerounds').value =="hi" | document.getElementById('boozerounds').value<1 | document.getElementById('boozerounds').value>40){
		document.getElementById('boozeerror').innerHTML = "Please enter a rounds value of 1-40!"; 
	}else if(document.getElementById('boozep1').value =="" | document.getElementById('boozep2').value==""){
		document.getElementById('boozeerror').innerHTML = "You need at least two people to play!"; 		
	}else{
				document.getElementById('boozeerror').innerHTML = ""; 		
		for(let i=0;i<9;i++){
			if(document.getElementById('boozep'+(i+1)).value != ""){
				boozelop.push(document.getElementById('boozep'+(i+1)).value);
			}
		}
		document.getElementById('boozeorlosegame').style.display = 'inline-block';
		document.getElementById('boozeorlosesettings').style.display = 'none';
		document.getElementById('gamechoices').style.display = 'none';
		document.getElementById('contentdiv').addEventListener('mousedown', nextBoozeQuestion, false);
		//document.getElementById('contentdiv').addEventListener('touchstart', nextBoozeQuestion, false);
		
		boozenorounds = document.getElementById('boozerounds').value
		screen = myscreen;
		roundcounter = 0;
		if(screen==2){
			document.getElementById('header').style.display = 'none';
			document.getElementById('contacthome').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
		}
	}
}

function nextBoozeQuestion(){

	if(roundcounter < boozenorounds){
		var bcolors=["#b81e38", "#a309a6", "#2067fa", "#05d3b0", "#0eb133", "#cce109", "#cf6a14"]; 
		var randcolor = Math.floor(Math.random() * bcolors.length); 
		var randp1 = Math.floor(Math.random() * boozelop.length);
		var rand = "q" + (Math.floor(Math.random() * 97) +1); 
		var randp1 = Math.floor(Math.random() * boozelop.length); 
		var randp2 = Math.floor(Math.random() * boozelop.length); 
		while(randp1 == randp2){
			randp2 = Math.floor(Math.random() * boozelop.length);
		}
	
		currentquestion=listOfBoozeQuestions(boozelop[randp1], boozelop[randp2]);

		document.getElementById('boozeqblock').innerHTML = currentquestion[rand];
		document.body.style.backgroundColor = bcolors[randcolor];

		
	}
	else if(roundcounter==boozenorounds){
		document.getElementById('boozeqblock').innerHTML = "Out of rounds! Click to play again!";
		document.body.style.backgroundColor = '#3c3d3e';
	}else{
		document.getElementById('boozeorlosegame').style.display = 'none';
		document.getElementById('boozeorlosesettings').style.display = 'block';
		document.getElementById('gamechoices').style.display = 'inline-block';
		document.getElementById('contentdiv').addEventListener('mousedown', nextBoozeQuestion, false);
		document.getElementById('boozeqblock').innerHTML = "Welcome to Booze or Lose! The drinking game where you have no control! Just follow along with what the screen says to do and click for the next prompt. Refresh or go through all the prompts to start a new game. Have fun and be safe!";
		if(screen==2){
			document.getElementById('header').style.display = 'inline-block';
			document.getElementById('contacthome').style.display = 'inline-block';
			document.getElementById('footer').style.display = 'inline-block';
		}				
	}
	roundcounter++;
}

function fixscreen(screen,sourcefile){
	if(screen == 0){
		document.getElementById('gamewrapper').style.padding = '25px 0px 25px 0px';	
		document.getElementById('gamewrapper').style.width = '65%';	
		document.getElementById('gamewrapper').style.margin = 'auto';		
		document.getElementById('boozerotate').className = 'norotatebooze';
		document.getElementById('boozerotate').style.width = '100%';
		document.getElementById('boozerotate').style.height = '100%';
		document.getElementById('boozeqblock').style.padding = '200px 0 200px 0';
	}else if(screen===1){
		document.getElementById('gamewrapper').style.padding = '25px 0px 25px 0px';	
		document.getElementById('gamewrapper').style.width = '65%';	
		document.getElementById('gamewrapper').style.margin = 'auto';		
		document.getElementById('boozerotate').className = 'norotatebooze';
		document.getElementById('boozerotate').style.width = '100%';
		document.getElementById('boozerotate').style.height = '100%';
		document.getElementById('boozeqblock').style.padding = '200px 0 200px 0';

	}else if(screen===2){
		document.getElementById('gamewrapper').style.padding = '25px 10px 25px 10px';	
		document.getElementById('gamewrapper').style.width = '95%';	
		document.getElementById('gamewrapper').style.margin = 'auto';
		document.getElementById('boozerotate').className = 'rotate90';
		document.getElementById('boozeorlosegame').style.padding = '85% 0 0 0';
		document.getElementById('gamewrapper').style.height = '617px';
	}
}

var listOfBoozeQuestions = function(name1,name2){

        var self = {
			numofq:97,
            q1: "Take a piece of clothing off, anything on your feet or head to not count, or drink 3 sips.",
			q2: name1 + " says a category, starting with them, go around the room and stop when someone hesitates or repeats a word relating to that category. The loser sips 2 times.",
			q3: "Never Have I Ever!<br>Everyone put up three fingers, starting with " + name1 + " , they say something they never did and if you have you put a finger down and sip. The game ends when someone reaches zero fingers.",
			q4: "All the guys drink.",
			q5: "All the girls drink.",
			q6: name1 + "! <br>Finish your drink!",
			q7: name1 + "! <br>What is the sexiest thing about the person to your left? Take 3 sips to not answer.",
			q8: "Take 3 sips if you have ever stolen something worth more than $10.Take 1 is you have not.",
			q9: "If your birthday is this month, give out as many sips as the month. (January=1, February=2, etc...)",
			q10: "Starting with " + name + ", go around making animal noises, the person who can't say one or repeats drinks 3 sips!",
			q11: name1 + "! <br>Do a Fortnite dance for 5 seconds or drink 3 sips.",
			q12: "Everyone think of a number between 1-5! Once everyone has thought of a number put them up at the same time, then click to continue while keeping your fingers up.",
			q12a: ["For each finger you have up, take a sip!", "If anyone chose the same number as you, you both take 3 sips.", "If you chose an even number, drink 3 sips.", "If you chose an odd number, drink 3 sips.","Choose a drinking buddy, you both add your fingers together and share that many sips.","If you chose 5 fingers, give another person with 5 fingers a highfive. Everyone else drinks 2 sips.If there are no other people with 5 fingers, drink 5 sips."] ,
			q13: "Take a sip if you are single, and two sips if you are dating someone",
			q14: name1 + "! <br>What is a secret that noone knows about you? Drink 3 sips to not tell!",
			q15: "If you are not wearing shoes, drink 3 sips.",
			q16: name1 + "! <br>Think of a name that everyone must call " + name2 + ". If anyone does not call them that name, drink 2 sips.",
			q17: "If you are wearing anything black, drink 2 sips.",
			q18: "Go around the room to tell everyone your childhood nickname, drink 3 sips to not tell.",
			q19: "If you did not go to prom, take a sip. Otherwise drink 3 sips.",
			q20: name1 + "! <br>Who was the last person you slept with? Drink 3 sips to not kiss and tell!",
			q21: "On the count of three, everyone must point at someone to finish their drink. No discussing before hand! Whoever has the most votes must drink.",
			q22: "On the count of three, raise your hand if you ever had surgery. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q23: "On the count of three, raise your hand if you ever smoked. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q24: "On the count of three, raise your hand if you ever threw up due to alcohol. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q25: "On the count of three, raise your hand if you ever been out of the country. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q26: "On the count of three, raise your hand if you ever hooked up with more than one person in a night. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q27: "On the count of three, raise your hand if you ever did a hard drug. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q28: "On the count of three, raise your hand if you ever sent nudes. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q29: "On the count of three, raise your hand if you ever been grounded. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q30: "On the count of three, raise your hand if you ever had sex in public. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q31: "On the count of three, raise your hand if you ever liked someone more than a friend in this room. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q32: "On the count of three, raise your hand if you ever flirted with someone to get what you want. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q33: "On the count of three, raise your hand if you ever got in trouble with the police. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q34: "On the count of three, raise your hand if you ever had unprotected sex. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q35: "On the count of three, raise your hand if you ever had a one night stand. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q36: name1 + "! <br>How was the first time you had sex? Drink 3 sips if you do not want to tell.",
			q37: "If you did not shower within the past 3 days, drink 3 sips.",
			q38: "Not including " + name1 + ", go around the room and guess what their favorite color is. Drink 3 sips if you are wrong.",
			q39: "Not including " + name1 + ", go around the room and guess what their favorite food is. Drink 3 sips if you are wrong.",
			q40: "Not including " + name1 + ", go around the room and guess what their favorite thing about themselves is. Drink 3 sips if you are wrong.",
			q41: "Not including " + name1 + ", go around the room and guess what their favorite thing about the person to their left is. Drink 3 sips if you are wrong.",
			q42: "Life long partners! " + name1 + " and " + name2 + " will now drink together for the rest of the game!",
			q43: "Partners in crime! " + name1 + ", pick someone to come up with a handshake. Whenever either either of you do it, you both drink!",
			q44: name1 + "! <br>Describe your worst nightmare! If you do not want to drink 5 sips." ,
			q45: "On the count of three, raise your hand if you ever watched the entire show of The Office more than once. If you have not, drink 3 sips.",
			q46: "If you are currently outside, drink 3 sips, otherwise drink 5 sips.",
			q47: "On the count of three, everyone must point at someone who they think slept with the most people. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q48: "On the count of three, everyone must point at someone who they think is currently the most drunk. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q49: "On the count of three, everyone must point at someone who they think is the drunk of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q50: "On the count of three, everyone must point at someone who they think is the flirt of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q51: "On the count of three, everyone must point at someone who they think has seen the most Disney movie. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q52: "On the count of three, everyone must point at someone who they think plays the most videogames. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q53: "On the count of three, everyone must point at someone who they think can't say no to anyone. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q54: "On the count of three, everyone must point at someone who they think has the most secrets. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q55: "On the count of three, everyone must point at someone who they think the coolest of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q56: "On the count of three, everyone must point at someone who they think is the strongest of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q57: "On the count of three, everyone must point at someone who they think would break up a relationship to get with one of those people. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q58: "On the count of three, everyone must point at someone who they think has the worst memory. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q59: "On the count of three, everyone must point at someone who they think has watched the most tv/Netflix/Hulu this week. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q60: "On the count of three, everyone must point at someone who they think is the flirt of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q61: "On the count of three, raise your hand if you ever watched anime. If the majority did, whoever did not drinks 3 sips. If the majority did not, then the whoever did drinks 3 sips. <br> Majority is more than half. If there's a tie, everyone drinks 3 sips.",
			q62: "On the count of three, everyone must point at someone who they think will first be a parent. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q63: "On the count of three, everyone must point at someone who they think is the happiest out of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q64: "On the count of three, everyone must point at someone who they think is the smartest of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q65: "On the count of three, everyone must point at someone who they think would be the drug dealer of the group. No discussing before hand! Whoever has the most votes must drink 3 sips!",
			q66: name1 + "! <br> You are now Simon! Whenever you say Simon says drink, everyone must drink one sip.",
			q67: "Waterfall! Starting with " + name1 + ", everyone starts drinking at the same time only stopping when the person to their right stops.",
			q68: "If your name has an even amount of letters, drink 2 sips.",
			q69: "If your name has an odd amount of letters, drink 2 sips.",
			q70: "Everyone count the number of letters in your first and last name. The last person to say that number drinks 3 sips.",
			q71: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 sips. When you are ready click to continue to see what you must do.",
			q71a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 sips anyway!", "Some friend you are! They drink 1 sip, while you drink 5 sips!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q72: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 sips. When you are ready click to continue to see what you must do.",
			q72a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 sips anyway!", "Some friend you are! They drink 1 sip, while you drink 5 sips!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q73: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 sips. When you are ready click to continue to see what you must do.",
			q73a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 sips anyway!", "Some friend you are! They drink 1 sip, while you drink 5 sips!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q74: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 sips. When you are ready click to continue to see what you must do.",
			q74a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 sips anyway!", "Some friend you are! They drink 1 sip, while you drink 5 sips!", "You two must swap seats!", "Give each other your phones unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q75: name1 + "! <br>Read aloud, the last text message you sent. Drink 3 sips to not read it. If you checked your phone first, then drink 5 sips." ,
			q76: name1 + "! <br>You can not look at your phone for the rest of the game! If you do then drink 3 times. Does not include looking at this game." ,
			q77: "If anyone shares the same birthday, you all drink 3 times.",
			q78: "Everyone think of a number between 1-10. When you are ready, click to continue.",
			q78a: ["If you chose 1, then drink 3 sips!","If you chose 2, then drink 3 sips!","If you chose 3, then drink 3 sips!","If you chose 4, then drink 3 sips!","If you chose 5, then drink 3 sips!","If you chose 6, then drink 3 sips!","If you chose 7, then drink 3 sips!","If you chose 8, then drink 3 sips!","If you chose 9, then drink 3 sips!","If you chose 10, then drink 3 sips!"],
			q79: name1 + "!<br>Distribute drinks as many as there are people playing.",
			q80: name1 + "!<br>You are now the group mule for the rest of the game. If anyone needs something you have to go get it. Drink 2 sips per refusal.",
			q81: name1 + "!<br>Pick someone to finish their drink. You also finish half of yours.",
			q82: name1 + "!<br>Let " + name2 + " send a text to one of your exes or drink 6 sips!",
			q83: name1 + "!<br>Attempt to do a handstand, or drink 3 sips.",
			q84: name1 + "!<br>You can only talk in gibberish the rest of the game! Drink if you ever speak normally! Does not count when reading from this game.",
			q85: name1 + "!<br>Make a fart noise from your armpit, or drink 3 sips.",
			q86: name1 + "!<br>Do a successful cartwheel, or drink 3 sips.",
			q87: name1 + " and " + name2 + "<br>Rock, Paper, Scissors to see who finishes their drink! Best out of 3!",
			q88: "Whoever has their birthday next gives out 4 sips.",
			q89: "The oldest person in the room gives out 4 sips.",
			q90: "The youngest person in the room gives out 4 sips.",
			q91: name1 + "!<br>If you are wearing shoes, take them off. If not drink 3 sips.",
			q92: "If you use Internet Explorer, finish your drink! An extra one too if you are playing my app on it! Gross!",
			q93: name1 + "!<br>If you are in public, the group decides what you say to someone random. If you refuse finish your drink!",
			q94: name1 + "!<br>If you are in public, you are excused from playing and have 4 minutes to hit on as many people of the opposite gender as possible. For as many numbers that text you, is how many people you get to make finish their drinks!" ,
			q95: "If you smoked today, drink 3 sips.",
			q96: "Tell us your favorite pickup line. Drink 3 sips if you do not want to.",
			q97: "Higher or Lower! When you are ready click!"
        }
        
        return self;
    }