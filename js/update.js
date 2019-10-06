//This is the code to print out the footer ribbon
function footerData(sourcefile){
	return `<div class='information' id='information'>
			
		<div style='float:right; padding-top: 28px; padding-right: 14px;'>
			Robert Calamari 2018
		</div>

	</div>
`;
}

//This is the code to edit the about me section on the front page
const aboutmeinfo = "I majored in Information Technology and minored in Computer Science at the New Jersey Institute of Technology, where I obtained a Bachelors of Science in 2018. I have always enjoyed creating things, and the thrill of solving puzzles and challenges. So in my spare time I usually am painting or teaching myself to code. I created this website from scratch for the challenge of it, and also to show my work that I have been accomplishing. I have experience with <b>Javascript, HTML5, CSS3, Node.JS, MongodDB, SQL, Adobe Products (Photoshop, After Effects, Premiere, Illustrator), and GIT.</b> As well as minor experience in <b>Socket.IO, SQL, React, WordPress, and PHP.</b> <br/><br/>" + 

"If you have any questions regarding paintings or coding, please feel free to email me at <b>rjcalamari@gmail.com</b>.";	

//This is the code to print out the contact ribbon
function contactData(sourcefile){

	var iconsize = 35;
	return `
	<div style="color:white;font-size: 18px;margin-top: 55px; letter-spacing: 9px;">
		CONNECT WITH ME
	</div>
	<div display='inline-block' style="margin-top: 23px; position: relative;">		
		<a href='https://www.youtube.com/channel/UCdPBWaJq5FfT2xe4kKF4Ubw?view_as=subscriber'><img src='` + sourcefile + `/img/youtube.png' class='contactpics' style="position: absolute; top: 10px; left: calc(50% - 115px);" alt='Email' height='` + (iconsize + 4) + `' width='` + (iconsize + 4) + `'></a>
		<a href='https://twitter.com/Its_Really_Rob'><img src='` + sourcefile + `/img/twitter.png' class='contactpics' style="position: absolute; top: 10px; left: calc(50% - 67px);" alt='Email' height='` + (iconsize + 2) + `' width='` + (iconsize + 2) + `'></a>
		<a href='https://instragram.com/robertcalamari'><img src='` + sourcefile + `/img/insta.png' class='contactpics' style="position: absolute; top: 10px; left: calc(50% - 18px);" alt='Instagram' height='` + (iconsize + 1) + `' width='` + (iconsize + 1) + `'></a>
		<a href='https://github.com/robertcalamari'><img src='` + sourcefile + `/img/github.png' class='contactpics' style="position: absolute; top: 9px; left: calc(50% - -29px);" alt='Github' height='` + (iconsize + 4) + `' width='` + (iconsize + 4) + `'></a>		
	</div>`;
	
}

//This is the code to print out the header ribbon

//<a class='header' href='` + sourcefile + `/pages/blog/page1.html'>Blog</a>
//<input name="submit" alt="" type="submit" style="background-color:black;color:white;padding: 0px 1px 0px 0px;text-decoration: none;font-size: 15px;color: #ffffff;font-family: Faune-Regular, sans-serif;border: 0" class="header" value="Cart" border="0">
function headerData(vpWidth, sourcefile){
	return `

			<div class="swapheaderphone" style='width:100%;visibility: hidden;padding-bottom: 10px;'>
				<div style='position: absolute; left: 10px; padding-left:0px;'>
					<img src='` + sourcefile + `/img/CalamariWhite2.png' class='menubutt' alt='' height='80' width='80' onclick='goHome("` + sourcefile + `")'>
					<img src='` + sourcefile + `/img/Logo.png' class='menubutt' alt='' height='60' width='180' onclick='goHome("` + sourcefile + `")'> 
				</div>
				<div style='position: absolute; right: 10px; padding:8px 22px 0 0 ;'>
					<img src='` + sourcefile + `/img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav("` + sourcefile + `")'> 
				</div>	
			</div>

			<div class="swapheadercomputer">
				<a class='hdrbtn' href='` + sourcefile + `/' style="position: absolute; top: 34px; left: calc(50% - 263px);">Home</a>
				<a class='hdrbtn' href='` + sourcefile + `/games' style="position: absolute; top: 34px; left: calc(50% - 204px);">Games</a>
				<a class='hdrbtn' href='` + sourcefile + `/blog' style="position: absolute; top: 34px; left: calc(50% - 142px);">Blog</a>
				<img src='` + sourcefile + `/img/Logo2.png' class='menubutt hdrbtn' alt='' height='70' width='275' style="margin-left: 77px;" onclick='goHome("` + sourcefile + `")'>
				<a class='hdrbtn' href='` + sourcefile + `/painting' style="position: absolute; top: 37px; left: calc(50% + 180px);">Paintings</a>
				<a class='hdrbtn' href='` + sourcefile + `/shop' style="position: absolute; top: 37px; left: calc(50% + 261px);">Shop</a>
				<form class='hdrbtn' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" style="position: absolute; top: 37px; left: calc(50% + 314px); padding: 0px 15px 0px 0px;margin: auto;width: 34px;display: inline-block;text-align: left !important">
						<input type="hidden" name="cmd" value="_s-xclick">
						<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
						<input type="image" src="` + sourcefile + `/img/shoppingcart.png" border="0" name="submit" alt="" style="height: 20px;width: 20px;">
				</form>
			</div>
		`;
}

//This is the code that outputs the big image ribbon on the front page
function infoBoxData(vpWidth,sourcefile){ 
	return `
			
			<div class='textbox center' style="width: 854px;">
					<h1 class="titlemain">ROBERT CALAMARI</h1>
					<h3 class="subtextmain">Web Design - Paintings - Games</h3>
			</div>
			<div class="learnmorebox">
				<a href="./index.html#aboutmepanel" class="learnmoretext subtextmain" >More Info Below</a>
				<br>
				<a href="./index.html#aboutmepanel" class="learnmorearrow FA-downarrow"></a>
			</div> 	`;	
			//<input type='button' class='infoboxcontentbutton' style='font-size:` + buttonfont1 + `px; width:` + buttonwidth1 + `px;padding:` + buttonpadding1 + `px ` + buttonpadding1 + `px;' value='Dive in to learn more!' onclick='goAbout("` + sourcefile + `")'>
		
		//<img src='` + sourcefile + `/img/underwater.jpg' class='infopic' alt='PIC' style='background-color:black; z-index:-1;' height=auto width=100%>
}

//This is the code that will output what appears on the home screen
function homeContentData(vpWidth, sourcefile){
	
	return `
			<div class='middlepanel' id="aboutmepanel" style='padding-top:50px; padding-bottom:50px;'>
					<div class='myheading2' style='font-size:20px;'> 
						<img src='../img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:45px 0 66px 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style="text-align:justify; font-size:15px; color: #5b5858; margin:auto;">
						` + aboutmeinfo + `			
					</div>
					<div style='text-align:center; padding:0px 0 0 0px;'>
						<div class='myheading1'>Projects</br>
						</div>
					</div>
					<div style='display: flex; margin:auto; padding: 0 20px 0 20px; max-width: 500px;'>
						` + printAllProjects(sourcefile) + `
					</div>
			</div>
			<div class='blogpanel' id="blogpanel" style='padding:50px 0 50px 0; background-color:#0505051a;'>
				<div class='myheading2' style='font-size:35px; color:black'>
					<a href="./index.html#aboutmepanel">Blog</a>
				</div></br>			
				<div id='blogcontent' class='blogcontent' style="padding:0 20px 0px 20px;max-width: 1100px;margin:auto;">
					` + printSomeBlog(sourcefile, 4) + `
					<!--<div style='padding: 0 0 0 0; text-align:right;'>
						<input type='button' class='button2' style='font-size:12px;' value='Read More' onclick='goBlog("` + sourcefile + `")'>
					</div>-->
				</div>
				
			</div>
			<div class='paintingpanel' style='padding:60px 0 60px 0;'>
				<div class='myheading2' style='font-size:30px'>
						<a href='./pages/painting/painting.html' class='slideshowtitle'>Paintings</a>
				</div></br>					
				` + printHomeSlideshow(sourcefile, 500)   +`
			</div>
		`;


}

//This is the code that appears on the blog page
function blogContentData(vpWidth, sourcefile, page){
	
			return `
				<div class='middlepanel' style=''>	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div class='myheading1'>Current Articles</br></br>
						</div>
						<div id='blogcontent'>
							` + printBlogPage(sourcefile, page) + `
						</div>
					</div>
				<div style='padding: 0px 0px 45px 0px'>
					` + checkIfMoreLeft(page) + `
				</div>
				</div>
			`;
}

//This is the code that appears on the article page
function blogArticlePage(vpWidth,ext,postname){
	
			return `
				<div class='middlepanel' style=''>	
					<div style='text-align:left; padding:10px 0 0 0px '>
						<div id='blogcontent'>
							` + printArticle(ext,postname) + `
						</div>
					</div>
				</div>
			`;
}

//This is the code that appears on the article page
function individualPaintingPage(vpWidth,ext,postname){
	
	return `
		<div class='middlepanel' >	
			<div style='max-width:500px;text-align: center; margin:auto'>
				` + printOnePainting(ext, postname) + `
			</div>
		</div>
	`;
}

//This is the code that appears on the painting page
function paintingContentData(vpWidth, sourcefile){
	
	return `
			<div class='middlepanel' style='padding: 5px 20px 5px 20px' >	
				<div style="font-size: 12px; padding-top: 8px; padding-bottom: 9px;">
					All of the below paintings are available for purchase - please see the Shop page for additional information.  I am additionally available to create custom pieces upon request.
				</div>
				<div>
					<div id="robertpainting" class='myheading2' style="display: inline-block;padding-right: 25px; text-decoration: underline;"><a href='#' class='slideshowtitle' onclick="setPaintingContent('` + sourcefile + `', 'Robert Calamari');">Robert Calamari</a>
					</div>
					<div style="display: inline-block;font-family: 'Gravity-Regular';">
						|
					</div>
					<div id="jeremypainting" class='myheading2' style="display: inline-block;padding-left: 25px;"><a href='#' class='slideshowtitle' onclick="setPaintingContent('` + sourcefile + `', 'Jeremy Louie');">Jeremy Louie</a>
					</div>
				</div>
				<div id="allpaintingcontent">
					` + printAllPaintings(sourcefile, 'Robert Calamari') + `
				</div>
			</div>
	`;
	
}

//This is the code that appears on the store page
function storeData(vpWidth, sourcefile, postname){
	
		return `
			<div class='middlepanel' style='padding:35px 0 35px 0;text-align:center;' >
				<div id='storecontent'>	
				` +	printShop(sourcefile, postname) + `
				</div>
			</div>
		`;
}

//When there is a change in the size of the window or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineRobinSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
	
	//Header
	document.getElementById('header').innerHTML=headerData(vpWidth,ext);
	//Content
	//document.getElementById('contentdiv').innerHTML=homeContentData(vpWidth,ext);
	//Contact
	document.getElementById('contacthome').innerHTML= contactData(ext);
	//Footer
	document.getElementById('footer').innerHTML = footerData(ext);
}

function determineSecretSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
	
	//Header
	document.getElementById('header').innerHTML=headerData(vpWidth,ext);
	//Content
	//document.getElementById('contentdiv').innerHTML=homeContentData(vpWidth,ext);
	//Contact
	document.getElementById('contacthome').innerHTML= contactData(ext);
	//Footer
	document.getElementById('footer').innerHTML = footerData(ext);
}

function determineHomeSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
	
	//Header
	document.getElementById('header').innerHTML=headerData(vpWidth,ext);
	//Infobox
	document.getElementById('infobox').innerHTML=infoBoxData(vpWidth,ext);
	//Content
	document.getElementById('contentdiv').innerHTML=homeContentData(vpWidth,ext);
	//Contact
	document.getElementById('contacthome').innerHTML= contactData(ext);
	//Footer
	document.getElementById('footer').innerHTML = footerData(ext);
	showSlides(1);
}

//When there is a change in the size of the window or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//0,1,2 are the first page, while 3,4,5 are the other pages
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineBlogSize(ext,page){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogContentData(vpWidth,ext,page);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

//When there is a change in the size of the window or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determinePaintingSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=paintingContentData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

//When there is a change in the size of the window or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineGameSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML="";
		printGameData(vpWidth,ext);
		fixscreen(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

//When there is a change in the size of the window or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineAboutSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=aboutData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
	disableButton();
}

//When there is a change in the size of the window or screen it will update the content to fit it
//0 represents a computer screen, 1 is a tablet, and 2 is a phone
//the first number will always represent the screen it is on
//ext is the location the file is in relative to index
function determineStoreSize(ext,postname){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=storeData(vpWidth,ext,postname);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
	//disableButton();
}

function printArticlePage(ext,postname){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=blogArticlePage(vpWidth,ext,postname);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

function printPaintingPage(ext,postname){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=individualPaintingPage(vpWidth,ext,postname);
		//disableButton();
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

function determineProjectsSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Content
		document.getElementById('contentdiv').innerHTML=projectData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

function determineDrawSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
	
}

function determinePaintSize(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
	var c = document.getElementById('sketchpad');
	var ctx = c.getContext("2d");
	if(vpWidth >= 1030){
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML= contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);
		
		var imgData=ctx.getImageData(0,0,c.width,c.height);
		document.getElementById('sketchpad').width="500";
		document.getElementById('sketchpad').height="500";
		ctx.putImageData(imgData,0,0);
	}
	else if(vpWidth >=430 && vpWidth <=1029){
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);

		var imgData=ctx.getImageData(0,0,c.width,c.height);
		document.getElementById('sketchpad').width="400";
		document.getElementById('sketchpad').height="400";
		ctx.putImageData(imgData,0,0);
	}
	else{
		//Header
		document.getElementById('header').innerHTML=headerData(vpWidth,ext);
		//Contact
		document.getElementById('contacthome').innerHTML = contactData(ext);
		//Footer
		document.getElementById('footer').innerHTML = footerData(ext);

		var imgData=ctx.getImageData(0,0,c.width,c.height);
		document.getElementById('sketchpad').width="350";
		document.getElementById('sketchpad').height="400";
		ctx.putImageData(imgData,0,0);

	}
}


function limitCharSize(theword, charsize){

	if(theword.length <= charsize){
		return theword + "<br>&nbsp";
	}else{
		return theword;
	}
}
