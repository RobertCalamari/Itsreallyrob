
let menuopen=false; //Menu is the state of the naviagtion bar

//This is the code to print out the footer ribbon
function footerData(sourcefile){
	return `<div class='information' id='information'>
			
		<div style='float:right; padding-top: 28px; padding-right: 14px;'>
			Robert Calamari 2019
		</div>

	</div>
`;
}

//This is the code to print out the contact ribbon
function contactData(sourcefile){

	var iconsize = 35;
	return `
	<div style="color:white;font-size: 18px;margin-top: 55px; letter-spacing: 9px;">
		CONNECT WITH ME
	</div>
	<div display='inline-block' style="margin-top: 23px; position: relative;">		
		<a href='https://www.youtube.com/channel/UCdPBWaJq5FfT2xe4kKF4Ubw?view_as=subscriber'><img src='` + sourcefile + `/img/youtube.png' class='contactpics' style="position: absolute; top: 10px; left: calc(50% - 91px);" alt='Email' height='` + (iconsize + 4) + `' width='` + (iconsize + 4) + `'></a>
		<a href='https://twitter.com/Its_Really_Rob'><img src='` + sourcefile + `/img/twitter.png' class='contactpics' style="position: absolute; top: 10px; left: calc(50% - 42px);" alt='Email' height='` + (iconsize + 2) + `' width='` + (iconsize + 2) + `'></a>
		<a href='https://instragram.com/robertcalamari'><img src='` + sourcefile + `/img/insta.png' class='contactpics' style="position: absolute; top: 10px; left: calc(50% + 7px);" alt='Instagram' height='` + (iconsize + 1) + `' width='` + (iconsize + 1) + `'></a>
		<a href='https://github.com/robertcalamari'><img src='` + sourcefile + `/img/github.png' class='contactpics' style="position: absolute; top: 9px; left: calc(50% - -52px);" alt='Github' height='` + (iconsize + 4) + `' width='` + (iconsize + 4) + `'></a>		
	</div>`;
	
}

//This is the code to print out the header ribbon  .

//<a class='header' href='` + sourcefile + `/pages/blog/page1.html'>Blog</a>
//<input name="submit" alt="" type="submit" style="background-color:black;color:white;padding: 0px 1px 0px 0px;text-decoration: none;font-size: 15px;color: #ffffff;font-family: Faune-Regular, sans-serif;border: 0" class="header" value="Cart" border="0">
function headerData(sourcefile){
	return `

			<div class="swapheaderphone" style='width:100%;visibility: hidden;padding-bottom: 10px;'>
				<div style='position: absolute; left: 10px; padding-left:0px;'>
					<img src='` + sourcefile + `/img/combinedlogo.png' class='menubutt' alt='' height='80' width='330' onclick='goHome("` + sourcefile + `")'>
				</div>
				<div style='position: absolute; right: 10px; padding:8px 22px 0 0 ;'>
					<img src='` + sourcefile + `/img/hambmenu2.png' class='menubutt' alt='Menu' height='70' width='40' style='align=right' onclick='openNav("` + sourcefile + `")'> 
				</div>	
			</div>

			<div class="swapheadercomputer">
				<div style="max-width: 1100px;margin: auto; position: relative;">
					<div style='padding-left:0px; text-align: left; position: absolute; left:0;'>
						<img src='` + sourcefile + `/img/combinedlogo.png' class='menubutt' alt='' style="margin-top: -8px;" height='80' width='330' onclick='goHome("` + sourcefile + `")'>
					</div>
					<div style='padding:21px 22px 0 0; text-align: right; position: absolute; right:0;'>
						<a class='hdrbtn' href='` + sourcefile + `/' style="">Home</a>
						<a class='hdrbtn' href='` + sourcefile + `/robin' style="">Robin</a>
						<a class='hdrbtn' href='` + sourcefile + `/games' style="">Games</a>
						<a class='hdrbtn' href='` + sourcefile + `/painting' style="">Paintings</a>
						<a class='hdrbtn' href='` + sourcefile + `/shop' style="">Shop</a>
						<form class='hdrbtn' target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" style="padding: 0px 0px 0px 0px;margin: auto;width: 34px;display: inline-block;text-align: left !important">
								<input type="hidden" name="cmd" value="_s-xclick">
								<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
								<input type="image" src="` + sourcefile + `/img/shoppingcart.png" border="0" name="submit" alt="" style="height: 20px;width: 20px; position: absolute; top: 23px;">
						</form>
					</div>	
				</div>
			</div>
		`;
}

function loadNav(sourcefile) {
	//<a href='` + sourcefile + `/pages/blog/page1.html'>Blog</a>
	//<input name="submit" alt="" type="submit" style="background-color:#111;color:white;padding: 0px 1px 0px 0px;text-decoration: none;font-size: 15px;color: #ffffff;font-family: Faune-Regular, sans-serif;border: 0;padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;" value="Cart" border="0">
	document.getElementById("mysidenav").innerHTML=
				`<!-- <a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a> 
                <label class='sidenavlabel'>Menu</label> -->
				<a href='` + sourcefile + `/'>Home</a>
        		<a href='` + sourcefile + `/robin'>Robin</a>
        		<a href='` + sourcefile + `/games'>Games</a>
				<a href='` + sourcefile + `/painting'>Paintings</a> 
				<a href='` + sourcefile + `/shop'>Shop</a>
				<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" style="padding: 0px 15px 0px 0px;margin: auto;width: 85px;display: inline-block;text-align: left !important">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
					<input type="image" src="` + sourcefile + `/img/shoppingcart.png" style="height: 30px;width: 30px;" border="0" name="submit" alt="">
			</form>`;

}

//This is the code that outputs the big image ribbon on the front page
function infoBoxData(sourcefile){ 
	document.getElementById('infobox').innerHTML = `

			<div class="slider-holder">
		        <span id="slider-image-1"></span>
		        <span id="slider-image-2"></span>
		        <span id="slider-image-3"></span>
		        <div id="image-holder" class="image-holder">
		            <div style="position:relative;" class="slider-image">
			            <img src="` + sourcefile + `/img/4.jpg" width="100%" height="120%" style="position: absolute; left: 0;" />
			            <div style="position:absolute; top: 54%; left: 50%; transform: translateX(-50%) translateY(-50%);">
			            <h1 class="titlemain">ROBERT CALAMARI</h1>
			 			<h3 class="subtextmain">Web Design - Paintings - Games</h3></div>
		            </div>
		            <div style="position:relative;" class="slider-image">
			            <img src="` + sourcefile + `/img/2.jpg" width="100%" height="100%" style="position: absolute; left: 0;"  />
			            <div style="position:absolute; top: 44%; left: 50%; transform: translateX(-50%) translateY(-50%);">Number 2</div>
		            </div>
		            <div style="position:relative;" class="slider-image">
			            <img src="` + sourcefile + `/img/3.jpg" width="100%" height="100%" style="position: absolute; left: 0;"  />
			            <div style="position:absolute; top: 44%; left: 50%; transform: translateX(-50%) translateY(-50%);">Number 3</div>
		            </div>
		        </div>
		        <div class="button-holder" style="visibility:hidden;">
		            <div id="slider-image-1" class="slider-change" onclick="changeImageHolder('1')"></div>
		            <div id="slider-image-2" class="slider-change" onclick="changeImageHolder('2')"></div>
		            <div id="slider-image-3" class="slider-change" onclick="changeImageHolder('3')"></div>
		        </div>
		    </div>	`;	

		    const vpWidth  = document.documentElement.clientWidth;
			document.getElementById("image-holder").style.width = (vpWidth*3 + "px");			
			// <div class='textbox center' style="width: 854px;">
			// 		<h1 class="titlemain">ROBERT CALAMARI</h1>
			// 		<h3 class="subtextmain">Web Design - Paintings - Games</h3>
			// </div>
			// <div class="learnmorebox" onclick="smoothSlideIntoView('#aboutmepanel')">
			// 	<div class="learnmoretext subtextmain" >More Info Below</div>
			// 	<br>
			// 	<div class="learnmorearrow FA-downarrow"></div>
			// </div> 

}

function changeImageHolder(width){
	const vpWidth  = document.documentElement.clientWidth;
	if(width == 1){
		document.getElementById("image-holder").style.left = "0px";
	}else if(width == 2){
		document.getElementById("image-holder").style.left = (0-vpWidth) + "px";
	}else if(width == 3){
		document.getElementById("image-holder").style.left = (0-vpWidth*2) + "px";
	}
}

//This is the code that will output what appears on the home screen
function homeContentData(sourcefile){
	
	document.getElementById('contentdiv').innerHTML = `
			<div class='middlepanel' id="aboutmepanel" style='padding-top:50px; padding-bottom:100px;'>
					<div class='myheading2' style='font-size:20px;position: relative; z-index: 200;'> 
						<img src='../img/mypic.png' class='infopic' alt='PIC' height=150 width=150><br/>
						<div style='padding:45px 0 66px 0'>ROBERT J. CALAMARI JR</div> 				
					</div><br/>
					<div style="text-align:justify; font-size:15px; color: #5b5858; margin:auto;">
						Welcome to my website! This website was developed by me as a way to show off everything I can do, whether it is from painting, or to my coding experiences. I have experience with <b>Javascript, HTML5, CSS3, Node.JS, MongodDB, SQL, Adobe Products (Photoshop, After Effects, Premiere, Illustrator), and GIT.</b> As well as minor experience in <b>Socket.IO, SQL, React, WordPress, and PHP.</b> I have been painting since 2015 and coding since 2014. Below are all the projects that I have been working on. If you have any questions about freelance work or anything else, please feel free to email me at <b>rjcalamari@gmail.com</b>.		
					</div>
			</div>
			<div class='blogpanel' id="blogpanel" style='padding:100px 0 100px 0; background-color:#0505051a;'>
				<div class='myheading1'>Projects</br>
				</div>
				<div >
					` + printAllProjects(sourcefile) + `
				</div>
		 	</div>
			
		`;

		// <div class='blogpanel' id="blogpanel" style='padding:50px 0 50px 0; background-color:#0505051a;'>
				
				
		// 	</div>
		// 	<div class='paintingpanel' style='padding:60px 0 60px 0;'>
				
		// 	</div>
	// setTimeout(function() {
	// 	startPictureFading(vpWidth, sourcefile, allpaintings, 0);	
	// }, 1000);
}


function updateMainPageContent(ext){
	const vpWidth  = document.documentElement.clientWidth; //Get the width of the screen
		
	//Header
	document.getElementById('header').innerHTML=headerData(ext);
	//Contact
	document.getElementById('contacthome').innerHTML= contactData(ext);
	//Footer
	document.getElementById('footer').innerHTML = footerData(ext);
	
}


//This is when you click on the menu button, it will either open or close the navigation bar
function openNav() {
	if(menuopen==false){
		document.getElementById("mysidenav").style.height = "300px"; //This is how big it opens up to

		menuopen=true;
	}
	else
	{
		document.getElementById("mysidenav").style.height = "0"; //This makes it disappear
		menuopen=false;
	}
	
	
}

//This will close the navigation bar
function closeNav() {
	document.getElementById("mysidenav").style.height = "0";
	menuopen=false;
} 

function loadAd(sourcefile) {
	document.getElementById("mysidead").innerHTML=
				`<a href='javascript:void(0)' class='closebtn' onclick='closeAd()'>&times;</a>
				 <label class='sidenavlabel'>Are you looking to own a website? Want to get notified when something is posted? Then click <a href='` + sourcefile + `/pages/aboutme.html#messageform'>here</a>!</label>
				`;

	setTimeout(function(){ openAd() }, 6000);

}

function openAd() {
	document.getElementById("mysidead").style.width = "250px";
} 

function closeAd() {
	document.getElementById("mysidead").style.width = "0";
} 

//Go back to the home page
function goHome(sourcefile) {
	window.location.href = sourcefile + '/';
}

function goPainting(sourcefile) {
	window.location.href = sourcefile + '/painting';
}
function goBlog(sourcefile) {
	window.location.href = sourcefile + '/blog';
}

function onLinkClick(target) {
  document.getElementById(target).scrollIntoView();
}



//This is the code to take things out of the url - Thanks to https://stackoverflow.com/questions/8486099/how-do-i-parse-a-url-query-parameters-in-javascript

function getJsonFromUrl(hashBased) {
  var query;
  if(hashBased) {
    var pos = location.href.indexOf("?");
    if(pos==-1) return [];
    query = location.href.substr(pos+1);
  } else {
    query = location.search.substr(1);
  }
  var result = {};
  query.split("&").forEach(function(part) {
    if(!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version
    var eq = part.indexOf("=");
    var key = eq>-1 ? part.substr(0,eq) : part;
    var val = eq>-1 ? decodeURIComponent(part.substr(eq+1)) : "";
    var from = key.indexOf("[");
    if(from==-1) result[decodeURIComponent(key)] = val;
    else {
      var to = key.indexOf("]",from);
      var index = decodeURIComponent(key.substring(from+1,to));
      key = decodeURIComponent(key.substring(0,from));
      if(!result[key]) result[key] = [];
      if(!index) result[key].push(val);
      else result[key][index] = val;
    }
  });
  return result;
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function smoothSlideIntoView(item){
  document.querySelector(item).scrollIntoView({ 
    behavior: 'smooth' 
  });
}



function limitCharSize(theword, charsize){

  if(theword.length <= charsize){
    return theword + "<br>&nbsp";
  }else{
    return theword;
  }
}

var getCumulativeOffset = function (obj) {
    var left, top;
    left = top = 0;
    if (obj.offsetParent) {
        do {
            left += obj.offsetLeft;
            top  += obj.offsetTop;
        } while (obj = obj.offsetParent);
    }
    return {
        x : left,
        y : top
    };
};

