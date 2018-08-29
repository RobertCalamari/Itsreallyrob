//This is the code to print out the footer ribbon
const footerdata = 
	`<div class='information' id='information'>
		<div style='float:left'>Robert Calamari 2018 
		</div>
		<div style='float:right'>itsreallyrobert@aol.com
		</div>
	</div>
`;

//This is the code to print out the contact ribbon
function contactData(sourcefile){
	return `<div display='inline-block'>
		Contact Me:<br/>
		<a href='#'><img src='` + sourcefile + `/img/mail.png' class='contactpics'  alt='Email' height='53' width='53'></a>
		<a href='https://instragram.com/itsreallyrob'><img src='` + sourcefile + `/img/instagram.png' class='contactpics'  alt='Instagram' height='50' width='50'></a>
		<a href='https://github.com/itsreallyrob'><img src='` + sourcefile + `/img/github.svg' class='contactpics'  alt='Github' height='50' width='50'></a>		
	</div>`;
}

//This is the code to print out the header ribbon
function headerData(screen, sourcefile){
	if(screen===0){
		return `<div>
			<a class='header' href='` + sourcefile + `/index.html'>Home</a>
			<a class='header' href='` + sourcefile + `/pages/blog/blog.html'>Blog</a>
			<a class='header' href='` + sourcefile + `/pages/painting/painting.html'>Paintings</a>
			<img src='` + sourcefile + `/img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome("` + sourcefile + `")'>
			<img src='` + sourcefile + `/img/Logo.png' class='menubutt' alt='IRR' height='80' width='240' onclick='goHome("` + sourcefile + `")'> 
			<a class='header' href='` + sourcefile + `/pages/games/games.html'>Games</a>
			<a class='header' href='` + sourcefile + `/pages/aboutme.html'>About Me</a>
			<a class='header' href='` + sourcefile + `/pages/contact.html'>Contact</a>
		</div>`;
	}	
	else if(screen===1){
		return `<div style='width:100%;display:inline-block;'>
			<div style='float:left;padding-left:0px;'>
				<img src='` + sourcefile + `/img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome("` + sourcefile + `")'>
				<img src='` + sourcefile + `/img/Logo.png' class='menubutt' alt='IRR' height='60' width='180' onclick='goHome("` + sourcefile + `")'> 
			</div>
			<div style='float:right;padding:8px 22px 0 0 ;'>
				<img src='` + sourcefile + `/img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav("` + sourcefile + `")'> 
			</div>	
		</div>`;
	}
	else if(screen===2){
		return `<div style='width:100%;display:inline-block;'>
			<div style='float:left;padding-left:0px;'>
				<img src='` + sourcefile + `/img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome("` + sourcefile + `")'>
				<img src='` + sourcefile + `/img/Logo.png' class='menubutt' alt='IRR' height='40' width='120' onclick='goHome("` + sourcefile + `")'> 
			</div>
			<div style='float:right;padding:8px 22px 0 0 ;'>
				<img src='` + sourcefile + `/img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav("` + sourcefile + `")'> 
			</div>	
		</div>`;
	}	
}

function infoBoxData(screen,sourcefile){ 
	if(screen===0){
		return `
			<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
			<div class='infoboxcontentwords'>HELLO, IM ROBERT CALAMARI</div> 				
			<input type='button' class='infoboxcontentbutton' value='Dive in to learn more!'>
		`;
	}	
	else if(screen===1){
		return `
				<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
				<div class='infoboxcontentwords' style='font-size:25px'>HELLO, IM ROBERT CALAMARI</div> 				
				<input type='button' class='infoboxcontentbutton' style='font-size:12px; width:140px;padding:12px 12px;' value='Dive in to learn more!'>
			`;
	}
	else if(screen===2){
		return `
			<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
			<div class='infoboxcontentwords' style='font-size:15px'>HELLO, IM ROBERT CALAMARI</div> 				
			<input type='button' class='infoboxcontentbutton' style='font-size:8px; width:90px;padding:8px 8px;' value='Dive in to learn more!'>
		`;
	}

}

function homeContentData(screen, amnt){
	const featpaintings=[];
	findFeaturedPainting(featpaintings,amnt);
	if(screen===0){
		return `<div class='leftpanel'>
				<div style='float:right'>		
					<div class='lefthomecontainer'>
						<div class='myheading1' style='padding:0 0 0 70px'>Paintings <br /><br />
						</div>
						<div style='padding:0 0 0 30px '>LATEST:<br>
						</div>
						<img src='./img/paintings/` + getLatestPainting().img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
					</div>
					<div class='lefthomecontainer'>
						<div style='padding:0 0 0 30px '>FEATURED:<br>
						</div>
						<img src='./img/paintings/` + featpaintings[0].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
					</div>	
					<div class='lefthomecontainer'>
						<img src='./img/paintings/` + featpaintings[1].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'>
					</div>		
					<div class='lefthomecontainer'>
						<img src='./img/paintings/` + featpaintings[2].img + `' class='homepics' style='padding-left: 50px;padding-top: 15px;' alt='PIC' height='160' width='160' onclick='goHome()'><br/>
						<a href='#' style='padding:0 0 0 35px;'>View The Gallery</a>					
					</div>	

				</div>		
			</div>
			<div class='middlepanel'>	
				<div style='text-align:left; padding:10px 0 0 20px '>
					<div class='myheading1'>The Latest:</br></br>
					</div>
					<div id='blogcontent'>
						` + printSomeBlog(7) + `
						<a href='#'>More Posts</a>
					</div>
				</div>
			</div>
			<div class='rightpanel'>	
				<div style='font-weight:bold;font-size:18px'>
					<img src='./img/person.png' class='infopic' alt='PIC' height=160 width=160><br />
					ROBERT CALAMARI <br/><br/>				
				</div>
				<div style='text-align:left; font-size: 13px'>
					BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.
					BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.	
				</div>
			</div>`;
	}else if(screen===1){
		return `
			<div style='padding: 0 15px 0 15px '>
					<!--This is the about me section-->
				<div> 	
					<div style='text-align:center; font-weight:bold; font-size: 20px'>
						<img src='./img/person.png' class='infopic' alt='PIC' height=120 width=120><br/>
						ROBERT CALAMARI <br/><br/>				
					</div>
					<div style='text-align:left;border-bottom: 1px solid #b8b8b8; font-size:15px'>
						BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.
						BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.	
					</div>
				</div>
				<div style='border-bottom: 1px solid #b8b8b8;'>	<!--This is the blog section.-->
					<b>The Latest</b></br>					
					<div style='text-align:left; padding:10px 0 0 0 '>
					
						<div id='blogcontent'>
							` + printSomeBlog(4) + `
							<a href='#'>More Posts</a>
						</div>
					</div>
				</div>
				<div>	<!--This is the painting section-->	
					<div style='padding: 5px 0 5px 0'>
						<div class='myheading1' style='padding: 5px 0 5px 0'>Paintings<br/>
						</div>
						<div style=''>LATEST:<br>
						</div>
						<img src='./img/paintings/` + getLatestPainting().img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>
					</div>
					<div >
						<div style=''>FEATURED:<br>
						</div>
						<img src='./img/paintings/` + featpaintings[0].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>
						<img src='./img/paintings/` + featpaintings[1].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>						
						<img src='./img/paintings/` + featpaintings[2].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>
						<img src='./img/paintings/` + featpaintings[3].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>						
					</div>	
					<a href='#'>View The Gallery</a>
				</div>
			</div>	
		`;
	}else if(screen===2){
		return `
			<div style='padding: 0 15px 0 15px '>
				<!--This is the about me section-->
				<div> 	
					<div style='text-align:center; font-weight:bold; font-size: 20px'>
						<img src='./img/person.png' class='infopic' alt='PIC' height=120 width=120><br/>
						ROBERT CALAMARI <br/><br/>				
					</div>
					<div style='text-align:left;border-bottom: 1px solid #b8b8b8; font-size:15px'>
						BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.
						BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS. BLAH BLAH BLAH THIS IS ALL STUFF ABOUT ME OOH YESSSS.	
					</div>
				</div>
				<div style='border-bottom: 1px solid #b8b8b8;'>	<!--This is the blog section.-->
					<b>The Latest</b></br>					
					<div style='text-align:left; padding:10px 0 0 0 '>
					
						<div id='blogcontent'>
							` + printSomeBlog(4) + `
							<a href='#'>More Posts</a>
						</div>
					</div>
				</div>
				<div>	<!--This is the painting section-->	
					<div style='padding: 5px 0 5px 0'>
						<div class='myheading1' style='padding: 5px 0 5px 0'>Paintings<br/>
						</div>
						<div style=''>LATEST:<br>
						</div>
						<img src='./img/paintings/` + getLatestPainting().img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>
					</div>
					<div >
						<div style=''>FEATURED:<br>
						</div>
						<img src='./img/paintings/` + featpaintings[0].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>
						<img src='./img/paintings/` + featpaintings[1].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>						
						<img src='./img/paintings/` + featpaintings[2].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>
						<img src='./img/paintings/` + featpaintings[3].img + `' class='homepics' style='' alt='PIC' height='160' width='160' onclick='goHome()'>						
					</div>	
					<a href='#'>View The Gallery</a>
				</div>
			</div>	
		`;
	}
}




//When there is a change in the size of the indow or screen it will update the content to fit it
function determineHomeSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Infobox
		document.getElementById('infobox').innerHTML=infoBoxData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=homeContentData(0,3);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML= footerdata;
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Infobox
		document.getElementById('infobox').innerHTML=infoBoxData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML = homeContentData(1,4);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Infobox
		document.getElementById('infobox').innerHTML=infoBoxData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML = homeContentData(2,4);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}

//When there is a change in the size of the indow or screen it will update the content to fit it
function determineBlogSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+='Content';
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML= footerdata;
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+='Content';
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+='Content';
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}




