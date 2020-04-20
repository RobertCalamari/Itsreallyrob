////////////////////////////////////////////////////////////bcrypt////////////////////////////////////////////////////////////////////////////////

//This creates a hased passedword
function bcryptEncrypt(){
	const saltRounds = 15;
	const myPlaintextPassword = '1234';
	const someOtherPlaintextPassword = 'not_bacon';
	var hashed;
	//This is to hash a password
	bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
	        hashed = hash;
	        console.log("This is new hash: " + hash);// Store hash in your password DB.
	});

	setTimeout(function(){ 

		// Load hash from your password DB.
		bcrypt.compare(myPlaintextPassword, hashed, function(err, res) {
		    // res == true
		    console.log("1" + res);
		});
		bcrypt.compare(someOtherPlaintextPassword, hashed, function(err, res) {
		    // res == false
		    console.log("2" + res);
		});
	 

	}, 3000);
}




module.exports.bcryptEncrypt = bcryptEncrypt;
