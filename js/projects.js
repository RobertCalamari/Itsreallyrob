const projects = [
	{
	  title:"Robert Calamari",
	  url:"http://robertcalamari.com",
	  info:"Javascript, Node.JS, HTML, CSS",
	  img:"/img/CalamariBlack.png"
	},
	{
	  title:"Beachbox",
	  url:"https://beachboxnow.com",
	  info:"Wordpress",
	  img:"/img/beachboxlogored.png.jfif"
	}
];

const futureprojects = ["Mystic Title Website", "Multi Mini Game", "Drawing With Friends"];


function printAllProjects(sourcefile){
	let content = "";
	for(let i=0;i<projects.length;i++){
		content+=`
			<div style="flex: 0 0 50%; max-width: 50%; width: 100%; position: relative; min-height: 1px; box-sizing: inherit;">
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

function printAllFutureProjects(sourcefile){
	let content = '<ul style="text-align:left;display:inline;float: left;">';
	let content2 = '<ul style="text-align:left;display:inline;float: right;">';
	for(let i=0;i<futureprojects.length;i++){
		if(i%2==0){
			content+=`
				    <li style="padding: 5px 5px 5px 0;">` + futureprojects[i] + `</li>
				`;	
		}else{
			content2+=`
				    <li style="padding: 5px 5px 5px 0;">` + futureprojects[i] + `</li>
				`;	
		}
			
	}
	content+="</ul>";
	content2+="</ul>";
	return '<div style="margin: auto;width: 80%;display: inline-block;color: #5b5858;">' + content + content2 + '</div>';
}

function printAllFutureProjectsFull(sourcefile){
	let content = '<ul style="text-align:left;">';
	for(let i=0;i<futureprojects.length;i++){
			content+=`
				    <li style="padding: 5px 0px 5px 0;">` + futureprojects[i] + `</li>
				`;	
	}
	content+="</ul>";
	return '<div style="margin: auto;width: 80%;display: inline-block;color: #5b5858;">' + content + '</div>';
}