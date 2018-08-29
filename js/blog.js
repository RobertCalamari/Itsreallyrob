const posts = [
	{
	  date:'08/28/2018',
	  title:'Test One Haha',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'1111This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/27/2018',
	  title:'Test OH HERES ANOTHER Haha',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'222222222222222222222222This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/26/2018',
	  title:'Heres too not being last!',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'33333333333333333333333333333333333333333333This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/25/2018',
	  title:'Womp WOmp WOMp WOMPPPPPP',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'44444444444444444444444444444444444444444444444 4444444444444444This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/27/2018',
	  title:'Test OH HERES ANOTHER Haha',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'222222222222222222222222This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/26/2018',
	  title:'Heres too not being last!',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'33333333333333333333333333333333333333333333This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/25/2018',
	  title:'Womp WOmp WOMp WOMPPPPPP',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'444444444444444444444444444444444444444444444444 444444444444444This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/27/2018',
	  title:'Test OH HERES ANOTHER Haha',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'222222222222222222222222This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/26/2018',
	  title:'Heres too not being last!',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'33333333333333333333333333333333333333333333This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	},
	{
	  date:'08/25/2018',
	  title:'Womp WOmp WOMp WOMPPPPPP',
	  writer:'Robert Calamari',
	  summary:'This is just a quick summary of what I wrote, we will see if I use it and how effective it is!',
	  content:'44444444444444444444444444444444444444444444 4444444444444444444This is a test, it is going to be a blog post so it has to be kind of long. I should use that thing that they always said to use but i am too lazy to google it so I am going to just type this instead. Wonder how it will come out. I have been doing well so far, but there is so much more I need to get done. Hopefully everything will work out in the end.', 
	}
];


function printAllBlog(){
	let content = "";
	for(let i=0;i<posts.length;i++){
		content+='<div class="posttitle">' + posts[i].title + '</div><div class="postdate">' + posts[i].date + '</div><div class="postcontent">' + posts[i].summary + '<br /><br /></div>';
	}
	return content;
}

function printSomeBlog(num){
	let content = "";
	for(let i=0;i<num;i++){
		content+='<div style="border-bottom: 1px solid #b8b8b8;padding"><div class="posttitle">' + posts[i].title + '</div><div class="postdate">' + posts[i].date + ' - ' + posts[i].writer + '</div><div class="postcontent">' + posts[i].content + '</div><br /></div><br />';
	}
	return content;
}