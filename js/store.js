function storeWebsites() {
	document.getElementById('storecontent').innerHTML=`
		<div style='text-align:center; padding:0 0 5px 0px '>
			<div class='myheading1'>Freelancing Work</br>
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
	document.getElementById('storecontent').innerHTML=`
		<div style='text-align:center; padding:0 0 5px 0px '>
			<div class='myheading1'>Shirts</br>
			</div>
		</div>	
		<img src='` + sourcefile + `/img/store/tshirt-calamari.jpg'   alt='PIC' height='300' width='225'><br/><br/>
		<div style='text-align:left'>		
			If you would like to order a Calamari shirt or hoodie, please email <b>rjcalamari@gmail.com</b>. Prices starting at $20 not including shipping. Sizes are available up to XXL. Thanks to Shirtmax.com.<br/><br/>
	
			Custom shirt prints are available for order starting at $20 not including shipping. More information coming soon!
		</div>	
	`;
}