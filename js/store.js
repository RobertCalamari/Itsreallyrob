function storeWebsites() {
	return `
		<div style='text-align:center; padding:0px 0 15px 0px '>
			<div class='myheading1' style='font-size:30px;'>Freelancing Work</br>
			</div>
		</div>	
		<br/>
		<div style='text-align:left'>
			Do you need a website for your business? Maybe either to got noticed more or to boost sales? Or maybe you want a personal website that could be about anything!  <br /><br />
			
			If you said yes to any of those questions, hire me to get a great website to put you ahead of the competitors. Working closely with you along the way, I will make sure that you will get exactly what you are looking for.<br /><br />
			
			If interested, please contact me at <b>rjcalamari@gmail.com</b> to start discussing your future website now!		
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
			If you would like to order a Calamari shirt or hoodie, please email <b>rjcalamari@gmail.com</b>. Prices starting at $20 not including shipping. Sizes are available up to XXL. Thanks to Shirtmax.com.<br/><br/>
	
			Custom shirt prints are available for order starting at $20 not including shipping. More information coming soon!
		</div>	
	`;
}
function storePaintings(sourcefile) {
	return `
		<div style='text-align:center; padding:px 0 100px 0px '>
			<div class='myheading1' style='font-size:30px;'>Paintings</br>
			</div>
		</div>	
		<div style='text-align:center; padding:200px 0 0px 0px '>
			<input type='button' class='button1' value='View All' onclick='goPainting("` + sourcefile + `")'>
		</div>	
	`;
}