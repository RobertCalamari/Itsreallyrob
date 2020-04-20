var arrayOfSquares = [["","","",""],["","","",""],["","","",""],["","","",""]];

function start2048Game(){
	document.getElementById('2048settings').style.display = 'none';
	document.getElementById('gamechoices').style.display = 'none';
	document.getElementById('2048game').style.display = 'inline-block';
	document.getElementById('contentdiv').style.backgroundColor = 'rgb(189, 189, 189)';

	
	var startingSquare1x = Math.floor(Math.random() * 4);
	var startingSquare2x = Math.floor(Math.random() * 4);
	var startingSquare1y = Math.floor(Math.random() * 4);
	var startingSquare2y = Math.floor(Math.random() * 4);

	while(startingSquare1y == startingSquare2y){
		startingSquare2y = Math.floor(Math.random() * 4);
	}

	arrayOfSquares[startingSquare1x][startingSquare1y] = "2";
	arrayOfSquares[startingSquare2x][startingSquare2y] = "2";

	printOutBoard();
	printAllSquares(arrayOfSquares);
	// addNewSquare(document.getElementById('g2048Row-' + (startingSquare1x+1) + '-Square-' + (startingSquare1y+1)), "2");
	// addNewSquare(document.getElementById('g2048Row-' + (startingSquare2x+1) + '-Square-' + (startingSquare2y+1)), "2");

}

function addNewSquare(squareToGo, number){

	var xAndY = getCumulativeOffset(squareToGo);

	document.getElementById('body').innerHTML += `<div class="g2048Square" style="background-color: orange; position:absolute; left: ` + (xAndY.x-8) + `px; top: ` + (xAndY.y-8) + `px;">
					<div class="g2048SquareNumber">` + number + `</div>
					</div>`;
}

function printAllSquares(array){

	for(var row in array){
		for(var square in array[row]){
			if(array[row][square] == ""){

			}else{
				
				addNewSquare(document.getElementById('g2048Row-' + (parseInt(row)+1) + '-Square-' + (parseInt(square)+1)), array[row][square]);
			}
		}
	}
}

function printOutBoard(){
	document.getElementById('2048game').innerHTML = `
		<div id="g2048GameContainer" class="g2048GameContainer">
			<div id="g2048GridContainer" class="g2048GridContainer">
				<div id="g2048Row-1" class="g2048Row">
					<div id="g2048Row-1-Square-1" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-1-Square-2" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-1-Square-3" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-1-Square-4" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
				</div>

				<div id="g2048Row-2" class="g2048Row">
					<div id="g2048Row-2-Square-1" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-2-Square-2" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-2-Square-3" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-2-Square-4" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
				</div>

				<div id="g2048Row-3" class="g2048Row">
					<div id="g2048Row-3-Square-1" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-3-Square-2" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-3-Square-3" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-3-Square-4" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
				</div>

				<div id="g2048Row-4" class="g2048Row">
					<div id="g2048Row-4-Square-1" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-4-Square-2" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-4-Square-3" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
					<div id="g2048Row-4-Square-4" class="g2048Square">
					<div class="g2048SquareNumber"></div>
					</div>
				</div>
			</div>
		</div>
	`;
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        checkIfAvailUp();
        e.preventDefault();
    }
    else if (e.keyCode == '40') {
        // down arrow
        e.preventDefault();
    }
    else if (e.keyCode == '37') {
       // left arrow
       e.preventDefault();
    }
    else if (e.keyCode == '39') {
       // right arrow
       e.preventDefault();
    }

}

function checkIfAvailUp(){

	var newArrayCol1 = [];
	var newArrayCol2 = [];
	var newArrayCol3 = [];
	var newArrayCol4 = [];

	var backToNorm1 = [];
	var backToNorm2 = [];
	var backToNorm3 = [];
	var backToNorm4 = [];


	for(var row in arrayOfSquares){

		newArrayCol1[newArrayCol1.length] = arrayOfSquares[row][0];
		newArrayCol2[newArrayCol2.length] = arrayOfSquares[row][1];
		newArrayCol3[newArrayCol3.length] = arrayOfSquares[row][2];
		newArrayCol4[newArrayCol4.length] = arrayOfSquares[row][3];

	}

	var listOfArrays = [newArrayCol1,newArrayCol2,newArrayCol3,newArrayCol4];

	var newArray = sortThroughArray(listOfArrays, 4, 4);

	for(var i in listOfArrays){
		for(var row in listOfArrays[i]){
			if(row == 0 || listOfArrays[i][row] == ""){

			}else{
				console.log("THE OLD ARRAYS!!!!!!!!!!!!!!!!!!!!! " + listOfArrays[i]);
				listOfArrays[i] = checkUntilZero(listOfArrays[i], row, listOfArrays[i][row]);
				console.log("THE NEW ARRAYS!!!!!!!!!! " + listOfArrays[i]);
			}
		}
	}

	
	for(var row in listOfArrays){
		backToNorm1[backToNorm1.length] = listOfArrays[row][0];
		backToNorm2[backToNorm2.length] = listOfArrays[row][1];
		backToNorm3[backToNorm3.length] = listOfArrays[row][2];
		backToNorm4[backToNorm4.length] = listOfArrays[row][3];
	}
	
	arrayOfSquares = [backToNorm1,backToNorm2,backToNorm3,backToNorm4];	

}

function sortThroughArray(array, rowcounter, squarecounter){
	
}

function checkUntilZero(array, row, number){
	if(row == 0){
		return array;
	}else{
		if(array[row-1] == ""){
			array[row-1] = number;
			array[row] = "";
			checkUntilZero(array, row-1);
		}else{
			if(array[row-1] == number){
				array[row-1] = "" + (parseInt(number)+parseInt(number)) + "";
				array[row] = "";
				return array;
			}else{
				return array;
			}
		}
		
	}

}