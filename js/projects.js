const projects = [
	{
	  title:"Robert Calamari",
	  url:"robertcalamari.com",
	  info:"HTML, CSS, Javascript",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Beachbox",
	  url:"robertcalamari.com",
	  info:"Wordpress",
	  img:"/img/beachboxlogoblack.png"
	}
];

function printAllProjects(sourcefile){
	let content = "";
	for(let i=0;i<projects.length;i++){
		content+=`
			<div style="display:inline-block;padding:0 5px 5px 5px;">
				<div class="posttitle">
					<a href="` + projects[i].url + `">` + projects[i].title + `</a> 
				</div>
				<div class="postimage">
					<a href="` + projects[i].url + `"><img src='` + sourcefile + projects[i].img + `' class='contactpics'  alt='LOGO' height='75' width='75'></a> 
				</div>
				<div class="postdate">
					` + projects[i].info + `
				</div>
			</div>`;		
	}

	return content;
}