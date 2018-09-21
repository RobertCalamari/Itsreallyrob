function goSettingsDrawing(){
    document.getElementById('drawingappsettings').style.display = 'inline-block';
	document.getElementById('boozeorlosesettings').style.display = 'none';
	document.body.style.backgroundColor = '#0844df';
}
function goSettingsBooze(){
    document.getElementById('boozeorlosesettings').style.display = 'block';
	document.getElementById('drawingappsettings').style.display = 'none';
	document.body.style.backgroundColor = '#3c3d3e';
}

function goToPaint(sourcefile){
	window.location.href = sourcefile + '/pages/games/paintapp.html';
}

function buttonJoin(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('joingame').style.display = 'inline-block';
}

function buttonMake(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('gamechoices').style.display = 'inline-block';
}


function printGameData(screen, sourcefile){
	 	
		return`
	 	<div id='gamewrapper' style='text-align: center; padding:25px 10px 25px 10px'>
			<div id="joinormake" >	
				<div style='text-align: left'>
					Welcome to the games menu! Here you will find an assortment of games that I have developed. Some are from my own creation, others were a challange to see if I could make something of that level. There are singleplayer and multiplayer games. To get started, click make game and select the game that you would like to play, here is where it will tell you how many people are required per game. Once you select that, the settings menu will appear so you can customize your lobby however you would like.
				</div>
				<br /><br />
				<button class='button1' style='margin:20px 20px 20px 20px;' onclick='buttonJoin()'>Join Game</button>
				<button class='button1' onclick='buttonMake()'>Make Game</button>
			</div>

			<div id="gamechoices" style='padding: 0 0 0 0; display:none;'>
	            <button class='buttongameapps' style='background-color:#169ff7;' onclick="goToPaint('` + sourcefile + `')">Simple Paint App</button>
	            <button class='buttongameapps' style='background-color:#150099;' onclick="goSettingsDrawing()">Drawing Games</button>
	            <button class='buttongameapps' style='background-color:#000;' onclick="goSettingsBooze()">Booze or Lose</button>	        
			</div>

	        <div id="joingame" style="display:none;">
                Room: <input id="roomnamejoin" type="text" value="Room123"></input><br>
                Name: <input id="namenamejoin" type="text"></input><br>
                <br>
                <button class='button2' onclick="joinRoomDrawing()">Join Room</button>
                <p id="signalsign" class="signalsign"></p>
			</div>





			<div id="boozeorlosesettings" style="padding: 25px 0 25px 0;display:none;">

                
                Player 1: <input id="boozep1" class='boozeinputs' type="text"></input><br>
                Player 2: <input id="boozep2" class='boozeinputs' type="text"></input><br>
                Player 3: <input id="boozep3" class='boozeinputs' type="text"></input><br>
                Player 4: <input id="boozep4" class='boozeinputs' type="text"></input><br>
                Player 5: <input id="boozep5" class='boozeinputs' type="text"></input><br>
                Player 6: <input id="boozep6" class='boozeinputs' type="text"></input><br>
                Player 7: <input id="boozep7" class='boozeinputs' type="text"></input><br>
                Player 8: <input id="boozep8" class='boozeinputs' type="text"></input><br>
                Player 9: <input id="boozep9" class='boozeinputs' type="text"></input><br>
				Number of Rounds: <input id="boozerounds" class='boozeinputs' style='width:25px;' type="text" placeholder="1-40"></input><br>
                <br>
                <button class='button2' onclick="startBoozeGame(` + screen + `)">Start Game</button>
				<p id="boozeerror" style='color:#fc5732' class="signalsign"></p>
			</div>

			<div id="boozeorlosegame" style="padding: 0 0 0 0;display:none;">
				<div id='boozerotate' class='rotate90' style='height:100%;text-align:center;width:400px'>
					
				<div id='boozeqblock' style='padding:0 0 0 0;'>
					Welcome to Booze or Lose! The drinking game where you have no control! Just follow along with what the screen says to do and click for the next prompt. Refresh or go through all the prompts to start a new game. Have fun and be safe!
				</div>	
				</div>
			</div>







	        <div id="drawingappsettings" style="padding: 35px 0 0 0;display:none;">
                To Create a Room, please create a room name below and sign in on a different tab or browser using the Join Game button on the main menu. 
                <br>
                Room: <input id="roomname" type="text"></input><br>
                Name: <input id="namename" type="text"></input><br>
                <br>
                <button class='button2' onclick="makeRoomDrawing()">Make Room</button>
                <p id="signalsign" class="signalsign"></p>
			</div>

	        <div id="drawingAppGame" style="display:none;" >
				<label id="gamelabel" style="font-size: 35px;">Drawing App</label><br>
                <label id="playerslabel"></label>

	            <div id="sketchpadapp">

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
		</div>




	`;
}



function makeRoomDrawing(){
	socket.emit('makeroom',{room:document.getElementById('roomname').value,username:document.getElementById('namename').value,gametype:"Drawing App"});
}

function joinRoomDrawing(){
	socket.emit('signIn',{room:document.getElementById('roomnamejoin').value,username:document.getElementById('namenamejoin').value,gametype:"Drawing App"});
}



function socketRoomMakeResponse(data){
        if(data.success){
            document.getElementById('drawingappsettings').style.display = 'none';
			document.getElementById('gamechoices').style.display = 'none';
            document.getElementById('drawingAppGame').style.display = 'inline-block';
            socket.emit('updategameserver',{room:document.getElementById('roomname').value,name:document.getElementById('namename').value,gametype:document.getElementById('gamelabel').value}); 
        } else{
        	document.getElementById("signalsign").innerHTML=data.msg2;
		}
};

function socketUpdatePlayers(data){
        document.getElementById('gamelabel').innerHTML = data.gametype;
        document.getElementById('playerslabel').innerHTML = data.lop;
}

function socketSignInResponse(data){
	if(data.success){
        document.getElementById('joingame').style.display = 'none';
        document.getElementById('drawingAppGame').style.display = 'inline-block';
        socket.emit('updategameserver',{room:document.getElementById('roomname').value,name:document.getElementById('namename').value,gametype:document.getElementById('gamelabel').value}); 
    } 
    else
    {
        document.getElementById("signalsign").innerHTML=data.msg1;
    }
}