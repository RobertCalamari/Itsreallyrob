let menuopen=false;
function loadNav() {

	document.getElementById("mysidenav").innerHTML="<a href='javascript:void(0)' class='closebtn' onclick='closeNav()'>&times;</a>" +
                    " <label class='sidenavlabel'>Games</label> <a href='spyfall.html'>Spyfall</a>";

}


function openNav() {
	if(menuopen==false){
		document.getElementById("mysidenav").style.width = "250px";
		menuopen=true;
	}
	else
	{
		document.getElementById("mysidenav").style.width = "0";
		menuopen=false;
	}
	
	
}


function closeNav() {
	document.getElementById("mysidenav").style.width = "0";
	menuopen=false;
} 


function goHome() {
	window.location.href = 'index.html';
}