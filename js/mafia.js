function startMafiaGame(){
	theroom = document.getElementById('roomlabel').innerHTML;
	console.log(theroom);
	socket.emit('startgamemafia',{room:theroom});
}

function socketMafiaUpdate(data){
	
	theroom=data.room;

	document.getElementById('mafiabutton').style.display = 'none';
	document.getElementById('mafiaRole').style.display = 'block';
    document.getElementById("mafiaRole").innerHTML="Role: " + data.role[0] + " <br> " + data.role[1];
	document.getElementById('mafiaWelcome').style.display = 'block';
    document.getElementById("mafiaWelcome").innerHTML="<br><br>Welcome to the town partner! ";
	//socket.emit('partyPackUpdateClient',{message:2,room:theroom});
	
}




var mafiaRoles = [
          ["Town","You are the town. You are a useless member to society. You do not have have special abilities other than the right to vote. #TownSuffrage"],
          ["Godfather","You are the Mafia. You are immune to the Serial Killer."],
          ["Mafia","You are the Mafia. Work as a team to try and kill everyone else. Number of mafia change depending on how many people there are."],
          ["Cop","May detect one person each night, learning their role."],
          ["Medic","May protect one person from being killed each night. Can only pick themselves once."],
          ["Vigilante","You can choose one person to shoot each night. If the person you killed was not bad, then you will die the  next night."],
          ["Body Guard","May protect one person from being killed each night. If that person was picked, the body guard dies instead. However, can protect themselves once."],
          ["Detective","May detect one person each night, learning their role."],
          ["Executioner","You are given a random player in the game. Your goal is to get them lynched before you die. If you do, then you win the game."],
          ["Jester","Your goal is to get the rest of the town to lynch you. If you do, then you win the game. If you are alive and town wins, then you lose"],
          ["Lookout","Watch one person at night to see who visits them. "],
          ["Jailor","You may choose one person during the day to jail for the night."],
          ["Escort","Distract someone each night."],
          ["Amnesiac","Remember who you were by selecting a graveyard role."],
          ["Serial Killer","You are working for yourself. Your goal is to be the last one alive. You are allowed to kill one person each night. You can not kill the godfather. You can also not be killed at night."]
        ];