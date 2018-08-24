function determineSize(){
	const vpWidth  = document.documentElement.clientWidth;
	if(vpWidth >= 600)
	{
		document.getElementById('header').innerHTML="<div class='menu' >	
				<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'> 
			</div>			
			<div class='title'>
				<img src='./img/Logo.png' class='menubutt' alt='IRR' height='80' width='240' onclick='goHome()'> 
			</div>
			<div class='menu'>
				<img src='./img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40'  onclick='openNav()'> 
			</div>	";
	}
	else
	{
		document.getElementById('header').innerHTML="Too small";
	}

}