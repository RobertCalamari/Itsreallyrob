//Paintings go in order by newest on bottom. So paintings[0] should be the oldest
//0 is available, 1 is sold, 2 is not available
let paintings = [];

function retrievePaintings(){
	socket.emit('getPaintings',{});
}

function retrievedPaintings(data){
	let num = 0;
	for(var i in data){
		paintings[data[i].order] = data[i];
		num++;
	}
	//console.log(data);
	//console.log(paintings);
	//console.log(oldpaintings);
}

//Featured paintings are paintings that have not been sold yet. This goes through and finds
//random ones so that you always see a different not sold painting when theres a refresh
function findFeaturedPainting(arr, total){
	let rand=Math.floor(Math.random() * paintings.length); 
	if(paintings[rand].sold==0){	
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

function setPaintingContent(ext, creator){
	document.getElementById('allpaintingcontent').innerHTML = printAllPaintings(ext, creator);
	if(creator == "Robert Calamari"){
		document.getElementById('robertpainting').style.textDecoration = "underline";
		document.getElementById('jeremypainting').style.textDecoration = "none";
	}
	if(creator == "Jeremy Louie"){
		document.getElementById('robertpainting').style.textDecoration = "none";
		document.getElementById('jeremypainting').style.textDecoration = "underline";
	}
	
}




//This prints all paintings out
function printAllPaintings(ext, creator){
	let content = "";
	
	for(let i=paintings.length;i>0;i--){
		let real = i-1;
		if(paintings[real].creator == creator){
			let issold = '$' + paintings[real].price;
			if(paintings[real].sold == 1){
				issold = '<div style="color: red">SOLD</div>';
			}
			content+=`
			
				<div class="paintingpics"><a href="` + ext + `/pages/painting/paintingpage.html?name=` + paintings[real].name + `" >
					<div style='position:relative; display: inline-block;'>				
						<span class="paintingimgHolder">			
							<img class="item-fade" src="` + ext + `/img/paintings/smallpaintings/` + paintings[real].img + `"  style="" alt="" height="275" width="275">
						</span>
						<div class="top-left-painting">
							<div style="padding:6px 0 10px 6px">` + paintings[real].name + `</div>
							<div style="padding:6px 0 0 6px">` + paintings[real].material + `</div>
							<div style="padding:0px 0 10px 6px">` + paintings[real].size + `</div>
							<div style="padding:6px 0 10px 6px">` + issold + `</div>
							<div style="padding:6px 0 0 6px">` + paintings[real].creator+ `</div>

						</div>
					</div>	
				</a></div>`

			;
		}
	}
	
	return content;
}

function prevPainting() {
	return `

	`;
}

function printOnePainting(ext,postname){
	buttonprint="";
	var buyingcode = "";
	for(let i=0;i<paintings.length;i++){
		if(postname==paintings[i].name){
			let avail="";
			if(paintings[i].sold == 0){
				avail="<div>Available</div>";
				buyingcode = `
							<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
								<input type="hidden" name="cmd" value="_s-xclick">
								<input type="hidden" name="hosted_button_id" value="` + paintings[i].buycode + `">
								<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="">
								<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
							</form>
							`;
			}
			if(paintings[i].sold == 1){
				avail="<div style='color:red'>Sold</div>";
			}
			if(paintings[i].sold == 2){
				avail="<div style='color:red'>Not Available</div>";
			}
			if(i==(paintings.length)-1){
				buttonprint=`

					<input id="paintingnext" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px;position:absolute;right:0' type="button" value="Next" onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i-1].name + `'" />				
				`;
			}else if(i==0){
				buttonprint=`
					<input id="paintingprev" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px;position:absolute;left:0;' type='button' value='Prev' onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i+1].name + `'" />

				`;
			}else{
				buttonprint=`
					<input id="paintingprev" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px;position:absolute;left:0;' type='button' value='Prev' onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i+1].name + `'" />
					<input id="paintingnext" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px;position:absolute;right:0;' type="button" value="Next" onClick="window.location.href ='` + ext + `/pages/painting/paintingpage.html?name=` + paintings[i-1].name + `'" />				
				`;
			}
			

			return `
				<div class='paintingbox'>
					<div style='width:100%; margin-left:39px;margin-top: 21px; position:relative'>
						` + buttonprint + `
					</div>
					<div class='paintingtitle'>
						` + paintings[i].name + `
					</div>
					<div class='paintingimage'>
						<img src='` + ext + `/img/paintings/` + paintings[i].img + `' id='../../img/paintings/` + paintings[i].img + `' class="biggerpic" alt="" onclick="picBig(this.id)">
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
							Artist: ` + paintings[i].creator + `
						</div>
						<br />
							
							<div style="display:inline-block">` + buyingcode + `</div>
							<div style="display:inline-block; float: right;">
								<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
									<input type="hidden" name="cmd" value="_s-xclick">
									<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
									<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_viewcart_LG.gif" border="0" name="submit" alt="">
									<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
								</form>
							</div>


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

function getAllNotSold(theCreator){
	var allpaintings = [];
	if(theCreator=="ALL"){
		for(var i in paintings){
			if(paintings[i].sold ==0 ){
				allpaintings.push(paintings[i]); 
			}
		}
	}else {
		for(var i in paintings){
			if(paintings[i].sold==0 && paintings[i].creator == theCreator){
				allpaintings.push(paintings[i]); 
			}
		}
	}
	

	

	return allpaintings;
}



function goToPainting(name) {
	window.location.href = './pages/painting/paintingpage.html?name=' + name;
}

function printFeatPaintings(featpaintings,wid, ext){
	let allimages = "";

	for(let i=0;i<featpaintings.length;i++){
		allimages+=`
    			<img src="` + ext + `/img/paintings/smallpaintings/` + featpaintings[i].img + `" class="slideshowpaintings" id="` + featpaintings[i].name + `"  onclick="goToPainting(this.id)">
		`;
	}

	return allimages;
}
//style="width:` + wid + `px; height:` + wid + `px"


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
  		<a class="prev" onclick="plusSlides(-1)"><div class="prev2" style="margin-top: 220px;">&#10094;</div></a>
  		<a class="next" onclick="plusSlides(1)"><div class="next2" style="margin-top: 220px;">&#10095;</div></a>
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





