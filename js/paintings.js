//Paintings go in order by newest on bottom. So paintings[0] should be the oldest
const paintings = [
	{
	  name:'A Lone Barn',
	  img:'1 ALoneBarn.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Cliff Side',
	  img:'2 CliffSide.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'A Journey Left By The Adventurer',
	  img:'3 AJourneyLeftByTheAdventurer.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Saavy Tsunami',
	  img:'4 SavvyTsunami.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Woman Alone',
	  img:'5 WomanAlone.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Awaiting Death',
	  img:'6 AwaitingDeath.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Skater Boi',
	  img:'7 SkaterBoi.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The Lone Tree Weeps During Sunset',
	  img:'8 TheLoneTreeWeepsDuringSunset.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'When Death Arises',
	  img:'9 WhenDeathArises.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Floating Island',
	  img:'10 FloatingIsland.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Alone',
	  img:'11 Alone.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Fall Time By The Lake',
	  img:'12 FallTimeByTheLake.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Cowboy At Dusk Time',
	  img:'13 CowboyAtDuskTime.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Nighttime Lake',
	  img:'13 NighttimeLake.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Chasing',
	  img:'14 Chasing.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'I Hate Painting Trees',
	  img:'15 IHatePaintingTrees.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Fox',
	  img:'16 Fox.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Water Lillies',
	  img:'16 WaterLillies.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The Far Beyond',
	  img:'17 TheFarBeyond.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'L.A. Sunset',
	  img:'18 LASunset.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'White Flowers Flourish In Spring',
	  img:'19 WhiteFlowersFlourishInSpring.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The Morning Aftermath',
	  img:'20 TheMorningAftermath.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The Infinite Garden',
	  img:'21 TheInfiniteGarden.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Balancing Good And Even',
	  img:'22 BalancingGoodAndEven.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Bird Bath Break',
	  img:'23 BirdBathBreak.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Theres Always More To Explore',
	  img:'24 TheresAlwaysMoreToExplore.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Peeping Tom',
	  img:'25 PeepingTom.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Dark Daisy',
	  img:'26 DarkDaisy.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Super Mario 64',
	  img:'27 SuperMario64.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Love Comes In All Shapes And Sizes',
	  img:'28 LoveComesInAllShapesAndSizes.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'I Call This One Bold And Brash',
	  img:'29 ICallThisOneBoldAndBrash.JPG',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Mysterious Night',
	  img:'30 MysteriousNight.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Beach Bum Days',
	  img:'31 BeachBumDays.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'City Of Love',
	  img:'32 CityOfLove.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Origins',
	  img:'33 Origins.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Red Hot Chili Peppers',
	  img:'34 RedHotChiliPeppers.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The Crap Nebula',
	  img:'35 TheCrapNebula.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Red Delicious Apple',
	  img:'36 RedDeliciousApple.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'My Dad',
	  img:'37 MyDad.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Dreary Trees',
	  img:'38 DrearyTrees.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Pumpkin',
	  img:'39 Pumpkin.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Surfer Girl',
	  img:'40 SurferGirl.JPG',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Walking For Miles',
	  img:'41 WalkingForMiles.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Observing',
	  img:'42 Observing.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Tweeting',
	  img:'43 Tweeting.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Hawaii Beach',
	  img:'44 HawaiiBeach.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Blue Daisy',
	  img:'45 BlueDaisy.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Red Rose',
	  img:'46 RedRose.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Family Photo',
	  img:'47 FamilyPhoto.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Looking Up',
	  img:'48 LookingUp.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Western Sky',
	  img:'49 WesternSky.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Midnight Bay',
	  img:'50 MidnightBay.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Fishing',
	  img:'51 Fishing.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Sunflower',
	  img:'52 Sunflower.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'New Jersey Beach',
	  img:'53 NewJerseyBeach.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Waterfall Amongst The Night',
	  img:'54 WaterfallAmongstTheNight.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Water Lilies',
	  img:'55 WaterLilies.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Purple Flower',
	  img:'56 PurpleFlower.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Two Deers',
	  img:'57 TwoDeers.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Space Tree',
	  img:'58 SpaceTree.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Flying Away',
	  img:'59 FlyingAway.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Borderline Good',
	  img:'60 BorderlineGood.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Conquering The Wall',
	  img:'61 ConqueringTheWall.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The World Above',
	  img:'62 TheWorldAbove.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Harry Potter Emblem',
	  img:'63 HarryPotterEmblem.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'The Last EC',
	  img:'64 TheLastEC.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Colorize',
	  img:'65 Colorize.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'More Treasures Than Pockets',
	  img:'66 MoreTreasuresThanPockets.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Bluejay',
	  img:'67 Bluejay.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'Crap Nebula Over Calm Lake',
	  img:'68 CrapNebulaOverCalmLake.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
	},
	{
	  name:'900 Nautical Miles Away',
	  img:'69 900NauticalMilesAway.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20',
	  description: 'This is the description. You can write about the painting here!'  
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
	for(let i=paintings.length;i>0;i--){
		let real = i-1;
		content+=`
			<a href="` + ext + `/pages/painting/paintingpage.html?name=` + paintings[real].name + `">
				<img src="` + ext + `/img/paintings/` + paintings[real].img + `" class="homepics" style="padding: 0px 2px 2px 2px;" alt="PIC" height="130" width="130">
			</a>`;
	}
	return content;
}

function printOnePainting(ext,postname){
	for(let i=0;i<paintings.length;i++){
		if(postname==paintings[i].name){
			let avail="Available";
			if(paintings[i].sold == true){
				avail="Not Available";
			}
			return `
				<div class='paintingbox'>
					<div class='paintingtitle'>
						` + paintings[i].name + `
					</div>
					<div class='paintingimage'>
						<img src='` + ext + `/img/paintings/` + paintings[i].img + `' id='../../img/paintings/` + paintings[i].img + `' class="biggerpic" style="padding: 0px 2px 2px 2px;" alt="PIC" height=auto width="320" onclick="picBig(this.id)">
					</div>
					<div class='paintinginfo'>
						<div class='paintingprice'>
							$` + paintings[i].price + `
						</div>
						<div class='paintingavail'>
							` + avail + `
						</div><br /> 
						<div class='paintingdescription'>
							` + paintings[i].description + `
						</div>
					</div>
				</div><br />
			`;
		}
	}
	return "That painting does not exist!";
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






