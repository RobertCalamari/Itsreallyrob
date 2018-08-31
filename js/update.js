//This is the code to print out the footer ribbon
const footerdata = 
	`<div class='information' id='information'>
		<div style='float:left'>Robert Calamari 2018 
		</div>
		<div style='float:right'>
		</div>
	</div>
`;

//This is the code to edit the about me section on the front page
const aboutmeinfo = "Hi, my name is Robert. I majored in Information Technology and minored in Computer Science (from the New Jersey Institute of Technology). I have always enjoyed challenges, so in my spare time I was either playing videogames or coding. While working in IT, I found that coding was what I wanted to do, but I did not know where to start. I decided to make this website to showcase my progress as I advance in my knowledge of coding. Come along with me as I post details about my progress and what I did that day. <br/><br/> I have also had an interest in painting since 2016. Only still a beginner, I paint in my free time, still discovering and attempting new techniques. Every original painting is available for sale if it has not already been sold yet. If interested, I also do custom painting orders. Email me directly at itsreallyrobert@aol.com to discuss more.";									

//This is the code to print out the contact ribbon
function contactData(sourcefile){
	return `
	<div display='inline-block' >
		<div style='display:inline; position:relative;'>
			<div id='emailbox' class='emailbox' style='display:none'>
				Email:<br/> itsreallyrobert@aol.com
			</div>
		</div>		
		<a href='javascript:emailBox();'><img src='` + sourcefile + `/img/mail.png' class='contactpics'  alt='Email' height='53' width='53'></a>
		<a href='https://instragram.com/itsreallyrob'><img src='` + sourcefile + `/img/instagram.png' class='contactpics'  alt='Instagram' height='50' width='50'></a>
		<a href='https://github.com/robertcalamari'><img src='` + sourcefile + `/img/github.svg' class='contactpics'  alt='Github' height='50' width='50'></a>		
	</div>`;
	
}

//This is the code that will show or hide the email when the email icon is clicked
function emailBox(){
	const thediv = document.getElementById('emailbox');
	if(thediv.style.display=='none'){
		thediv.style.display='inline';
	}
	else{
		thediv.style.display='none';
	}
}

//This is the code to print out the header ribbon
function headerData(screen, sourcefile){
	if(screen===0){
		return `<div>
			<a class='header' href='` + sourcefile + `/index.html'>Home</a>
			<a class='header' href='` + sourcefile + `/pages/blog/page1.html'>Blog</a>
			<a class='header' href='` + sourcefile + `/pages/painting/painting.html'>Paintings</a>
			<img src='` + sourcefile + `/img/CalamariWhite2.png' class='menubutt' alt='IRR' height='80' width='80' onclick='goHome("` + sourcefile + `")'>
			<img src='` + sourcefile + `/img/Logo.png' class='menubutt' alt='IRR' height='80' width='240' onclick='goHome("` + sourcefile + `")'> 
			<a class='header' href='` + sourcefile + `/pages/games/games.html'>Games</a>
			<a class='header' href='` + sourcefile + `/pages/aboutme.html'>About</a>
			<a class='header' href='` + sourcefile + `/pages/store.html'>Store</a>
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

//This is the code that outputs the big image ribbon on the front page
function infoBoxData(screen,sourcefile){ 
	if(screen===0){
		return `
			<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
			<div class='infoboxcontentwords'>HELLO, IM ROBERT CALAMARI</div> 				
			<input type='button' class='infoboxcontentbutton' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
		`;
	}	
	else if(screen===1){
		return `
				<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
				<div class='infoboxcontentwords' style='font-size:25px'>HELLO, IM ROBERT CALAMARI</div> 				
				<input type='button' class='infoboxcontentbutton' style='font-size:12px; width:140px;padding:12px 12px;' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
			`;
	}
	else if(screen===2){
		return `
			<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
			<div class='infoboxcontentwords' style='font-size:15px'>HELLO, IM ROBERT CALAMARI</div> 				
			<input type='button' class='infoboxcontentbutton' style='font-size:8px; width:90px;padding:8px 8px;' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
		`;
	}

}

//This is the code that will output what appears on the home screen
function homeContentData(screen, sourcefile){
	if(screen===0){
		return `
			<div class='aboutmepanel' style='padding:100px 0 40px 0;'>
				<div class='middlepanel'>
					<div class='myheading2' style='font-size:20px'> 
						<img src='./img/person.png' class='infopic' alt='PIC' height=120 width=120><br/>
						<div style='padding:30px 0 0 0'>ROBERT CALAMARI</div> 				
					</div><br/>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + aboutmeinfo + `
						<div style='padding: 30px 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Learn More' onclick='goAbout("` + sourcefile + `")'>				
						</div>				
					</div>
				</div>
			</div>
			<div class='blogpanel' style='padding:100px 0 60px 0; background-color:#0505051a;'>
				<div class='middlepanel'>
					<div class='myheading2' style='font-size:30px'>
						Articles
					</div></br>			
					<div id='blogcontent' class='blogcontent'>
						` + printSomeBlog(6) + `
						<div style='padding: 0 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
						</div>
					</div>
				</div>
			</div>
			<div class='paintingpanel' style='padding:70px 0 40px 0;'>
				<div class='myheading2' style='font-size:30px'>
						Paintings
				</div></br>		
				` + printHomeSlideshow(sourcefile, 500)   +`
			</div>
		`;
	}else if(screen===1){
		return `
			<div class='aboutmepanel' style='padding:70px 0 40px 0;'>
				<div class='middlepanel'  style='width:90%'>
					<div class='myheading2' style='font-size:20px'> 
						<img src='./img/person.png' class='infopic' alt='PIC' height=120 width=120><br/>
						<div style='padding:30px 0 0 0'>ROBERT CALAMARI</div> 				
					</div><br/>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + aboutmeinfo + `
						<div style='padding: 30px 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Learn More' onclick='goAbout("` + sourcefile + `")'>				
						</div>				
					</div>
				</div>
			</div>
			<div class='blogpanel' style='padding:70px 0 40px 0; background-color:#0505051a;'>
				<div class='middlepanel' style='width:90%'>
					<div class='myheading2' style='font-size:30px'>
						Articles
					</div></br>			
					<div id='blogcontent' class='blogcontent'>
						` + printSomeBlog(3) + `
						<div style='padding: 0 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
						</div>
					</div>
				</div>
			</div>
			<div class='paintingpanel' style='padding:100px 0 40px 0;'>
				<div class='myheading2' style='font-size:30px'>
						Paintings
				</div></br>					
				` + printHomeSlideshow(sourcefile, 450)   +`
			</div>
		`;
	}else if(screen===2){
		return `
			<div class='aboutmepanel' style='padding:70px 0 40px 0;'>
				<div class='middlepanel' style='width:90%'>
					<div class='myheading2' style='font-size:20px'> 
						<img src='./img/person.png' class='infopic' alt='PIC' height=120 width=120><br/>
						<div style='padding:30px 0 0 0'>ROBERT CALAMARI</div> 				
					</div><br/>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + aboutmeinfo + `
						<div style='padding: 30px 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Learn More' onclick='goAbout("` + sourcefile + `")'>				
						</div>				
					</div>
				</div>
			</div>
			<div class='blogpanel' style='padding:70px 0 60px 0; background-color:#0505051a;'>
				<div class='middlepanel' style='width:90%'>
					<div class='myheading2' style='font-size:30px'>
						Articles
					</div></br>			
					<div id='blogcontent' class='blogcontent'>
						` + printSomeBlog(3) + `
						<div style='padding: 0 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
						</div>
					</div>
				</div>
			</div>
			<div class='paintingpanel' style='padding:100px 0 60px 0;'>
				<div class='myheading2' style='font-size:30px'>
						Paintings
				</div></br>	
				` + printHomeSlideshow(sourcefile, 350)   +`
			</div>
		`;
	}
}

//This is the code that appears on the blog page
function blogContentData(screen, sourcefile, page){
	//0,1,2 are the first page, while 3,4,5 are the other pages
	if(screen===0){

		if(page==1){
			return `
				<div style='float:left; width:20%;color:white'>
					Shhh. I am not here!
				</div>
					<div class='middlepanel' >	
						<div style='text-align:left; padding:10px 0 0 0px '>
							<div class='myheading1'>Current Articles</br></br>
							</div>
							<div id='blogcontent'>
								` + printBlogPage(page) + `
							</div>
						</div>
						<input type='button' class='button2' style='font-size:12px;float:right' value='Next Page' onclick='nextBlog("` + page + `")'>
					</div>
			`;
		}
		else{
			return `
				<div style='float:left; width:20%;color:white'>
					Shhh. I am not here!
				</div>
					<div class='middlepanel' >	
						<div style='text-align:left; padding:10px 0 0 0px '>
							<div class='myheading1'>Current Articles</br></br>
							</div>
							<div id='blogcontent'>
								` + printBlogPage(page) + `
							</div>
						</div>
						<input type='button' class='button2' style='font-size:12px;float:right' value='Next Page' onclick='nextBlog("` + page + `")'>
						<input type='button' class='button2' style='font-size:12px;float:left' value='Prev Page' onclick='prevBlog("` + page + `")'>					
					</div>
			`;
		}
	}else if(screen===1){
		if(page==1){
			return `
				<div style='border-bottom: 1px solid #b8b8b8; padding: 5px 8px 5px 8px'>	<!--This is the blog section.-->
					<b>The Latest</b></br>					
					<div style='text-align:left; padding:10px 0 0 0 '>
				
						<div id='blogcontent'>
							` + printBlogPage(page) + `
						</div>
					</div>
					<input type='button' class='button2' style='font-size:12px;float:right' value='Next Page' onclick='nextBlog("` + page + `")'>
				</div>	
			`;
		}
		else{
			return `
				<div style='border-bottom: 1px solid #b8b8b8; padding: 5px 8px 5px 8px'>	<!--This is the blog section.-->
					<b>The Latest</b></br>					
					<div style='text-align:left; padding:10px 0 0 0 '>
				
						<div id='blogcontent'>
							` + printBlogPage(page) + `
						</div>
					</div>
					<input type='button' class='button2' style='font-size:12px;float:right' value='Next Page' onclick='nextBlog("` + page + `")'>
					<input type='button' class='button2' style='font-size:12px;float:left' value='Prev Page' onclick='prevBlog("` + page + `")'>									
				</div>	
			`;
		}
		
	}else if(screen===2){
		if(page==1){
			return `
				<div style='padding: 5px 12px 5px 12px'>	<!--This is the blog section.-->
					<b>The Latest</b></br>					
					<div style='text-align:left; padding:10px 0 0 0 '>
			
						<div id='blogcontent'>
							` + printBlogPage(page) + `
						</div>
					</div>
					<input type='button' class='button2' style='font-size:12px;float:right' value='Next Page' onclick='nextBlog("` + page + `")'>
				</div>	
			`;
		}
		else{
			return `
				<div style='padding: 5px 12px 5px 12px'>	<!--This is the blog section.-->
					<b>The Latest</b></br>					
					<div style='text-align:left; padding:10px 0 0 0 '>
			
						<div id='blogcontent'>
							` + printBlogPage(page) + `
						</div>
					</div>
					<input type='button' class='button2' style='font-size:12px;float:right' value='Next Page' onclick='nextBlog("` + page + `")'>
						<input type='button' class='button2' style='font-size:12px;float:left' value='Prev Page' onclick='prevBlog("` + page + `")'>					
				</div>	
			`;
		}
	}
}

//This is the code that appears on the painting page
function paintingContentData(screen, sourcefile){
	//0,1,2 are the first page, while 3,4,5 are the other pages
	if(screen===0){
		return `
			<div style='float:left; width:20%;color:white'>
				Shhh. I am not here!
			</div>
				<div class='middlepanel' >	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div class='myheading1'>Rob\'s Paintings</br></br>
						</div>
							` + printAllPaintings(sourcefile) + `
					</div>
				</div>
		`;
	}else if(screen===1){
		return `
			<div style='border-bottom: 1px solid #b8b8b8; padding: 5px 8px 5px 8px'>	<!--This is the blog section.-->
				<b>The Latest</b></br>					
				<div style='text-align:left; padding:10px 0 0 0 '>
						` + printAllPaintings(sourcefile) + `
				</div>
			</div>	
		`;
	}else if(screen===2){
		return `
			<div style='padding: 5px 12px 5px 12px'>	<!--This is the blog section.-->
				<b>The Latest</b></br>					
				<div style='text-align:left; padding:10px 0 0 0 '>
						` + printAllPaintings(sourcefile) + `
				</div>
			</div>	
		`;
	}
}



//When there is a change in the size of the indow or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineHomeSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
	
	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Infobox
		document.getElementById('infobox').innerHTML=infoBoxData(0,ext);
		//Content - the second number represnts how many pictures you want displayed
		document.getElementById('contentdiv').innerHTML=homeContentData(0,ext);
		showSlides(1);
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
		document.getElementById('contentdiv').innerHTML=homeContentData(1,ext);
		showSlides(1);
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
		document.getElementById('contentdiv').innerHTML=homeContentData(2,ext);
		showSlides(1);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}

//When there is a change in the size of the indow or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//0,1,2 are the first page, while 3,4,5 are the other pages
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineBlogSize(ext,page){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogContentData(0,ext,page);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML= footerdata;
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogContentData(1,ext,page);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogContentData(2,ext,page);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}

//When there is a change in the size of the indow or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determinePaintingSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=paintingContentData(0,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML= footerdata;
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=paintingContentData(1,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=paintingContentData(2,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}

//When there is a change in the size of the indow or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineGameSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML= footerdata;
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}

//When there is a change in the size of the indow or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineStoreSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML= footerdata;
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerdata;
	}
}

