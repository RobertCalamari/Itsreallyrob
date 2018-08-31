const tab = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
const posts = [
	{
	  date:'PINNED - 08/25/2018',
	  title:'[Day 1] - The Beginning and What Is This?',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  image1:'',
	  image2:'',
	  image3:'',
	  tags:'pinned,coding100',
	  content: tab + 'For the first post I just want to go over exactly what I am trying to accomplish by doing this. I want to start a career in web development since I have always enjoyed coding and especially enjoy making websites. However, I do not have much to show for it since I have never fully made a finished site. With this challenge, I am going to push myself and learn as much as I can within these next 100 days. Each of those days I will try to code for AT LEAST an hour a day, whether it be this website, another website, or the lessons I will be taking at freecodecamp.com. I will also try to complete the entire codecamp within the 100 days. In addition to the 100-day-challenge posts, I will also be posting other things as well. These will include helpful links, tutorials, updates, or just about anything else I can think of, because I am not just making this to make it. I am making this to help people like me - people who are unsure where to begin- and to show them that it can be easy if you put the time and effort into it.<br/><br/>' + tab + 
					'As of right now I know a fair amount of HTML, CSS, and Javascript. I also know some Node.JS, Socket.io, SQL, MongoDB, Java, and other smaller stuff. I keep reading up on new practices to ensure that I am up-to-date on everything. I am hoping to learn how to make efficient front-end websites, as well as to learn a fair amount of backend before this is finished. So instead of continuing to blabber on, let’s get started! Thank you for taking the time to read this!' 
	},
	{
	  date:'08/27/2018',
	  title:'[Day 2] - Setting Up',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  image1:'',
	  image2:'',
	  image3:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + ' Since I do not have the website built at all, the posts for the next few days will be about building it. Today I am going to plan out how I want the layout of the site to be and build the main layout in HTML. I figure I want to have at least 6 tab pages [ Home, Blog, Paintings, Games, About Me, and Contact]. I also figured I would have three sections of the front page: painting, blogs, and about me. This is to showcase my latest painting, and some featured paintings that will change whenever the page reloads. This will also only show paintings that are not sold yet. The blog section will have any pinned posts, and a certain amount of the most recent posts. Finally the about me section is going to be my picture, name, and a little bit about me. And of course at the bottom I will have a footer just to show where the page ends. Nothing special done today, just simple HTML and CSS so I can have a foundation set.'
	},
	{
	  date:'08/28/2018',
	  title:'[Day 3] - Getting Started Finally!',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  image1:'',
	  image2:'',
	  image3:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'As for today, I actually started to get into the details of the website. I started with the header. I went through a few different designs. I eventually ended up with 3 tabs on the left: the logo, the name, and three tabs on the right. I liked how this one look the best for personal preference. It did take me a while to figure out how to center it vertically, but now I feel rather dumb seeing how easy it was. I never knew vertical-align was something and for some reason I did not see it on many forums right away.<br/><br/>' + tab + 
					'But with that out of the way, I began to work on the paintings section of the home page. I was trying to figure out how to do the layout which is what took the most time. I eventually went with having the paintings to the right while the titles hung to the left a little. This will eventually change because it is ugly, but for the sake of trying to finish the site it was good enough. Since I will not be using a database for this site at the moment, I will be adding the paintings to an array and each painting will be an object. Inside each painting’s object, there will be the name, image name, price, sold, material, and size. I added some random pictures since I am not focused on getting them on currently. To get the homepage to display random paintings that are not sold yet, I made a recursive function that would keep calling itself until it filled an array with painting objects that have not been sold yet and then returned that array. The latest painting is easy since I will be adding the paintings in chronological order, so the latest painting will always be at position[0] in the array.<br/><br/>' + tab + 
					'I also added details to the footer and decided I wanted to add a “contact me” section at the bottom of each page, which includes my email, github, and instagram. I felt like it would add some flavor to the page since the footer was quite bland. In addition to the footer, I added a navigation bar for mobile users. This bar will appear once a user clicks on the hamburger menu button instead of seeing the navigation header. I figured I wanted the page to look nicer on mobile instead of it not being responsive. That is all I did for today, I will leave the navbar for tomorrow as the blog part.<br/><br/>'+
					'Also as a side note, I just found out you can host static sites on github, which is wonderful. Currently that is how I will host this site and get a domain soon. This is really incredible since now anyone can have their own custom website with ease.'
	},
	{
	  date:'08/29/2018',
	  title:'[Day 4] - Finishing Up The Home Page',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  image1:'',
	  image2:'',
	  image3:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'Today I really sat down and got a lot done. First I made some minor changes to some things that were bugging me. These changes included how things were placed, coloring, etc. I added the blog section the same way I handled the painting section. Each blog post is an object in an array, having properties including: date, title, writer, pinned, summary, tags, and content. I then proceeded to make the site responsive, and that took a good amount of time. It was not too hard, but it took a while. It included a lot of rewriting things because I did not plan on this from the beginning. <br/><br/>' + tab + 
					'Basically there are three states the site can be in: phone, tablet, and computer. Each of these are indicated with their screen width, and the site checks the width of the document screen and looks to see if it has changed. If it has, it will change corresponding to the code I set it to. So the phone screen looks quite different with the computer one. It works rather well, and you can test it now if you are on your computer by making the window of your browser smaller. I also found out Firefox has this great web developer tool that imitates screens of other devices. If you go to "Settings - Web Developer - Responsive Design Mode", you can see that your screen changes and you can choose a device. <br/><br/>' + tab + 
					'Now that the website is really coming along, I thought it looked too boring. I looked around and thought a greeting section would be nice. So I made a banner that would be a picture of something for the background, while having text and a button to lead you to learn more about me and the site. This came out beautifully and really brought the site together. Trust me, I know the site needs a lot of visual work, but it still is not trash! I also added the “about me” section on the homepage and created a link for each of the sections. These links need a reference to go to so I added the other pages finally. I also noticed when testing on the phone, whenever you scrolled it would change the paintings. I am guessing it technically changes the screen size as you scroll. This was an easy fix by just only checking if the width changes on the page and not the height.'
	},
	{
	  date:'08/30/2018',
	  title:'[Day 5] - Cracking Down On The Blog',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  image1:'',
	  image2:'',
	  image3:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'It was finally time to stop messing around with the homepage and move on to the rest of the site. But believe me, I am going to get back and make it look nice as soon as I have some content in the other pages. I did do some tweaking to the site, like giving the links that I had and made them into a button for a better appearence. I also added in some more test paintings for when I get down to making that. I also rewrote some code that I saw was not needed or just really repetitive. <br /><br/>' + tab + 
					'To start off with the blog content, I finally added all the data objects to the blog array so that I could have something to test with. I never made a blog before so I was not sure how to go about doing this. After some thinking I decided to make a few blog page htmls, this way people can go back to the page if they wanted to. After that I started to make some functions that would print out a certain number of posts per page, as of right now I have it set to 4. This was a bit challanging but I almost have it finished due to not having enough time today to finish it. I will leave it for tomorrow and start working on the painting section once I am finished.' + 
					'<div style="height:auto;width:100%"><img src="../../img/screenshots/frontpage1.png" alt="Screenshot" width=300px></div>'
	},
	{
	  date:'08/31/2018',
	  title:'[Day 6] - Total Redesign',
	  writer:'Robert Calamari',
	  pinned: '',
	  summary:'',
	  image1:'',
	  image2:'',
	  image3:'',
	  tags:'coding100, javascript, html, css',
	  content: tab + 'So after some feedback, I decided that I really need to rethink this design. The first thing I wanted to do though was finish up the blog page first. I did a 360 on that too and redid how all the code worked so that posts[0] would always be the oldest post. I also did this to paintings, where paintings[0] is the oldest painting. This seems kind of arbitrary but later on it will makes things easier do to posts/paintings having their own pages. The way the posts section works now is that each page will print out 4 posts on each page, if possible. <br /><br/>' + tab + 
					'As for the front page, someone sent me this post <a href="http://blog-en.tilda.cc/articles-website-design-mistakes">here</a> and I looked up a few more blogging sites. I went ahead and followed this path since it does look professional and neater. I also decided to add a slider where the paintings are and that looks rather dashing. I still have so much more to do, but I will be on vacation this weekend with no laptop, so i will be having the next update on sunday.'
	}
];

function repeatPrint(start, num){
	let content = "";
	for(let i=0;i<num;i++){
		ntp=(start-i)-1;
		if(i==(num-1)){
			content+=
			`<div class='blogpost'>
				<div class="posttitle">
					` + posts[ntp].title + `
				</div>
				<div class="postdate">
					` + posts[ntp].pinned + posts[ntp].date + ` - ` + posts[ntp].writer + `
				</div><div class="postcontent">
					` + posts[ntp].content + `
				</div>
			</div><br />`;
		}
		else{
			content+='<div style="border-bottom: 1px solid #b8b8b8;"><div class="posttitle">' + posts[ntp].title + '</div><div class="postdate">' + posts[ntp].pinned + posts[ntp].date + ' - ' + posts[ntp].writer + '</div><div class="postcontent">' + posts[ntp].content + '</div><br /></div><br />';		
		}
	}
	return content;
}

function printAllBlog(){
	return repeatPrint(posts.length,posts.length);
}

function printSomeBlog(num){
	let content = "";
	content=repeatPrint(posts.length,num);
	//content='<div style="border-bottom: 1px solid #b8b8b8;"><div class="posttitle">' + posts[0].title + '</div><div class="postdate">' + posts[0].pinned + posts[0].date + ' - ' + posts[0].writer + '</div><div class="postcontent">' + posts[0].content + '</div><br /></div><br />' + content;	
	return content;
}

const perpage = 4;
function printBlogPage(page){
	let donetotal = (page*perpage)-perpage;
	let lefttotal = posts.length-donetotal;
	if(lefttotal>=4){
		return repeatPrint(lefttotal,perpage);
	}else{
		return repeatPrint(lefttotal,lefttotal);
	}
	
}

function nextBlog(page){
	page=parseInt(page)+1;	
	window.location.href = './page'+page+'.html';
}

function prevBlog(page){
	page=parseInt(page)-1;	
	window.location.href = './page'+page+'.html';
}