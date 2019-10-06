let menuopen=false; //Menu is the state of the naviagtion bar

//This is the content that will be in the navigation bar
function loadNav(sourcefile) {
	//<a href='` + sourcefile + `/pages/blog/page1.html'>Blog</a>
	//<input name="submit" alt="" type="submit" style="background-color:#111;color:white;padding: 0px 1px 0px 0px;text-decoration: none;font-size: 15px;color: #ffffff;font-family: Faune-Regular, sans-serif;border: 0;padding: 8px 8px 8px 32px;text-decoration: none;font-size: 25px;color: #818181;display: block;" value="Cart" border="0">
	document.getElementById("mysidenav").innerHTML=
				`<!-- <a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a> 
                <label class='sidenavlabel'>Menu</label> -->
				<a href='` + sourcefile + `/'>Home</a>
				<a href='` + sourcefile + `/games'>Games</a>
				<a href='` + sourcefile + `/painting'>Paintings</a> 
				<a href='` + sourcefile + `/shop'>Shop</a>
				<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" style="padding: 0px 15px 0px 0px;margin: auto;width: 85px;display: inline-block;text-align: left !important">
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
					<input type="image" src="` + sourcefile + `/img/shoppingcart.png" style="height: 30px;width: 30px;" border="0" name="submit" alt="">

					
			</form>`;

}

//This is when you click on the menu button, it will either open or close the navigation bar
function openNav() {
	if(menuopen==false){
		document.getElementById("mysidenav").style.height = "253px"; //This is how big it opens up to

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



