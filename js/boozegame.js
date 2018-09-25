var boozelop = [];
var boozeloqs = [];
var boozenorounds = 1;
var roundcounter = 0;
var currentquestion;
var screen = 0;
var randq;
var listofas= ["q12","q71","q72","q73","q74","q78"];
var totalboozequestions = 360;

function startBoozeGame(myscreen){
	if(document.getElementById('boozerounds').value =="hi" | document.getElementById('boozerounds').value<1 | document.getElementById('boozerounds').value>40){
		document.getElementById('boozeerror').innerHTML = "Please enter a rounds value of 1-40!"; 
	}else if(document.getElementById('boozep1').value =="" | document.getElementById('boozep2').value=="" | document.getElementById('boozep3').value==""){
		document.getElementById('boozeerror').innerHTML = "You need at least three people to play!"; 		
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


		currentquestion=listOfBoozeQuestions("test", "test");
		var isinarray = false;
		while(boozeloqs.length < boozenorounds){
			isinarray = false;
			randq = "q" + (Math.floor(Math.random() * totalboozequestions) +1); 
			

			for(let i = 0; i<boozeloqs.length;i++){
				if(boozeloqs[i] == randq){
					isinarray = true;
				}
			}
			if(isinarray == false){
				boozeloqs.push(randq);
				if(listofas.includes(randq)){
					randq+="a";
					boozeloqs.push(randq);
					boozenorounds++;
				} 
			}
		}	


	}
}

function nextBoozeQuestion(){

	if(roundcounter < boozenorounds){
		var bcolors=["#b81e38", "#a309a6", "#2067fa", "#05d3b0", "#0eb133", "#cce109", "#cf6a14"]; 
		var randcolor = Math.floor(Math.random() * bcolors.length); 

		var randp1 = Math.floor(Math.random() * boozelop.length);
		var randp2 = Math.floor(Math.random() * boozelop.length); 
		var randp3 = Math.floor(Math.random() * boozelop.length); 

		while(randp1 == randp2){
			randp2 = Math.floor(Math.random() * boozelop.length);
		}
		while(randp3 == randp2 || randp3 == randp1){
			randp3 = Math.floor(Math.random() * boozelop.length);
		}

		currentquestion=listOfBoozeQuestions(boozelop[randp1], boozelop[randp2], boozelop[randp3]);
		
		var extraprompt = 0;
		var boozelogcutoff = boozeloqs[roundcounter];
		if((boozeloqs[roundcounter][boozeloqs[roundcounter].length-1])=="a")
		{
			boozelogcutoff = boozeloqs[roundcounter].substring(0, boozeloqs[roundcounter].length - 1);
		}
	
		if(listofas.includes(boozelogcutoff)){
			extraprompt = Math.floor(Math.random() * currentquestion[boozeloqs[roundcounter]].length);
			if((boozeloqs[roundcounter][boozeloqs[roundcounter].length-1])=="a")
			{
				document.getElementById('boozeqblock').innerHTML = currentquestion[boozeloqs[roundcounter]][extraprompt];
			}else{
				document.getElementById('boozeqblock').innerHTML = currentquestion[boozeloqs[roundcounter]];
			}

		}else{
			document.getElementById('boozeqblock').innerHTML = currentquestion[boozeloqs[roundcounter]];			
		}

		
		document.body.style.backgroundColor = bcolors[randcolor];
		
	}
	else if(roundcounter==boozenorounds){
		document.getElementById('boozeqblock').innerHTML = "Out of rounds! Click to play again!";
		document.body.style.backgroundColor = '#3c3d3e';
		boozeloqs = [];
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

function printAllBooze(){
	currentquestion=listOfBoozeQuestions("Person 1", "Person 2", "Person 3");
	for(let i=0;i<totalboozequestions;i++){
		var forloopvar = "q"+(i+1);
		console.log((i+1) + ": " + currentquestion[forloopvar]);
	}
}

var listOfBoozeQuestions = function(name1,name2,name3){

		//List of prompts that include an additional screen:
		////q12,971,q72,q73,q74,q78

		var randhol = Math.floor(Math.random() * 10)+1;	
		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var randletter = Math.floor(Math.random() * 26);	

        var self = {
			numofq:97,
            q1: "Take a piece of clothing off, anything on your feet or head to not count, or drink 3 times.",
			q2: name1 + " says a category, starting with them, go around the room and stop when someone hesitates or repeats a word relating to that category. The loser drinks 2 times.",
			q3: "Never Have I Ever!<br>Everyone put up three fingers, starting with " + name1 + " , they say something they never did and if you have you put a finger down and sip. The game ends when someone reaches zero fingers.",
			q4: "All the guys drink.",
			q5: "All the girls drink.",
			q6: name1 + "! <br>Finish your drink!",
			q7: name1 + "! <br>What is the sexiest thing about the person to your left? Take 3 times to not answer.",
			q8: "Drink 3 times if you have ever stolen something worth more than $10.Take 1 sip is you have not.",
			q9: "If your birthday is in this month, give out as many times as the month. (January=1, February=2, etc...)",
			q10: "Starting with " + name1 + ", go around making animal noises, the person who can't say one or repeats, drinks 3 times!",
			q11: name1 + "! <br>Do a Fortnite dance for 5 seconds or drink 3 times.",
			q12: "Everyone think of a number between 1-5! Once everyone has thought of a number put them up at the same time, then click to continue while keeping your fingers up.",
			q12a: ["For each finger you have up, take a sip!", "If anyone chose the same number as you, you both drink 3 times.", "If you chose an even number, drink 3 times.", "If you chose an odd number, drink 3 times.","Choose a drinking buddy, you both add your fingers together and share that many times.","If you chose 5 fingers, give another person with 5 fingers a highfive. Everyone else drinks 2 times.If there are no other people with 5 fingers, drink 5 times."] ,
			q13: "Take a sip if you are single, and two times if you are dating someone",
			q14: name1 + "! <br>What is a secret that noone knows about you? Drink 3 times to not tell!",
			q15: "If you are not wearing shoes, drink 3 times.",
			q16: name1 + "! <br>Think of a name that everyone must call " + name2 + ". If anyone does not call them that name for the rest of the game, drink 2 times.",
			q17: "If you are wearing anything black, drink 2 times.",
			q18: "Go around the room to tell everyone your childhood nickname, drink 3 times to not tell.",
			q19: "If you did not go to prom, take a sip. Otherwise drink 3 times.",
			q20: name1 + "! <br>Who was the last person you slept with? Drink 3 times to not kiss and tell!",
			q21: "On the count of three, raise your hand if you ever watched anime. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q22: "On the count of three, raise your hand if you ever had surgery. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q23: "On the count of three, raise your hand if you ever smoked. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q24: "On the count of three, raise your hand if you ever threw up due to alcohol. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q25: "On the count of three, raise your hand if you ever been out of the country. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q26: "On the count of three, raise your hand if you ever hooked up with more than one person in a night. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q27: "On the count of three, raise your hand if you ever did a hard drug. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q28: "On the count of three, raise your hand if you ever sent nudes. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q29: "On the count of three, raise your hand if you ever been grounded. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q30: "On the count of three, raise your hand if you ever had sex in public. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q31: "On the count of three, raise your hand if you ever liked someone more than a friend in this room. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q32: "On the count of three, raise your hand if you ever flirted with someone to get what you want. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q33: "On the count of three, raise your hand if you ever got in trouble with the police. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q34: "On the count of three, raise your hand if you ever had unprotected sex. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q35: "On the count of three, raise your hand if you ever had a one night stand. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q36: name1 + "! <br>How was the first time you had sex? Drink 3 times if you do not want to tell.",
			q37: "If you did not shower within the past 3 days, drink 3 times.",
			q38: "Not including " + name1 + ", go around the room and guess what their favorite color is. Drink 3 times if you are wrong.",
			q39: "Not including " + name1 + ", go around the room and guess what their favorite food is. Drink 3 times if you are wrong.",
			q40: "Not including " + name1 + ", go around the room and guess what their favorite thing about themselves is. Drink 3 times if you are wrong.",
			q41: "Not including " + name1 + ", go around the room and guess what their favorite thing about the person to their left is. Drink 3 times if you are wrong.",
			q42: "Life long partners! " + name1 + " and " + name2 + " will now drink together for the rest of the game!",
			q43: "Partners in crime! " + name1 + ", pick someone to come up with a handshake. Whenever either of you do it, you both drink!",
			q44: name1 + "! <br>Describe your worst nightmare! If you do not want to tell, drink 3 times." ,
			q45: "On the count of three, raise your hand if you ever watched the entire series, The Office more than once. If you have not, drink 3 times.",
			q46: "If you are currently outside, drink 3 times, otherwise drink 5 times.",
			q47: "On the count of three, everyone must point at someone who they think slept with the most people. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q48: "On the count of three, everyone must point at someone who they think is currently the most drunk. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q49: "On the count of three, everyone must point at someone who they think is the drunk of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q50: "On the count of three, everyone must point at someone who they think is the flirt of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q51: "On the count of three, everyone must point at someone who they think has seen the most Disney movie. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q52: "On the count of three, everyone must point at someone who they think plays the most videogames. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q53: "On the count of three, everyone must point at someone who they think can't say no to anyone. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q54: "On the count of three, everyone must point at someone who they think has the most secrets. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q55: "On the count of three, everyone must point at someone who they think is the coolest of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q56: "On the count of three, everyone must point at someone who they think is the strongest of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q57: "On the count of three, everyone must point at someone who they think would break up a relationship to get with one of those people. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q58: "On the count of three, everyone must point at someone who they think has the worst memory. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q59: "On the count of three, everyone must point at someone who they think has watched the most tv/Netflix/Hulu this week. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q60: "On the count of three, everyone must point at someone who they think is most likely to murder someone. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q61: "On the count of three, everyone must point at someone to finish their drink. No discussing before hand! Whoever has the most votes must drink.",
			q62: "On the count of three, everyone must point at someone who they think will first be a parent. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q63: "On the count of three, everyone must point at someone who they think is the happiest out of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q64: "On the count of three, everyone must point at someone who they think is the smartest of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q65: "On the count of three, everyone must point at someone who they think would be the drug dealer of the group. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q66: name1 + "! <br> You are now Simon! Whenever you say Simon says drink, everyone must take a sip.",
			q67: "Waterfall! Starting with " + name1 + ", everyone starts drinking at the same time, only stopping when the person to their right stops.",
			q68: "If your name has an even amount of letters, drink 2 times.",
			q69: "If your name has an odd amount of letters, drink 2 times.",
			q70: "Everyone count the number of letters in your first and last name. The last person to say that number, drinks 3 times.",
			q71: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q71a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q72: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q72a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q73: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q73a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q74: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q74a: ["You two must kiss!", "Hold hands for the rest of this game!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phones unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q75: name1 + "! <br>Read aloud, the last text message you sent. Drink 3 times to not read it. If you checked your phone first, then drink 5 times." ,
			q76: name1 + "! <br>You can not look at your phone for the rest of the game! Every time you do, drink 2 times. Does not include looking at this game." ,
			q77: "If anyone shares the same birthday, you all drink 3 times.",
			q78: "Everyone think of a number between 1-10. When you are ready, click to continue.",
			q78a: ["If you chose 1, then drink 3 times!","If you chose 2, then drink 3 times!","If you chose 3, then drink 3 times!","If you chose 4, then drink 3 times!","If you chose 5, then drink 3 times!","If you chose 6, then drink 3 times!","If you chose 7, then drink 3 times!","If you chose 8, then drink 3 times!","If you chose 9, then drink 3 times!","If you chose 10, then drink 3 times!"],
			q79: name1 + "!<br>Distribute sips for the number of players.",
			q80: name1 + "!<br>You are now the group mule for the rest of the game. If anyone needs something you have to go get it. Drink 2 times per refusal.",
			q81: name1 + "!<br>Pick someone to finish their drink. You also finish half of yours.",
			q82: name1 + "!<br>Let " + name2 + " send a text to one of your exes or drink 6 times!",
			q83: name1 + "!<br>Attempt to do a handstand, or drink 3 times.",
			q84: name1 + "!<br>You can only talk in gibberish the rest of the game! Take a sip if you ever speak normally! Does not count when reading from this game.",
			q85: name1 + "!<br>Make a fart noise from your armpit, or drink 3 times.",
			q86: name1 + "!<br>Do a successful cartwheel, or drink 3 times.",
			q87: name1 + " and " + name2 + "<br>Rock, Paper, Scissors to see who finishes their drink! Best out of 3!",
			q88: "Whoever has their birthday next gives out 4 sips.",
			q89: "The oldest person in the room gives out 4 sips.",
			q90: "The youngest person in the room gives out 4 sips.",
			q91: name1 + "!<br>If you are wearing shoes, take them off. If not drink 3 times.",
			q92: "If you use Internet Explorer, finish your drink! An extra one too if you are playing my app on it! Gross!",
			q93: name1 + "!<br>If you are in public, the group decides what you say to someone random. If you refuse finish your drink!",
			q94: name1 + "!<br>If you are in public, you are excused from playing and have 4 minutes to hit on as many people of the opposite gender as possible. For as many numbers that text you, is how many people you get to make finish their drinks!" ,
			q95: "If you smoked today, drink 3 times.",
			q96: "Tell us your favorite pickup line, otherwise drink 3 times.",
			q97: "If you are married, drink 3 times!",
			q98: "Higher or Lower! You have the number " + randhol + ". Pick higher or lower than click! If you get it wrong or tie, then drink 3 times.",
			q98a: ["1","2","3","4","5","6","7","8","9","10"],
			q99: "If you ever owned a reptile, drink 2 times.",
			q100: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Dwayne The Rock Johnson",
			q101: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Justin Beiber",
			q102: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Megan Fox",
			q103: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Chris Pratt",
			q104: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Donald Trump",
			q105: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Taylor Swift",
			q106: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Beyonce",
			q107: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Kanye West",
			q108: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Will Smith",
			q109: name1 + "!<br>Fuck, Marry, Kill:<br>" + name2 + ", " + name3 + ", Tom Cruise",
			q110: name1 + " and " + name2 + "!<br>Swap shirts! Otherwise drink 4 times each!",
			q111: "The last person to raise their hand must drink 3 times!",
			q112: "The last person to touch the floor must drink 3 times!",
			q113: name1 + " can only talk with a different accent until the game is over. Take a sip for each mess up!",
			q114: name1 + " can not use their thumbs for the rest of the game. Take a sip for each mess up!",
			q115: "Starting with " + name1 + ", everyone must name a different color. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q116: "Starting with " + name1 + ", everyone must name a different football team. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q117: "Starting with " + name1 + ", everyone must name a different baseball team. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q118: "Starting with " + name1 + ", everyone must name a different hockey team. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q119: "Starting with " + name1 + ", everyone must name a different animal. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q120: "Starting with " + name1 + ", everyone must name a different type of car. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q121: "Starting with " + name1 + ", everyone must name a different type of breakfast food. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q122: name1 + "!<br>You must do 10 pushups. Take a sip for each uncompleted pushup.",
			q123: "The last person to stand up must drink 3 times.",
			q124: "If " + name1 + " says anyones name for the rest of the game, take a sip.",
			q125: name1 + "!<br>Tell an interesting fact about yourself! You can not sip to get out of this one!",
			q126: name1 + "!>br>Think of a word, and starting to your left, start rhyming with that word. Whoever repeats or can't think of anything, must drink 3 times.",
			q127: name1 + "!<br> You can not speak for the rest of the game! Finish your drink if you want to talk!",
			q128: "DON'T SHOW ANYONE! Only you know the secret word. If anyone says this at anytime, you can tell them to drink. You never have to tell them the secret word until the end of the game. Click to see the word!",
			q128a: ["Food", "Joke", "Banana", "Make", "Soap", "Frat", "Table", "Friend", "Yeet", "Trump", "Racist", "Taco", "Pizza", "Nail", "What", "Nurse", "Dude", "Totally", "Sex", "Drunk", "Time", "Eyes"],
			q129: name1 + "!<br>You can ban any word! If anyone says that word for the rest of the game, they must drink 2 times.",
			q130: "Everyone drink!",
			q131: "Everyone drink!",
			q132: "Everyone drink!",
			q133: "Everyone drink!",
			q134: "Everyone drink!",
			q135: "Everyone drink!",
			q136: name1 + "!<br>You are now a sloth! Everything you do is in slow motion for the rest of the game!",
			q137: name1 + "!<br>You are now a chipmunk! You must talk in a high pitched voice for the rest of the game!",
			q138: "Not including " + name1 + ", go around the room and guess what their worst fear is. Drink 3 times if you are wrong.",
			q139: "On the count of three, everyone must point at someone who they think is most likely to get fired at a job. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q140: "On the count of three, everyone must point at someone who they think is most likely to get married first. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q141: "On the count of three, everyone must point at someone who they think is most likely to be on a reality tv show. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q142: name1 + "!<br>Fuck, Marry, Kill:<br>Mario, Luigi, Toad",
			q143: name1 + "!<br>Fuck, Marry, Kill:<br>Hermoine, Harry, Ron",
			q144: name1 + "!<br>Fuck, Marry, Kill:<br>Wolfman, Dracula, Frankenstein's Monster",
			q145: name1 + "!<br>Fuck, Marry, Kill:<br>Superman, Batman, Wonder Woman",
			q146: name1 + "!<br>Fuck, Marry, Kill:<br>Dog, Cat, Fish",
			q147: name1 + "!<br>Fuck, Marry, Kill:<br>Darth Vader, The Joker, The Green Goblin",
			q148: name1 + "!<br>Fuck, Marry, Kill:<br>Sonic The Hedgehog, Woody(Toy Story), Ash(Pokemon)",
			q149: "If you slept with someone for the wrong reasons, drink 4 times.",
			q150: "The last person to touch both your elbows together, drink 3 times.",
			q151: "Those who are a democrat, drink 2 times.",
			q152: "Those who are a republican, drink 2 times.",
			q153: "Those who are for the death penalty, drink 2 times.",
			q154: "Would you rather poop out of your ear or pee out of your nose? Everyone votes at the same time, and the losers drinks 2 times.",
			q155: "Would you rather have one arm or have one leg? Everyone votes at the same time, and the losers drinks 2 times.",
			q156: "Would you rather be blind or be deaf? Everyone votes at the same time, and the losers drinks 2 times.",
			q157: "Would you rather always be 10 minutes late or 20 minutes early? Everyone votes at the same time, and the losers drinks 2 times.",
			q158: "Would you rather see into the future or the past? Everyone votes at the same time, and the losers drinks 2 times.",
			q159: "Would you rather have to kill one child or three adults? Everyone votes at the same time, and the losers drinks 2 times.",
			q160: "Would you rather live without the internet or air conditioning/heating? Everyone votes at the same time, and the losers drinks 2 times.",
			q161: "Would you rather live in a room that is completely dark for a week or a room that is completely bright for a week? Everyone votes at the same time, and the losers drinks 2 times.",
			q162: "Would you rather be able to teleport or read minds? Everyone votes at the same time, and the losers drinks 2 times.",
			q163: "Would you rather have super strength or be able to fly? Everyone votes at the same time, and the losers drinks 2 times.",
			q164: "Would you rather control water or fire? Everyone votes at the same time, and the losers drinks 2 times.",
			q165: "Would you rather give up showering for a month or give up ther internet for a month? Everyone votes at the same time, and the losers drinks 2 times.",
			q166: "Would you rather live the same day for the rest of your life or never remember what you did the day before? Everyone votes at the same time, and the losers drinks 2 times.",
			q167: "Would you rather be good looking and stupid or ugly and smart? Everyone votes at the same time, and the losers drinks 2 times.",
			q168: "Would you rather never work again or never sleep again(without the health effect)? Everyone votes at the same time, and the losers drinks 2 times.",
			q169: "Would you rather have perfect night vision or see through things? Everyone votes at the same time, and the losers drinks 2 times.",
			q170: "Would you rather have sensitive hearing or sensitive sight? Everyone votes at the same time, and the losers drinks 2 times.",
			q171: "Would you rather be able to talk to animals or be an animal that can talk to humans? Everyone votes at the same time, and the losers drinks 2 times.",
			q172: "Would you rather only eat one thing for the rest of your life or only drink one thing for the rest of your life? Everyone votes at the same time, and the losers drinks 2 times.",
			q173: "Would you rather sing everything you say or say everything you read? Everyone votes at the same time, and the losers drinks 2 times.",
			q174: "Would you rather be in high school or college? Everyone votes at the same time, and the losers drinks 2 times.",
			q175: "For each year of school you had after high school, take a sip.",
			q176: "The next player that has to drink, gives out 3 sips.",
			q177: "Whoever does not have their license, finish your drink!",
			q178: "Whoever is the oldest, finish your drink!",
			q179: "Whoever is the youngest, finish your drink!",
			q180: "Whoever dated more than one person in this group, finish your drink!",
			q181: "Whoever killed an animal, finish your drink!",
			q182: "Whoever has a/an " + alphabet[randletter] + " in their name, finish your drink!",
			q183: "The player to the right of whoever is reading, drink 2 times.",
			q184: "The player to the left of whoever is reading, drink 2 times.",
			q185: "The next person to smile drinks 4 times.",
			q186: "Only children drink 5 times.",
			q187: "Anyone who did not want to play, drink 4 times.",
			q188: "The guy with the least amount of body hair drinks 4 times.",
			q189: "If you don't like South Park, drink 3 times.",
			q190: "If you don't like Future Diarys, drink 3 times.",
			q191: "If you don't like The Office, drink 3 times.",
			q192: "If you don't like It's Always Sunny In Philidelphia, drink 3 times.",
			q193: "If you don't like Spongebob, drink 3 times.",
			q194: "If you don't like Parks and Rec, drink 3 times.",
			q195: "If you don't like The Suit Life of Zach and Cody, drink 3 times.",
			q196: "If you don't like Game of Thrones, drink 3 times.",
			q197: "If you don't like Breaking Bad, drink 3 times.",
			q198: "If you don't like How I Met Your Mother, drink 3 times.",
			q199: "The first person to pull out a condom, give out 4 sips.",
			q200: "The first person to pull out a lighter, give out 4 sips.",
			q201: "The first person to pull out a sharpie, give out 3 sips.",
			q202: "The first person to pull out a vape, give out 3 sips.",
			q203: "The first person to pull out a tampon, give out 4 sips.",
			q204: "The first person to pull out headphones, give out 3 sips.",
			q205: "The first person to pull out a dollar in change, give out 4 sips.",
			q206: "Whoever can take off two pieces of clothing the fastest, give out 6 sips. The clothes must stay off for the remainder of the game. Yes that means everyone who tried!",
			q207: "Go around the room to name a show you are currently watching. If anyone is watching the same show, drink 4 times together.",
			q208: "Would you rather be a ninja or a pirate? Everyone votes at the same time, and the losers drinks 2 times.",
			q209: "Would you rather live during the upcoming of a civilization or the downfall? Everyone votes at the same time, and the losers drinks 2 times.",
			q210: "Would you rather live in the future or the past? Everyone votes at the same time, and the losers drinks 2 times.",
			q211: "Would you rather be captured by terrorists or aliens? Everyone votes at the same time, and the losers drinks 2 times.",
			q212: "Would you rather be stuck in an elevator or a ski lift? Everyone votes at the same time, and the losers drinks 2 times.",
			q213: "Would you rather be a super hero or villian? Everyone votes at the same time, and the losers drinks 2 times.",
			q214: "Starting with " + name1 + ", everyone must name something that gives good luck. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q215: "If you wear glasses, drink 2 times.",
			q216: "if anyone ran a 5k, drink 5 times.",
			q217: "Girls, drink your bra size (A = 1, B =2, etc)",
			q218: "If you can touch your nose with your tongue, give out 3 sips.",
			q219: "If you drank beer in the morning, drink 3 times.",
			q220: "If you are a girl and squatted outside to pee, drink 3 times.",
			q221: "The first person to find any white object, give out 4 sips",
			q222: "The first person to find any purple object, give out 4 sips.",
			q223: "The last person to have their feet on the ground drinks 3 times.",
			q224: "The next person to look at their phone, besides this one, drink 10 times.",
			q225: "If you can make a clover with your tongue, give out 4 sips.",
			q226: name1 + " and " + name2 + ", have a staring contest. The first person to blink drinks 4 times.",
			q227: "Anyone with a pack of cigarettes, take a sip per cigarette (max 8).",
			q228: "For anyone going to a club or bar after, finish your drink!",
			q229: name1 + "!<br> You can no longer hold your drink with your dominate hand until the end of the game. Drink 2 times for every mistake.",
			q230: "Go around the room to name the most recent movie you just watched. If anyone else watched the same movie, drink 4 times together.",
			q231: "If you ever compare your penis, or your partner's, with a friends.",
			q232: "Girls drink as many sips as there are handsome guys in the room.",
			q233: "Guys drink as many sips as there are beautiful girls in the room.",
			q234: "Bald people get to decide who will finish their drink!",
			q235: "If you are hearing someone read this sentence, drink 2 times.",
			q236: "If you ever ran away from home, drink 3 times.",
			q237: "If you ever got kicked out of your house by your parents, drink 3 times.",
			q238: "The first person to come up with an inspirational saying, gives out 2 sips.",
			q239: "If you ever did a strip tease, drink 3 times.",
			q240: "If you are single, give 2 sips to someone.",
			q241: "If you ever walked more than 30 minutes to get home after a night of drinking, drink 2 times.",
			q242: "The player with the biggest bill in their pocket, give out 3 sips",
			q243: "The player with the largest shoe size, give out 3 sips.",
			q244: "If you can't touch your toes while standing up, drink 2 times.",
			q245: "Girls choose a guy to take 4 sips.",
			q246: "Guys choose a girl to take 4 sips.",
			q247: "Whoever is the current DJ can give out 3 sips.",
			q248: "Whoever's phone is being used for this game, give out 3 sips.",
			q249: "Whoever is currently holding the phone/reading, can decide who finishes their drink!",
			q250: "If you ever called your partner by your exes name, give out 4 sips.",
			q251: "If you are in a relationship, you can give out 3 sips.",
			q252: "If youuhave blonde hair, drink 3 times.",
			q253: "If you have brown hair, drink 3 times.",
			q254: "If you have black hair, drink 3 times.",
			q255: "If you have red hair, drink 3 times.",
			q256: name1 + "!<br>Decide who the two people here would be the best couple. They both drink 2 times.",
			q257: "If an ex was the best time you had sex, drink 3 times.",
			q258: "The first person to upload a selfie on a social media can give out 8 sips. It must stay on until tomorrow.",
			q259: "If you have not been to the dentist for more than a year, drink 2 times.",
			q260: "Everyone drinks as many sips as there are screwable people in the room.",
			q261: "Each person has 3 bullets. At anytime you can shoot someone and that will have to drink 2 times! Be careful, you can't use the bullets once the game ends!",
			q261a: [name1 + " has just found 2 more additional bullets!",name1 + " has just found 3 more additional bullets!"],
			q262: "When the clock shows a multiple of ten (1:00, 1:10, 1:20, etc), the first person to shout 'Shit! I left my dolls on the stove!' can give out 10 sips!",
			q263: "If you ever tried to make a weapon, give out 2 sips.",
			q264: "Starting with " + name1 + ", everyone must name a halloween decoration. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q265: "Starting with " + name1 + ", everyone must name a different type of soda. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q266: "Starting with " + name1 + ", everyone must name a different type of beer. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q267: "Starting with " + name1 + ", everyone must name pleasent things to suck. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q268: name1 + " let " + name2 + " lick your face, any refusal is 2 sips.",
			q269: "If you own an xbox, give out 2 sips.",
			q270: "If you are part of the PC Master race, give out 2 sips.",
			q271: "Drink as many times as you peed today.",
			q272: name1 + ", drink 3 sips, then the neighbor to your right drinks one less, and so on until reaching 0.",
			q273: name1 + "!<br> For the next 5 minutes, you can tell anyone to do physical activity for 10 seconds, or they must drink 3 times.",
			q274: "Somebody gets a swirly or everyone drinks 5 times! Up to you to decide!",
			q275: "If it seems like you're drunk, drink 2 times.",
			q276: "Guys, the last one to take his shirt off drinks 3 times.",
			q277: "Girls, the last one to take your shirt off drinks 3 times.",
			q278: "The next player who has to drink will have to triple their number of drinks!",
			q279: "Whoever is hosting this event can give out 5 sips.",
			q280: "The next person who has to drink will have to double their number of drinks!",
			q281: "The last person to shout bitch must finish their drink!",
			q282: "The last person to shout penis must finish their drink!",
			q283: "if you took a crap today, drink 3 times.",
			q284: "If you ever masterbated while someone was in the same room, drink 3 times.",
			q285: "If you were ever caught watching porn, drink 3 times.",
			q286: "The first person to show their ass, gives out 3 sips.",
			q287: "If you ever broke a glass bottle on your head, drink 3 times.",
			q288: "If you have less than half of your drink left, finish it!",
			q289: "If you have more than half of your drink left, finish it!",
			q290: "If you ever took a crap in the woods, drink 3 times.",
			q291: "The person who gave the most recent blowjob gives out 3 sips.",
			q292: "The person who most recently had sex gives out 3 sips.",
			q293: "The first to burp can give out 2 sips.",
			q294: name1 + "!<br>You have 5 minutes to finish your drink!",
			q295: name1 + "!<br>For the next 5 minutes, you get to mix any two players drinks together and they can not refuse. You must take 2 sips out of it, too.",
			q296: "Starting with " + name1 + ",go around the room and spell the name of the person to your right. Those who fail drinks 2 times!",
			q297: name1 + " and " + name2 + " must take a picture together and post it on social media. No refusals!",
			q298: name1 + " get slapped by " + name2 + " or drink 4 times.",
			q299: name1 + ", sniff " + name2 + "'s armpits or drink 4 times.",
			q300: name1 + ", if you ever been to a festival without taking drugs, give out 4 sips. Otherwise, you have to drink them.",
			q301: "Would you rather have no feelings at all and live forever or live a full life but be eaten alive? Everyone votes at the same time, and the losers drinks 2 times.",
			q302: name1 + " and " + name2 + " must see who can spin in a circle the longest. The loser must drink 4 times.",
			q303: "if you were ever the cause of a car accident, drink 4 times.",
			q303a: ["An addition 4 if it was because of drunk driving."],
			q304: "Starting with " + name1 + ", everyone must name adjectives to describe a penis. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q305: name1 + ", pretend you are masterbating for 10 seconds while drinking 3 times.",
			q306: name1 + " must touch everyones junk, or drink 5 times.",
			q307: "At all times until the end of the game, you must have one hand on your crotch! If you take it off take a sip.",
			q308: name1 + "!<br>Pick a player who is tanner than you. They must drink 3 times, otherwise you drink them.",
			q309: "If you ever beat up someone, drink 3 times.",
			q310: "If you ever unrolled a condom inside out, then threw it out, drink 2 times.",
			q311: "Starting with " + name1 + ", they start singing a song, then points to someone and they must continue. This goes on until someone fails and drinks 3 times.",
			q312: name1 + "!<br>Stick a beer cap to your forehead, and if it sticks for 30 seconds, give out 3 sips. If it fails you take them.",
			q313: "Starting with " + name1 + ", name mutaul friends dumber than " + name2,
			q314: "If you ever made a move of a friends partner, drink 3 times.",
			q315: name1 + "!<br>Get slapped by everyone on the ass, or finish your drink!",
			q316: "If you ever played strip chess, drink 3 times. If you never heard of strip chess, drink 2 times.",
			q317: "Starting with " + name1 + ", everyone must name places where you have to be quiet. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q318: "Starting with " + name1 + ", everyone must name poop synonyms. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q319: "Starting with " + name1 + ", everyone must name ways to hide a body. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q320: name1 + "!<br>You are now pikachu! You can only speak pikachu for the rest of the game! Each mess up is 2 sips.",
			q321: name1 + "!<br>Have someone draw something on your arm or drink 5 times.",
			q322: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'miss' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q323: name1 + "!<br> You have to end every sentence with 'REEEEEE'.",
			q324: name1 + "!<br> Take a shot!",
			q325: "If you ahve a beard, drink 3 times.",
			q326: "If you don't have a beard, drink 3 times.",
			q327: "Starting with " + name1 + ", everyone must name a fetish of " + name2 + ". It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q328: "If you have less than 10 fingers, choose someone to finish their drink!",
			q329: "If you go to the gym, then ruin those gains by drinking 5 times!",
			q330: "If you ever ate something live, drink 3 times.",
			q331: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'help' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q332: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'desperate' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q333: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'fortnite' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q334: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'can't in the searchbar on your phone. Whoever loses drinks 3 times.",
			q335: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'won't in the searchbar on your phone. Whoever loses drinks 3 times.",
			q336: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'penis' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q337: name1 + "!<br> You have to end every sentence with 'croykey'.",
			q338: "Starting with " + name1 + ", everyone must name words that you can call your car but not your wife. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q339: "Starting with " + name1 + ", everyone must name a Kanye West Song. It ends once someone can't thing of anything or repeats someone. They then drink 3 times.",
			q340: name1 + "!<br>Pour 2 sips of beer on yourself or drink triple that!",
			q341: "If your name is John then finish your drink!",
			q342: "If your name is Hayley then finish your drink!",
			q343: "If your name is Robert then finish your drink!",
			q344: "Pick a designated speaker! They are the only one that gets to hold the phone/read the prompts, until the next game!",
			q345: "Whoever is reading this, finish your drink!",
			q346: "Whoever is reading this, finish your drink!",
			q347: "Whoever is reading this, swap drinks with someone else of your choosing!",
			q348: "Whoever is reading this, take a piece of clothing off!",
			q349: "Whoever is reading this, you get to change the song to whatever you want!",
			q350: "Whoever is reading this, congrats! You have a free pass to not do one thing in this and any future rounds!",
			q351: name1 + "!<br>Each sentence you say must only be 3 words each until the end of the game. Each mess up is 2 sips.",
			q352: name1 + "!<br>You get to change the song to whatever you want!",
			q353: "If you have been arrested, drink 3 times.",
			q354: "Last person to start screaming like a whale must drink 3 times.",
			q355: "If you are wearing a hat, drink 3 times.",
			q356: "If you prefer vanilla over chocolate, give out 4 sips.",
			q357: "If you ever went skinny dipping, drink 4 times.",
			q358: "If you ever were grinding in the woods without any music, drink 5 times.",
			q359: "The person with the biggest muscles and the person with the smallest muscles must drink 4 times.",
			q360: "If you ever had a threesome, drink 3 times.",
			q361:"If you have sent a nude in the past two days, drink 3 times.",
			q362:"",
			q363:"",
			q364:"",
			q365:"",
			q366:"",
			q367:"",
			q368:"",
			q369:"",
			q370:"",
			q371:"",
			q372:"",
			q373:"",
			q374:"",
			q375:"",
			q376:"",
			q377:"",
			q378:"",
			q379:"",
			q380:"",	
			q381:"",
			q382:"",
			q383:"",
			q384:"",
			q385:"",
			q386:"",
			q387:"",
			q388:"",
			q389:"",
			q390:"",
			q391:"",
			q392:"",
			q393:"",
			q394:"",
			q395:"",
			q396:"",
			q397:"",
			q398:"",
			q399:"",
			q400:"",
			q401:"",
			q402:"",
			q403:"",
			q404:"",
			q405:"",
			q406:"",
			q407:"",
			q408:"",
			q409:"",
			q410:"",			
        }
        
        return self;
    }