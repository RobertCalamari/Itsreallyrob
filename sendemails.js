/////////////////////////////////////////////////////////////Send emails////////////////////////////////////////////////////////////////////////////////////////////////////
let transport = nodemailer.createTransport({
    service: 'AOL',
    auth: {
       user: 'mrcpgeek@aol.com',
       pass: ''
    }
});

const message = {
    from: 'mrcpgeek@aol.com', // Sender address
    to: 'robert@shiftelt.com',         // List of recipients
    subject: 'My First Test Email', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};

function sendMessage(){
    transport.sendMail(message, function(err, info) {
	    if (err) {
	      console.log(err)
	    } else {
	      console.log("DONE: " + info);
	    }
	});
};

module.exports.sendMessage = sendMessage; // export your functuion

