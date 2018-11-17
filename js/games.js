function closeAllSettings(){
	document.getElementById('drawingappsettings').style.display = 'none';
	document.getElementById('boozeorlosesettings').style.display = 'none';
	document.getElementById('partypacksettings').style.display = 'none';
	document.getElementById('settingsall').style.display = 'none';
    document.getElementById('contentdiv').removeEventListener('mousedown', nextBoozeQuestion, false);
    document.getElementById("signalsignjoin").innerHTML="";
    document.getElementById("signalsignall").innerHTML="";
}

function goSettingsDrawing(){
	closeAllSettings();
	document.getElementById('settingsall').style.display = 'block';
    document.getElementById('drawingappsettings').style.display = 'block';
	document.getElementById('contentdiv').style.backgroundColor = '#0844df';
	
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
	document.getElementById('contentdiv').style.backgroundColor = '#3c3d3e';
}

function goToPaint(sourcefile){
	window.location.href = sourcefile + '/pages/games/paintapp.html';
}

function buttonJoin(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('joingame').style.display = 'inline-block';
    document.getElementById('contentdiv').removeEventListener('mousedown', nextBoozeQuestion, false);
    document.getElementById('contentdiv').style.backgroundColor = '#3c3d3e';
}

function buttonMake(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('gamechoices').style.display = 'inline-block';
    document.getElementById('contentdiv').removeEventListener('mousedown', nextBoozeQuestion, false);
    document.getElementById('contentdiv').style.backgroundColor = '#3c3d3e';
}


function printGameData(screen, sourcefile){
	 	
		return`
	 	<div id='gamewrapper' style='text-align: center; padding:10px 10px 25px 10px; width 50%'>
			<div id="joinormake" >	
				<div style='text-align: left'>
					Welcome to the games menu! Here you will find an assortment of games that I have developed. Some are from my own creation, others were a challange to see if I could make something of that level. There are singleplayer and multiplayer games. To get started, click make game and select the game that you would like to play, here is where it will tell you how many people are required per game. Once you select that, the settings menu will appear so you can customize your lobby however you would like.
				</div>
				<br /><br />
				<button class='button1' style='margin:20px 20px 20px 20px;' onclick='buttonJoin()'>Join Game</button>
				<button class='button1' onclick='buttonMake()'>Start Game</button>
			</div>

			<div id="gamechoices" style='padding: 0 0 0 0; display:none;'>
	            <!--<button class='buttongameapps' style='background-color:#169ff7;' onclick="goToPaint('` + sourcefile + `')">Simple Paint App</button>--->
	            <button class='buttongameapps' style='background-color:#150099;' onclick="goSettingsDrawing()">Drawing With Friends</button>
	            <button class='buttongameapps' style='background-color:#c65915;' onclick="goSettingsPartyPack()">Robert's Party Pack</button>
	            <button class='buttongameapps' style='background-color:#000;' onclick="goSettingsBooze()">Booze or Lose</button>	        
			</div>

	        <div id="joingame" style="display:none;">
                Room: <input id="roomnamejoin" type="text" value=""></input><br>
                Name: <input id="namenamejoin" type="text"></input><br>
                <br>
                <button class='button2' onclick="joinRoom()">Join Room</button>
                <p id="signalsignjoin" class="signalsign"></p>
			</div>


			<!-- ----------------------------------------------------------------booze or lose settings and game------------------------------------------------------------------------------------------- --->


			<div id="boozeorlosesettings" style="padding: 25px 0 25px 0;display:none;">
                Player 1:  <input id="boozep1" class='boozeinputs' type="text"></input><br>
                Player 2:  <input id="boozep2" class='boozeinputs' type="text"></input><br>
                Player 3:  <input id="boozep3" class='boozeinputs' type="text"></input><br>
                Player 4:  <input id="boozep4" class='boozeinputs' type="text"></input><br>
                Player 5:  <input id="boozep5" class='boozeinputs' type="text"></input><br>
                Player 6:  <input id="boozep6" class='boozeinputs' type="text"></input><br>
                Player 7:  <input id="boozep7" class='boozeinputs' type="text"></input><br>
                Player 8:  <input id="boozep8" class='boozeinputs' type="text"></input><br>
                Player 9:  <input id="boozep9" class='boozeinputs' type="text"></input><br>
                Player 10: <input id="boozep10" class='boozeinputs' style='width:95px;' type="text"></input><br>
                Player 11: <input id="boozep11" class='boozeinputs' style='width:98px;' type="text"></input><br>
                Player 12: <input id="boozep12" class='boozeinputs' style='width:95px;' type="text"></input><br>
				Number of Rounds: <input id="boozerounds" class='boozeinputs' style='width:25px;' type="text" placeholder="1-40"></input><br>
				<input type="checkbox" id='explicitbox' name="explicitbox" value="Explicit"> Explicit<br>
                <br>
                <button class='button2' onclick="startBoozeGame(` + screen + `)">Start Game</button>
				<p id="boozeerror" style='color:#fc5732' class="signalsign"></p>
			</div>

			<div id="boozeorlosegame" style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none; display:none;" unselectable="on" onselectstart="return false;" onmousedown="return false;">
				<div id='boozerotate' class='rotate90' style='height:100%;text-align:center;width:400px'>
					<div id='boozeqblock'>
						Welcome to Booze or Lose! The drinking game where you have no control! Just follow along with what the screen says to do and click for the next prompt. Refresh or go through all the prompts to start a new game. Have fun and be safe! Parental warning! (18+ material)
					</div>	
				</div>
			</div>

			<!-- -------------------------------------------------------------settings for all log in games---------------------------------------------------------------------------------------------- --->

	        <div id="settingsall" style="padding: 35px 0 0 0;display:none;">
                To Create a Room, please create a room name below and sign in on a different tab or browser using the Join Game button on the main menu. 
                <br><br>
                Room: <input id="roomname" class='boozeinputs' style='width:145px;color:white;' type="text"></input><br>
                Name: <input id="namename" class='boozeinputs' style='width:145px;color:white;' type="text"></input><br>
                <br>
                <p id="signalsignall" class="signalsign"></p>
			</div>

			<!-- -----------------------------------------------------------------------drawing app settings------------------------------------------------------------------------------------ --->

	        <div id="drawingappsettings" style="padding: 0 0 0 0;display:none;">
                <button class='button2' onclick="makeRoomDrawing()">Make Room</button>
			</div>

			<!-- --------------------------------------------------------------------------party pack settings--------------------------------------------------------------------------------- --->

	        <div id="partypacksettings" style="padding: 0 0 0 0;display:none;">
                <button class='button2' onclick="makeRoomPartyPack()">Make Room</button>

                <div id="partypackextra" style:"margin: auto;width: 170px;">
                	<br>
                	Extra Settings:<br>
                	<div style="text-align:center;">
	                	<div style="padding:10px 0 10px 0;">
	                		Drinking Mode <input type="checkbox" name="partypackdrinking" value="partypackdrinking"><br>
	                	</div>
	                	Number of Rounds: <input id="partypackrounds" class='boozeinputs' style='width:25px;color:white;' type="text" placeholder="1-40"></input><br>                             
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
}


var theplayers = [];
var theroom = "";


function makeRoomDrawing(){
	socket.emit('makeroom',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value,gametype:"Drawing App"});
}

function makeRoomPartyPack(){
	socket.emit('makeroom',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value,gametype:"Party Pack"});
}

function joinRoom(){
	socket.emit('signIn',{room:document.getElementById('roomnamejoin').value,username:document.getElementById('namenamejoin').value});
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

function socketSignInResponse(data){
	if(data.success){
		closeAllSettings();
    	document.getElementById('gamechoices').style.display = 'none';
        document.getElementById('joingame').style.display = 'none';
        document.getElementById('gameLobby').style.display = 'inline-block';
        document.getElementById('contentdiv').style.backgroundColor = 'white';

    	if(data.gametype=="Party Pack"){
    		theplayers[theplayers.length] = data.np;
    		theroom = data.room;
    		document.getElementById('partyPackGame').style.display = 'block';
        document.getElementById('contentdiv').style.backgroundColor = '#9ca8bc';
    		if(data.np.playern == 1){
	        	document.getElementById('partypackbutton').style.display = 'block';
    		}

	    }else if(data.gametype=="Drawing App"){
	        document.getElementById('sketchpadapp').style.display = 'block';

	    }
    } 
    else
    {
        document.getElementById("signalsignjoin").innerHTML=data.msg1;
    }
}