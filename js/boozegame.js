let boozelop = [];
let boozeloqs = [];
let boozenorounds = 1;
let roundcounter = 0;
let currentquestion;
let allquestions = [];
let onwhatround = 0;
let randq;
let explicit = false;
let listofas= ["q12","q71","q72","q73","q74","q78","q98","q128","q261","q303","q352","q508","q619"];
let listofrests = ["q637","q631","q633","q16","q42","q80","q84","q114","q124","q127","q129","q136","q137","q320","q515","q530","q563","q566","q574","q590","q113","q492","q307","q229","q128","q351","q344","q273","q379","q378","q443","q506"];
let listofthrees = ["q100","q101","q102","q103","q104","q105","q106","q107","q108","q109","q528","q531"];
let listofexpl = ["q639","q640","q641","q644","q647","q650","q651","q653","q632","q630","q629","q626","q627","q625","q623","q622","q610","q604","q581","q571","q569","q514","q513","q512","q510","q508","q507","q506","q505","q504","q487","q484","q483","q477","q407","q406","q405","q404","q403","q402","q396","q393","q360","q348","q336","q327","q316","q315","q310","q306","q305","q304","q292","q291","q286","q285","q284","q277","q276","q274","q260","q257","q231","q199","q1"];
//let randcelebs = ["Tony Hawk","Tina Fey", "Hulk Hogan", "Tyler Perry"]
let totalboozequestions = 661;

function startBoozeGame(vpWidth){

	
	if(document.getElementById('boozerounds').value =="" || document.getElementById('boozerounds').value<1){
		boozenorounds=40; 
	}else{
		boozenorounds = document.getElementById('boozerounds').value;
	}

	if(document.getElementById('boozep1').value =="" || document.getElementById('boozep2').value==""){
		document.getElementById('boozeerror').innerHTML = "You need at least two people to play!"; 			
		document.getElementById('boozeerror').style.color = 'white'; 	
		setTimeout(function(){ 
			document.getElementById('boozeerror').classList.add("whitetograyfading");
			setTimeout(function(){ 
				document.getElementById('boozeerror').innerHTML = "-"; 	
				document.getElementById('boozeerror').style.color = '#7d7d7d';  
				document.getElementById('boozeerror').classList.remove("whitetograyfading");	
			}, 2000);	
		}, 3000);
	}else{
				document.getElementById('boozeerror').innerHTML = "-"; 	
				document.getElementById('boozeerror').style.color = '#7d7d7d'; 		
		for(let i=0;i<12;i++){
			if(document.getElementById('boozep'+(i+1)).value != ""){
				boozelop.push(document.getElementById('boozep'+(i+1)).value);
			}
		}

		document.getElementById('boozeorlosegame').style.display = 'inline-block';
		document.getElementById('boozeorlosesettings').style.display = 'none';
		document.getElementById('gamechoices').style.display = 'none';
		document.getElementById('contentdiv').addEventListener('mousedown', nextBoozeQuestion, false);
		//document.getElementById('contentdiv').addEventListener('touchstart', nextBoozeQuestion, false);
		
		if(document.getElementById('explicitbox').checked == true){
			explicit = true;
		}
		else{
			explicit = false;
		}
		allquestions = [];
		roundcounter = 0;
		onwhatround = 0;
		if(vpWidth < 430){
			document.getElementById('header').style.display = 'none';
			document.getElementById('contacthome').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
		}
		if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
			document.getElementById('header').style.display = 'none';
			document.getElementById('contacthome').style.display = 'none';
			document.getElementById('footer').style.display = 'none';
		}

		let extraprompt = 0;
		let tallycounter = 0;
		while(tallycounter < boozenorounds){
			randq = "q" + (Math.floor(Math.random() * totalboozequestions) + 1);

			if(boozelop.length < 3){
				//
				let randp1 = Math.floor(Math.random() * boozelop.length);
				let randp2 = Math.floor(Math.random() * boozelop.length); 

				while(randp1 == randp2){
					randp2 = Math.floor(Math.random() * boozelop.length);
				}

				currentquestion=listOfBoozeQuestions(boozelop[randp1], boozelop[randp2]);

				if(listofthrees.includes(randq)){
					
				}else{
					///
					if(listofexpl.includes(randq)){
						if(explicit==true){
							////
							if(boozeloqs.includes(randq)){
								
							}
							else{
								/////

								while(allquestions[onwhatround] != null){
									onwhatround++;
								}
								
								allquestions[onwhatround] = currentquestion[randq];
								//allquestions.splice(onwhatround, 0, currentquestion[randq]);
								boozeloqs.push(randq);
								tallycounter++;
								onwhatround++;
								if(listofas.includes(randq)){

									while(allquestions[onwhatround] != null){
										onwhatround++;
									}
									extraprompt = Math.floor(Math.random() * currentquestion[randq + "a"].length);
									allquestions[onwhatround] = currentquestion[randq + "a"][extraprompt];
									//allquestions.splice(onwhatround, 0, currentquestion[randq + "a"][extraprompt]);
									onwhatround++;
								}
								if(listofrests.includes(ranq)){
									extraprompt = Math.floor(Math.random() * currentquestion[randq + "r"].length);
									randr = Math.floor(Math.random() * 10) + 5; 
									if(onwhatround+randr > boozenorounds){
										//boozeloqs.splice( boozeloqs.length, 0, boozeloqs[i]+"r");
										allquestions.splice(boozenorounds, 0, currentquestion[randq + "r"][extraprompt]);
									}else{
										
										//boozeloqs.splice(i+randr, 0, boozeloqs[i]+"r");
										if(allquestions[onwhatround+randr] == null){
											allquestions[onwhatround+randr] = currentquestion[randq + "r"][extraprompt];
										}else{
											allquestions.splice(onwhatround+randr, 0, currentquestion[randq + "r"][extraprompt]);
										}
									}

								}
							}
						}
					}else{
						if(boozeloqs.includes(randq)){
								
						}
						else{
							/////

							while(allquestions[onwhatround] != null){
								onwhatround++;
							}
							
							allquestions[onwhatround] = currentquestion[randq];
							//allquestions.splice(onwhatround, 0, currentquestion[randq]);
							boozeloqs.push(randq);
							tallycounter++;
							onwhatround++;
							if(listofas.includes(randq)){

								while(allquestions[onwhatround] != null){
									onwhatround++;
								}
								extraprompt = Math.floor(Math.random() * currentquestion[randq + "a"].length);
								allquestions[onwhatround] = currentquestion[randq + "a"][extraprompt];
								//allquestions.splice(onwhatround, 0, currentquestion[randq + "a"][extraprompt]);
								onwhatround++;
							}
							if(listofrests.includes(ranq)){
								extraprompt = Math.floor(Math.random() * currentquestion[randq + "r"].length);
								randr = Math.floor(Math.random() * 10) + 5; 
								if(onwhatround+randr > boozenorounds){
									//boozeloqs.splice( boozeloqs.length, 0, boozeloqs[i]+"r");
									allquestions.splice(boozenorounds, 0, currentquestion[randq + "r"][extraprompt]);
								}else{
									
									//boozeloqs.splice(i+randr, 0, boozeloqs[i]+"r");
									if(allquestions[onwhatround+randr] == null){
										allquestions[onwhatround+randr] = currentquestion[randq + "r"][extraprompt];
									}else{
										allquestions.splice(onwhatround+randr, 0, currentquestion[randq + "r"][extraprompt]);
									}
								}

							}
						}
					}

				}
			}else{
				//
				let randp1 = Math.floor(Math.random() * boozelop.length);
				let randp2 = Math.floor(Math.random() * boozelop.length); 			
				let randp3 = Math.floor(Math.random() * boozelop.length); 

				while(randp1 == randp2){
					randp2 = Math.floor(Math.random() * boozelop.length);
				}
				while(randp3 == randp2 || randp3 == randp1){
					randp3 = Math.floor(Math.random() * boozelop.length);
				}

				currentquestion=listOfBoozeQuestions(boozelop[randp1], boozelop[randp2], boozelop[randp3]);

				///
				if(listofexpl.includes(randq)){
					if(explicit==true){
						////
						if(boozeloqs.includes(randq)){
							
						}
						else{
							/////

							while(allquestions[onwhatround] != null){
								onwhatround++;
							}
							
							allquestions[onwhatround] = currentquestion[randq];
							//allquestions.splice(onwhatround, 0, currentquestion[randq]);
							boozeloqs.push(randq);
							tallycounter++;
							onwhatround++;
							if(listofas.includes(randq)){

								while(allquestions[onwhatround] != null){
									onwhatround++;
								}
								extraprompt = Math.floor(Math.random() * currentquestion[randq + "a"].length);
								allquestions[onwhatround] = currentquestion[randq + "a"][extraprompt];
								//allquestions.splice(onwhatround, 0, currentquestion[randq + "a"][extraprompt]);
								onwhatround++;
							}
							if(listofrests.includes(randq)){
								extraprompt = Math.floor(Math.random() * currentquestion[randq + "r"].length);
								randr = Math.floor(Math.random() * 10) + 5; 
								if(onwhatround+randr > boozenorounds){
									//boozeloqs.splice( boozeloqs.length, 0, boozeloqs[i]+"r");
									allquestions.splice(boozenorounds, 0, currentquestion[randq + "r"][extraprompt]);
								}else{
									
									//boozeloqs.splice(i+randr, 0, boozeloqs[i]+"r");
									if(allquestions[onwhatround+randr] == null){
										allquestions[onwhatround+randr] = currentquestion[randq + "r"][extraprompt];
									}else{
										allquestions.splice(onwhatround+randr, 0, currentquestion[randq + "r"][extraprompt]);
									}
								}

							}
						}
					}
				}else{
					if(boozeloqs.includes(randq)){
								
					}
					else{
						/////

						while(allquestions[onwhatround] != null){
							onwhatround++;
						}
						
						allquestions[onwhatround] = currentquestion[randq];
						//allquestions.splice(onwhatround, 0, currentquestion[randq]);
						boozeloqs.push(randq);
						tallycounter++;
						onwhatround++;
						if(listofas.includes(randq)){

							while(allquestions[onwhatround] != null){
								onwhatround++;
							}
							extraprompt = Math.floor(Math.random() * currentquestion[randq + "a"].length);
							allquestions[onwhatround] = currentquestion[randq + "a"][extraprompt];
							//allquestions.splice(onwhatround, 0, currentquestion[randq + "a"][extraprompt]);
							onwhatround++;
						}
						if(listofrests.includes(randq)){
							extraprompt = Math.floor(Math.random() * currentquestion[randq + "r"].length);
							randr = Math.floor(Math.random() * 10) + 7; 
							if(onwhatround+randr > boozenorounds){
								//boozeloqs.splice( boozeloqs.length, 0, boozeloqs[i]+"r");
								allquestions.splice(boozenorounds, 0, currentquestion[randq + "r"][extraprompt]);
							}else{
								
								//boozeloqs.splice(i+randr, 0, boozeloqs[i]+"r");
								if(allquestions[onwhatround+randr] == null){
									allquestions[onwhatround+randr] = currentquestion[randq + "r"][extraprompt];
								}else{
									allquestions.splice(onwhatround+randr, 0, currentquestion[randq + "r"][extraprompt]);
								}
							}

						}
					}
				}
			}
		}
	}
}

function nextBoozeQuestion(){

	if(roundcounter < allquestions.length){
		let bcolors=["#b81e38", "#a309a6", "#2067fa", "#05d3b0", "#0eb133", "#cce109", "#cf6a14"]; 
		let randcolor = Math.floor(Math.random() * bcolors.length); 

		document.getElementById('boozeqblock').innerHTML = allquestions[roundcounter];			
		document.getElementById('contentdiv').style.backgroundColor = bcolors[randcolor];
		
		
	}
	else if(roundcounter==allquestions.length){
		document.getElementById('boozeqblock').innerHTML = "Out of rounds! Click to play again!";
		document.getElementById('contentdiv').style.backgroundColor = '#3c3d3e';
		boozeloqs = [];
		allquestions = [];
	}else{
		document.getElementById('boozeorlosegame').style.display = 'none';
		document.getElementById('boozeorlosesettings').style.display = 'block';
		document.getElementById('gamechoices').style.display = 'inline-block';
		document.getElementById('contentdiv').addEventListener('mousedown', nextBoozeQuestion, false);
		document.getElementById('boozeqblock').innerHTML = "Welcome to Booze or Lose! The drinking game where you have no control! Just follow along with what the screen says to do and click for the next prompt. Refresh or go through all the prompts to start a new game. Have fun and be safe!";
		if(vpWidth < 430){
			document.getElementById('header').style.display = 'inline-block';
			document.getElementById('contacthome').style.display = 'inline-block';
			document.getElementById('footer').style.display = 'inline-block';
		}	
		if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
			document.getElementById('header').style.display = 'inline-block';
			document.getElementById('contacthome').style.display = 'inline-block';
			document.getElementById('footer').style.display = 'inline-block';
		}			
	}
	roundcounter++;
}

function printAllBooze(){
	currentquestion=listOfBoozeQuestions("Person 1", "Person 2", "Person 3");
	for(let i=0;i<totalboozequestions;i++){
		let forloopvar = "q"+(i+1);
		console.log((i+1) + ": " + currentquestion[forloopvar]);
	}
}

let listOfBoozeQuestions = function(name1,name2,name3){


		let randhol = Math.floor(Math.random() * 10)+1;	
		let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		let randletter = Math.floor(Math.random() * 26);	

        let self = {
			numofq:97,
            q1: "Take a piece of clothing off, anything on your feet or head to not count, or drink 3 times.",
			q2: name1 + " says a category, starting with them, go around the room and stop when someone hesitates or repeats a word relating to that category. The loser drinks 2 times.",
			q3: "Never Have I Ever!<br>Everyone put up three fingers, starting with " + name1 + " , they say something they never did. If you have you put a finger down, than drink 1 time. The game ends when someone reaches zero fingers.",
			q4: "All the guys drink.",
			q5: "All the girls drink.",
			q6: name1 + "! <br>Finish your drink!",
			q7: name1 + "! <br>What is the sexiest thing about the person to your left? Take 3 times to not answer.",
			q8: "Drink 3 times if you have ever stolen something worth more than $5. Take 1 sip is you have not.",
			q9: "If your birthday is in this month, give out as many times as the month. (January=1, February=2, etc...)",
			q10: "Starting with " + name1 + ", go around making animal noises, the person who can't say one or repeats, drinks 3 times!",
			q11: name1 + "! <br>Do a Fortnite dance for 5 seconds or drink 3 times.",
			q12: "Everyone think of a number between 1-5! Once everyone has thought of a number put them up at the same time, then click to continue while keeping your fingers up.",
			q12a: ["For each finger you have up, take a sip!", "If anyone chose the same number as you, you both drink 3 times.", "If you chose an even number, drink 3 times.", "If you chose an odd number, drink 3 times.","Choose a drinking buddy, you both add your fingers together and share that many times.","If you chose 5 fingers, give another person with 5 fingers a highfive. Everyone else drinks 2 times.If there are no other people with 5 fingers, drink 5 times."] ,
			q13: "Take a sip if you are single, and two times if you are dating someone",
			q14: name1 + "! <br>What is a secret that noone knows about you? Drink 3 times to not tell!",
			q15: "If you are not wearing shoes, drink 3 times.",
			q16: name1 + "! <br>Think of a name that everyone must call " + name2 + ". If anyone does not call them that name until told otherwise, drink 2 times.",
			q16r: ["You can stop calling " + name2 + " that name."],
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
			q42: "Life long partners! " + name1 + " and " + name2 + " will now drink together until told otherwise!",
			q42r: [name1 + " and " + name2 + " do not have to drink together anymore!"],
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
			q71a: ["You two must kiss!", "Hold hands for the next 3 minutes!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q72: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q72a: ["You two must kiss!", "Hold hands for the next 3 minutes!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q73: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q73a: ["You two must kiss!", "Hold hands for the next 3 minutes!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phone unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q74: name1 + "! <br> Pick someone in this room. Whoever refuses drinks 5 times. When you are ready click to continue to see what happens.",
			q74a: ["You two must kiss!", "Hold hands for the next 3 minutes!", "You both drink 5 times anyway!", "Some friend you are! They drink 1 sip, while you drink 5 times!", "You two must swap seats!", "Give each other your phones unlocked!", "Swap drinks! If you refuse this one, finish your drink you greedy bastard!", "You both drink together for the rest of the game" ],
			q75: name1 + "! <br>Read aloud, the last text message you sent. Drink 3 times to not read it. If you checked your phone first, then drink 5 times." ,
			q76: name1 + "! <br>You can not look at your phone for the rest of the game! Every time you do, drink 2 times. Does not include looking at this game." ,
			q77: "If anyone shares the same birthday, you all drink 3 times.",
			q78: "Everyone think of a number between 1-10. When you are ready, click to continue.",
			q78a: ["If you chose 1, then drink 3 times!","If you chose 2, then drink 3 times!","If you chose 3, then drink 3 times!","If you chose 4, then drink 3 times!","If you chose 5, then drink 3 times!","If you chose 6, then drink 3 times!","If you chose 7, then drink 3 times!","If you chose 8, then drink 3 times!","If you chose 9, then drink 3 times!","If you chose 10, then drink 3 times!"],
			q79: name1 + "!<br>Distribute drinks for the number of players.",
			q80: name1 + "!<br>You are now the group mule until told otherwise. If anyone needs something, you have to go get it. Drink 2 times per refusal.",
			q80r: [name1 + " can stop being the mule!"],
			q81: name1 + "!<br>Pick someone to finish their drink. You also finish half of yours.",
			q82: name1 + "!<br>Let " + name2 + " send a text to one of your exes or drink 6 times!",
			q83: name1 + "!<br>Attempt to do a handstand, or drink 3 times.",
			q84: name1 + "!<br>You can only talk in gibberish until told otherwise! Take a sip if you ever speak normally! Does not count when reading from this game.",
			q84r: [name1 + " can talk normally again!"],
			q85: name1 + "!<br>Make a fart noise from your armpit, or drink 3 times.",
			q86: name1 + "!<br>Do a successful cartwheel, or drink 3 times.",
			q87: name1 + " and " + name2 + "<br>Rock, Paper, Scissors to see who finishes their drink! Best out of 3!",
			q88: "Whoever has their birthday next gives out 4 sips.",
			q89: "The oldest person in the room gives out 4 sips.",
			q90: "The youngest person in the room gives out 4 sips.",
			q91: name1 + "!<br>If you are wearing shoes, take them off. If not drink 3 times.",
			q92: "If you use Internet Explorer, finish your drink!",
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
			q113: name1 + " can only talk with a different accent until told otherwise! Take a sip for each mess up!",
			q113r: [name1 + " speak with their regular accent again!"],
			q114: name1 + " can not use their thumbs for the rest of the game. Take a sip for each mess up!",
			q114r: [name1 + " can use their thumbs again!"],
			q115: "Starting with " + name1 + ", everyone must name a different color. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q116: "Starting with " + name1 + ", everyone must name a different football team. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q117: "Starting with " + name1 + ", everyone must name a different baseball team. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q118: "Starting with " + name1 + ", everyone must name a different hockey team. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q119: "Starting with " + name1 + ", everyone must name a different animal. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q120: "Starting with " + name1 + ", everyone must name a different type of car. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q121: "Starting with " + name1 + ", everyone must name a different type of breakfast food. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q122: name1 + "!<br>You must do 10 pushups. Take a sip for each uncompleted pushup.",
			q123: "The last person to stand up must drink 3 times.",
			q124: "If " + name1 + " says anyones name until told otherwise, they must take a sip.",
			q124r: [name1 + " can say everyones name again!"],
			q125: name1 + "!<br>Tell an interesting fact about yourself! You can not sip to get out of this one!",
			q126: name1 + "!<br>Think of a word, and starting to your left, start rhyming with that word. Whoever repeats or can't think of anything, must drink 3 times.",
			q127: name1 + "!<br> You can not speak until told otherwise! Finish your drink if you want to talk! You can speak only when needed with this game.",
			q127r: [name1 + " can now speak!"],
			q128: "DON'T SHOW ANYONE! Only you know the secret word. If anyone says this at anytime, you can tell them to drink. You never have to tell them the secret word until told otherwise. Click to see the word!",
			q128a: ["Food", "Joke", "Banana", "Make", "Soap", "Frat", "Table", "Friend", "Yeet", "Trump", "Racist", "Taco", "Pizza", "Nail", "What", "Nurse", "Dude", "Totally", "Sex", "Drunk", "Time", "Eyes"],
			q128r: ["The secret word was "],
			q129: name1 + "!<br>You can ban any word! If anyone says that word until told otherwise, they must drink 2 times.",
			q129r: [name1 + "'s word is unbanned!"],
			q130: "Everyone drink!",
			q131: "Everyone drink!",
			q132: "Everyone drink!",
			q133: "Everyone drink!",
			q134: "Everyone drink!",
			q135: "Everyone drink!",
			q136: name1 + "!<br>You are now a sloth! Everything you do is in slow motion until told otherwise!",
			q136r: [name1 + " can now move normal pace!"],
			q137: name1 + "!<br>You are now a chipmunk! You must talk in a high pitched voice until told otherwise!",
			q137r: [name1 + " can now talk normally!"],
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
			q165: "Would you rather give up shpwering for a month or give up ther internet for a month? Everyone votes at the same time, and the losers drinks 2 times.",
			q166: "Would you rather live the same day for the rest of your life or never remember what you did the day before? Everyone votes at the same time, and the losers drinks 2 times.",
			q167: "Would you rather be good looking and stupid or ugly and smart? Everyone votes at the same time, and the losers drinks 2 times.",
			q168: "Would you rather never work again or never sleep again(without the health effect)? Everyone votes at the same time, and the losers drinks 2 times.",
			q169: "Would you rather have perfect night vision or see through things? Everyone votes at the same time, and the losers drinks 2 times.",
			q170: "Would you rather have sensitive hearing or sensitive sight? Everyone votes at the same time, and the losers drinks 2 times.",
			q171: "Would you rather be able to talk to animals or be an animal that can talk to humans? Everyone votes at the same time, and the losers drinks 2 times.",
			q172: "Would you rather only eat one thing for the rest of your life or only drink one thing for the rest of your life? Everyone votes at the same time, and the losers drinks 2 times.",
			q173: "Would you rather sing everything you say or read aloud everything you read? Everyone votes at the same time, and the losers drinks 2 times.",
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
			q195: "If you don't like The Suite Life of Zach and Cody, drink 3 times.",
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
			q213: "Would you rather be in high school or college? Everyone votes at the same time, and the losers drinks 2 times.",
			q214: "Starting with " + name1 + ", everyone must name something that gives good luck. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q215: "If you wear glasses, drink 2 times.",
			q216: "If anyone ran a 5k, drink 5 times.",
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
			q229: name1 + "!<br> You can no longer hold your drink with your dominate hand until told otherwise! Drink 2 times for every mistake.",
			q229r: [name1 + " can drink with their dominate hang again!"],
			q230: "Go around the room to name the most recent movie you just watched. If anyone else watched the same movie, drink 4 times together.",
			q231: "If you ever compared your penis, or your partner's, with a friends, drink 3 times.",
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
			q249: "Whoever is currently holding the phone/reading, can decide who must drink 5 times!",
			q250: "If you ever called your partner by your exes name, give out 4 sips.",
			q251: "If you are in a relationship, you can give out 3 sips.",
			q252: "If you have blonde hair, drink 3 times.",
			q253: "If you have brown hair, drink 3 times.",
			q254: "If you have black hair, drink 3 times.",
			q255: "If you have red hair, drink 3 times.",
			q256: name1 + "!<br>Decide who the two people here would be the best couple. They both drink 2 times.",
			q257: "If an ex was the best time you had sex, drink 3 times.",
			q258: "The first person to upload a selfie on a social media can give out 6 sips. It must stay on until tomorrow.",
			q259: "If you have not been to the dentist for more than a year, drink 2 times.",
			q260: "Everyone drinks as many sips as there are screwable people in the room.",
			q261: "Each person has 3 bullets. At anytime you can shoot someone and that will have to drink 2 times! Be careful, you can't use the bullets once the game ends!",
			q261a: [name1 + " has just found 2 more additional bullets!",name1 + " has just found 3 more additional bullets!"],
			q262: "When the clock shows a multiple of ten (1:00, 1:10, 1:20, etc), the first person to shout 'Shit! I left my dolls on the stove!' can give out 10 sips!",
			q263: "If you ever tried to make a weapon, give out 2 sips.",
			q264: "Starting with " + name1 + ", everyone must name a halloween decoration. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q265: "Starting with " + name1 + ", everyone must name a different type of soda. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q266: "Starting with " + name1 + ", everyone must name a different type of beer. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q267: "Starting with " + name1 + ", everyone must name pleasent things to suck. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q268: name1 + " let " + name2 + " lick your face, any refusal is 2 sips.",
			q269: "If you own an xbox, give out 2 sips.",
			q270: "If you are part of the PC Master race, give out 2 sips.",
			q271: "Drink as many times as you peed today.",
			q272: name1 + ", drink 3 sips, then the neighbor to your right drinks one less, and so on until reaching 0.",
			q273: name1 + "!<br>Until told otherwise, you can tell anyone to do physical activity for 10 seconds, or they must drink 3 times.",
			q273: "You do not have to listen to " + name1 + " physical demands anymore!",
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
			q291: "The person who recieved the most recent blowjob gives out 3 sips.",
			q292: "The person who most recently had sex gives out 3 sips.",
			q293: "The first to burp can give out 2 sips.",
			q294: name1 + "!<br>You have 5 minutes to finish your drink!",
			q295: name1 + "!<br>You can choose two players to mix their drinks together. If you choose to mix them, you must drink 3 sips of each cup, and if you don't finish half of your drink!",
			q296: "Starting with " + name1 + ",go around the room and spell the last name of the person to your right. Those who fail drinks 2 times!",
			q297: name1 + " and " + name2 + " must take a picture together and post it on social media. No refusals!",
			q298: name1 + " get slapped by " + name2 + " or drink 4 times.",
			q299: name1 + ", sniff " + name2 + "'s armpits or drink 4 times.",
			q300: name1 + ", if you ever been to a festival without taking drugs, give out 4 sips. Otherwise, you have to drink them.",
			q301: "Would you rather have no feelings at all and live forever or live a full life but be eaten alive? Everyone votes at the same time, and the losers drinks 2 times.",
			q302: name1 + " and " + name2 + " must see who can spin in a circle the longest. The loser must drink 4 times.",
			q303: "If you were ever the cause of a car accident, drink 4 times.",
			q303a: ["An additional 4 if it was because of drunk driving."],
			q304: "Starting with " + name1 + ", everyone must name adjectives to describe a penis. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q305: name1 + ", pretend you are masterbating for 10 seconds while drinking 3 times.",
			q306: name1 + " must touch everyones junk, or drink 5 times.",
			q307: "Until told otherwise, you must have one hand on your crotch! If you take it off take a sip.",
			q307r: ["Everyone can take their hand off their crotch!"],
			q308: name1 + "!<br>Pick a player who is tanner than you. They must drink 3 times, otherwise you drink them.",
			q309: "If you ever beat up someone, drink 3 times.",
			q310: "If you ever unrolled a condom inside out, then threw it out, drink 2 times.",
			q311: "Starting with " + name1 + ", they start singing a song, then points to someone and they must continue. This goes on until someone fails and drinks 3 times.",
			q312: name1 + "!<br>Stick a beer cap to your forehead, and if it sticks for 30 seconds, give out 3 sips. If it fails you take them.",
			q313: "Starting with " + name1 + ", name mutaul friends dumber than " + name2,
			q314: "If you ever made a move on a friends partner, drink 3 times.",
			q315: name1 + "!<br>Get slapped by everyone on the ass, or finish your drink!",
			q316: "If you ever played strip chess, drink 3 times. If you never heard of strip chess, drink 2 times.",
			q317: "Starting with " + name1 + ", everyone must name places where you have to be quiet. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q318: "Starting with " + name1 + ", everyone must name poop synonyms. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q319: "Starting with " + name1 + ", everyone must name ways to hide a body. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q320: name1 + "!<br>You are now pikachu! You can only speak pikachu until told otherwise! Each mess up is 2 sips.",
			q320r: [name1 + " can now speak normally again!"],
			q321: name1 + "!<br>Have someone draw something on your arm or drink 5 times.",
			q322: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'miss' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q323: name1 + "!<br> You have to end every sentence with 'Over'. For each slip up, that's 2 sips.",
			q324: name1 + "!<br> Take a shot!",
			q325: "If you have a beard, drink 3 times.",
			q326: "If you don't have a beard, drink 3 times.",
			q327: "Starting with " + name1 + ", everyone must name a fetish of " + name2 + ". It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q328: "If you have less than 10 fingers, choose someone to finish their drink!",
			q329: "If you go to the gym, then ruin those gains by drinking 5 times!",
			q330: "If you ever ate something alive, drink 3 times.",
			q331: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'help' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q332: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'desperate' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q333: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'trouble' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q334: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'can't' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q335: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'won't' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q336: name1 + " and " + name2 + ", the first person to read out the first message displayed when you type 'penis' in the searchbar on your phone. Whoever loses drinks 3 times.",
			q337: name1 + "!<br> You have to end every sentence with 'croykey'.",
			q338: "Starting with " + name1 + ", everyone must name words that you can say about your car but not your wife. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q339: "Starting with " + name1 + ", everyone must name a Kanye West Song. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q340: name1 + "!<br>Pour 2 sips of beer on yourself or drink triple that!",
			q341: "If your name is Adam then finish your drink!",
			q342: "If you want the wall to be built, then finish your drink!",
			q343: "Whoever is reading this, take a piece of clothing off, or drink 5 sips!",
			q344: "Pick a designated speaker! They are the only one that gets to hold the phone/read the prompts, until told otherwise!",
			q344r: ["You can go back to passing the phone around!"],
			q345: "Whoever is reading this, finish your drink!",
			q346: "Whoever is reading this, finish your drink!",
			q347: "Whoever is reading this, swap drinks with someone else of your choosing!",
			q348: "Whoever is reading this, take a piece of clothing off, or drink 5 sips!",
			q349: "Whoever is reading this, you get to change the song to whatever you want!",
			q350: "Whoever is reading this, congrats! You have a free pass to not do one thing in this game!",
			q351: name1 + "!<br>Each sentence you say must only be 3 words each until told otherwise. Each mess up is 2 sips.",
			q351r: [name1 + "! can speak normally again!"],
			q352: name1 + "!<br>You get to change the song to whatever you want!",
			q352a: ["Those who hate the song must drink 3 times!"],
			q353: "If you have been arrested, drink 3 times.",
			q354: "Last person to start screaming like a whale must drink 3 times.",
			q355: "If you are wearing a hat, drink 3 times.",
			q356: "If you prefer vanilla over chocolate, give out 4 sips.",
			q357: "If you ever went skinny dipping, drink 4 times.",
			q358: "If you ever were grinding in the woods without any music, drink 5 times.",
			q359: "The person with the biggest muscles and the person with the smallest muscles must drink 2 times.",
			q360: "If you ever had a threesome, drink 3 times.",
			q361: "If you prefer dogs over cats, drink 2 times.",
			q362: "If you hate your job, drink for as many years as you worked there. If under a year, drink 1 sip.",
			q363: "If you make under $100,000 a year, drink 2 sips, peasants.",
			q364: name1 + " and " + name2 + " must swap an article of clothing!",
			q365: "Starting with " + name1 + ", everyone must name a different part of the body. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q366: "Starting with " + name1 + ", everyone must name something you would find in an office. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q367: "Starting with " + name1 + ", everyone must name something you would find under the sea. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q368: "Starting with " + name1 + ", everyone must name something you would find at the airport. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q369: "Starting with " + name1 + ", everyone must name a different curse word. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q370: "Starting with " + name1 + ", everyone must name a different videogame. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q371: "Starting with " + name1 + ", everyone must name a different social media app. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q372: "Starting with " + name1 + ", everyone must name a different genre of music. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q373: "Starting with " + name1 + ", everyone must name something you would see in a desert. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q374: "Not including " + name1 + ", go around the room and guess what their favorite movie is. Drink 3 times if you are wrong.",
			q375: "Not including " + name1 + ", go around the room and guess what their favorite TV Show is. Drink 3 times if you are wrong.",
			q376: "Not including " + name1 + ", go around the room and guess who their favorite person besides themselves is. Drink 3 times if you are wrong.",
			q377: "Starting with " + name1 + ", everyone must name a different spongebob character. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q378: name1 + "!<br>Until told otherwise, whenever you yell 'Hillshire Farms!', the first person to yell back 'Go Meat!' gets to give out 2 sips to someone other than you.",
			q378r: ["Everyone can stop yelling Go Meat!"],
			q379: name1 + "!<br>Until told otherwise, whenever you yell 'Red Robin', the first person to yell back 'Yummmm!' gets to give out 2 sips to someone other than you.",
			q379r: ["Everyone can stop yelling Yummmm!"],
			q380: "If you can't roll your tongue in a hotdog shape, drink 2 times.",
			q381: name1 + "!<br>Do a handstand for 3 seconds without pants, or drink 3 times",
			q382: name1 + "!<br>You must sit in your chair backwards until someone says your name!",
			q383: name1 + "!<br>Name something you like, and anyone who doesn't agree with you must drink 5 times, if everyone agrees than you drink 2 times.",
			q384: name1 + "!<br>Lick the ground or drink 4 times!",
			q385: "If you told a corny joke since the evening started, drink 3 times.",
			q386: name1 + "!<br>Call someone and insult them, or drink 3 times.",
			q387: name1 + "!<br>Drink as much as you want. " + name2 + " must drink double of what you did!",
			q388: "Would you rather start each day by giving yoursef a papercut between two fingers, or never have internet again? Everyone votes at the same time, and the losers drinks 2 times.",
			q389: name1 + "!<br>Give out 5 sips to the person you like the most!",
			q390: name1 + "!<br>Tell a joke. If you can't think of one or if nobody laughs, than drink 3 times.",
			q391: name1 + "!<br>Decide who has had the most pimples in their life. That person must drink 2 times.",
			q392: name1 + "!<br>Take one sip, then you decide if the person to your left or right drinks 2 times. Then continue that way while adding another sip per person, until " + name2 + " takes the final sips!",
			q393: "If your package is under 10 inches, drink 2 times. If you are a girl, drink also.",
			q394: "If you can touch your nose with your tongue, give out 4 sips.",
			q395: "If you like the current song playing, drink 2 times.",
			q396: "Starting with " + name1 + ", everyone must something that someone might enjoy in their ass. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q397: name1 + "!<br>Think of a word, " + name2 + " must sing a song with that word in it! If they cannot, they must drink 4 times, and the person to their left must try for them.",
			q398: name1 + "!<br>Think of a word, " + name2 + " must say a poem with that word in it! If they cannot, they must drink 4 times, and the person to their left must try for them.",
			q399: name1 + "!<br>Think of a word, " + name2 + " must say a haiku with that word in it! If they cannot, they must drink 4 times, and the person to their left must try for them.",
			q400: name1 + "!<br>Think of a word, " + name2 + " must come up with a story about that word! If they cannot, they must drink 4 times, and the person to their left must try for them.",
			q401: "If you ever saw something you did not want to see on a chat cam website, like chatroulette, drink 3 times.",
			q402: "If you ever paid for a hooker, drink 3 times.",
			q403: name1 + "!<br>Imitate a drunk dog barking and drink 3 times!",
			q404: "If you have ever done anal, drink 3 times.",
			q405: "Starting with " + name1 + ", everyone must name synonyms for the female chest. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q406: "Starting with " + name1 + ", everyone must name synonyms for the male genitalia. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q407: name1 + "!<br>Either finish your drink while pretending to masterbate, or make " + name2 + " finsih their drink by doing it to them.",
			q408: "Would you rather the person who killed your family be killed by the electric chair or by hanging? Everyone votes at the same time, and the losers drinks 2 times.",
			q409: "Would you rather your significant other cheat on you with one of your siblings, or your best friend? Everyone votes at the same time, and the losers drinks 2 times.",
			q410: "Would you rather be a baby and live forever or be super old and live forever? Everyone votes at the same time, and the losers drinks 2 times.",
			q411: "Would you rather be bald everywhere and a nudist, or have hair on ever inch of your body? Everyone votes at the same time, and the losers drinks 2 times.",
			q412: "Would you rather the tooth fairy or the east bunny to be real? Everyone votes at the same time, and the losers drinks 2 times.",
			q413: "Would you rather be in a medieval land or a technological land? Everyone votes at the same time, and the losers drinks 2 times.",
			q414: "Would you rather be eaten by one large hippo over 2 hours, or 10,000 small ants over 10 minutes? Everyone votes at the same time, and the losers drinks 2 times.",
			q415: "Would you rather have to save a child or elderly woman from a fire? Everyone votes at the same time, and the losers drinks 2 times.",
			q416: "Would you rather never eat again, or never drink again? Everyone votes at the same time, and the losers drinks 2 times.",
			q417: "Would you rather not be able to use your arms or legs? Everyone votes at the same time, and the losers drinks 2 times.",
			q418: "Would you rather be extremely over weight or extremely underweight? Everyone votes at the same time, and the losers drinks 2 times.",
			q419: name1 + "!<br>Close your eyes and try to guess the color of " + name2 + "'s shirt. If you get it right they drink 2 times, but if you get it wrong than drink 2 times.",
			q420: "Would you rather have 3 kids with no money, or no kids with 3 million dollars? Everyone votes at the same time, and the losers drinks 2 times.",
			q421: "Would you rather restart your life, or continue it? Everyone votes at the same time, and the losers drinks 2 times.",
			q422: "On the count of three, raise your hand if you are against vaccines. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q423: "Would you rather repeat the same 20 years of your life over and over, or live forever while everyone else still dies? Everyone votes at the same time, and the losers drinks 2 times.",
			q424: "Would you rather never speak again or always say what you are thinking? Everyone votes at the same time, and the losers drinks 2 times.",
			q425: "Would you rather tell a child santa isn't real or a tell a child his parents are dead? Everyone votes at the same time, and the losers drinks 2 times.",
			q426: "Would you rather know when you will die, or how you will die? Everyone votes at the same time, and the losers drinks 2 times.",
			q427: "Would you rather eat your dead friend or kill your dog and eat it, if you are marooned on an island? Everyone votes at the same time, and the losers drinks 2 times.",
			q428: "Would you rather be burned to death or drown? Everyone votes at the same time, and the losers drinks 2 times.",
			q429: name1 + "!<br>Put something edible in " + name2 + "'s drink. When they finish their drink they must eat it.",
			q430: "If you slept with 2 or more people in the same day, drink 3 times.",
			q431: name1 + "!<br>Either finish your drink or fill it to the top.",
			q432: "If you been in your current relationship for more than 3 years, tell someone to finish their drink.",
			q433: name1 + "!<br>Get blindfolded and someone will give you something to take a sip of. If you can guess what it is, give out 4 sips, otherwise drink 3 times.",
			q434: "Until told otherwise, if anyone says a curse word, someone must write it on their body.",
			q434r: ["You can now say curse words without being marked!"],
			q435: name1 + "!<br>Say a letter, then starting on your right, that player adds a letter. This continues until a word is made. Whoever made the word must drink 5 times.",
			q436: name1 + "!<br>Give 4 sips to the player to your left or your right.",
			q437: name1 + "!<br>Go into a corner by yourself. If anyone talks to you, you must only repond with 'I AM A BAD (BOY/GIRL)!'" ,
			q438: name1 + "!<br>If you are in public, give someone your number, tell them you have a lot of money, then walk away. If you refuse, finish your drink.",
			q439: name1 + "!<br>If you are in a bar or restaurant, ask the waiter for their number. If you refuse or don't get the number drink 4 times.",
			q440: name1 + "!<br>If you are in a bar or restaurant, decide who gets to buy your next drink!",
			q441: name1 + "!<br>If you are in public, get a stranger to say 'extra long' without saying any of the words yourself. If you get them to, give out 6 sips. If you can't, drink 4 times.",
			q442: name1 + "!<br>If you are in public, get a stranger to say 'hoagie' without saying any of the words yourself. If you get them to, give out 6 sips. If you can't, drink 4 times.",
			q443: name1 + "!<br>Until told otherwise, you must now stand on one leg! Each time that leg comes, drink 3 times.",
			q443r: name1 + " can finally put his leg down!",
			q444: "If you prefer piccolo over this game, finish your drink!",
			q445: "If you live here, drink 3 times.",
			q446: name1 + "!<br>If you are in public, get a stranger to say you are good looking without telling them directly. If you get them to, give out 6 sips. If you can't, drink 4 times.",
			q447: name1 + "!<br>If you are in public, get a stranger to say 'Steve Harvey' without saying any of the words yourself. If you get them to, give out 6 sips. If you can't, drink 4 times.",
			q448: name1 + "!<br>If you are in public, get a stranger to say 'Chicken Parm' without saying any of the words yourself. If you get them to, give out 6 sips. If you can't, drink 4 times.",
			q449: name1 + "!<br>If you are in public, give a stranger 4 chances to guess your first name. If they get it give out 6 sips.",
			q450: name1 + "!<br>If you are in public, get a stranger to say 'dark skin' without saying any of the words yourself. If you get them to, give out 6 sips. If you can't, drink 4 times.",
			q451: name1 + "!<br>If you are in public, get a stranger to take a picture of you on their phone. Then get them to send it to you. If you succeed, give our 6 sips. If not, drink 4 times.",
			q452: name1 + "!<br>If you are in a bar or restaurant, the next time you have to go to the bathroom, you must go to the bathroom of the opposite. If you do you can tell someone to finish their drink.",
			q453: name1 + "!<br>If you are in public, find someone named Tony. You have three tries, if you fail, drink 4 times.",
			q454: name1 + "!<br>If you are in public, go to the bathroom then leave with at least 3 pieces of toilet paper popping out of your pants or drink 5 times!",
			q455: name1 + "!<br>If you are in public, draw a cockroach wearing shorts. The group decides who you go up to and if they can guess what the drawing is within 3 guesses, give out 4 sips. Drink 4 times if they can't.",
			q456: name1 + "!<br>If you are in public, draw a dog pooping out a cat. The group decides who you go up to and if they can guess what the drawing is within 3 guesses, give out 4 sips. Drink 4 times if they can't.",
			q457: name1 + "!<br>If you are in public, draw a rave. The group decides who you go up to and if they can guess what the drawing is within 3 guesses, give out 4 sips. Drink 4 times if they can't.",
			q458: name1 + "!<br>If you are in public, draw a grandma in a mosh pit. The group decides who you go up to and if they can guess what the drawing is within 3 guesses, give out 4 sips. Drink 4 times if they can't.",
			q459: name1 + "!<br>If you are in public, draw yourself. The group decides who you go up to and if they can guess what the drawing is within 3 guesses, give out 4 sips. Drink 4 times if they can't.",
			q460: "If you ever got stood up on a date, give out 4 sips.",
			q461: name1 + "!<br>If you are in public, find someone to make out with you. If you do in front of the group, give out 10 sips!",
			q462: "Would you rather have a dog or a cat? Everyone votes at the same time, and the losers drinks 2 times.",
			q463: "If you are in greek life, drink 4 times.",
			q464: name1 + "!<br>If you shotgun a beer right now without stopping. You can make someone else chug a full beer!",
			q465: "If anyone can prove they can juggle, give out 4 sips.",
			q466: name1 + "!<br>Provide the group with a fun fact! Whoever did not know the fact, drink 3 times.",
			q467: name1 + "!<br>Start singing a Justin Beieber song, or drink 5 times.",
			q468: name1 + "!<br>Either finish a new drink, or convince everyone to finish theirs together.",
			q469: "Everyone swap drinks with the person to their left!",
			q470: "All the guys must flex. The girls decide who has the bigger muscles. Muscle head then drinks 3 times.",
			q471: "If you have any brothers, drink for as many as you have.",
			q472: "If you have any sisters, drink for as many as you have.",
			q473: "Starting with " + name1 + ", go around the room saying the alphabet really fast. If you finish, restart from the beginning. Whoever messes up drinks 5 times.",
			q474: name1 + "!<br>Start doing a dance. The first person to guess which dance you are doing, gets to give out 2 sips. You also get to give out 2 sips if they get it.",
			q475: "If you can legally unite people in marriage, give out 3 sips.",
			q476: "If you prefer the Wii over the Gamecube, drink 5 times.",
			q477: name1 + "!<br>If you have tinder, message your latest match 'You up? I'm looking to get the spanking of a lifetime tonight.', or finish your drink!",
			q478: name1 + "!<br>Message your crush, ':3 Hey there! W-would you like to go to dinner sometimes this week?? >_< *Awaits in fear of rejection, sweating* I-it's ok if you don't, I know you are very popular and busy...', or finish your drink!",
			q479: name1 + "!<br>Message someone in your phone, voted on by the group, 'OMG! You'll never guess what just happened!' , or take 5 sips!",
			q480: name1 + "!<br>Message someone in your phone, voted on by the group, 'AHHHHH. Don't tell anyone else, but I'm pregnant!' , or take 5 sips!",
			q481: name1 + "!<br>Message someone in your phone, voted on by the group, 'Dinner tomorrow?' , or take 5 sips!",
			q482: "If you ever worked in food service, drink 4 times.",
			q483: "If you ever ruined a pair of pants due to your time of the month, drink 3 times.",
			q484: name1 + "!<br>Lick " + name2 + "'s face, or drink 4 times.",
			q485: "If the clock shows an even number of minutes, everyone takes 2 sips, otherwise " + name1 + " gives out 3 sips.",
			q486: "If the clock shows an odd number of minutes, everyone takes 2 sips, otherwise " + name1 + " gives out 3 sips.",
			q487: name1 + "!<br>Go take off your panties and come back, finish your drink if you don't want to.",
			q488: "If you have ever made up a drinking game, drink 3 times.",
			q489: "If you are currently sick, drink 2 times.",
			q490: "If your first name is longer than your last name, drink 3 times!",
			q491: name1 + "!<br>Draw " + name2 + " a sweet tattoo on their arm!",
			q492: name1 + "!<br>You are now " + name2 + "'s chair! They must sit on you until told otherwise! Anytime either of you need to get up, you drink 3 times!",
			q492r: [name1 + " can go back to not being a chair!"],
			q493: name1 + "!<br>Explain why you are better than everyone here, or drink 5 times.",
			q494: "If you were not born in the state you are playing this game right now, drink 3 times.",
			q495: "If you were not born in America, give out 4 sips.",
			q496: name1 + "!<br>Say as much of the Pledge of Allegiance as you can.",
			q497: "The next person to get a new drink, finish half of it!",
			q498: "The next person to sneeze in this game, must drink 5 times.",
			q499: "The next person to stand up in this game, must drink 5 times.",
			q500: "This is question 500. It took me years to come up with all these questions, so as my last one, I'm making it the craziest one. Hello, my name is Robert Calamari and I am an ordained minister. Will " + name1 + " and " + name2 + " please stand up and face each other. Now by the power invested by me through the Universal Life Church, I now pronounce you two married! Congratulations. Both finish your drink.",
			q501: "People who aren't drinking hard alcohol, drink 2 times!",
			q502: "Starting with " + name1 + ", everyone must name things you can load. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q503: "Starting with " + name1 + ", everyone must name physical activities. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q504: name1 + "!<br>If you flash the group, " + name2 + " must drink 5 times. If you don't than you drink 2 times.",
			q505: "If you ever watched people have sex, drink 2 times.",
			q506: name1 + "!<br>Unless told otherwise, you can tell anyone to kiss you anywhere. If they don't than they must drink 3 times.",
			q506r: ["Everyone can now stop kissing " + name1 + "!"],
			q507: name1 + "!<br>Ask someone to give you a foot massage for 2 minutes. If they refuse, they must drink 3 times.",
			q508: "Everybody go around saying the ideal amount of sex they would want per week. Then click to continue.",
			q508a: ["People who said more than twice, drink 2 times. Everyone else just have one."],
			q509: name1 + "!<br>Give out 2 sips if you think you are good looking. If you think you are ugly then drink them.",
			q510: name1 + "!<br>Nibble on someones ear, or drink 3 times.",
			q511: "Anyone who has used a dating website, drink 2 times.",
			q512: "If you ever had the talk with your parents, drink 2 times.",
			q513: "The last person to have given a blowjob, give out 4 sips.",
			q514: "The girl with the biggest chest can either have somone lick their tits, or drink 5 times.",
			q515: name1 + "!<br>Until told otherwise, if you answer anyones questions, you must drink 3 times per answer.",
			q515r: [name1 + " does not have to answer anyones questions anymore!"],
			q516: "If your name is Adam then finish your drink!",
			q517: "If your name is Dave then finish your drink!",
			q518: "If your name is Max then finish your drink!",
			q519: "If your name is Sean then finish your drink!",
			q520: name1 + "!<br>What is the most illegal thing you have done!",
			q521: name1 + "!<br>Show everyone your 10th most recent photo you have in your phone, or drink 5 times.",
			q522: name1 + "!<br>Show everyone your last photo you have in your phone, or drink 5 times.",
			q523: name1 + "!<br>Show everyone your most recent photo you have in the recently deleted folder on your phone, or drink 5 times.",
			q524: name1 + "!<br>Put a sock in your mouth or drink 3 time!",
			q525: name1 + "!<br>Arm wrestle " + name2 + ". The loser must drink 2 times, or if you don't want to, then drink 3 times.",
			q526: "Starting with " + name1 + ", everyone must name something you bring camping. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q527: name1 + "!<br>If you are at a bar, take the worst shot, and everyone else will pay for it.",
			q528: name1 + "!<br>Who would survive the longest in a zombie apocolypse? " + name2 + " or " + name3 + "? That person must then drink 2 times.",
			q529: name1 + "!<br>Out of everyone here, who would be the first to get divorced? That person must drink 2 times.",
			q530: name1 + "!<br>Until told otherwise, whenever you shout a curse word, everyone must shout it back. The last person to must drink 3 times.",
			q530r: [name1 + " can curse without everyone having to repeat him."],
			q531: name1 + "!<br>Who do you think is better around children? " + name2 + " or " + name3 + "?",
			q532: name1 + "!<br>Out of everyone here, who would be the last person to get married? That person must drink 2 times.",
			q533: name1 + "!<br>Out of everyone here, who is the most likely to get fired at a job? That person must drink 2 times.",
			q534: "Starting with " + name1 + ", go around the room and repeat all the gestures that were done before. The first one to mess up drinks 3 times!",
			q535: "If you studied buisness or finance, drink 2 time!",
			q536: "If you studied IT or computer science, drink 2 time!",
			q537: "If you studied in the medical field, drink 2 time!",
			q538: "If you studied psychology, drink 2 time!",
			q539: "If you did not go to college, drink 2 time!",
			q540: name1 + "!<br>Out of everyone here, who is the most likely to go to jail? That person must drink 2 times.",
			q541: name1 + "!<br>Out of everyone here, who is the most likely to be president? That person must drink 2 times.",
			q542: name1 + "!<br>Out of everyone here, who is the most likely to have a child first? That person must drink 2 times.",
			q543: name1 + "!<br>Out of everyone here, who is the most likely to make something up to not hangout? That person must drink 2 times.",
			q544: name1 + "!<br>Out of everyone here, who is the most lazy? That person must drink 2 times.",
			q545: name1 + "!<br>Out of everyone here, who is the most slutty? That person must drink 2 times.",
			q546: name1 + "!<br>Out of everyone here, who is the angel of the group? That person must drink 2 times.",
			q547: name1 + "!<br>Out of everyone here, who has the worst hair? That person must drink 2 times.",
			q548: name1 + "!<br>Out of everyone here, who has the worst style? That person must drink 2 times.",
			q549: name1 + "!<br>Out of everyone here, who complains the most? That person must drink 2 times.",
			q550: name1 + "!<br>Out of everyone here, who is the funniest? That person must drink 2 times.",
			q551: name1 + "!<br>Out of everyone here, who is the hottest? That person must drink 2 times.",
			q552: name1 + "!<br>Out of everyone here, who is the ugliest? That person must drink 2 times. They can than choose someone to drink 3 times.",
			q553: name1 + "!<br>Out of everyone here, who is the least likely to care about the enviroment? That person must drink 2 times.",
			q554: name1 + "!<br>If you ever taught students, give out 2 sips, otherwise drink them.",
			q555: "Drink 3 times if you already used the bathroom since you started the night.",
			q556: name1 + "!<br>Give out as many sips as white clothes you are wearing!",
			q557: name1 + "!<br>Give out 3 sips to a player who has drank more than you, if you drank the most, drink them instead.",
			q558: name1 + "!<br>Ask " + name2 + " any question you want. They must answer or finish their drink.",
			q559: "The player to the right of whoever is reading this, give out 3 sips.",
			q560: "The player to the left of whoever is reading this, give out 3 sips.",
			q561: "Those who are shorter than " + name1 + " must drink 2 times.",
			q562: "Those who are taller than " + name1 + " must drink 2 times.",
			q563: "Until told otherwise, in order to speak to someone, they must answer a question you ask. If they want to talk they either have to answer the question or drink 3 times.",
			q563r: ["Everyone can speak to eachother normally now!"],
			q564: "If you ever taken dance classes, give out 2 sips.",
			q565: name1 + "!<br>Give out 3 sips to a player who has drank less than you, if you drank the least, drink them instead.",
			q566: name1 + "!<br>Until told otherwise, you must repeat every word you say twice. Drink 2 times per mess up.",
			q566r: [name1 + " does not have to repeat his words anymore!"],
			q567: "Between " + name1 + " and " + name2 + ", whoever has the bigger hands must drink 2 times.",
			q568: "Between " + name1 + " and " + name2 + ", whoever has the smaller hands must drink 2 times.",
			q569: "Drink 4 times if you ever pissed on someone.",
			q570: name1 + "!<br>If you can do 15 pushups without stopping, " + name2 + " must drink 3 times.",
			q571: "Drink 4 times if you ever pissed in a sink.",
			q572: "Drink 4 times if you ever peed in the shower.",
			q573: "If you ever started drinking before 10am, drink 4 times!",
			q574: "Until told otherwise, everyone must be extremely noisy whenever they are drinking!",
			q574r: ["Everyone does not have to be noisy when drinking anymore."],
			q575: name1 + "!<br>Choose someone to take two sips from your drink.",
			q576: name1 + "!<br>have someone write something on your forehead, or drink 4 times.",
			q577: "Drink 3 times if you ever sent a picture of your poop.",
			q578: "If you studied marketing, drink 2 time!",
			q579: "If you studied in the entertainment field, drink 2 time!",
			q580: "The person with the skinniest arms drinks 4 times!",
			q581: "If you ever hide your boner in the waistband of your pants, drink 3 times.",
			q582: name1 + "!<br>Drink 8 times while surrounded by everyone while they yell at you, or finsih your drink.",
			q583: "Between " + name1 + " and " + name2 + ", take turns yelling 'I am Stupid' at eachother, whoever laughs first must drink 3 times.",
			q584: "Between " + name1 + " and " + name2 + ", take turns insulting each other, whoever laughs first must drink 4 times.",
			q585: "Between " + name1 + " and " + name2 + ", take turns saying your mama jokes to eachother, whoever laughs first must drink 3 times.",
			q586: "Between " + name1 + " and " + name2 + ", take turns yelling at each other, whoever laughs first must drink 3 times.",
			q587: "Between " + name1 + " and " + name2 + ", take turns flirting with eachother, whoever laughs first must drink 3 times.",
			q588: "If you don't own a Ford, drink 2 times.",
			q589: name1 + "!<br>Finish the drink of a player of your choosing.",
			q590: name1 + "!<br>Until told otherwise, you must say the opposite of what you mean. Drink for everytime you mess up.",
			q590r: [name1 + " can speak what he means again!"],
			q591: name1 + "!<br>Show everyone your last 5 photos you have in your phone, or drink 5 times.",
			q592: "Everyone must decide who usually goes to sleep first before everyone else on a night. This person must drink 4 times.",
			q593: name1 + "!<br>Drink for as many pieces of furniture in this room.",
			q594: name1 + "!<br>Drink for as many paintings there are in this room.",
			q595: name1 + "!<br>Drink for as many computers there are in this room.",
			q596: name1 + "!<br>Put your pants on backwards, or drink 3 times.",
			q597: "If you ever stole money from your parents/relatives, drink 3 times.",
			q598: name1 + "!<br>Do 25 jumps, or drink 3 times.",
			q599: name1 + "!<br>Drink 3 sips without your bottle/cup touching your lips!",
			q600: "Drink 2 times if you ever put a mento in a coke bottle.",
			q601: "Starting with " + name1 + ", ask the person to your left, 'Truth or Dare'. If anyone refuses, drink 3 times.",
			q602: "Starting with " + name1 + ", everyone must name a different porn star. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q603: "If you ever held your breathe going into a bathroom, drink 2 times.",
			q604: "Starting with " + name1 + ", everyone must name a different bangable disney character. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q605: "Everyone must give their best pickup line to " + name1 + ". They then decide who had the best one, and they each give out 2 sips.",
			q606: name1 + "!<br>Sherades a movie of your choice. The first person to guess it correctly gives out 4 sips!",
			q607: name1 + "!<br>Draw a scene of a movie of your choice. The first person to guess it correctly gives out 4 sips!",
			q608: "Starting with " + name1 + ", everyone must name an electronic device. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q609: "Starting with " + name1 + ", everyone must name a hotel. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q610: "Starting with " + name1 + ", everyone must name a video category of a porn site. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q611: "Starting with " + name1 + ", everyone must name a professional wrestler. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q612: "Starting with " + name1 + ", everyone must name a different medication. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q613: "Starting with " + name1 + ", everyone must name a different disease. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q614: "Starting with " + name1 + ", everyone must name a different drug. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q615: "Starting with " + name1 + ", everyone must name ways to hide a body. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q616: "Starting with " + name1 + ", everyone must name different ways to work out. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q617: "Starting with " + name1 + ", everyone must name a different holiday. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q618: "Starting with " + name1 + ", they must burp and then be judged from the person to their left from 1-5. You take as many sips depending on what your score was.",
			q619: name1 + "!<br>Accuse " + name2 + "of something!",
			q619a: name3 + "!<br>You are " + name2 + "'s attorney. Defend him of his accusition! If everybody thinks he is guilty, then he drinks 5 times, otherwise, " + name1 + " drinks 5 times for slander!",
			q620: name1 + "!<br>Sniff someones shoe, or drink 5 times.",
			q621: "Drink 3 times if you ever re-swallowed your vomit.",
			q622: "Drink 4 times if you have nude pictures of your boyfriend or girlfriend.",
			q623: name1 + "!<br>Take a shit on the table, or drink 4 times.",
			q624: name1 + "!<br>Try to count to 50 before " + name2 + " can spin around 10 times. The loser must finish their drink!",
			q625: "Drink 2 times if you have ever regretted a hook up",
			q626: name1 + "!<br>Let " + name2 + " spit in your drink, or you both drink twice.",
			q627: name1 + "!<br>Let " + name2 + " put his finger in your drink, or you both drink twice.",
			q628: "If you went a week without changing your underwear, give out 6 sips.",
			q629: name1 + "!<br>Let " + name2 + " rip a piece of your clothing, or you both drink three times.",
			q630: "Drink 3 times if you ever participated in a golden shower.",
			q631: name1 + "!<br>You must keep dancing until told otherwise!",
			q631r: [name1 + " can now stop dancing!"],
			q632: "The person who masterbated the most recently can give out 2 sips.",
			q633: name1 + "!<br>You must lie on the floor until told otherwise!",
			q633r: [name1 + " can get off the floor!"],
			q634: "Drink 3 times if you ever talked to someone over the phone on the toilet.",
			q635: "Everone pour a little bit of your drink into " + name1 + "'s drink!",
			q636: name1 + "!<br>Out of everyone here, who has not reached puberty yet? That person must drink 2 times.",
			q637: name1 + "!<br>Whenever " + name2 + " is done talking, you must applaud them! If you forget, then drink 3 times.",
			q637r: [name1 + " can stop applauding now!"],
			q638: "One round of spin the bottle! Each player spins the bottle and must kiss the targeted player! Each refusal means you must dirnk 3 times!",
			q639: "If you like to play with your partners anus, drink 2 times.",
			q640: "If you ever had sex in public, drink 2 times.",
			q641: name1 + " and " + name2 + "!<br>Each of you tell your best sexual stories, and everyone else votes which one is better! The winner can give out 4 sips, and the loser drinks 2 times.",
			q642: name1 + "!<br>Drink as many sips as there are empty bottles/cans on the table.",
			q643: name1 + "!<br>Close your eyes! Guess how many empty bottles/cans are in this room. If you are close by +/- 5, then give out 5 sips.",
			q644: name1 + "!<br>Choose a player to unclip someones bra. If they can't do it within 5 seconds, they drink 5 times. No bras? Then drink anyway!",
			q645: name1 + "!<br>If you can successfully offer someone an icecube before the end of the game, they drink 4 times.",
			q646: name1 + "!<br>If you have ever been to the movie theater with " + name2 + ", then drink 3 times.",
			q647: "If you ever had a person of the same sex flirt with you, drink 3 times.",
			q648: "Starting with " + name1 + ", everyone must name different things policeman wear. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q649: "Starting with " + name1 + ", everyone must name different ways to get fired. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q650: "If you have ever role played, drink 3 times.",
			q651: "Starting with " + name1 + ", everyone must name different sex positions. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q652: "Starting with " + name1 + ", everyone must name things found at a circus. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q653: "Starting with " + name1 + ", everyone must name things found at the playboy mansion. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q654: "Starting with " + name1 + ", everyone must name different ways to get made fun of in school. It ends once someone can't think of anything or repeats someone. They then drink 3 times.",
			q655: name1 + " and " + name2 + "!<br>Each of you both do your best dance, and everyone else votes which one is better! The winner can give out 4 sips, and the loser drinks 2 times.",
			q656: name1 + " and " + name2 + "!<br>Each of you show the funniest picture on your phone, and everyone else votes which one is better! The winner can give out 4 sips, and the loser drinks 2 times.",
			q657: name1 + " and " + name2 + "!<br>Each of you do your best impression of " + name3 + ", and everyone else votes which one is better! The winner can give out 4 sips, and the loser drinks 2 times.",
			q658: name1 + " and " + name2 + "!<br>Each of you have a chugging competion! Whoever finishes their drink first can give out 5 sips.",
			q659: name1 + "!<br>If you can successfully shotgun a beer right now, you can tell someone to finish their drink!",
			q660: "On the count of three, everyone must point at someone who they think will die first. No discussing before hand! Whoever has the most votes must drink 3 times!",
			q661: "On the count of three, raise your hand if you are part of the Logang, otherwise keep it down if you are a Jake Pauler. If more than half of the people raised their hands, then whoever did not raise their hand must drinks 3 times. Otherwise whoever raised their hand drinks 3 times. If there's a tie, everyone drinks 3 times.",
			q662: name1 + "!<br>Go around the room, and play Duck! Duck! Goose! Whoever you say Goose on, must drink 3 times.",
			q663: "Everybody but " + name1 + " drink!",
			q664: "",
			q665: "",
			q666: "",
			q667: "",
			q668: "",
			q669: "",
			q670: "",
			q671: "",
			q672: "",
			q673: "",
			q674: "",
			q675: "",
			q676: "",
			q677: "",
			q678: "",
			q679: "",
			q680: "",
			q681: "",
			q682: "",
			q683: "",
			q684: "",
			q685: "",
			q686: "",
			q687: "",
			q688: "",
			q689: "",
			q690: "",
		
        } 
        
        return self;
    }