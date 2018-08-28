//When there is a change in the size of the indow or screen it will update the content to fit it
function determineHomeSize(){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen

	const footerdata = 
		`<div class='information' id='information'>
			Robert Calamari 2018
		</div>`;

	const contactdata = 
		`<div display='inline-block'>
			Contact Me:<br/>
			<a href='#'><img src='./img/mail.png' class='contactpics'  alt='Email' height='53' width='53'></a>
			<a href='https://instragram.com/itsreallyrob'><img src='./img/instagram.png' class='contactpics'  alt='Instagram' height='50' width='50'></a>
			<a href='https://github.com/itsreallyrob'><img src='./img/github.svg' class='contactpics'  alt='Github' height='50' width='50'></a>
			
		</div>`;

	if(vpWidth >= 1030){
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
			
		//Infobox
		document.getElementById('infobox').innerHTML=
			`
				<img src='./img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
				<div class='infoboxcontentwords'>HELLO, IM ROBERT CALAMARI</div> 				
				<input type='button' class='infoboxcontentbutton' value='Dive in to learn more!'>
			`;

		//Content
		let featuredPaintings=[];
		findFeaturedPainting(featuredPaintings,3);
		document.getElementById('contentdiv').innerHTML=
			`<div class='leftpanel'>
		<div style='float:right'>		
				<div class='lefthomecontainer'>
					<div style='padding:0 0 0 80px '>PAINTINGS
					</div>
					<div style='padding:0 0 0 30px '>LATEST:<br>
					</div>
					<img src='./img/paintings/` + getLatestPainting().img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>
				<div class='lefthomecontainer'>
					<div style='padding:0 0 0 30px '>FEATURED:<br>
					</div>
					<img src='./img/paintings/` + featuredPaintings[0].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>	
				<div class='lefthomecontainer'>
					<img src='./img/paintings/` + featuredPaintings[1].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>		
				<div class='lefthomecontainer'>
					<img src='./img/paintings/` + featuredPaintings[2].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
				</div>	
		</div>		
			</div>
			<div class='middlepanel'>	
				<div style='text-align:left; padding:10px 0 0 20px '>
					
					<div id='blogcontent'>
						` + printSomeBlog(7) + `
						<a href='#'>Click For More Posts</a>
					</div>
				</div>
			</div>
			<div class='rightpanel'>	
				<div>
					<img src='./img/person.png' class='infopic' alt='PIC' height=160 width=160>
					ROBERT CALAMARI <br/><br/>				
				</div>
				<div style='text-align:left'>
					BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.
				</div>
			</div>`;

		//Contact
		document.getElementById('contacthome').innerHTML= contactdata;
		
		//Footer
		document.getElementById('footer').innerHTML= footerdata;

	}
	else if(vpWidth >=350 && vpWidth <=1029){
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
		
		//Contact
		document.getElementById('contacthome').innerHTML= contactdata;
		
		//Footer
		document.getElementById('footer').innerHTML= footerdata;

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

		//Contact
		document.getElementById('contacthome').innerHTML= contactdata;
		
		//Footer
		document.getElementById('footer').innerHTML= footerdata;


	}
}