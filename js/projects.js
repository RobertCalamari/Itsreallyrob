const projects = [
	{
	  title:"Robert Calamari",
	  url:"https://robertcalamari.com",
	  program:"Javascript, Node.JS, HTML, CSS",
	  desc:"Robert Calamari was my first website I ever created from scratch. This site was started to act as a personal resume, but ended up being more. I now try to create a game every month, upload and sell my paintings, and keep track of all of my other coding projects.",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Beachbox",
	  url:"https://beachboxnow.com",
	  program:"Wordpress",
	  desc:"Beachbox was one of the first projects I worked on where I had a team involved. This was a capstone for my last year in college. This company takes boxing to a whole other level, combining technology and boxing, to optimize your workout!",
	  img:"/img/beachboxlogored.png"
	},
	{
	  title:"Web Application - Budgeting App",
	  url:"https://www.robertcalamari.com/pages/robin/robin.html?app=budget",
	  program:"Javascript, Node.JS, HTML, CSS, MongoDB",
	  desc:"A web application where you can store all your purchases and paychecks. Keep track of all your spending data, and limit how much you are spending each week.",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Web Application - List/Randomizer",
	  url:"https://www.robertcalamari.com/pages/robin/robin.html?app=randomizer",
	  program:"Javascript, Node.JS, HTML, CSS, MongoDB",
	  desc:"A web application where you can create lists and have the option to randomize the contents of specific lists if you can't decide on something.",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Game - Drawing With Friends",
	  url:"https://www.robertcalamari.com/pages/games/gameshome.html?game=Drawing",
	  program:"Javascript, Node.JS, HTML, CSS",
	  desc:"A simple drawing app where you can send doodles with friends!",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Game - Booze or Lose",
	  url:"https://www.robertcalamari.com/pages/games/gameshome.html?game=Booze",
	  program:"Javascript, Node.JS, HTML, CSS",
	  desc:"A group drinking game where you answer the prompts and follow the instructions! Play it at home or on the go!",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Game - Eight Deadly Legs",
	  url:"https://www.robertcalamari.com/pages/games/gameshome.html?game=DeadlyLegs",
	  program:"Javascript, Node.JS, HTML, CSS",
	  desc:"Need to setup a drinking olympics on the fly? Look no further! Just start this game and everything will be set up for you!",
	  img:"/img/CalamariBlack.png"
	}
];


function printAllProjects(sourcefile){
	let content = "";
	for(let i=0;i<projects.length;i++){
		var lORr = "right";
		var addBorder = "border-bottom: 1px solid; border-color:#bbb;"
		if(i%2==0){
			var lORr = "left";
		}
		if(i==(projects.length-1)){
			addBorder = "";
		}

		content+=`
			<div class="projectCont" style="` + addBorder + `;">
				<div class="projImg" style="padding-right: 33px;">
					<a href="` + projects[i].url + `"><img src='` + sourcefile + projects[i].img + `' class='contactpics'  alt='LOGO' height='150' width='150'></a> 
				</div>
				<div class="projInfo" style="float: ` + lORr + `;">
					<div class="projTitle">
						<a href="` + projects[i].url + `">` + projects[i].title + `</a> 
					</div>
					<div class="projProgram">
						` + projects[i].program + `
					</div>
					<div class="projDesc">
						` + projects[i].desc + `
					</div>

				</div>

			</div>`;		
	}

	return content;
}
