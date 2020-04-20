const mongo = require('mongodb').MongoClient;
const url = process.env.MONGOLAB_URI;


//This is a test case to run through the database to see if it is working
function runDatabase(){

	mongo.connect(url, (err, client) => {
	  	if (err) {
	  	  console.error(err)
	  	  return
	  	}
	  	//...
	  	const db = client.db('heroku_k7f7n63h');

	    const collection = db.collection('paintings');

	    //Run through every painting object
	    collection.find().toArray((err, items) => {
	      for(var i in items){
	        console.log(items[i]);
	        // if(items[i].loggedin == true && items[i].permalogin == false){
	        //     collection.updateOne({username: items[i].username}, {'$set': {'loggedin': false}}, (err, item) => {
	                
	        //     });
	        // }
	      }
	    });
	});
}


module.exports.runDatabase = runDatabase;
