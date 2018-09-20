function goSettingsDrawing(){
    document.getElementById('gamechoices').style.display = 'none';
    document.getElementById('drawingappsettings').style.display = 'inline-block';
}

function buttonJoin(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('joingame').style.display = 'inline-block';
}

function buttonMake(){
    document.getElementById('joinormake').style.display = 'none';
    document.getElementById('gamechoices').style.display = 'inline-block';
}



function printGameData(sourcefile){
	 return`
	 	<div style='text-align: center; padding:25px 0 25px 0'>
			<div id="joinormake">	
				<button class='button1' onclick='buttonJoin()'>Join Game</button>      </br></br>
				<button class='button1' onclick='buttonMake()'>Make Game</button>
			</div>
			<div id="gamechoices" style='padding: 0 0 0 0; display:none;'>
	            <button class='button1' onclick="goSettingsDrawing()">Drawing App</button>
	        </div>
	        <div id="joingame" style="display:none;">
                Room: <input id="roomnamejoin" type="text" value="Room123"></input><br>
                Name: <input id="namenamejoin" type="text"></input><br>
                <br>
                <button class='button2' onclick="joinRoomDrawing()">Join Room</button>
                <p id="signalsign" class="signalsign"></p>
			</div>
	        <div id="drawingappsettings" style="display:none;">
                To Create a Room, please create a room name below and sign in on a different tab or browser using the Join Game button on the main menu. 
                <br>
                Room: <input id="roomname" type="text" value="Room123"></input><br>
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