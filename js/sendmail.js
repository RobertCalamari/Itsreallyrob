function printEmailSender() {
	return `
		<div style='text-align:left;background-color:#42aeee;width:300px;padding: 15px 15px 15px 40px'>
			<form action="https://postmail.invotes.com/send"
				method="post" id="email_form">
				<input type="hidden" name="access_token" value="0t1xi61z2ge0a1krz8mqevyq" />
				<input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
				<input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
			   
				<div style='padding: 5px 0 5px 0'>
					<label >Name</label><input type="text" name="subject" class='emaildata'  placeholder="" required/> <br />
				</div>	
				<div style='padding: 5px 0 5px 0'>
					<label >Email</label><input type="text" name="reply_to" class='emaildata'  placeholder="" required/>  <br />
				</div>	
				<div style='padding: 5px 0 5px 0'>
					<label >Telephone</label><input type="text" name="extra_phone_number" class='emaildata' placeholder="" /> <br />
				</div>	
				<div style='padding: 5px 0 5px 0'>
					<label>Message</label><textarea name="text" class='emaildata' placeholder="" required></textarea> <br />
				</div>	
				<br/><br/>
				<div style='text-align:center'>
					<input id="submit_form" class='button1' style='width:70px;padding:5px 0 5px 0; font-size:13px' type="submit" value="Send" />
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

    

