//When there is a change in the size of the indow or screen it will update the content to fit it
function determineHomeSize(){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen

	if(vpWidth >= 800){
		//Header
		document.getElementById('header').innerHTML=
			`<div>
				<a class='header' href='#'>Home</a>
				<a class='header' href='#'>Blog</a>
				<a class='header' href='#'>Paintings</a>
				<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'>
				<img src='./img/Logo.png' class='menubutt' alt='IRR' height='80' width='240' onclick='goHome()'> 
				<a class='header' href='#'>Games</a>
				<a class='header' href='#'>About Me</a>
				<a class='header' href='#'>Contact </a>
			</div>`;
			
		//Content
		let featuredPaintings=[];
		findFeaturedPainting(featuredPaintings,3);
		document.getElementById('contentdiv').innerHTML=
			`<div class='leftpanel'>		
				<div style='padding:10px 30px 0 0 '>
					LATEST PAINTING:<br>
					<img src='./img/paintings/` + getLatestPainting().img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>
				<div style='padding:10px 30px 0 0 '>
					FEATURED PAITINGS:<br>
					<img src='./img/paintings/` + featuredPaintings[0].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>	
				<div style='padding:10px 30px 0 0 '>
					<img src='./img/paintings/` + featuredPaintings[1].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>		
				<div style='padding:10px 30px 0 0 '>
					<img src='./img/paintings/` + featuredPaintings[2].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>			
			</div>
			<div class='middlepanel'>	
				<div style='text-align:left; padding:10px 0 0 25px '>
					
					<div id='blogcontent'>
						` + printFiveBlog() + `
						<a href='#'>Click For More Posts</a>
					</div>
				</div>
			</div>
			<div class='rightpanel'>	

			</div>`;

		//Contact
		document.getElementById('footer').innerHTML=
			`<div>
				Robert Calamari 2018
			</div>`;		

		//Footer
		document.getElementById('footer').innerHTML=
			`<div class='information' id='information'>
				Robert Calamari 2018
			</div>`;

	}
	else if(vpWidth >=350 && vpWidth <=799){
		//Header
		document.getElementById('header').innerHTML=
			`<div style='width:100%;display:inline-block;'>
				<div style='float:left;padding-left:0px;'>
					<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'>
					<img src='./img/Logo.png' class='menubutt' alt='IRR' height='60' width='180' onclick='goHome()'> 
				</div>
				<div style='float:right;padding:8px 22px 0 0 ;'>
					<img src='./img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav()'> 
				</div>	
			</div>`;

		//Content
		document.getElementById('contentdiv').innerHTML=
			`<div class='smallcontent'>		
				<div>Small Content</div>	
			</div>`;
		
		//Footer
		document.getElementById('footer').innerHTML=
			`<div class='information' id='information'>
				Robert Calamari 2018
			</div>`;

	}
	else{
		//Header
		document.getElementById('header').innerHTML=
			`<div style='width:100%;display:inline-block;'>
				<div style='float:left;padding-left:0px;'>
					<img src='./img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome()'>
					<img src='./img/Logo.png' class='menubutt' alt='IRR' height='40' width='120' onclick='goHome()'> 
				</div>
				<div style='float:right;padding:8px 22px 0 0 ;'>
					<img src='./img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav()'> 
				</div>	
			</div>`;

		//Content
		document.getElementById('contentdiv').innerHTML=
			`<div class='smallcontent'>		
				<div>Small Content</div>	
			</div>`;

		//Footer
		document.getElementById('footer').innerHTML=
			`<div class='information' id='information'>
				Robert Calamari 2018
			</div>`;

	}
}