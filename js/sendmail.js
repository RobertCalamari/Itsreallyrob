function printEmailSender(width) {
	return `	
		<div id='messageform' style='text-align:left;background-color:#a8aeb299; border: 3px solid #b6afaf; border-radius: 5px; width:` + width + `;padding: 15px 15px 15px 40px; margin:auto;'>
					
			<form action="https://postmail.invotes.com/send"
				method="post" id="email_form">
				<input type="hidden" name="access_token" value="0t1xi61z2ge0a1krz8mqevyq" />
				<input type="hidden" name="success_url" value="." />
				<input type="hidden" name="error_url" value="." />
			   
				<div style='padding: 5px 0 5px 0'>
					<label >Name</label><input type="text" name="subject" class='emaildata'  placeholder="" required/> <br />
				</div>	
				<div style='padding: 5px 0 5px 0'>
					<label >Email</label><input type="text" name="reply_to" class='emaildata'  placeholder="" required/>  <br />
				</div>	
				<div style='padding: 5px 0 35px 0'>
					<label>Message</label><textarea name="text" class='emaildata' placeholder="" required></textarea> <br />
				</div>	
				<div style='padding: 5px 0 0px 0'>
					<label  class='notify'>Subscribe<input type="checkbox" name="extra_phone_number" value="I want notifications" checked/><span class="checkmark"></span></label> <br />
				</div>	
				<br/>
				<div style='text-align:center;padding: 0 0 0 45px;'>
					<input id="submit_form" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px' type="submit" value="Send" />
				</div>
			</form>
		</div>`;
}

function disableButton() {
    var submitButton = document.getElementById("submit_form");
    var form = document.getElementById("email_form");
    form.addEventListener("submit", function (e) {
        setTimeout(function() {
            submitButton.value = "Sending...";
            submitButton.disabled = true;
        }, 1);
    });
}

function isSold(sold){
	if(sold){
		return `
			<input id="paintingsold" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px' type="button" value="Order" onClick="alert('This painting is already sold!')" />
		`;
	}else{
		return `
			<input id="submit_form" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px' type="submit" value="Order" />
		`;
	}
}

function printPaintingBuySender(price, pname, sold) {
	
	return `	
		<div style='text-align:left;background-color:#a8aeb299; border: 3px solid #b6afaf; border-radius: 5px; width:80%;padding: 15px 15px 15px 40px; margin:auto;'>
					
			<form action="https://postmail.invotes.com/send"
				method="post" id="email_form">
				<input type="hidden" name="access_token" value="0t1xi61z2ge0a1krz8mqevyq" />
				<input type="hidden" name="success_url" value="." />
				<input type="hidden" name="error_url" value="." />
				<div style='padding: 5px 0 5px 0'>
					<label >Name</label><input type="text" name="subject" class='emaildata'  placeholder="" required/> <br />
				</div>	
				<div style='padding: 5px 0 5px 0'>
					<label >Email</label><input type="text" name="reply_to" class='emaildata'  placeholder="" required/>  <br />
				</div>	
				<div style='padding: 5px 0 35px 0'>
					<label>Note</label><textarea name="text" class='emaildata' placeholder=""></textarea> <br />
				</div>	
				<div style='padding: 5px 0 0px 0'>
					<input type="hidden" name="extra_phone_number" value="[PAINTING ORDER] Price: $` + price + ` | Name: ` + pname + `"/><br />
				</div>	
				<br/>
				<div style='text-align:center;padding: 0 0 0 45px;'>
					` + isSold(sold) + `
				</div>
			</form>
		</div>`;
}   

function printShirtBuySender() {
	
	return `	
		<div style='text-align:left;background-color:#a8aeb299; border: 3px solid #b6afaf; border-radius: 5px; width:60%;padding: 15px 15px 15px 40px; margin:auto;'>
					
			<form action="https://postmail.invotes.com/send"
				method="post" id="email_form">
				<input type="hidden" name="access_token" value="0t1xi61z2ge0a1krz8mqevyq" />
				<input type="hidden" name="success_url" value="." />
				<input type="hidden" name="error_url" value="." />
			   
				<div style='padding: 5px 0 5px 0'>
					<label >Name</label><input type="text" name="subject" class='emaildata'  placeholder="" required/> <br />
				</div>	
				<div style='padding: 5px 0 5px 0'>
					<label >Email</label><input type="text" name="reply_to" class='emaildata'  placeholder="" required/>  <br />
				</div>	
				<div style='padding: 5px 0 35px 0'>
					<label>Note</label><textarea name="text" class='emaildata' placeholder="Describe what you would like" required></textarea> <br />
				</div>	
				<div style='padding: 5px 0 0px 0'>
					<input type="hidden" name="extra_phone_number" value="[SHIRT ORDER]"/><br />
				</div>	
				<br/>
				<div style='text-align:center;padding: 0 0 0 45px;'>
					<input id="submit_form" class='button3' style='width:70px;padding:0px 0 5px 0; font-size:13px' type="submit" value="Send" />
				</div>
			</form>
		</div>`;
}   

