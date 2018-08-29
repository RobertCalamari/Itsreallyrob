let menuopen=false; //Menu is the state of the naviagtion bar

//This is the content that will be in the navigation bar
function loadNav() {

	document.getElementById("mysidenav").innerHTML=
				`<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>
                <label class='sidenavlabel'>Menu</label>
				<a href='index.html'>Home</a>
				<a href='./pages/blog/blog.html'>Blog</a>
				<a href='#'>Painting</a> 
				<a href='#'>Games</a>
				<a href='#'>About Me</a>
				<a href='#'>Contact</a>`;

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
function goHome() {
	window.location.href = 'index.html';
}