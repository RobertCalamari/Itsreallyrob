let menuopen=false; //Menu is the state of the naviagtion bar

//This is the content that will be in the navigation bar
function loadNav(sourcefile) {

	document.getElementById("mysidenav").innerHTML=
				`<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>
                <label class='sidenavlabel'>Menu</label>
				<a href='` + sourcefile + `/index.html'>Home</a>
				<a href='` + sourcefile + `/pages/blog/page1.html'>Blog</a>
				<a href='` + sourcefile + `/pages/painting/painting.html'>Paintings</a> 
				<a href='` + sourcefile + `/pages/projects/projects.html'>Projects</a>
				<a href='` + sourcefile + `/pages/aboutme.html'>About Me</a>
				<a href='` + sourcefile + `/pages/store.html'>Store</a>`;

}

//This is when you click on the menu button, it will either open or close the navigation bar
function openNav() {
	if(menuopen==false){
		document.getElementById("mysidenav").style.width = "200px"; //This is how big it opens up to
		menuopen=true;
	}
	else
	{
		document.getElementById("mysidenav").style.width = "0"; //This makes it disappear
		menuopen=false;
	}
	
	
}

//This will close the navigation bar
function closeNav() {
	document.getElementById("mysidenav").style.width = "0";
	menuopen=false;
} 

//Go back to the home page
function goHome(sourcefile) {
	window.location.href = sourcefile + '/index.html';
}

function goPainting(sourcefile) {
	window.location.href = sourcefile + '/pages/painting/painting.html';
}
function goAbout(sourcefile) {
	window.location.href = sourcefile + '/pages/aboutme.html';
}
function goBlog(sourcefile) {
	window.location.href = sourcefile + '/pages/blog/page1.html';
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








