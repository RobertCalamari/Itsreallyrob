//Paintings go in order by newest on bottom. So paintings[0] should be the oldest
const paintings = [
	{
	  name:'A Lone Barn',
	  img:'1 ALoneBarn.jpg',
	  price:5,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Cliff Side',
	  img:'2 CliffSide.jpg',
	  price:5,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'A Journey Left By The Adventurer',
	  img:'3 AJourneyLeftByTheAdventurer.jpg',
	  price:5,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Saavy Tsunami',
	  img:'4 SavvyTsunami.jpg',
	  price:10,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Woman Alone',
	  img:'5 WomanAlone.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Awaiting Death',
	  img:'6 AwaitingDeath.jpg',
	  price:10,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Skater Boi',
	  img:'7 SkaterBoi.jpg',
	  price:15,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The Lone Tree Weeps During Sunset',
	  img:'8 TheLoneTreeWeepsDuringSunset.jpg',
	  price:20,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'When Death Arises',
	  img:'9 WhenDeathArises.jpg',
	  price:10,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Floating Island',
	  img:'10 FloatingIsland.jpg',
	  price:15,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Alone',
	  img:'11 Alone.jpg',
	  price:20,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Fall Time By The Lake',
	  img:'12 FallTimeByTheLake.jpg',
	  price:25,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Cowboy At Dusk Time',
	  img:'13 CowboyAtDuskTime.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Nighttime Lake',
	  img:'13 NighttimeLake.jpg',
	  price:25,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Chasing',
	  img:'14 Chasing.jpg',
	  price:15,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'I Hate Painting Trees',
	  img:'15 IHatePaintingTrees.jpg',
	  price:60,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Fox',
	  img:'16 Fox.jpg',
	  price:60,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Water Lillies',
	  img:'16 WaterLillies.jpg',
	  price:25,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The Far Beyond',
	  img:'17 TheFarBeyond.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'L.A. Sunset',
	  img:'18 LASunset.jpg',
	  price:40,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'White Flowers Flourish In Spring',
	  img:'19 WhiteFlowersFlourishInSpring.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The Morning Aftermath',
	  img:'20 TheMorningAftermath.jpg',
	  price:40,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The Infinite Garden',
	  img:'21 TheInfiniteGarden.jpg',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Balancing Good And Even',
	  img:'22 BalancingGoodAndEven.jpg',
	  price:40,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Bird Bath Break',
	  img:'23 BirdBathBreak.jpg',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Theres Always More To Explore',
	  img:'24 TheresAlwaysMoreToExplore.jpg',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Peeping Tom',
	  img:'25 PeepingTom.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Dark Daisy',
	  img:'26 DarkDaisy.jpg',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Super Mario 64',
	  img:'27 SuperMario64.jpg',
	  price:75,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Love Comes In All Shapes And Sizes',
	  img:'28 LoveComesInAllShapesAndSizes.jpg',
	  price:40,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'I Call This One Bold And Brash',
	  img:'29 ICallThisOneBoldAndBrash.JPG',
	  price:40,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Mysterious Night',
	  img:'30 MysteriousNight.jpg',
	  price:200,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Beach Bum Days',
	  img:'31 BeachBumDays.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'City Of Love',
	  img:'32 CityOfLove.jpg',
	  price:40,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Origins',
	  img:'33 Origins.jpg',
	  price:75,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Red Hot Chili Peppers',
	  img:'34 RedHotChiliPeppers.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The Crap Nebula',
	  img:'35 TheCrapNebula.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Red Delicious Apple',
	  img:'36 RedDeliciousApple.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'My Dad',
	  img:'37 MyDad.jpg',
	  price:'Priceless',
	  sold:true,
	  material:'Acrylic on Tile',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Dreary Trees',
	  img:'38 DrearyTrees.jpg',
	  price:80,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Pumpkin',
	  img:'39 Pumpkin.jpg',
	  price:60,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Surfer Girl',
	  img:'40 SurferGirl.JPG',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Walking For Miles',
	  img:'41 WalkingForMiles.jpg',
	  price:75,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Observing',
	  img:'42 Observing.jpg',
	  price:75,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Tweeting',
	  img:'43 Tweeting.jpg',
	  price:60,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Hawaii Beach',
	  img:'44 HawaiiBeach.jpg',
	  price:60,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Blue Daisy',
	  img:'45 BlueDaisy.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Red Rose',
	  img:'46 RedRose.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Family Photo',
	  img:'47 FamilyPhoto.jpg',
	  price:'Priceless',
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Looking Up',
	  img:'48 LookingUp.jpg',
	  price:75,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Western Sky',
	  img:'49 WesternSky.jpg',
	  price:200,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Midnight Bay',
	  img:'50 MidnightBay.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Fishing',
	  img:'51 Fishing.jpg',
	  price:70,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Sunflower',
	  img:'52 Sunflower.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'New Jersey Beach',
	  img:'53 NewJerseyBeach.jpg',
	  price:60,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Waterfall Amongst The Night',
	  img:'54 WaterfallAmongstTheNight.jpg',
	  price:40,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Water Lilies 2',
	  img:'55 WaterLilies.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Purple Flower',
	  img:'56 PurpleFlower.jpg',
	  price:50,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Two Deers',
	  img:'57 TwoDeers.jpg',
	  price:100,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Space Tree',
	  img:'58 SpaceTree.jpg',
	  price:25,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Flying Away',
	  img:'59 FlyingAway.jpg',
	  price:40,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Borderline Good',
	  img:'60 BorderlineGood.jpg',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Conquering The Wall',
	  img:'61 ConqueringTheWall.jpg',
	  price:40,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The World Above',
	  img:'62 TheWorldAbove.jpg',
	  price:100,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Harry Potter Emblem',
	  img:'63 HarryPotterEmblem.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'The Last EC',
	  img:'64 TheLastEC.jpg',
	  price:1,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Colorize',
	  img:'65 Colorize.jpg',
	  price:60,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'More Treasures Than Pockets',
	  img:'66 MoreTreasuresThanPockets.jpg',
	  price:80,
	  sold:true,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Bluejay',
	  img:'67 Bluejay.jpg',
	  price:60,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'Crap Nebula Over Calm Lake',
	  img:'68 CrapNebulaOverCalmLake.jpg',
	  price:50,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
	},
	{
	  name:'900 Nautical Miles Away',
	  img:'69 900NauticalMilesAway.jpg',
	  price:150,
	  sold:false,
	  material:'Oil on Canvas',
	  size:'TBD',
	  description: 'An Original Calamari'  
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
		let issold = "";
		if(paintings[real].sold == true){
			issold = '<img src="' + ext + '/img/sold.png"  alt="PIC" height="130" width="130">';
		}
		content+=`
			<div class="homepics" style="display: inline-block;"><a href="` + ext + `/pages/painting/paintingpage.html?name=` + paintings[real].name + `" >
				<div style='position:relative; display: inline-block;'>				
					<img src="` + ext + `/img/paintings/smallpaintings/` + paintings[real].img + `"  style="padding: 0px 2px 2px 2px;" alt="PIC" height="130" width="130">
					<div style='color:red; position: absolute; top:-2px; left:0px;'>
						` + issold + `
					</div>	
				</div>	
			</a></div>`;
	}
	return content;
}

function prevPainting() {
	return `

	`;
}

function printOnePainting(ext,postname){
	buttonprint="";
	for(let i=0;i<paintings.length;i++){
		if(postname==paintings[i].name){
			let avail="Available";
			if(paintings[i].sold == true){
				avail="Sold";
			}
			if(i==(paintings.length)-1){
				buttonprint=`

					<input id="paintingnext" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px; float:right' type="button" value="Next" onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i-1].name + `'" />				
				`;
			}else if(i==0){
				buttonprint=`
					<input id="paintingprev" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px; float:left' type='button' value='Prev' onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i+1].name + `'" />

				`;
			}else{
				buttonprint=`
					<input id="paintingprev" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px; float:left' type='button' value='Prev' onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i+1].name + `'" />
					<input id="paintingnext" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px; float:right' type="button" value="Next" onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i-1].name + `'" />				
				`;
			}
			

			return `
				<div class='paintingbox'>
					<div style='width:100%; padding:30px 0 5px 37px'>
						` + buttonprint + `
					</div>
					<div class='paintingtitle'>
						` + paintings[i].name + `
					</div>
					<div class='paintingimage'>
						<img src='` + ext + `/img/paintings/` + paintings[i].img + `' id='../../img/paintings/` + paintings[i].img + `' class="biggerpic" style="padding: 0px 2px 2px 2px;" alt="PIC" height=auto width=100% onclick="picBig(this.id)">
					</div>
					<div class='paintinginfo'>
						<div style='padding: 0 0 15px 0;'>
							<div class='paintingprice'>
								$` + paintings[i].price + ` <br />
								` + avail + `
							</div>
							<div class='paintingsize'>
								Size: ` + paintings[i].size + ` <br />
								` + paintings[i].material + `
							</div>
						</div>
						<div class='paintingdescription'>
							` + paintings[i].description + `
						</div>
						<br /> If you would like to purchase this painting, please email me at <b>rjcalamari@gmail.com</b> or fill out the form below. Price does not include shipping. Payment is currently through venmo or paypal.<br /><br />
							` + printPaintingBuySender(paintings[i].price, paintings[i].name, paintings[i].sold) + `
					</div>
				</div><br />
			`;
		}
	}
	return "That painting does not exist!";
}

function printPaintingTitle(ext,postname){
	for(let i=0;i<paintings.length;i++){
		if(postname==paintings[i].name){
			return paintings[i].name + " | Robert Calamari";
		}
	}
	return "";
}

//This is all of the code for the slide show://////////////////////////////////////
function printHomeSlideshow(ext,wid){
	//This creates an array for the featured paintings. the second input is how many paintings you want to display
	const featpaintings=[];
	findFeaturedPainting(featpaintings,5, ext);

	return `
	<div class="slideshow-container">

  		<div class="mySlides fade">
   	 		<div class="numbertext">1 / 5</div>
    			<img src="` + ext + `/img/paintings/smallpaintings/` + paintings[paintings.length-1].img + `" class="slideshowpaintings" id="` + paintings[paintings.length-1].name + `" style="width:` + wid + `px; height:` + wid + `px" onclick="goToPainting(this.id)">
    		<div class="text">Newest</div>
  		</div>
  		<div class="mySlides fade">
    		<div class="numbertext">2 / 5</div>
    			<img src="` + ext + `/img/paintings/smallpaintings/` + featpaintings[1].img + `" class="slideshowpaintings" id="` + featpaintings[1].name + `" style="width:` + wid + `px; height:` + wid + `px" onclick="goToPainting(this.id)">
    		<div class="text">Featured</div>
  		</div>

  		<div class="mySlides fade">
    		<div class="numbertext">3 / 5</div>
    			<img src="` + ext + `/img/paintings/smallpaintings/` + featpaintings[2].img + `" class="slideshowpaintings" id="` + featpaintings[2].name + `" style="width:` + wid + `px; height:` + wid + `px" onclick="goToPainting(this.id)">
    		<div class="text">Featured</div>
  		</div>
  		<div class="mySlides fade">
    		<div class="numbertext">4 / 5</div>
    			<img src="` + ext + `/img/paintings/smallpaintings/` + featpaintings[3].img + `" class="slideshowpaintings" id="` + featpaintings[3].name + `" style="width:` + wid + `px; height:` + wid + `px" onclick="goToPainting(this.id)">
    		<div class="text">Featured</div>
  		</div>
		<div class="mySlides fade">
    		<div class="numbertext">5 / 5</div>
    			<img src="` + ext + `/img/paintings/smallpaintings/` + featpaintings[4].img + `" class="slideshowpaintings" id="` + featpaintings[4].name + `" style="width:` + wid + `px; height:` + wid + `px" onclick="goToPainting(this.id)">
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
 		<span class="dot" onclick="currentSlide(5)"></span>
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

function goToPainting(name) {
	window.location.href = './pages/painting/paintingpage.html?name=' + name;
}




