//This is the code to print out the footer ribbon
function footerData(sourcefile){
	return `<div class='information' id='information'>
		<div style='float:right'>
			Robert Calamari 2018
		</div>

	</div>
`;
}

//This is the code to edit the about me section on the front page
const aboutmeinfo = "Hello, my name is Robert. I majored in Information Technology and minored in Computer Science at the New Jersey Institute of Technology. I have always enjoyed challenges, so in my spare time I was either playing videogames or coding. While working in IT, I determined that coding was what I wanted to do, but I did not know where to start. I decided to design and create this website to showcase my progress as I advance in my knowledge of coding. I want to become a full stack developer, but currently I am more of a front end one. I do have some knowledge in back end development, and am still currently learning it. I am self taught, with a great thanks to freecodecamp.com and many other websites. I currently know the following: <b>Javascript, HTML5, CSS3, Node.JS, Socket.IO, MongodDB, SQL, and React.</b> I am always learning and expanding my knowledge each day as you can see in my posts. So feel free to read along and learn with me. <br/><br/>" + 
"I have also had an interest in painting for many years. I paint in my free time, consistently discovering and implementing new techniques. Every painting I have made is available for sale if not already sold, and if interested, I also do custom painting orders. It may seem odd that I am combining coding content with painting content, but I am all about creating things. From coding, painting, and even video editing I love doing it all, not just for me but for everyone. Even if it turns out bad, someone, somewhere, will enjoy it in their own way.<br/><br/> " + 
"I am currently doing freelancing work for businesses or anyone who wants a website. If you are looking for someone to make you a website, please feel free to email me at <b>rjcalamari@gmail.com</b> or use the form below. You can also subscribe to our newsletter to get updates on when a blog is posted, a painting added, or other news! ";	

//This is the code to print out the contact ribbon
function contactData(sourcefile){
	return `
	<div display='inline-block' >
		<div style='display:inline; position:relative;'>
			<div id='emailbox' class='emailbox' style='display:none'>
				Email:<br/> rjcalamari@gmail.com
			</div>
		</div>		
		<a href='` + sourcefile + `/pages/aboutme.html'><img src='` + sourcefile + `/img/mail.png' class='contactpics'  alt='Email' height='53' width='53'></a>
		<a href='https://instragram.com/itsreallyrobert'><img src='` + sourcefile + `/img/instagram.png' class='contactpics'  alt='Instagram' height='50' width='50'></a>
		<a href='https://github.com/robertcalamari'><img src='` + sourcefile + `/img/github.svg' class='contactpics'  alt='Github' height='50' width='50'></a>		
	</div>`;
	
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
			<a class='header' href='` + sourcefile + `/pages/projects/projects.html'>Projects</a>
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
				<img src='` + sourcefile + `/img/Logo.png' class='menubutt' alt='IRR' height='50' width='140' onclick='goHome("` + sourcefile + `")'> 
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
			<div class='infoboxcontentwords'>I\'m Robert</div> 	
			<div class='infoboxcontentwords2'>A Web Developer</div> 			
			<input type='button' class='infoboxcontentbutton' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
		`;
	}	
	else if(screen===1){
		return `
				<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
				<div class='infoboxcontentwords' style='font-size:50px'>I\'m Robert</div> 	
				<div class='infoboxcontentwords2' style='font-size:15px'>A Web Developer</div> 			
				<input type='button' class='infoboxcontentbutton' style='font-size:12px; width:140px;padding:12px 12px;' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
			`;
	}
	else if(screen===2){
		return `
			<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
			<div class='infoboxcontentwords' style='font-size:35px'>I\'m Robert</div> 	
			<div class='infoboxcontentwords2' style='font-size:10px'>A Web Developer</div> 			
			<input type='button' class='infoboxcontentbutton' style='font-size:8px; width:90px;padding:8px 8px;' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
		`;
	}

}

//This is the code that will output what appears on the home screen
function homeContentData(screen, sourcefile){
	if(screen===0){
		return `
			<div class='freelancingpanel' style='padding:60px 0 40px 0;'>
				<div class='middlepanel'>
					<div style='text-align:left; font-size:20px; padding:0 0 130px 0'>
						<div style='padding:20px 0 70px 15%'>
							<div style='width:300px; font-family: Faune-Bold, sans-serif;padding:0 0 10px 0; color:#519ac5;font-size:25px;'>
								Design
							</div>						
							<div style='width:300px; color:#5b5858'>
								I can design the perfect product that you want. I always keep it clean and straight to the point.   
							</div>
						</div>
						<div style='float:right; padding:0 15% 0px 0'>
							<div style='width:300px; font-family: Faune-Bold, sans-serif;padding:0 0 10px 0; color:#519ac5;font-size:25px;'>
								Development
							</div>						
							<div style='width:300px; color:#5b5858'>
								I consistently keep up to date with current technology to ensure a fast and working product.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class='aboutmepanel' style='padding:30px 0 100px 0;'>
				<div class='middlepanel'>
					<div class='myheading2' style='font-size:20px'> 
						<img src='./img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:30px 0 0 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style='text-align:center; font-size:13px; color:#5b5858; padding:0 0 0 0'>
						Developer - Designer - Painter
						<div style='padding: 30px 0 0 0; text-align:center;'>
							<input type='button' class='button2' style='font-size:12px;' value='Learn More' onclick='goAbout("` + sourcefile + `")'>				
						</div>				
					</div>
				</div>
			</div>
			<div class='blogpanel' style='padding:100px 0 60px 0; background-color:#0505051a;'>
				<div class='middlepanel'>
					<div class='myheading2' style='font-size:35px'>
						Articles
					</div></br>			
					<div id='blogcontent' class='blogcontent'>
						` + printSomeBlog(sourcefile, 4) + `
						<div style='padding: 0 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
						</div>
					</div>
				</div>
			</div>
			<div class='paintingpanel' style='padding:70px 0 70px 0;'>
				<div class='myheading2' style='font-size:35px'>
						<a href='./pages/painting/painting.html' class='slideshowtitle'>Paintings</a>
				</div></br>		
				` + printHomeSlideshow(sourcefile, 500)   +`
			</div>
		`;
	}else if(screen===1){
		return `
			<div class='freelancingpanel' style='padding:60px 50px 40px 50px;'>
				<div style='text-align:left; font-size:20px; padding:0 0 130px 0'>
					<div style='padding:20px 0 70px 0'>
						<div style='width:300px; font-family: Faune-Bold, sans-serif;padding:0 0 10px 0; color:#519ac5;font-size:25px;'>
							Design
						</div>						
						<div style='width:300px; color:#5b5858'>
							I can design the perfect product that you want. I always keep it clean and straight to the point.   
						</div>
					</div>
					<div style='float:right; padding:0 0 0px 0'>
						<div style='width:300px; font-family: Faune-Bold, sans-serif;padding:0 0 10px 0; color:#519ac5;font-size:25px;'>
							Development
						</div>						
						<div style='width:300px; color:#5b5858'>
							I consistently keep up to date with current technology to ensure a fast and working product.
						</div>
					</div>
				</div>
			</div>
			<div class='aboutmepanel' style='padding:30px 0 100px 0;'>
				<div class='middlepanel'  style='width:90%'>
					<div class='myheading2' style='font-size:20px'> 
						<img src='./img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:30px 0 0 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style='text-align:center; font-size:13px; padding:0 0 0 0'>
						Developer - Designer - Painter
						<div style='padding: 30px 0 0 0; text-align:center;'>
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
						` + printSomeBlog(sourcefile, 3) + `
						<div style='padding: 0 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
						</div>
					</div>
				</div>
			</div>
			<div class='paintingpanel' style='padding:60px 0 40px 0;'>
				<div class='myheading2' style='font-size:30px'>
						<a href='./pages/painting/painting.html' class='slideshowtitle'>Paintings</a>
				</div></br>					
				` + printHomeSlideshow(sourcefile, 450)   +`
			</div>
		`;
	}else if(screen===2){
		return `
			<div class='freelancingpanel' style='padding:60px 10px 40px 10px;'>
				<div style='text-align:left; font-size:20px; padding:0 0 130px 0'>
					<div style='padding:20px 0 70px 0'>
						<div style='width:300px; font-family: Faune-Bold, sans-serif;padding:0 0 10px 0; color:#519ac5;font-size:25px;'>
							Design
						</div>						
						<div style='width:300px; color:#5b5858'>
							I can design the perfect product that you want. I always keep it clean and straight to the point.   
						</div>
					</div>
					<div style='float:right; padding:0 0 0px 0'>
						<div style='width:300px; font-family: Faune-Bold, sans-serif;padding:0 0 10px 0; color:#519ac5;font-size:25px;'>
							Development
						</div>						
						<div style='width:300px; color:#5b5858'>
								I consistently keep up to date with current technology to ensure a fast and working product.
						</div>
					</div>
				</div>
			</div>
			<div class='aboutmepanel' style='padding:30px 0 100px 0;'>
				<div class='middlepanel' style='width:90%'>
					<div class='myheading2' style='font-size:20px'> 
						<img src='./img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:30px 0 0 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style='text-align:center; font-size:13px; padding:0 0 0 0'>
						Developer - Designer - Painter
						<div style='padding: 30px 0 0 0; text-align:center;'>
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
						` + printSomeBlog(sourcefile, 3) + `
						<div style='padding: 0 0 0 0; text-align:right;'>
							<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
						</div>
					</div>
				</div>
			</div>
			<div class='paintingpanel' style='padding:60px 0 60px 0;'>
				<div class='myheading2' style='font-size:30px'>
						<a href='./pages/painting/painting.html' class='slideshowtitle'>Paintings</a>
				</div></br>	
				` + printHomeSlideshow(sourcefile, 350)   +`
			</div>
		`;
	}
}

//This is the code that appears on the blog page
function blogContentData(screen, sourcefile, page){
	if(screen===0){
			return `
				<div class='middlepanel' style='padding:0 0 0 0'>	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div class='myheading1'>Current Articles</br></br>
						</div>
						<div id='blogcontent'>
							` + printBlogPage(sourcefile, page) + `
						</div>
					</div>
				` + checkIfMoreLeft(page) + `
				</div>
			`;
	}else if(screen===1){
		return `
			<div style='padding: 5px 25px 5px 25px'>	<!--This is the blog section.-->
				<div class='myheading1'>Current Articles</br></br>					
				<div style='text-align:left; padding:10px 0 0 0 '>
			
					<div id='blogcontent'>
						` + printBlogPage(sourcefile, page) + `
					</div>
				</div>
				` + checkIfMoreLeft(page) + `
			</div>	
		`;
	}else if(screen===2){
		return `
			<div style='padding: 5px 12px 5px 12px'>	
				<div class='myheading1'>Current Articles</br></br>					
				<div style='text-align:left; padding:10px 0 0 0 '>
		
					<div id='blogcontent'>
						` + printBlogPage(sourcefile, page) + `
					</div>
				</div>
				` + checkIfMoreLeft(page) + `
			</div>	
		`;
	}
}

//This is the code that appears on the article page
function blogArticlePage(screen,ext,postname){
	if(screen===0){
			return `
				<div class='middlepanel' >	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div id='blogcontent'>
							` + printArticle(ext,postname) + `
						</div>
					</div>
				</div>
			`;
	}else if(screen===1){
		return `		
			<div style='padding: 5px 25px 5px 25px'>
				<div style='text-align:left; padding:10px 0 0 0 '>
					<div id='blogcontent'>
						` + printArticle(ext,postname) + `
					</div>
				</div>
			</div>
		`;
	}else if(screen===2){
		return `			
			<div style='padding: 5px 12px 5px 12px'>	
				<div style='text-align:left; padding:10px 0 0 0 '>
					<div id='blogcontent'>
						` + printArticle(ext,postname) + `
					</div>
				</div>
			</div>	
		`;
	}
}

//This is the code that appears on the article page
function individualPaintingPage(screen,ext,postname){
	if(screen===0){
			return `
				<div class='middlepanel' >	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div style='width:500px;text-align: center; margin:auto'>
							` + printOnePainting(ext,postname) + `
						</div>
					</div>
				</div>
			`;
	}else if(screen===1){
		return `		
			<div style='padding: 5px 25px 5px 25px'>
				<div style='text-align:left; padding:10px 0 0 0 '>
					<div style='width:400px;text-align: center;margin:auto'>
						` + printOnePainting(ext,postname) + `
					</div>
				</div>
			</div>
		`;
	}else if(screen===2){
		return `			
			<div style='padding: 5px 12px 5px 12px'>	
				<div style='text-align:left; padding:10px 0 0 0 '>
					<div style='width:300px;text-align: center;margin:auto'>
						` + printOnePainting(ext,postname) + `
					</div>
				</div>
			</div>	
		`;
	}
}

//This is the code that appears on the painting page
function paintingContentData(screen, sourcefile){
	if(screen===0){
		return `
				<div class='middlepanel' >	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div class='myheading1'>Paintings</br>
						</div>
					</div>
					<div style='text-align:center; padding:10px 0 0 0px '>
						` + printAllPaintings(sourcefile) + `
					</div>
				</div>
		`;
	}else if(screen===1){
		return `
			<div style='padding: 5px 12px 5px 12px'>	
				<div class='myheading1'>Paintings</br></br>					
				<div style='padding:10px 0 0 0 '>
						` + printAllPaintings(sourcefile) + `
				</div>
			</div>	
		`;
	}else if(screen===2){
		return `
			<div style='padding: 5px 12px 5px 12px'>	
				<div class='myheading1'>Paintings</br></br>					
				<div style='padding:10px 0 0 0 '>
						` + printAllPaintings(sourcefile) + `
				</div>
			</div>	
		`;
	}
}

//This is the code that appears on the store page
function storeData(screen, sourcefile){
	if(screen===0){
		return `
			<div id='storecontent'>
				<div id='storewebsites' class='storesection' style='background-color:#7cb6e8;'>
					<div class='storebutton' style='width:70%; padding: 0 0 0 15%'>
						` + storeWebsites(sourcefile) + `
					</div>
				</div>
				<div id='storeshirts' class='storesection' >
					<div class='storebutton' style='width:70%;  padding: 0 0 0 15%'>
						` + storeShirts(sourcefile) + `
					</div>
				</div>
				<div id='storepaintings' class='storesection' style='background-color:#7cb6e8;'>
					<div class='storebutton' style='width:70%;  padding: 0 0 0 15%'>
						` + storePaintings(sourcefile) + `
					</div>
				</div>
			</div>
		`;
	}else if(screen===1){
		return `
			<div id='storecontent'>
				<div id='storewebsites' class='storesection' style='background-color:#7cb6e8;'>
					<div class='storebutton' style='width:90%; padding: 0 0 0 5%'>
						` + storeWebsites(sourcefile) + `
					</div>
				</div>
				<div id='storeshirts' class='storesection' >
					<div class='storebutton' style='width:90%;  padding: 0 0 0 5%'>
						` + storeShirts(sourcefile) + `
					</div>
				</div>
				<div id='storepaintings' class='storesection' style='background-color:#7cb6e8;'>
					<div class='storebutton' style='width:90%;  padding: 0 0 0 5%'>
						` + storePaintings(sourcefile) + `
					</div>
				</div>
			</div>
		`;
	}else if(screen===2){
		return `
			<div id='storecontent'>
				<div id='storewebsites' class='storesection' style='background-color:#7cb6e8;'>
					<div class='storebutton' style='width:90%; padding: 0 0 0 5%'>
						` + storeWebsites(sourcefile) + `
					</div>
				</div>
				<div id='storeshirts' class='storesection' >
					<div class='storebutton' style='width:90%;  padding: 0 0 0 5%'>
						` + storeShirts(sourcefile) + `
					</div>
				</div>
				<div id='storepaintings' class='storesection' style='background-color:#7cb6e8;'>
					<div class='storebutton' style='width:90%;  padding: 0 0 0 5%'>
						` + storePaintings(sourcefile) + `
					</div>
				</div>
			</div>
		`;
	}
}

//This is the code that appears on the about page
function aboutData(screen, sourcefile){
	if(screen===0){
		return `
				<div class='middlepanel' style='padding:35px 0 35px 0;text-align:center' >	
					<div class='myheading2' style='font-size:20px;'> 
						<img src='../img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:30px 0 0 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + aboutmeinfo + `			
					</div>
					<div style='text-align:center; font-size:15px; padding:30px 0 10px 0'>
						` + printEmailSender('400px') + `			
					</div>
				</div>
		`;
	}else if(screen===1){
		return `
			<div style='padding: 35px 8px 35px 8px'>	
				<div class='myheading2' style='font-size:20px;'> 
						<img src='../img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:30px 0 0 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + aboutmeinfo + `			
					</div>
					<div style='text-align:left; font-size:15px; padding:30px 0 10px 0'>
						` + printEmailSender('350px') + `			
					</div>
			</div>	
		`;
	}else if(screen===2){
		return `
			<div style='padding: 35px 12px 35px 12px'>	
				<div class='myheading2' style='font-size:20px;'> 
						<img src='../img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:30px 0 0 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + aboutmeinfo + `			
					</div>
					<div style='text-align:left; font-size:15px; padding:0 0 10px 0'>
						` + printEmailSender('275px') + `			
					</div>
			</div>	
		`;
	}
}

//This is the code that appears on the painting page
function projectData(screen, sourcefile){
	if(screen===0){
		return `
				<div class='middlepanel' >	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div class='myheading1'>Projects</br>
						</div>
					</div>
					<div style='text-align:center; padding:10px 0 0 0px '>
						` + printAllProjects(sourcefile) + `
					</div>
				</div>
		`;
	}else if(screen===1){
		return `
			<div style='padding: 5px 12px 5px 12px'>	
				<div class='myheading1'>Projects</br></br>					
				<div style='padding:10px 0 0 0 '>
						` + printAllProjects(sourcefile) + `
				</div>
			</div>	
		`;
	}else if(screen===2){
		return `
			<div style='padding: 5px 12px 5px 12px'>	
				<div class='myheading1'>Projects</br></br>					
				<div style='padding:10px 0 0 0 '>
						` + printAllProjects(sourcefile) + `
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
		document.getElementById('footer').innerHTML = footerData(ext);
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
		document.getElementById('footer').innerHTML = footerData(ext);
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
		document.getElementById('footer').innerHTML = footerData(ext);
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
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogContentData(1,ext,page);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogContentData(2,ext,page);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
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
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=paintingContentData(1,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=paintingContentData(2,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
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
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML+="";
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
}

//When there is a change in the size of the indow or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineAboutSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=aboutData(0,ext);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=aboutData(1,ext);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=aboutData(2,ext);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
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
		document.getElementById('contentdiv').innerHTML=storeData(0,ext);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=storeData(1,ext);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=storeData(2,ext);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
}

function printArticlePage(ext,postname){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogArticlePage(0,ext,postname);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogArticlePage(1,ext,postname);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogArticlePage(2,ext,postname);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
}

function printPaintingPage(ext,postname){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=individualPaintingPage(0,ext,postname);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=individualPaintingPage(1,ext,postname);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=individualPaintingPage(2,ext,postname);
		disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
}

function determineProjectsSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		

	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(0,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=projectData(0,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(1,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=projectData(1,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(2,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=projectData(2,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	}
}

