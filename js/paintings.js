//Paintings go in order by newest on bottom. So paintings[0] should be the oldest
const paintings = [
	{
	  name:'Sailboat',
	  img:'sailboat.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20'  
	},
	{
	  name:'Orange Flower',
	  img:'flower.jpg',
	  price:50,
	  sold:false,
	  material:'oil on canvas',
	  size:'15x20'  
	},
	{
	  name:'Austin',
	  img:'austin.jpg',
	  price:20,
	  sold:true,
	  material:'digital',
	  size:'10x10'  
	},
	{
	  name:'Nat',
	  img:'nat.jpg',
	  price:15,
	  sold:true,
	  material:'digital',
	  size:'10x10'  
	},
	{
	  name:'Spacesuit',
	  img:'spacesuit.jpeg',
	  price:1000,
	  sold:true,
	  material:'sculpture',
	  size:'70x70'  
	},
	{
	  name:'Cat',
	  img:'cat.jpg',
	  price:100,
	  sold:true,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Dog',
	  img:'dog.jpg',
	  price:500,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Einstein',
	  img:'einstein.jpeg',
	  price:314,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Love Boat',
	  img:'love.jpg',
	  price:600,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Fruits of My Labor',
	  img:'stillart.jpeg',
	  price:1005,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Sunflowers',
	  img:'sunflowers.jpg',
	  price:120,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'The Van Goes',
	  img:'vango.jpeg',
	  price:1001,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	}
];

//Featured paintings are paintings that have not been sold yet. This goes through and finds
//random ones so that you always see a different not sold painting when theres a refresh
function findFeaturedPainting(arr, total){
	let rand=Math.floor(Math.random() * paintings.length); 
	if(paintings[rand].sold==false){	
		for(let i=0;i<arr.length;i++){
			if(arr[i]===paintings[rand]){
				return findFeaturedPainting(arr,total);
			}
		}
		
		arr.push(paintings[rand]);		
		if(arr.length===total){	
			return arr;	
		}
		else{
			return findFeaturedPainting(arr,total);
		}
	} 
	else{
		return findFeaturedPainting(arr,total);
	}
}

//This prints all paintings out
function printAllPaintings(ext){
	let content = "";
	for(let i=0;i<paintings.length;i++){
		content+='<img src="' + ext + '/img/paintings/' + paintings[i].img + '" class="homepics" style="padding: 0px 2px 2px 2px;" alt="PIC" height="130" width="130">';
	}
	return content;
}





//This is all of the code for the slide show://////////////////////////////////////
function printHomeSlideshow(ext,wid){
	//This creates an array for the featured paintings. the second input is how many paintings you want to display
	const featpaintings=[];
	findFeaturedPainting(featpaintings,4, ext);
	return `
	<div class="slideshow-container">

  		<div class="mySlides fade">
   	 		<div class="numbertext">1 / 4</div>
    			<img src="` + ext + `/img/paintings/` + paintings[paintings.length-1].img + `" style="width:` + wid + `px; height:` + wid + `px">
    		<div class="text">Newest</div>
  		</div>
  		<div class="mySlides fade">
    		<div class="numbertext">2 / 4</div>
    			<img src="` + ext + `/img/paintings/` + featpaintings[1].img + `" style="width:` + wid + `px; height:` + wid + `px">
    		<div class="text">Featured</div>
  		</div>

  		<div class="mySlides fade">
    		<div class="numbertext">3 / 4</div>
    			<img src="` + ext + `/img/paintings/` + featpaintings[2].img + `" style="width:` + wid + `px; height:` + wid + `px">
    		<div class="text">Featured</div>
  		</div>
  		<div class="mySlides fade">
    		<div class="numbertext">4 / 4</div>
    			<img src="` + ext + `/img/paintings/` + featpaintings[3].img + `" style="width:` + wid + `px; height:` + wid + `px">
    		<div class="text">Featured</div>
  		</div>

  		<!-- Next and previous buttons -->
  		<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  		<a class="next" onclick="plusSlides(1)">&#10095;</a>
	</div>
	<br>

	<!-- The dots/circles -->
	<div style="text-align:center">
  		<span class="dot" onclick="currentSlide(1)"></span>
  		<span class="dot" onclick="currentSlide(2)"></span>
 		<span class="dot" onclick="currentSlide(3)"></span>
 		<span class="dot" onclick="currentSlide(4)"></span>
	</div> `;

}

var slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Update the slideshow
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 






