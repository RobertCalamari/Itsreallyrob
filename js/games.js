function closeAllSettings(){
	document.getElementById('drawingappsettings').style.display = 'none';
	document.getElementById('boozeorlosesettings').style.display = 'none';
	document.getElementById('deadlylegsappsettings').style.display = 'none';
	document.getElementById('starvingartistappsettings').style.display = 'none';
	document.getElementById('mafiasettings').style.display = 'none';
	document.getElementById('partypacksettings').style.display = 'none';
	document.getElementById('2048settings').style.display = 'none';
	document.getElementById('settingsall').style.display = 'none';
    document.getElementById('contentdiv').removeEventListener('mousedown', nextBoozeQuestion, false);
    document.getElementById("signalsignjoin").innerHTML="";
    document.getElementById("signalsignall").innerHTML="";
}

function goSettingsDrawing(){
	closeAllSettings();
	document.getElementById('settingsall').style.display = 'block';
    document.getElementById('drawingappsettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#2c5ed7';
	
}
function goSettingsPartyPack(){
	closeAllSettings();
	document.getElementById('settingsall').style.display = 'block';
    document.getElementById('partypacksettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#ff904b';
}
function goSettingsBooze(){
	closeAllSettings();
    document.getElementById('boozeorlosesettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#7d7d7d';
}
function goSettings2048(){
	closeAllSettings();
    document.getElementById('2048settings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#dfa419';
}
function goSettingsMafia(){
	closeAllSettings();
	document.getElementById('settingsall').style.display = 'block';
    document.getElementById('mafiasettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#ff5252';
}
function goSettingsDeadlyLegs(){
	closeAllSettings();
    document.getElementById('deadlylegsappsettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#79b96c';
}
function goSettingsStarvingGuesser(){
	closeAllSettings();
    document.getElementById('starvingartistappsettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#79b96c';
}
function goToPaint(sourcefile){
	window.location.href = sourcefile + '/pages/games/paintapp.html';
}

function buttonJoin(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('joingame').style.display = 'inline-block';
    document.getElementById('contentdiv').removeEventListener('mousedown', nextBoozeQuestion, false);
    document.getElementById('contentdiv').style.backgroundColor = '#d7d9db';
}

function buttonMake(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('gamechoices').style.display = 'inline-block';
    document.getElementById('contentdiv').removeEventListener('mousedown', nextBoozeQuestion, false);
    document.getElementById('contentdiv').style.backgroundColor = 'white';
}

function printGameData(vpWidth, sourcefile, postname){
	 	
		document.getElementById('contentdiv').innerHTML=`
	 	<div id='gamewrapper' style='text-align: center; padding:10px 10px 25px 10px; width 50%;'>
			<div id="joinormake" style="display:none;">	
				<div style='text-align: center'>
					To start a new game, click "Start Game"<br>If you already have a room code, click "Join Game"
				</div>
				<br /><br />
				<button class='button1' style='margin:20px 20px 20px 20px;' onclick='buttonJoin()'>Join Game</button>
				<button class='button1' onclick='buttonMake()'>Start Game</button>
			</div>

			<div id="gamechoices" >
	            <!--<button class='buttongameapps' style='background-color:#169ff7;' onclick="goToPaint('` + sourcefile + `')">Simple Paint App</button>--->
	            	
	            <button class='buttongameapps' style='background-color:#150099;' onclick="goSettingsDrawing()">Drawing With Friends</button>
	            <!--<button class='buttongameapps' style='background-color:#c65915;' onclick="goSettingsPartyPack()">Robert's Party Pack</button>--->
	            <button class='buttongameapps' style='background-color:#000;' onclick="goSettingsBooze()">Booze or Lose</button>
	            <button class='buttongameapps' style='background-color:#c30606;' onclick="goSettingsMafia()">Mafia</button>
	            <!--<button class='buttongameapps' style='background-color:#a17202;' onclick="goSettings2048()">2048</button>--->
	            <button class='buttongameapps' style='background-color:#158000;' onclick="goSettingsDeadlyLegs()">Eight Deadly Legs</button>
	             <!--<button class='buttongameapps' style='background-color:#158000;height:' onclick="goSettingsStarvingGuesser()">The Starving Guesser</button>--->	        
			</div>

	        <div id="joingame" style="display:none;">
                Room: <input id="roomnamejoin" type="text" value=""></input><br>
                Name: <input id="namenamejoin" type="text"></input><br>
                <br>
                <button class='button2' onclick="joinRoom()">Join Room</button>
			</div>


			<!-- ----------------------------------------------------------------booze or lose settings and game------------------------------------------------------------------------------------------- --->


			<div id="boozeorlosesettings" style="padding: 25px 0 25px 0;display:none; max-width: 673px; margin: auto;">

				<div style="text-align: justify;">Welcome to Booze or Lose! The multiplayer drinking game where you have no control! Pass the phone to each player to read the next prompt and either do what it says or drink! Only one Phone or Computer needed.</div>
	        	<br><br>				
                Player 1:  <input id="boozep1" class='boozeinputs' type="text"></input><br>
                Player 2:  <input id="boozep2" class='boozeinputs' type="text"></input><br>
                Player 3:  <input id="boozep3" class='boozeinputs' type="text"></input><br>
                Player 4:  <input id="boozep4" class='boozeinputs' type="text"></input><br>
                Player 5:  <input id="boozep5" class='boozeinputs' type="text"></input><br>
                Player 6:  <input id="boozep6" class='boozeinputs' type="text"></input><br>
                Player 7:  <input id="boozep7" class='boozeinputs' type="text"></input><br>
                Player 8:  <input id="boozep8" class='boozeinputs' type="text"></input><br>
                Player 9:  <input id="boozep9" class='boozeinputs' type="text"></input><br>
                Player 10: <input id="boozep10" class='boozeinputs' style='width:98px;' type="text"></input><br>
                Player 11: <input id="boozep11" class='boozeinputs' style='width:101px;' type="text"></input><br>
                Player 12: <input id="boozep12" class='boozeinputs' style='width:99px;' type="text"></input><br>
				Number of Rounds: <input id="boozerounds" class='boozeinputs' style='width:29px;' type="text" placeholder="1-40"></input><br>
				<input type="checkbox" id='explicitbox' name="explicitbox" value="Explicit"> Explicit<br>
                <br>
                <button class='button2' onclick="startBoozeGame(` + vpWidth + `)">Start Game</button>
				<p id="boozeerror" style='color:#7d7d7d; font-size: 12px;' class="signalsign">-</p>
                
				
			</div>

			<div id="boozeorlosegame" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none; display:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;">
				<div id='boozerotate' class='' style='height:100%;text-align:center;width:400px'>
					<div id='boozeqblock'>
						Refresh the page or go through all the prompts to start a new game. Have fun and be safe!
					</div>	
				</div>
			</div>

			<!-- ----------------------------------------------------------------eight deadly legs settings and game------------------------------------------------------------------------------------------- --->


			<div id="deadlylegsappsettings" style="padding: 25px 0 25px 0;display:none; max-width: 673px; margin: auto;">
				
                <div style="text-align: justify;">Eight Deadly Legs is a drinking game, game show! Compete with teams of two against one another in various rounds of drinking games, to try and achieve the most points. Then the top two teams battle against the Eight Deadly Legs Time Challenge!</div>
	        	<br><br>
				Number of Teams: <input id="teamdeadlylegs" class='boozeinputs' style='width:29px;' type="text" placeholder="1-10"></input><br>
				<button class='button2' onclick="toggleDeadlyLegsPopUp()" style="margin-bottom: 37px; margin-top: 12px;">Edit Settings</button>
				<div id="deadlylegsPopUp" style="display:none; width: 241px; margin: auto; text-align: left; margin-top: -21px;">
					<input type="checkbox" id='repeatablegames' name="repeatablegames" value="Explicit"> Allow games to be repeated <br><br>

					Free For All Games:<br>
					<div style="padding-left: 28px;">
						<input type="checkbox" id='ffaflipcup' name="ffaflipcup" value="Explicit" checked> Flip Cup<br>
						<input type="checkbox" id='ffastackcup' name="ffastackcup" value="Explicit" checked> Stack Cup<br>
						<input type="checkbox" id='ffaneverhaveiever' name="ffaneverhaveiever" value="Explicit" checked> Never Have I Ever<br>
						<input type="checkbox" id='ffabscardgame' name="ffabscardgame" value="Explicit" checked> BS Card Game<br>
						<input type="checkbox" id='ffabeerchug' name="ffabeerchug" value="Explicit" checked> Beer Chug<br>
					</div>
					<br>
					Speed Round Games:<br>
					<div style="padding-left: 28px;">
						<input type="checkbox" id='srflipcup' name="srflipcup" value="Explicit" checked> Flip Cup<br>
						<input type="checkbox" id='srstackcup' name="srstackcup" value="Explicit" checked> Stack Cup<br>
						<input type="checkbox" id='srmemory' name="srmemory" value="Explicit" checked> Memorization<br>
						<input type="checkbox" id='srhigherlower' name="srhigherlower" value="Explicit" checked> Higher/Lower<br>
						<input type="checkbox" id='srbeerchug' name="srbeerchug" value="Explicit" checked> Beer Chug<br>
					</div>
					<br>
					Elimination Round Games:<br>
					<div style="padding-left: 28px;">
						<input type="checkbox" id='erflipcup' name="erflipcup" value="Explicit" checked> Flip Cup<br>
						<input type="checkbox" id='erbeerpong' name="erbeerpong" value="Explicit" checked> Beer Pong<br>
						<input type="checkbox" id='erbeerball' name="erbeerball" value="Explicit" checked> Beer Ball<br>
						<input type="checkbox" id='ertrivia' name="ertrivia" value="Explicit" checked> Trivia<br>
					</div>
					<br>
					Winners Round Games:<br>
					<div style="padding-left: 28px;">
						<input type="checkbox" id='wrcanflicker' name="wrcanflicker" value="Explicit" checked> Can Flicker<br>
						<input type="checkbox" id='wr3cuppong' name="wr3cuppong" value="Explicit" checked> 3 Cup Pong<br>
						<input type="checkbox" id='wrairplanemaking' name="wrairplanemaking" value="Explicit" checked> Airplane Making<br>
						<input type="checkbox" id='wrbeerball' name="wrbeerball" value="Explicit" checked> 1 Can Beer Ball<br>
						<input type="checkbox" id='wrballbounce' name="wrballbounce" value="Explicit" checked> Ball Bounce<br>
						<input type="checkbox" id='wrquarters' name="wrquarters" value="Explicit" checked> Quarters<br>
					</div>
					<br>
					Losers Round Games:<br>
					<div style="padding-left: 28px;">
						<input type="checkbox" id='lrcanflicker' name="lrcanflicker" value="Explicit" checked> Can Flicker<br>
						<input type="checkbox" id='lr3cuppong' name="lr3cuppong" value="Explicit" checked> 3 Cup Pong<br>
						<input type="checkbox" id='lrairplanemaking' name="lrairplanemaking" value="Explicit" checked> Airplane Making<br>
						<input type="checkbox" id='lrbeerball' name="lrbeerball" value="Explicit" checked> 1 Can Beer Ball<br>
						<input type="checkbox" id='lrballbounce' name="lrballbounce" value="Explicit" checked> Ball Bounce<br>
						<input type="checkbox" id='lrquarters' name="lrquarters" value="Explicit" checked> Quarters<br>
						<input type="checkbox" id='lrrockpaperscissors' name="lrrockpaperscissors" value="Explicit" checked> Rock, Paper, Scissors<br>
						<input type="checkbox" id='lrhigherlower' name="lrhigherlower" value="Explicit" checked> Higher/Lower Battle<br>
					</div>
					<br>
				</div>
                <br>
                <button class='button2' onclick="startDeadlyLegsGame()">Start Game</button>
				<p id="boozeerror" style='color:#7d7d7d; font-size: 12px;' class="signalsign">-</p>
			</div>

			<div id="deadlylegsgame" style="display:none;">
				
			</div>

			<!-- -------------------------------------------------------------settings for all log in games---------------------------------------------------------------------------------------------- --->

	        <div id="settingsall" style="padding: 35px 0 0 0;display:none;">
                Please create a room below. Other players can join by inputting the room code in the "Join Game" section of the Games page.
                <br><br>
                Room: <input id="roomname" class='boozeinputs' style='width:145px;color:white;' type="text"></input><br>
                Name: <input id="namename" class='boozeinputs' style='width:145px;color:white;' type="text"></input><br>
                <br>
                <p id="signalsignall" class="signalsign"></p>
                <p id="signalsignjoin" class="signalsign"></p>
			</div>

			<!-- -----------------------------------------------------------------------drawing app settings------------------------------------------------------------------------------------ --->

	        <div id="drawingappsettings" style="padding: 0 0 0 0;display:none;" max-width: 673px; margin: auto;>
	        	A simple drawing game where you can draw with friends! 
	        	<br><br>
                <button class='button2' onclick="makeRoomDrawing()">Make Room</button> <button class='button2' onclick="joinRoom()">Join Room</button>
                <br><br>
                
			</div>

			<!-- -----------------------------------------------------------------------2048 settings------------------------------------------------------------------------------------ --->

	        <div id="2048settings" style="padding: 0 0 0 0;display:none;" max-width: 673px; margin: auto;>
	        	Can you keep merging the numbers to create a 2048 block? 
	        	<br><br>
                <button class='button2' onclick="start2048Game()">Start</button>
                <br><br>
                
			</div>

			<div id="2048game" style="display:none;">
				
			</div>

			<!-- -----------------------------------------------------------------------Mafia settings------------------------------------------------------------------------------------ --->

			<div id="mafiasettings" style="padding: 0 0 0 0;display:none;" max-width: 673px; margin: auto;>
                <button class='button2' onclick="makeRoomMafia()">Make Room</button> <button class='button2' onclick="joinRoom()">Join Room</button>

                <div id="mafiaextra" style:"margin: auto;width: 170px;">
                	<br>
                	Do you think you can survive the night a as townsmember before the mafia kills you?
	        		<br><br>
                </div>



			</div>

			<div id="mafiaGame" style="display:none;">
				<button id="mafiabutton" class='button2' style="display:none; margin:auto;" onclick="startMafiaGame()">Start Game</button>
                <label id="mafiagamelabel" style="display:none;font-size:20px;" ></label>
                <label id="mafiaRole" style="display:none;" ></label>
                <label id="mafiaWelcome" style="display:none;" ></label>
			</div>

			<!-- -----------------------------------------------------------------------starving artist settings------------------------------------------------------------------------------------ --->

	        <div id="starvingartistappsettings" style="padding: 0 0 0 0;display:none;" max-width: 673px; margin: auto;>
                <button class='button2' onclick="makeRoomDrawing()">Make Room</button>
                <br><br>
                A pictionary like game where there is only 1 guesser and multiple drawers! Each drawer only has a few seconds to draw! 
			</div>

			<!-- --------------------------------------------------------------------------party pack settings--------------------------------------------------------------------------------- --->

	        <div id="partypacksettings" style="padding: 0 0 0 0;display:none;" max-width: 673px; margin: auto;>
                <button class='button2' onclick="makeRoomPartyPack()">Make Room</button>

                <div id="partypackextra" style:"margin: auto;width: 170px;">
                	<br>
                	The Party Pack is a game where you compete against others in a variety of small time based games! Each round you are awarded points, and whoever has the most at the end, wins!
                	<br><br>
                	Extra Settings:<br>
                	<div style="text-align:center;">
	                	<div style="padding:10px 0 10px 0;">
	                		Drinking Mode <input type="checkbox" name="partypackdrinking" value="partypackdrinking"><br>
	                	</div>
	                	Number of Rounds: <input id="partypackrounds" class='boozeinputs' style='width:25px;color:white;' type="text" placeholder="40"></input><br>                             
                	</div>
                </div>

			</div>

			<!-- -----------------------------------------------------------------------game lobby that shows all the players and game name----------------------------------------------------------------------------------- --->

	        <div id="gameLobby" style="display:none;" >
				<label id="gamelabel" style="font-size: 35px;">Woah, this is a secret!</label><br>
				<label id="roomlabel" style="font-size: 15px;color: red;"> Another Secret!</label><br>
				<div style="text-align: left">
	                <label id="playerslabel" style="padding 0 0 25px 0"></label>
				</div>
			</div>

			<!-- -------------------------------------------------------------party pack game-------------------------------------------------------------------------------- --->


			<div id="partyPackGame">
                <button id="partypackbutton" class='button2' style="display:none; margin:auto;" onclick="startPartyPackGame(theroom)">Start Game</button>
                <label id="partypackgamelabel" style="display:none;font-size:20px;" ></label>
                <label id="partypackwelcome" style="display:none;" >Hello</label>

                <div id="partyPackMath" style="display:none;">
                	<br><label id="mathtimer"></label><br><br>
                	<label id="mathproblem">Math Problem</label><br><br> 
                	<input id="partypackmathanswer"  style='width:43px;color black' type="text" placeholder="Answer" autofocus></input><br> <br>
					<button id="mathnextquestionbutton" class='button2' onclick="mathNextQuestion(theroom)">Submit</button><br> 
                	<label id="mathrorw"></label><br> 
                </div>	

                <div id="partyPackMathEnd" style="display:none;">
                	<br><label id="mathwinner" style="font-size:25px;"></label><br><br>
                	<label id="mathlop"></label><br><br> 
                </div>	

                <div id="partyPackCurrentStats" style="display:none;">
                	<br><label id="partyPackLeaderboard"></label><br>
                </div>	

			</div>
			







			<!-- -------------------------------------------------------------------------This is the drawing app--------------------------------------------------------------------------------- --->	

            <div id="sketchpadapp" style="display:none;">

				<canvas id="sketchpad" height="400px" width="400px"></canvas>

				<div style="">Choose Color</div>
				<div style="display:inline-block;width:15px;height:15px;background:green;border:2px solid;" id="green" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:blue;border:2px solid;" id="blue" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:red;border:2px solid;" id="red" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:yellow;border:2px solid;" id="yellow" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:#e56200;border:2px solid;" id="orange" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:#bd00ff;border:2px solid;" id="purple" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:black;border:2px solid;" id="black" onclick="color(this)"></div>
				<div style="display:inline-block;width:15px;height:15px;background:white;border:2px solid;" id="white" onclick="color(this)"></div>
				<br>
				<div id="sizelabel" style="padding:20px 0 10px 0;">Size (Current: Small)</div>
				<div id="sizebox" style="display:inline-block;width:15px;height:15px;background:white;border:1px solid;" id="white" onclick="changeSize()"></div>
				<br>
				<input type="submit" value="Clear Sketchpad" id="clearbutton" onclick="clearCanvas(canvas,ctx);">

                <input type="submit" value="Submit To All" id="submitall" onclick="submitAll();">

			</div>











		</div>




	`;

	if(postname.game == "" || postname.game == undefined || postname.game == "undefined"){

	}else{
		if(postname.game == "DeadlyLegs"){
			goSettingsDeadlyLegs();
		}else if(postname.game == "Booze"){
			goSettingsBooze();
		}else if(postname.game == "Drawing"){
			goSettingsDrawing();
		}
	}



}


function fixscreen(vpWidth,sourcefile){
	if(vpWidth >=430){
		document.getElementById('gamewrapper').style.padding = '25px 0px 25px 0px';	
		document.getElementById('gamewrapper').style.width = '65%';	
		document.getElementById('gamewrapper').style.margin = 'auto';		
		document.getElementById('boozerotate').className = 'norotatebooze';
		document.getElementById('boozerotate').style.width = '100%';
		document.getElementById('boozerotate').style.height = '100%';
		document.getElementById('boozeqblock').style.padding = '200px 0 200px 0';
	}else if(vpWidth < 430){
		document.getElementById('gamewrapper').style.padding = '25px 10px 25px 10px';	
		document.getElementById('gamewrapper').style.width = '95%';	
		document.getElementById('gamewrapper').style.margin = 'auto';
		document.getElementById('boozerotate').className = 'norotatebooze';
		document.getElementById('boozerotate').style.width = '100%';
		document.getElementById('boozerotate').style.height = '100%';
		document.getElementById('boozeorlosegame').style.padding = '100px 0 80px 0';
		//document.getElementById('gamewrapper').style.height = '617px';
	}

	if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)) {
    	document.getElementById('gamewrapper').style.padding = '25px 10px 25px 10px';	
		document.getElementById('gamewrapper').style.width = '95%';	
		document.getElementById('gamewrapper').style.margin = 'auto';
		document.getElementById('boozerotate').className = 'norotatebooze';
		document.getElementById('boozeorlosegame').style.padding = '100px 0 80px 0';
		document.getElementById('gamewrapper').style.height = '100%';
	}
}


var theroom = "";


function makeRoomDrawing(){
	socket.emit('makeroom',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value,gametype:"Drawing App"});
}

function makeRoomPartyPack(){
	socket.emit('makeroom',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value,gametype:"Party Pack"});
}

function makeRoomMafia(){
	socket.emit('makeroom',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value,gametype:"Mafia"});
}


function joinRoom(){
	socket.emit('signIn',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value});
}

function socketRoomMakeResponse(data){
        if(data.success){
            //socket.emit('updategameserver',{room:document.getElementById('roomname').value,name:document.getElementById('namename').value,gametype:document.getElementById('gamelabel').value}); 
        } else{
        	document.getElementById("signalsignall").innerHTML=data.msg2;
		}
};

function socketUpdatePlayers(data){
        document.getElementById('gamelabel').innerHTML = data.gametype;
        document.getElementById('playerslabel').innerHTML = data.lop;
        document.getElementById('roomlabel').innerHTML = data.room;
}


function loadLevel(data){
	if(data.gametype=="Party Pack"){
		theroom = data.room;
		document.getElementById('partyPackGame').style.display = 'block';
    	document.getElementById('contentdiv').style.backgroundColor = '#9ca8bc';
		if(data.np.playern == 1){
        	document.getElementById('partypackbutton').style.display = 'block';
		}

    }else if(data.gametype=="Drawing App"){
        document.getElementById('sketchpadapp').style.display = 'block';

    }else if(data.gametype=="Mafia"){
		theroom = data.room;
		document.getElementById('mafiaGame').style.display = 'block';
    	document.getElementById('contentdiv').style.backgroundColor = '#9ca8bc';
		if(data.np.playern == 1){
        	document.getElementById('mafiabutton').style.display = 'block';
		}

    }
}

function socketSignInResponse(data){
	if(data.success){
		closeAllSettings();
    	document.getElementById('gamechoices').style.display = 'none';
        document.getElementById('joingame').style.display = 'none';
        document.getElementById('gameLobby').style.display = 'inline-block';
        document.getElementById('contentdiv').style.backgroundColor = 'white';

        loadLevel(data);
    } 
    else
    {
        document.getElementById("signalsignjoin").innerHTML=data.msg1;
    }
}

function socketSignInResponseAgain(data){
	closeAllSettings();
	document.getElementById('gamechoices').style.display = 'none';
    document.getElementById('joingame').style.display = 'none';
    document.getElementById('gameLobby').style.display = 'inline-block';
    document.getElementById('roomlabel').innerHTML = data.room;
    document.getElementById('gamelabel').innerHTML = data.gametype;
	theroom = data.room;
    if(data.gametype=="Party Pack"){
    	document.getElementById('contentdiv').style.backgroundColor = '#9ca8bc';
    }

	if(data.section == 0){
        document.getElementById('contentdiv').style.backgroundColor = 'white';
        socket.emit('refreshPlayerContent',{room:theroom});

    	loadLevel(data);
	}else if(data.section == 1){
		updatePartyPackSec1(1,data);
	}else if(data.section == 2){
		updatePartyPackSec1(2,data);
	}else if(data.section == 3){
		updatePartyPackSec1(3,data);
	}else if(data.section == 4){
		updatePartyPackSec1(4,data);
	}else if(data.section == 5){
		updatePartyPackSec1(5,data);
	}
	

}


// const games = [
// 	{
// 	  title:"Drawing With Friends",
// 	  url:"https://www.robertcalamari.com/pages/games/gameshome.html?game=Drawing",
// 	  info:"A fun drawing app where you can send doodles with friends!",
// 	  img:"/img/CalamariBlack.png"
// 	},
// 	{
// 	  title:"Booze or Lose",
// 	  url:"https://www.robertcalamari.com/pages/games/gameshome.html?game=Booze",
// 	  info:"A group drinking game where you answer the prompts and follow the instructions! Play it at home or on the go!",
// 	  img:"/img/CalamariBlack.png"
// 	},
// 	{
// 	  title:"Eight Deadly Legs",
// 	  url:"https://www.robertcalamari.com/pages/games/gameshome.html?game=DeadlyLegs",
// 	  info:"Need to setup a drinking olympics on the fly? Look no further! Just start this game and everything will be set up for you!",
// 	  img:"/img/CalamariBlack.png"
// 	}
// ];

// function printAllGames(sourcefile){
// 	let content = "";
// 	for(let i=0;i<games.length;i++){
// 		content+=`
// 			<div style="padding-top: 14px; ">
// 				<div class="posttitle" style="font-weight: bolder;font-size:20px;">
// 					<a href="` + games[i].url + `">` + games[i].title + `</a> 
// 				</div>
// 				` + games[i].info + `
// 			</div>`;		
// 	}

// 	return content;
// }