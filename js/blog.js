const tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
const posts = [
	{
	  date:'08/25/2018',
	  title:'[Day 1] - The Beginning and What Is This?',
	  writer:'Robert Calamari',
	  pinned: 'PINNED - ',
	  summary:'',
	  tags:'',
	  content: tab + 'For the first post I just want to go over what exactly I am trying to accomplish by doing this. I want to start a career in web development since I always enjoyed coding, and especially making websites. However I do not have much to show for it since I never fully made a finished site. So with this challange I am going to push myself and learn as much as i can within these next 100 days. Each of those days I will try to code AT LEAST an hour a day, whether it be this website, another website, or the lessons I will be taking at freecodecamp.com. I will also try to complete the entire codecamp within the 100 days too. As well as the 100 day challange posts I will also be posting other things too, like helpful links, tutorials, updates, just about antything else I can think of because I am not just making this to make it; I am making this also to help people like me, who did not know where to start, and show them that it is easy if you just put time into it.<br/><br/>' + tab + ' As of right now I know a fair amount of HTML, CSS, and Javascript. I also know some Node.JS, Socket.io, SQL, MongoDB, Java, and other smaller stuff. I keep reading up on new practices and making sure I am up to date on everything. I am hoping to learn how to make efficient front-end websites and know a fair amount of backend before this is finished. So instead of me keep blabbering on, lets get started! Thank you for taking your time for reading this!', 
	},
	/*{
	  date:'08/30/2018',
	  title:'[Day 5 - Moving onto the rest of the site',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'Today I really sat down and got a lot done. First I made some minor changes to some things that were bugging me; these included changes of how things were placed, coloring, etc. I added the blog section the same way I handled the painting section. Each blog post is an object in an array, having properties including: date, title, writer, pinned, summary, tags, and content. I then proceeded make the site responsive and that took a good amount of time. It was not too hard, but just took a while and a lot of rewriting things because I did not plan on this from the beginning. Basically there are three states the site can be in: phone, tablet, and computer. Each of these are indicated with their screen width and the site checks the width of the document screen and looks to see if it has changed. If it has it will change corresponding to the code I set it to. So the phone screen looks quite different with the computer one. It works rather well and you can test it now if you are on your computer by making the window of your browser smaller. I also found out firefox has this great web developer tool that imitates screens of other devices. If you go to "Settings - Web Developer - Responsive Design Mode", you can see that your screen changes and you can choose a device. <br/><br/>' + tab + ' Now that the website is really coming along, I thought it looked too boring. I looked around and thought a greeting section would be nice. So I made a banner that would be a picture of something for the background, while having text and a button to lead you to learn more about me and the site. This came out beautifully and really brought the site together. <i>Trust me I know, the site needs a lot of visual work, but it still is not trash!</i> I also added about me section on the homepage and created a link for each of the sections. These links need a reference to go to so I added the other pages finally. I also noticed when testing on the phone, whenever you would scroll it would change the paintings, so I am guessing it technically changes the screen size as you scroll. This was an easy fix by just only checking if the width changes on the page and not the height.'
	},*/
	{
	  date:'08/29/2018',
	  title:'[Day 4 - Finishing Up The Home Page',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'Today I really sat down and got a lot done. First I made some minor changes to some things that were bugging me; these included changes of how things were placed, coloring, etc. I added the blog section the same way I handled the painting section. Each blog post is an object in an array, having properties including: date, title, writer, pinned, summary, tags, and content. I then proceeded make the site responsive and that took a good amount of time. It was not too hard, but just took a while and a lot of rewriting things because I did not plan on this from the beginning. Basically there are three states the site can be in: phone, tablet, and computer. Each of these are indicated with their screen width and the site checks the width of the document screen and looks to see if it has changed. If it has it will change corresponding to the code I set it to. So the phone screen looks quite different with the computer one. It works rather well and you can test it now if you are on your computer by making the window of your browser smaller. I also found out firefox has this great web developer tool that imitates screens of other devices. If you go to "Settings - Web Developer - Responsive Design Mode", you can see that your screen changes and you can choose a device. <br/><br/>' + tab + ' Now that the website is really coming along, I thought it looked too boring. I looked around and thought a greeting section would be nice. So I made a banner that would be a picture of something for the background, while having text and a button to lead you to learn more about me and the site. This came out beautifully and really brought the site together. <i>Trust me I know, the site needs a lot of visual work, but it still is not trash!</i> I also added about me section on the homepage and created a link for each of the sections. These links need a reference to go to so I added the other pages finally. I also noticed when testing on the phone, whenever you would scroll it would change the paintings, so I am guessing it technically changes the screen size as you scroll. This was an easy fix by just only checking if the width changes on the page and not the height.'
	},
	{
	  date:'08/28/2018',
	  title:'[Day 3] - Getting Started Finally!',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'As for today, I actually started to get into the details of the website. I started with the header going through a few different designs. I eventually ended up with 3 tabs on the left, the logo, name, and three tabs on the right. I liked how this one look the best for personal preference. It did take me a while to figure out how to center it vertically, but now I feel rather dumb seeing how easy it was. I never knew vertical-align was something and for some reason I did not see it on many forums right away.<br/><br/>' + tab + ' But with that out of the way, I began to work on the paintings section of the home page. I was trying to figure out how to do the layout which is what took the most time, but I just eventually went with having the paintings to the right while the titles hanging to the left a little. This will eventually change because it is ugly, but for the sake of trying to finish the site it was good enough. Since I will not be using a database for this site at the moment, I will be adding the paintings to an array and each painting will be an object. Inside each paintings object, there will be the name, image name, price, sold, material, and size. I added some random pictures since I am not focused on getting them on currently. To get the homepage to display random paintings that are not sold yet, I made a recursive function that would keep calling itself until it filled an array with painting objects that have not been sold yet then returned that array. The latest painting is easy since I will be adding the paintings in chronological order, so the latest painting will always be at position[0] in the array.<br/><br/>' + tab + ' I also added the details to the footer and decided I wanted to add a contact me section at the bottom of each page, including my email, github, and instagram. I feel like it would add some flavor to the page since the footer is quite bland. As well as the footer, I added a navigation bar for mobile users. This bar will appear once a user clicks on the hamburger menu button instead of seeing the navigation header. I figured I wanted the page to look nicer on mobile instead of it not being responsive. That is all I did for today, I will leave the navbar for tomorrow as long as the blog part.<br/><br/> Also as a side note, I just found out you can host static sites on github which is wonderful. Currently that is how I will host this site, and get a domain soon. This is really incredible since now anyone can have their own custom website with ease.'
	},
	{
	  date:'08/27/2018',
	  title:'[Day 2] - Setting Up',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'Since I do not have the website built at all, the next few day posts will be about building it. Today I am going to plan out how I want the layout of the site to be and build the main layout in HTML. I figure I want to have at least 6 tab pages [ Home, Blog, Paintings, Games, About Me, and Contact]. I also figured I would have three sections of the front page, painting, blogs, and about me. This is to showcase my latest painting, and some featured paintings that will change whenever the page reloads and show only paintings that are not sold yet. The blog section will have any pinned posts, and a certain amount of the most recent posts. Finally the about me section is going to be my picture, name, and a little bit about me. And of course at the bottom I will have a header just to show where the page ends. Nothing special done today, just simple HTML and CSS just so I can have a foundation set.'
	},
	{
	  date:'PINNED - 08/25/2018',
	  title:'[Day 1] - The Beginning and What Is This?',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  tags:'pinned,coding100',
	  content: tab + 'For the first post I just want to go over what exactly I am trying to accomplish by doing this. I want to start a career in web development since I always enjoyed coding, and especially making websites. However I do not have much to show for it since I never fully made a finished site. So with this challange I am going to push myself and learn as much as i can within these next 100 days. Each of those days I will try to code AT LEAST an hour a day, whether it be this website, another website, or the lessons I will be taking at freecodecamp.com. I will also try to complete the entire codecamp within the 100 days too. Since I am currently working full time, I will not have too much time so I will do as much as I can during the day at home. As well as the 100 day challange posts I will also be posting other things too, like helpful links, tutorials, updates, just about antything else I can think of because I am not just making this to make it; I am making this also to help people like me, who did not know where to start, and show them that it is easy if you just put time into it.<br/><br/>' + tab + ' As of right now I know a fair amount of HTML, CSS, and Javascript. I also know some Node.JS, Socket.io, SQL, MongoDB, Java, and other smaller stuff. I keep reading up on new practices and making sure I am up to date on everything. I am hoping to learn how to make efficient front-end websites and know a fair amount of backend before this is finished. So instead of me keep blabbering on, lets get started! Thank you for taking your time for reading this!' 
	}
];


function printAllBlog(){
	let content = "";
	for(let i=0;i<posts.length;i++){
		content+='<div class="posttitle">' + posts[i].title + '</div><div class="postdate">' + posts[i].pinned  + posts[i].date + '</div><div class="postcontent">' + posts[i].summary + '<br /><br /></div>';
	}
	return content;
}

function printSomeBlog(num){
	let content = "";
	for(let i=0;i<num;i++){
		if(i==(num-1)){
			content+='<div><div class="posttitle">' + posts[i].title + '</div><div class="postdate">' + posts[i].pinned + posts[i].date + ' - ' + posts[i].writer + '</div><div class="postcontent">' + posts[i].content + '</div><br /></div><br />';
		}
		else{
			content+='<div style="border-bottom: 1px solid #b8b8b8;"><div class="posttitle">' + posts[i].title + '</div><div class="postdate">' + posts[i].pinned + posts[i].date + ' - ' + posts[i].writer + '</div><div class="postcontent">' + posts[i].content + '</div><br /></div><br />';		
		}
	}
	return content;
}