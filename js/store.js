var storeProducts = [
	// {
	//   name:'This is a test',
	//   img:'1 ALoneBarn.jpg',
	//   price:5,
	//   sold:false,
	//	 type:other,
	//   description: 'An Original Calamari'  
	// },



];



function getStoreItems(theCreator){
	var allitems = [];

	for(var i in storeProducts){
		allitems.push(storeProducts[i]); 
	}

	if(theCreator=="Non-Paintings"){
		var allpaintings = [];
	}else {
		var allpaintings = getAllNotSold(theCreator);
	}
	

	return [allitems, allpaintings];
	//Here I want to add all the products i'm selling and all the paintings that are not sold yet into one array. I want this to look like blocks like htis: https://www.devonstank.com/squarespace-code-shop
	//I also want to integrate the paypal api soon
}

function printShop(sourcefile, sorting){
	if(sorting.includes("JL")){
		theCreator = "Jeremy Louie";
	}else if(sorting.includes("RC")){
		theCreator = "Robert Calamari";
	}else if(sorting.includes("NP")){
		theCreator = "Non-Paintings";
	}else{
		theCreator = "ALL";
	}
	
	var groupedItems = getStoreItems(theCreator);
	var printeditems = "";
	var finallist = [];
	
	if(sorting.includes("LR")){
		finallist = refreshToLeastRecent(sourcefile, groupedItems[0], groupedItems[1]);
	}else if(sorting.includes("PH")){
		finallist = refreshToPriceHigh(sourcefile, groupedItems[0], groupedItems[1]);
	}else if(sorting.includes("PL")){
		finallist = refreshToPriceLow(sourcefile, groupedItems[0], groupedItems[1]);
	}else{
		finallist = refreshToMostRecent(sourcefile, groupedItems[0], groupedItems[1]);
	}
	for(var i in finallist){
		if(finallist[i].type == "painting"){
			printeditems += `
			<div class="storepics"><a href="` + sourcefile + `/pages/painting/paintingpage.html?name=` + finallist[i].name + `" >
				<div style='position:relative; display: inline-block;'>				
					<span class="imgHolder">
						<div class="imagecenter">			
							<img class="item-fade" src="` + finallist[i].imgur + `.jpg"  style="" alt="" >
						</div>	
					</span>
					<div class="top-left-shop">
						<div style="padding:6px 0 0 6px">` + limitCharSize(finallist[i].material, 40) + `</div>
						<div style="padding:0px 0 0 6px;margin-top:-20px">` + limitCharSize(finallist[i].size, 40) + `</div>
						<div style="padding:6px 0 0 6px">` + limitCharSize(finallist[i].creator, 40) + `</div>
					</div>
					<div class="bottom-left-shop">` + limitCharSize(finallist[i].name, 40) + `</div>
					<div class="bottom-right-shop">$` + finallist[i].price + `</div>
				</div>	
			</a></div>
		`; 
		}else{
			printeditems += `
			<div class="storepics"><a href="` + sourcefile + `/pages/painting/paintingpage.html?name=` + finallist[i].name + `" >
				<div style='position:relative; display: inline-block;'>	
					<span class="imgHolder">			
						<div class="imagecenter">
							<img class="item-fade" src="` + finallist[i].imgur + `.jpg"  style="" alt="">
						</div>
					</span>
					<div class="top-left-shop">
						<div style="padding:6px 0 0 6px">` + limitCharSize(finallist[i].description, 40) + `</div>
					</div>
					<div class="bottom-left-shop">` + limitCharSize(finallist[i].name, 40) + `</div>
					<div class="bottom-right-shop">$` + finallist[i].price + `</div>
				</div>	
			</a></div>
		`; 
		}
	}
	return printShopList(printeditems, sourcefile, sorting);
}

function refreshToPriceHigh(sourcefile, list1, list2){
	var newlist = [];

	while(list1.length > 0 || list2.length > 0){
		var newnum = 0;
		var newestprice = -1;
		var whichlist = 0;
		for(var i in list1){
			if(list1[i].price >= newestprice){
				newnum = i;
				newestprice = list1[i].price;
				whichlist = 0;
			}
		}
		for(var i in list2){
			if(list2[i].price >= newestprice){
				newnum = i;
				newestprice = list2[i].price;
				whichlist = 1;
			}
		}
		if(whichlist == 0){	
			newlist.push(list1[newnum]);
			list1.splice(newnum, 1);
		}
		if(whichlist == 1){	
			newlist.push(list2[newnum]);
			list2.splice(newnum, 1);
		}
	}
	return newlist;
}

function refreshToPriceLow(sourcefile, list1, list2){
	var newlist = [];
	while(list1.length > 0 || list2.length > 0){
		var newnum = 0;
		var newestprice = 100000000;
		var whichlist = 0;
		for(var i in list1){
			if(list1[i].price <= newestprice){
				newnum = i;
				newestprice = list1[i].price;
				whichlist = 0;
			}
		}
		for(var i in list2){
			if(list2[i].price <= newestprice){
				newnum = i;
				newestprice = list2[i].price;
				whichlist = 1;
			}
		}
		if(whichlist == 0){	
			newlist.push(list1[newnum]);
			list1.splice(newnum, 1);
		}
		if(whichlist == 1){	
			newlist.push(list2[newnum]);
			list2.splice(newnum, 1);
		}
	}
	return newlist;
}	
function refreshToLeastRecent(sourcefile, otheritems, paintingitems){
	var finallist = [];
	var counter = 0;
	for(var i in otheritems){
		finallist[counter]=otheritems[i];
		counter++;
	}

	for(var i in paintingitems){
		finallist[counter]=paintingitems[i];
		counter++;
	}
	return finallist;
}
function refreshToMostRecent(sourcefile, otheritems, paintingitems){
	var finallist = [];
	var counter = 0;
	for(var i in otheritems){
		finallist[counter]=otheritems[(otheritems.length - 1)-i];
		counter++;
	}

	for(var i in paintingitems){
		finallist[counter]=paintingitems[(paintingitems.length - 1)-i];
		counter++;
	}
	return finallist;
}


function sortByMostRecent(sourcefile, sorting){
	if(sorting.includes("JL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-MR';
	}else if(sorting.includes("RC")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-MR';
	}else if(sorting.includes("NP")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-MR';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-MR';
	}
}

function sortByLeastRecent(sourcefile, sorting){
	if(sorting.includes("JL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-LR';
	}else if(sorting.includes("RC")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-LR';
	}else if(sorting.includes("NP")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-MR';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-LR';
	}
}

function sortByPriceHigh(sourcefile, sorting){
	if(sorting.includes("JL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-PH';
	}else if(sorting.includes("RC")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-PH';
	}else if(sorting.includes("NP")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-MR';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-PH';
	}
}

function sortByPriceLow(sourcefile, sorting){
	if(sorting.includes("JL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-PL';
	}else if(sorting.includes("RC")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-PL';
	}else if(sorting.includes("NP")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-MR';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-PL';
	}
}

function sortByAll(sourcefile, sorting){
	if(sorting.includes("LR")){
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-LR';
	}else if(sorting.includes("PH")){
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-PH';
	}else if(sorting.includes("PL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-PL';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=ALL-MR';
	}
}

function sortByRobert(sourcefile, sorting){
	if(sorting.includes("LR")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-LR';
	}else if(sorting.includes("PH")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-PH';
	}else if(sorting.includes("PL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-PL';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=RC-MR';
	}
}

function sortByJeremy(sourcefile, sorting){
	if(sorting.includes("LR")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-LR';
	}else if(sorting.includes("PH")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-PH';
	}else if(sorting.includes("PL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-PL';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=JL-MR';
	}
}

function sortByNonPaintings(sourcefile, sorting){
	if(sorting.includes("LR")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-LR';
	}else if(sorting.includes("PH")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-PH';
	}else if(sorting.includes("PL")){
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-PL';
	}else{
		window.location.href = sourcefile + '/pages/shop.html?sort=NP-MR';
	}
}

function printShopList(listitems, sourcefile, sorting){
	var sortingByCreator;
	var sortingByNormal;
	if(sorting.includes("JL")){
		sortingByCreator = "Jeremy Louie";
	}else if(sorting.includes("RC")){
		sortingByCreator = "Robert Calamari";
	}else if(sorting.includes("NP")){
		sortingByCreator = "Non-Paintings";
	}else{
		sortingByCreator = "ALL";
	}
	if(sorting.includes("LR")){
		sortingByNormal = "Least Recent";
	}else if(sorting.includes("PH")){
		sortingByNormal = "Price High";
	}else if(sorting.includes("PL")){
		sortingByNormal = "Price Low";
	}else{
		sortingByNormal = "Most Recent";
	}

	return `
		<div style='text-align:center; padding:0px 0 15px 0px;width: 51%;margin: auto; '>
			<div class='myheading1' style='font-size: 30px;padding-bottom: 14px;'>Shop</br>
			</div>
			<div style="display:inline-block;padding-bottom: 20px;">
				<form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" >
					<input type="hidden" name="cmd" value="_s-xclick">
					<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----">
					<input type="image" src="../img/shoppingcart-black.png" border="0" name="submit" style="height: 30px;width: 31px;" alt="">
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
				</form>
			</div>
			<br>
			<div style="display:inline-block;">
				<div class="dropdown" style="width: 161px; padding-right: 27px; margin-left: -84px;">
					<button id="sortNormalButton" onclick="dropDownSort()" class="dropbtn">` + sortingByCreator + `</button>
					<div id="myDropdown1" class="dropdown-content">
						<div class='ddcont' onclick="sortByAll('` + sourcefile + `', '` + sorting + `')">All</div>
					    <!--<div class='ddcont' onclick="sortByNonPaintings('` + sourcefile + `', '` + sorting + `')">Non-Paintings</div>-->
					    <div class='ddcont' onclick="sortByRobert('` + sourcefile + `', '` + sorting + `')">Robert Calamari</div>
					    <div class='ddcont' onclick="sortByJeremy('` + sourcefile + `', '` + sorting + `')">Jeremy Louie</div>
					</div>
				</div>
				<div class="dropdown" style="width: 136px; margin-right: -82px;">
					<button id="sortCreatorButton" onclick="dropDownCreator()" class="dropbtn">` + sortingByNormal + `</button>
					<div id="myDropdown2" class="dropdown-content">
						<div class='ddcont' onclick="sortByMostRecent('` + sourcefile + `', '` + sorting + `')">Most Recent</div>
						<div class='ddcont' onclick="sortByLeastRecent('` + sourcefile + `', '` + sorting + `')">Least Recent</div>
					    <div class='ddcont' onclick="sortByPriceHigh('` + sourcefile + `', '` + sorting + `')">Price High</div>
					    <div class='ddcont' onclick="sortByPriceLow('` + sourcefile + `', '` + sorting + `')">Price Low</div>
					</div>
				</div> 
			</div>

		</div>	
		<br/>
		<div style='text-align:center'>
			` + listitems + `
		</div>	
	`;

}

function sortpricehigh(list1, list2){
	var newlist = [];

	while(list1.length > 0 || list2.length > 0){
		var newnum = 0;
		var newestprice = -1;
		var whichlist = 0;
		for(var i in list1){
			if(list1[i].price >= newestprice){
				newnum = i;
				newestprice = list1[i].price;
				whichlist = 0;
			}
		}
		for(var i in list2){
			if(list2[i].price >= newestprice){
				newnum = i;
				newestprice = list2[i].price;
				whichlist = 1;
			}
		}
		if(whichlist == 0){	
			newlist.push(list1[newnum]);
			list1.splice(newnum, 1);
		}
		if(whichlist == 1){	
			newlist.push(list2[newnum]);
			list2.splice(newnum, 1);
		}
	}
	return newlist;
}

function sortpricelow(list1, list2){
	var newlist = [];
	while(list1.length > 0 || list2.length > 0){
		var newnum = 0;
		var newestprice = 100000000;
		var whichlist = 0;
		for(var i in list1){
			if(list1[i].price <= newestprice){
				newnum = i;
				newestprice = list1[i].price;
				whichlist = 0;
			}
		}
		for(var i in list2){
			if(list2[i].price <= newestprice){
				newnum = i;
				newestprice = list2[i].price;
				whichlist = 1;
			}
		}
		if(whichlist == 0){	
			newlist.push(list1[newnum]);
			list1.splice(newnum, 1);
		}
		if(whichlist == 1){	
			newlist.push(list2[newnum]);
			list2.splice(newnum, 1);
		}
	}
	return newlist;
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownSort() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function dropDownCreator() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 



function storeWebsites() {
	return `
		<div style='text-align:center; padding:0px 0 15px 0px '>
			<div class='myheading1' style='font-size:30px;'>Freelancing Work</br>
			</div>
		</div>	
		<br/>
		<div style='text-align:center'>
			Do you need a website for your business? Maybe either to got noticed more or to boost sales? Or maybe you want a personal website that could be about anything!  <br /><br />
			
			If you said yes to any of those questions, hire me to get a great website to put you ahead of the competitors. Working closely with you along the way, I will make sure that you will get exactly what you are looking for.<br /><br />
			
			If interested, please contact me at <b>rjcalamari@gmail.com</b> or click <a href='../pages/aboutme.html#messageform'>here</a> to start discussing your future website now!		
		</div>	
	`;
}

function storeShirts(sourcefile) {
	return `
		<div style='text-align:center; padding:0px 0 15px 0px '>
			<div class='myheading1' style='font-size:30px;'>Shirts</br>
			</div>
		</div>	
		<img src='` + sourcefile + `/img/store/tshirt-calamari.jpg'   alt='PIC' height='200' width='150'><br/><br/>
		<div style='text-align:left'>		
			If you would like to order a Calamari shirt or hoodie, please email <b>rjcalamari@gmail.com</b> or use the form below. Prices starting at $20, not including shipping. Sizes are available up to XXL. Thanks to Shirtmax.com.<br/><br/>
	
			Custom shirt prints are available for order starting at $20, not including shipping. More information coming soon!
			<br/><br/>
			<div>
				` + printShirtBuySender() + `
			</div>
		</div>	
	`;
}
function storePaintings(sourcefile) {
	return `
		<divstyle='text-align:center;'>
			<div style='text-align:center; padding:px 0 100px 0px '>
				<div class='myheading1' style='font-size:30px;'>Paintings</br>
				</div>
			</div>	
			<div style='padding:50px 0 50px 0; width:75%; text-align:center; margin:auto;'>
				If available, every painting is for sale! Browse through a great selection of every painting made since I started. Price does not include shipping. Frames are available upon request, but require an additional charge. If you would like me to paint something specific that I do not have, please feel free to contact me <a href='../pages/aboutme.html#messageform'>here</a> about your request.<br>Click below to view all the paintings!
			</div>
			<div style='text-align:center; padding:70px 0 0px 0px '>
				<input type='button' class='button1' value='View All' onclick='goPainting("` + sourcefile + `")'>
			</div>	
		</div>
	`;
}