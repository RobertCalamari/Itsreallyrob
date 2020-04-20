////////////////////////////////////////////////////JIMP - change vertical files to horizontal/////////////////////////////////////////////////////////////////////////////////
function runchanger(num, callback){
    if(num == 95){
        console.log("DONE");
    }
    else{
        var filetoget = '../client/img/imgprcss/tochange/pics (' + num + ').jpg';
         var filechanged = '../client/img/imgprcss/changed/changeme (' + num + ').jpg';
         var filechangedkeep = '../client/img/imgprcss/changed/pics (' + num + ').jpg';


         Jimp.read(filetoget, (err, image) => {
              if (err) throw err;
              console.log(num + " - were her changing the image - width:" + image.bitmap.width + " | height: " + image.bitmap.height);
                
                    var colorbotright = image
                    .clone()
                    .getPixelColor(image.bitmap.width-5, image.bitmap.height-5);

                    var colortopright = image
                    .clone()
                    .getPixelColor(image.bitmap.width-5, 5);

                    var colorbotleft = image
                    .clone()
                    .getPixelColor(5, image.bitmap.height-5);

                    var colortopleft = image
                    .clone()
                    .getPixelColor(5, 5);

                    if(colorbotright == 0 && colortopright == 0 && colorbotleft == 0 && colortopleft == 0){
                        image
                        .write(filechanged);
                        callback(num-1, runchanger);
                    }else{
                        var theheight = image.bitmap.height;
                        var thewidth = image.bitmap.width;

                        if(thewidth < theheight){
                         Jimp.read(filetoget, (err, newimage) => {
                          if (err) throw err;
                            
                                image
                                .resize(theheight*1.2, theheight) // resize
                                .blur(15)
                                .greyscale(); // set greyscale

                                image
                                .quality(100) // set JPEG quality
                                .composite( newimage, (image.bitmap.width-thewidth)/2, 0 )
                                .write(filechangedkeep); // save
                                console.log("------------------------------------- new width:" + image.bitmap.height*1.2 + " | new height: " + image.bitmap.height);
                                callback(num-1, runchanger);
                        });
                      }else{
                        image
                            //.resize(image.bitmap.height*2, image.bitmap.height) // resize
                            .quality(100) // set JPEG quality
                            //.greyscale() // set greyscale
                            .write(filechangedkeep); // save
                            callback(num-1, runchanger);
                            console.log("------------------------------------------------------- NORMAL");
                      }
                    }

                

                
        });     
        
    }
    
}

function savePicSomewhereElse(){
        var filetoget = '../client/img/imgprcss/tochange/1.jpg';
         var filechangedkeep = '../client/img/imgprcss/changed/pics.jpg';


         Jimp.read(filetoget, (err, image) => {
              if (err) throw err;               
              
              image
                  //.resize(image.bitmap.height*2, image.bitmap.height) // resize
                  .quality(100) // set JPEG quality
                  .greyscale() // set greyscale
                  .write(filechangedkeep); // save
                  console.log("------------------------------------------------------- NORMAL");
            
                    
        });   
}


function saveFromImgur(imgurfile, name){
        var savePainting = '../client/img/paintings/' + name;
        var saveSmallPainting = '../client/img/paintings/smallpaintings/' + name;
        var filetoget = 'https://www.opensourcemacsoftware.org/wp-content/uploads/2011/08/fabien-conus-smallimage.jpg';

        Jimp.read(filetoget, (err, image) => {
              if (err) throw err;               
              
              image
                  //.resize(image.bitmap.height*2, image.bitmap.height) // resize
                  .quality(5) // set JPEG quality
                  .greyscale() // set greyscale
                  .resize(600, 600)
                  .write(saveSmallPainting); // save 
        });  
}

     
//runchanger(96, runchanger);
//savePicSomewhereElse();


module.exports.changeImgVertical = runchanger;

module.exports.savePicSomewhereElse = savePicSomewhereElse;

module.exports.jimpSaveFromImgur = saveFromImgur;