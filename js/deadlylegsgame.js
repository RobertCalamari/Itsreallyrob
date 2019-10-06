var onePagerDeadlyLegs = true;

//This opens and closes the change settings menu
function toggleDeadlyLegsPopUp(){
	if(document.getElementById('deadlylegsPopUp').style.display == 'none'){
		document.getElementById('deadlylegsPopUp').style.display = 'block';
	}else{
		document.getElementById('deadlylegsPopUp').style.display = 'none';
	}
}

function toggleDeadlyHowToPlay(){
	if(document.getElementById('deadlyhowtoplay').style.display == 'none'){
		document.getElementById('deadlyhowtoplay').style.display = 'block';
	}else{
		document.getElementById('deadlyhowtoplay').style.display = 'none';
	}
}

//Main funtion where game is created
function startDeadlyLegsGame(){
	//See which games were checked in settings
	document.getElementById('deadlylegsgame').innerHTML = "";
	var gameList = getCustomDeadlyLegsGames();

	document.getElementById('deadlylegsgame').style.display = 'inline-block';
	document.getElementById('deadlylegsappsettings').style.display = 'none';
	document.getElementById('gamechoices').style.display = 'none';
	document.body.scrollTop = document.documentElement.scrollTop = 0;


	var selectedGameFFA = randomizeGame(gameList, 0);
	var selectedGameSR = randomizeGame(gameList, 1);
	var selectedGameER = randomizeGame(gameList, 2);
	var selectedGameWR = randomizeGame(gameList, 3);
	var selectedGameLR = randomizeGame(gameList, 4);

	if(onePagerDeadlyLegs == true){
		document.getElementById('deadlylegsgame').innerHTML += ` Welcome to Eight Deadly Legs, the Game Show Drinking Game!<br>If you have not played before then please <button class='button2' onclick="toggleDeadlyHowToPlay()" style="margin-bottom: 37px; margin-top: 12px; padding-top: 1px; padding-bottom: 2px; padding-left: 4px; padding-right: 4px;">Click Here</button>
			<div id="deadlyhowtoplay" style="display:none;">
				<div style="max-width: 728px; text-align: justify;">This is the quick version of this game. All information on how to play will be shown below. Follow all text in order from top to bottom. <br><br> Before we start, please decide who is on what team, and assign teams by number (Ex. Team 1, Team 2, Team 3, Team 4). Also, make sure that you have cups, pong balls, quarters, shot glasses, and cards. Designate some item (Like a bottle caps, pencil, spoon, etc) as a pendant that you can give to the winning teams; You will need at most 6 of these. The game is played as followed: The games starts off with 2 Free For All games. All games are randomly selected so that each play through of Eight Deadly Legs is different. After the 2 Free For All Games, there might be a Surprise Round where it's a much faster Free For All game. Each win will reward that team with a Pendant. Pendants can be redeemed for small advantages in later rounds (See Below). The next section is the Elimination Round, where the top two teams will be selected to continue in the game. Those two teams with compete in 3 Winners Rounds, each allowing a chance to win a Pendant per round. The losers will get a chance to redeem themselves and participate in the Losers Round, where only one of them will be able to continue. However they will be stripped of all their Pendants. This will then bring us to the Final Round, The Eight Deadly Legs Challenge! Each team will only have 4 minutes to complete all 8 legs of the challenge. Teams go one at a time. Whoever has the best time, or if noone completed it in time, whoever made it the farthest wins! 
					<br><br>
				</div>
				<div style="max-width: 726px; text-align: justify; margin: auto;">
					Pendants can be used as followed:
					<br><br>
					<u>1 Pendant:</u>
					<ul style="font-size: 13px;">
						<il class="showbullets">Add 10 seconds to final round.</il>
						<il class="showbullets">Replace a card in higher/lower. If you don’t like a card you have in the higher/lower game, you can draw a new one from the deck.</il>
						<il class="showbullets">Allow only one teammate to do a whole leg in the Final Round. EX. If you don’t think you will bounce a quarter in a shot glass, you can allow it so your teammate bounces both of them. You can still jump in if you would like to give it a try though.</il>
					</ul> 
					<u>2 Pendant:</u>
					<ul style="font-size: 13px;">
						<il class="showbullets">Replace a leg with another game, but the game becomes as difficult as the level. Ex. If you hate cup stack, but like beer pong, you can replace 6 Cup Stacks with 6 Cup Beer Pong. Or if you have the 2 Quarter Bounces game, then you can make that 2 Cup Flip Cup. However, you are not allowed to change leg 8.</il>
					</ul> 
				</div>
			</div>

			<br/><br/>
			<div style="max-width: 559px; margin: auto; text-align: left;">
				<div class="deadlygamefontheader">Free For All Round 1!</div><br>
				The first game is <div class="bigboldname">` + selectedGameFFA[0][0] + `</div>!
				<br><br><b>Game rules:</b><br>` + selectedGameFFA[0][1] + `
				<br><br>
				Make sure to give the winning team a Pendant!
				<br><br><br>

				<div class="deadlygamefontheader">Free For All Round 2!</div><br>
				The second game is <div class="bigboldname">` + selectedGameFFA[1][0] + `</div>!
				<br><br><b>Game rules:</b><br>` + selectedGameFFA[1][1] + `
				<br><br>
				Make sure to give the winning team a Pendant!
				<br><br><br>

				` + surpriseRoundCheck(selectedGameSR) + `

				<div class="deadlygamefontheader">Elimination Round!</div><br>
				The elimination game is <div class="bigboldname">` + selectedGameER[0] + `</div>!
				<br><br><b>Game rules:</b><br>For the Elimination Round, the games will be tournament style. If you do not know how to make a bracket, you can go <a href="https://challonge.com/tournament/bracket_generator" target="_blank">HERE</a>. The first and second place teams will then continue to the Winners Rounds.
					<br><br>
					  ` + selectedGameER[1] + `
				<br><br><br>

				<div class="deadlygamefontheader">Winners Round 1!</div><br>
				The first winners game is <div class="bigboldname">` + selectedGameWR[0][0] + `</div>!
				<br><br><b>Game rules:</b><br>` + selectedGameWR[0][1] + `
				<br><br>
				Make sure to give the winning team a Pendant!
				<br><br><br>

				<div class="deadlygamefontheader">Winners Round 2!</div><br>
				The second winners game is <div class="bigboldname">` + selectedGameWR[1][0] + `</div>!
				<br><br><b>Game rules:</b><br>` + selectedGameWR[1][1] + `
				<br><br>
				Make sure to give the winning team a Pendant!
				<br><br><br>

				<div class="deadlygamefontheader">Winners Round 3!</div><br>
				The third winners game is <div class="bigboldname">` + selectedGameWR[2][0] + `</div>!
				<br><br><b>Game rules:</b><br>` + selectedGameWR[2][1] + `
				<br><br>
				Make sure to give the winning team a Pendant!
				<br><br><br>

				<div class="deadlygamefontheader">Losers Round!</div><br>
				The losers elimination game is <div class="bigboldname">` + selectedGameLR[0] + `</div>!
				<br><br><b>Game rules:</b><br>For the Losers Elimination Round, the games will be tournament style. If you do not know how to make a bracket, you can go <a href="https://challonge.com/tournament/bracket_generator" target="_blank">HERE</a>. In this tournament, only one winner will be selected. Once they have won, you can continue to the Final Round.
				<br><br>
				` + selectedGameLR[1] + `
				<br><br><br>

				<div class="deadlygamefontheader">Final Round</div><br>
				The Final Round  will consist of three teams participating in the Eight Deadly Legs Challenge. The first place player from the Elimination Round will go first, followed by the second place player, and then the winner from the Losers Elimination Round. Each team will have 5 minutes to complete as many legs as they can get through. They are allowed to use Pendants whenever they like. Here is how to set up the table:
					<br>
					<div style="margin: auto;text-align: center;">
						<img class="" src="../img/pongtablelayout.jpg" style="margin: auto;max-width: 333px;padding-top: 16px;" alt="">
					</div>
					<br>
					Here is the order you must go through.<br>
					<ul style="font-size: 13px;">
						<il class="showbullets">1 Cup Beer Pong<br>Player A must shoot the ball into the cup and then Player B drinks it.</il>
						<il class="showbullets">2 Quarter Bounces<br>Player A must bounce a quarter into a shot glass, and then Player B must do the same.</il>
						<il class="showbullets">3 Cup Beer Pong<br>Each player will take turns shooting until all three cups are made. The player that made it in must drink the cup.</il>
						<il class="showbullets">4 Cup Flip Cup<br>Player A must drink then flip a cup over. Then Player B must do the same. Then Player A goes again, followed by Player B.</il>
						<il class="showbullets">5 Card Higher/Lower<br>Player A must correctly guess if the next card is higher or lower than the last one. If he is wrong then Player B starts it over with new cards. This continues until one of them get it. Each time a player is wrong they drink.</il>
						<il class="showbullets">6 Cup Stacks<br>There will be 6 cups in front of the players. Player A must drink all 6 cups and once they are done with all of them, Player B has to make a pyramid with all 6 of them.</il>
						<il class="showbullets">7 Cup Ball Bounce<br>There will be 7 cups in front of the players. Player A must bounce a ball into the first cup. After he does that he passes the ball to Player B and drinks the cup he made. After Player B makes his cup, the ball goes back to Player A and this continues until all 7 cups are done</il>
						<il class="showbullets">Beer Chug<br>The players have one beer can in front of them and they must finish it however they like. One player may finish it or it can be split between the two of them.</il>
					</ul> 



			</div>

			`;





	}
	// //Print all games that were checked
	// for(var i in gameList){
		
	// 		for(var k in gameList[i]){
	// 			if(k == 0){
	// 				document.getElementById('deadlylegsgame').innerHTML += "<br/>" + gameList[i][0] + " Games:<br/>";
	// 			}else{
	// 				document.getElementById('deadlylegsgame').innerHTML +=  gameList[i][k][0] + "<br/>";
	// 			}
	// 		}
		
	// }	
}

function randomizeGame(gameList, section){
	if(section == 0){
		if(document.getElementById('repeatablegames').checked || gameList[section].length < 3){
			var firstrandom = Math.floor(Math.random() * gameList[section].length);
			if(firstrandom == 0){
				firstrandom = 1;
			}
			var secondrandom = Math.floor(Math.random() * gameList[section].length);
			if(secondrandom == 0){
				secondrandom = 1;
			}
		}else{
			var firstrandom = Math.floor(Math.random() * gameList[section].length);
			if(firstrandom == 0){
				firstrandom = 1;
			}
			var secondrandom = Math.floor(Math.random() * gameList[section].length);
			if(secondrandom == 0){
					secondrandom = 1;
				}
			while(secondrandom == firstrandom){
				var secondrandom = Math.floor(Math.random() * gameList[section].length);
				if(secondrandom == 0){
					secondrandom = 1;
				}
			}
		}
		return [gameList[section][firstrandom],gameList[section][secondrandom]];
	}else if(section == 1 || section == 2 || section == 4){
		
			var firstrandom = Math.floor(Math.random() * gameList[section].length);
			if(firstrandom == 0){
				firstrandom = 1;
			}
		
		return gameList[section][firstrandom];
	}else if(section == 3){
		if(document.getElementById('repeatablegames').checked || gameList[section].length < 4){
			var firstrandom = Math.floor(Math.random() * gameList[section].length);
			if(firstrandom == 0){
				firstrandom = 1;
			}
			var secondrandom = Math.floor(Math.random() * gameList[section].length);
			if(secondrandom == 0){
				secondrandom = 1;
			}
			var thirdrandom = Math.floor(Math.random() * gameList[section].length);
			if(thirdrandom == 0){
				thirdrandom = 1;
			}
		}else{
			var firstrandom = Math.floor(Math.random() * gameList[section].length);
			if(firstrandom == 0){
				firstrandom = 1;
			}
			var secondrandom = Math.floor(Math.random() * gameList[section].length);
			if(secondrandom == 0){
				secondrandom = 1;
			}
			while(secondrandom == firstrandom){
				var secondrandom = Math.floor(Math.random() * gameList[section].length);
				if(secondrandom == 0){
					secondrandom = 1;
				}
			}
			var thirdrandom = Math.floor(Math.random() * gameList[section].length);
			if(thirdrandom == 0){
				thirdrandom = 1;
			}
			while(thirdrandom == firstrandom || thirdrandom == secondrandom){
				var thirdrandom = Math.floor(Math.random() * gameList[section].length);
				if(thirdrandom == 0){
					thirdrandom = 1;
				}
			}
		}
		return [gameList[section][firstrandom],gameList[section][secondrandom],gameList[section][thirdrandom]];
	}
	
}

function surpriseRoundCheck(selectedGameSR){
	var randnum = Math.floor(Math.random() * 100);
	if(randnum >= 75){
		return `
			<div class="deadlygamefontheader">Surprise Round!</div><br>
			The surprise game is <b>` + selectedGameSR[0] + `</b>!
			<br><br><b>Game rules:</b><br>` + selectedGameSR[1] + `
			<br><br>
			Make sure to give the winning team a Pendant!
			<br><br><br>
		`;
	}else{
		return "";
	}
}

function getCustomDeadlyLegsGames(){
	var ffaActiveGames = ["Free For All"];
	var srActiveGames = ["Speed Round"];
	var erActiveGames = ["Elimination Round"];
	var wrActiveGames = ["Winners Round"];
	var lrActiveGames = ["Losers Round"];
	if(document.getElementById('ffaflipcup').checked){
		ffaActiveGames[ffaActiveGames.length] = ["Flip Cup","Each player has <b>3 cups</b>. Each cup represents a life. Everyone will drink and flip 1 cup at the same time. You only have 1 try. If you miss the flip get rid of your empty cup, but if you secure the flip then refill your empty cup. If you run out of all three cups you lose. Last team alive wins."];
	}
	if(document.getElementById('ffastackcup').checked){
		ffaActiveGames[ffaActiveGames.length] = ["Stack Cup","There are a bunch of cups in the middle of the table, and <b>two empty cups with a ball on both sides of the table.</b> You need to bounce the ball in your cup. If you do then you can move the ball and cup to the person to your right. If you bounce it on the first try, you can hand the ball and cup to anyone at the table. However, if the person to your left has the cup and bounces it in before you bounce yours in, they must stack their cup into yours. You then pass the stacked cups and ball to your right and take a cup from the pile in the middle. <b>You are now out and must drink it and then give the cup and ball to your partner if they’re still in. If they are not then you can give it to anyone you want.</b> This continues until all the cups are gone or all players are out but 1. There is one cup filled to the top in the middle as well. Also if you bounce the ball into a middle cup, you must drink that cup and stack it on your own cup. You still keep going. All the remaining teams that are alive once it is over wins."];
	}
	if(document.getElementById('ffaneverhaveiever').checked){
		ffaActiveGames[ffaActiveGames.length] = ["Never Have I Ever","Each player has three fingers up. You go around saying “Never Have I ever…” and something you’ve never done before. Any player that has done it, puts a finger down and takes a drink. If all three of your fingers are down, then you are out. Last team alive wins."];
	}
	if(document.getElementById('ffabscardgame').checked){
		ffaActiveGames[ffaActiveGames.length] = ["BS Card Game","Each player gets an even amount of cards. The player with the two of clubs put it in the middle. And also any more 2’s they have face down on the pile and say how many you put and of what. The next player 3, then 4, etc. If you do not have the correct card then you must lie. <b>If you suspect someone of lying, you can call bullshit, however if you are wrong then you are out of the game, but if you are correct then they are out of the game.</b> Whoever is removed from the game must divvy up their cards to the remaining players."];
	}
	if(document.getElementById('ffabeerchug').checked){
		ffaActiveGames[ffaActiveGames.length] = ["Beer Chug","Each player has a can of beer upside down in front of them. The first player to finish it wins. However, <b>you can only use your non dominant hand the whole time.</b>"];
	}

	if(document.getElementById('srflipcup').checked){
		srActiveGames[srActiveGames.length] = ["Flip Cup","Each player has <b>1 cup</b>. Each cup represents a life. Everyone will drink and flip 1 cup at the same time. You only have 1 try. If you miss the flip get rid of your empty cup and you lose, but if you secure the flip then refill your empty cup. Last team alive wins."];
	}
	if(document.getElementById('srstackcup').checked){
		srActiveGames[srActiveGames.length] = ["Stack Cup","There are a bunch of cups in the middle of the table, and <b>three empty cups with a ball three both sides of the table.</b> You need to bounce the ball in your cup. If you do then you can move the ball and cup to the person to your right. If you bounce it on the first try, you can hand the ball and cup to anyone at the table. However, if the person to your left has the cup and bounces it in before you bounce yours in, they must stack their cup into yours. You then pass the stacked cups and ball to your right and take a cup from the pile in the middle. <b>You are now out and must drink it and then give the cup and ball to your partner if they’re still in. If they are not then you can give it to anyone you want.</b> This continues until all the cups are gone or all players are out but 1. There is one cup filled to the top in the middle as well. Also if you bounce the ball into a middle cup, you must drink that cup and stack it on your own cup. You still keep going. All the remaining teams that are alive once it is over wins."];
	}
	if(document.getElementById('srmemory').checked){
		srActiveGames[srActiveGames.length] = ["Memorization","A sequence will be shown or said and everyone has 15 seconds to memorize it. Everyone at the same time will then write down what they think will come next. The ones that are wrong are out. The last one that survives wins."];
	}
	if(document.getElementById('srhigherlower').checked){
		srActiveGames[srActiveGames.length] = ["Higher/Lower","One card is shown to all the players, and they will individually guess if the next card will be higher or lower. If they get it wrong, they are out and must drink. If the new card is the same as the last one, everyone must drink, but noone is out. Just draw another card. Last person standing wins."];
	}
	if(document.getElementById('srbeerchug').checked){
		srActiveGames[srActiveGames.length] = ["Beer Chug","Each player has a can of beer upside down in front of them. The first player to finish it wins. However, you can only use your non dominant hand the whole time."];
	}

	if(document.getElementById('erflipcup').checked){
		erActiveGames[erActiveGames.length] = ["Flip Cup","Each team will have 4 cups in front of them, 2 cups per person. On the count of three, both teams have the first person begins, and they must drink what's in the cup and then place the cup on the edge of the table and try to flip it onto the other edge. Once they do this, their other partner can start. This continues until one team flips all their cups, then they win."];
	}
	if(document.getElementById('erbeerpong').checked){
		erActiveGames[erActiveGames.length] = ["Beer Pong","Each team will either has 6 or 10 cups in front of them; have everyone decide which one you want to play. Game starts with eye-for-eye, deciding who goes first. Each team starts with one player from their team shooting both balls on their turn trying to get it in the cups. If the ball lands in a cup, that cup is taken away. If two balls land in the same cup, an additional cup is taken away. If a player gets two balls in a row, they get them back. If playing 10 cups, two reracks are allowed, otherwise it's only one. You can only rerack in the beginning of a turn. No Bounce backs, heating up, electricity, flicking or blowing ball out, or knocking over cups (if this happens, just refill the cup). Islands and bouncing (but the other team can block those) are allowed. If there is one last cup on the opposing team and only one ball is made into that cup than the opposing team gets to go again one last time for redemption. If the opposing team fails to make all of their cups than they lose. In redemption, each player gets one shot, but keeps shooting if they make it."];
	}
	if(document.getElementById('erbeerball').checked){
		erActiveGames[erActiveGames.length] = ["Beer Ball","Each player has a can of beer starting upside down in their corner of the table (about half an inch from the edge).You can not push down the tab or take the tab off. Each player takes turns trying to hit either opposing teams can. If you hit the can, the players whose can you hit must take the ball and say stop with the ball touching the table. The second player on the team is allowed to get the ball and give it to the player who must say stop. Then the opposite team goes. You can guard the can by hovering your hands around it (NOT IN FRONT), but can not touch the can. If the can falls over on its side on the table, or off the table completely, you must start with a new beer flipped upside down. If you think that you are out of beer you can say it, and there will be a check by pouring it into a bottle cap. If it overflows, then you must restart with a new beer. If it does not overflow then you are out, and your teammate moves his can into the middle of the table and he must finish their drink and be out to win. First team with both beers emptied wins."];
	}
	if(document.getElementById('ertrivia').checked){
		erActiveGames[erActiveGames.length] = ["Trivia","This is how to play the game."];
	}

	if(document.getElementById('wrcanflicker').checked){
		wrActiveGames[wrActiveGames.length] = ["Can Flicker","Take a can, either full or empty (as long as it’s opened with the tab on it), and whoever was in first in the elimination round gets to go first. Take turns flicking the tab of the can, and whoever flicks it off wins."];
	}
	if(document.getElementById('wr3cuppong').checked){
		wrActiveGames[wrActiveGames.length] = ["3 Cup Pong","Each team will have three cups in front of them. Whoever won the elimination round gets to go first. Each player will each shoot one ball per round. If both players make it, they get the ball back. There is no heating up, electricity, flicking or blowing the ball out, knocking the cup over (results in refilling the cup), islands, reracks, or bounce backs. You can bounce the ball, but the other team can smack it away then. "];
	}
	if(document.getElementById('wrairplanemaking').checked){
		wrActiveGames[wrActiveGames.length] = ["Airplane Making","Designate an area that is about 3ft by 3ft (Any size will do, but make sure its marked). Standing away, about 20 ft, the two teams will start. On the count of three, one player from each team will start to make a paper airplane and have to land it within that marked area. After the first player goes, the second player may begin making their airplane. This continues until one team gets two airplanes in the area."];
	}
	if(document.getElementById('wrbeerball').checked){
		wrActiveGames[wrActiveGames.length] = ["Beer Ball","Each team will have 1 can of beer on their side of the table flipped top down. You can either have one player be designated drinker, or you both can drink from the same can. The first place team from the elimination round goes first. To start, the beginning team tries to hit the other players can. If they do, the drinker flips the beer, opens it, and starts drinking until the other team gets the ball and puts it on the table while saying stop. Then the next team will do the same. You keep swapping players when it is your turn to throw again. If you're the designated drinker, and it's your turn to throw, you just have to make sure you are fast enough. Also make sure you are protecting your can from falling. If it falls, and knocks over sideways on the table or lands on the floor, you have to get a new can and start over. The first one with an empty can wins. (Determined by pouring whatever is left inside a bottle cap. If it overflows you have to get a new can.)"];
	}
	if(document.getElementById('wrballbounce').checked){
		wrActiveGames[wrActiveGames.length] = ["Ball Bounce","Each team will have 4 cups in front of them filled with beer. One player on each team will drink the first beer and bounce it in the cup. Once it bounces in, pass the ball to the next player and they will do the same. This continues until all 4 cups are finished."];
	}
	if(document.getElementById('wrquarters').checked){
		wrActiveGames[wrActiveGames.length] = ["Quarters","Each team will select one player to participate. Each player will have 4 quarters in front of them. They have to bounce all the quarters in the shotglass. Whoever finishes first wins."];
	}


	if(document.getElementById('lrcanflicker').checked){
		lrActiveGames[lrActiveGames.length] = ["Can Flicker","Take a can, either full or empty (as long as it’s opened with the tab on it), and whoever was in first in the elimination round gets to go first. Take turns flicking the tab of the can, and whoever flicks it off wins."];
	}
	if(document.getElementById('lr3cuppong').checked){
		lrActiveGames[lrActiveGames.length] = ["3 Cup Pong","Each team will have three cups in front of them. Whoever won the elimination round gets to go first. Each player will each shoot one ball per round. If both players make it, they get the ball back. There is no heating up, electricity, flicking or blowing the ball out, knocking the cup over (results in refilling the cup), islands, reracks, or bounce backs. You can bounce the ball, but the other team can smack it away then. "];
	}
	if(document.getElementById('lrairplanemaking').checked){
		lrActiveGames[lrActiveGames.length] = ["Airplane Making","Designate an area that is about 3ft by 3ft (Any size will do, but make sure its marked). Standing away, about 20 ft, the two teams will start. On the count of three, one player from each team will start to make a paper airplane and have to land it within that marked area. After the first player goes, the second player may begin making their airplane. This continues until one team gets two airplanes in the area."];
	}
	if(document.getElementById('lrbeerball').checked){
		lrActiveGames[lrActiveGames.length] = ["Beer Ball","Each team will have 1 can of beer on their side of the table flipped top down. You can either have one player be designated drinker, or you both can drink from the same can. The first place team from the elimination round goes first. To start, the beginning team tries to hit the other players can. If they do, the drinker flips the beer, opens it, and starts drinking until the other team gets the ball and puts it on the table while saying stop. Then the next team will do the same. You keep swapping players when it is your turn to throw again. If you're the designated drinker, and it's your turn to throw, you just have to make sure you are fast enough. Also make sure you are protecting your can from falling. If it falls, and knocks over sideways on the table or lands on the floor, you have to get a new can and start over. The first one with an empty can wins. (Determined by pouring whatever is left inside a bottle cap. If it overflows you have to get a new can.)"];
	}
	if(document.getElementById('lrballbounce').checked){
		lrActiveGames[lrActiveGames.length] = ["Ball Bounce","Each team will have 4 cups in front of them filled with beer. One player on each team will drink the first beer and bounce it in the cup. Once it bounces in, pass the ball to the next player and they will do the same. This continues until all 4 cups are finished."];
	}
	if(document.getElementById('lrquarters').checked){
		lrActiveGames[lrActiveGames.length] = ["Quarters","Each team will select one player to participate. Each player will have 4 quarters in front of them. They have to bounce all the quarters in the shotglass. Whoever finishes first wins."];
	}
	if(document.getElementById('lrrockpaperscissors').checked){
		lrActiveGames[lrActiveGames.length] = ["Rock, Paper, Scissors","Each team will select one of their players and stand back to back. They will say “rock, paper, scissors, shoot” and turn around to see what each player got. Scissors beats paper, paper beats rock, and rock beats scissors. Losers drink. Swap players for the next round. Best two out of three wins."];
	}
	if(document.getElementById('lrhigherlower').checked){
		lrActiveGames[lrActiveGames.length] = ["Higher/Lower Battle","Each team will each have 4 cards in front of them. One of them is faced up. At the same time, each team will have to decide if the next card will be higher or lower. Best two out of three wins. If there continues to be a tie after 2 wins, first team right, wins."];
	}

	return [ffaActiveGames, srActiveGames, erActiveGames, wrActiveGames, lrActiveGames];
}