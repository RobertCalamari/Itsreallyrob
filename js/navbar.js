let menuopen=false; //Menu is the state of the naviagtion bar

//This is the content that will be in the navigation bar
function loadNav(sourcefile) {

	document.getElementById("mysidenav").innerHTML=
				`<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>
                <label class='sidenavlabel'>Menu</label>
				<a href='` + sourcefile + `/index.html'>Home</a>
				<a href='` + sourcefile + `/pages/blog/blog.html'>Blog</a>
				<a href='` + sourcefile + `/pages/painting/painting.html'>Painting</a> 
				<a href='` + sourcefile + `/pages/games/games.html'>Games</a>
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
	window.location.href = sourcefile + '/pages/blog/blog.html';
}