function determineSize(){
	const vpWidth  = document.documentElement.clientWidth;
	if(vpWidth >= 800){
		document.getElementById('header').innerHTML=
			"<div>"+
				"<a class='header' href='#'>Home</a>"+
				"<a class='header' href='#'>Blog</a>"+
				"<a class='header' href='#'>Paintings</a>"+
				"<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'>"+
				"<img src='./img/Logo.png' class='menubutt' alt='IRR' height='80' width='240' onclick='goHome()'> "+
				"<a class='header' href='#'>Games</a>"+
				"<a class='header' href='#'>About Me</a>"+
				"<a class='header' href='#'>Contact </a>"+	
			"</div>";
			
	}
	else if(vpWidth >=350 && vpWidth <=799){
		document.getElementById('header').innerHTML=
			"<div style='width:100%;display:inline-block;'>"+
				"<div style='float:left;padding-left:0px;'>"+
					"<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'>"+
					"<img src='./img/Logo.png' class='menubutt' alt='IRR' height='60' width='180' onclick='goHome()'> "+
				"</div>"+
				"<div style='float:right;padding:8px 22px 0 0 ;'>"+
					"<img src='./img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav()'> "+
				"</div>	"+
			"</div>";
	}
	else{
		document.getElementById('header').innerHTML=
			"<div style='width:100%;display:inline-block;'>"+
				"<div style='float:left;padding-left:0px;'>"+
					"<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'>"+
					"<img src='./img/Logo.png' class='menubutt' alt='IRR' height='40' width='120' onclick='goHome()'> "+
				"</div>"+
				"<div style='float:right;padding:8px 22px 0 0 ;'>"+
					"<img src='./img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav()'> "+
				"</div>	"+
			"</div>";
	}
	
}