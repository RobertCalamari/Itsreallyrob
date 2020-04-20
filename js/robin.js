function logout(){
	location.href='../../logout';
}

function robinMenu(){
	location.href='../../pages/robin/robin.html';
}

function authenticate() {
	user=document.getElementById('usernametest').value;
	pass=document.getElementById('passwordtest').value;
	socket.emit('authenticate',{username:user, password:pass});

}





function createAccount() {
	user=document.getElementById('usernametest').value;
	pass=document.getElementById('passwordtest').value;
	confpass=document.getElementById('confpasswordtest').value;
	email=document.getElementById('emailtest').value;
	first=document.getElementById('firstnametest').value;
	last=document.getElementById('lastnametest').value;

	if(user == "" || pass == "" || first == "" || last == "" || email == "" || confpass == ""){
		document.getElementById('answer').innerHTML = "Please fill out every field";
	}else{
		if(confpass == pass){
			socket.emit('createAccount',{username:user, password:pass, firstname:first, lastname:last, useremail:email});
		}else{
			document.getElementById('answer').innerHTML = "The passwords do not match!"
		}
	}
}

function authenticateanswer(data) {
	if(data.answer == "dne"){
		document.getElementById('answer').innerHTML = "That username does not exist.";
	}else if(data.answer == "ue"){
		setCookie("username", data.username, 1);
		setCookie("nid", data.nid, 1);  
		checkIfLoggedIn();

	}else if(data.answer == "pnc"){
		document.getElementById('answer').innerHTML = "That password is incorrect.";
	}else if(data.answer == "caUE"){
		document.getElementById('answer').innerHTML = "That username is already taken.";
	}else if(data.answer == "caDONE"){
		setCookie("username", data.username, 1);
		setCookie("nid", data.nid, 1);  
		checkIfLoggedIn();
	}

}

function showLoginPage(){
	document.getElementById('loginPageButton').style.textDecoration = "underline";
	document.getElementById('createPageButton').style.textDecoration = "none";
	document.getElementById('inputFieldsSignIn').innerHTML = `
		 Username: <input id="usernametest" type="text" name="username" required><br>
		 Password: <input id="passwordtest" type="password" name="psw" required><br>
		 <input class="button2" id="signinbutton" style='width:70px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Sign In" onclick="authenticate();" />
	`;

	document.getElementById('inputFieldsSignIn').style.padding = "0px 84px 0px 0px";
	
	signInDivEvents();

}

function showCreatePage(){
	document.getElementById('loginPageButton').style.textDecoration = "none";
	document.getElementById('createPageButton').style.textDecoration = "underline";
	document.getElementById('inputFieldsSignIn').innerHTML = `
		 Username: <input id="usernametest" type="text" name="username" required><br>
		 Password: <input id="passwordtest" type="password" name="psw" required><br>
		 Confirm Password: <input id="confpasswordtest" type="password" name="psw" required><br>
		 Email: <input id="emailtest" type="text" name="psw" required><br>
		 First Name: <input id="firstnametest" type="text" name="username" required><br>
		 Last Name: <input id="lastnametest" type="text" name="username" required><br>

		 <input class="button2" id="createaccountbutton" style='width:109px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Create Account" onclick="createAccount();" />
	`;

	document.getElementById('inputFieldsSignIn').style.padding = "0px 60px 0px 0px";

	document.getElementById('usernametest').addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        createAccount();
	    }
	});
	document.getElementById('passwordtest').addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        createAccount();
	    }
	});
	document.getElementById('firstnametest').addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        createAccount();
	    }
	});
	document.getElementById('lastnametest').addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        createAccount();
	    }
	});

}

function checkIfLoggedIn(){
	var name = getCookie("username");
	var thid = getCookie("nid");
	if(name ==""){
		document.getElementById('contentdiv').innerHTML = printSignInDiv();
		signInDivEvents();
				
	}else{
		
		socket.emit('ciLoggedIn',{username:name, tid:thid});
	}
}

function printSignInDiv(){
	return `
				<div id="signindiv" style="max-width: 831px; margin: auto;">
					<div style="font-size:30px;">ROBIN</div><br>
					<div style="width:90%; margin: auto; text-align: justify;">Login or create an account to gain access to multiple different apps, including: a personal budget system to track your spending, a list app to keep track of things and to randomly pick an element on any list you want, and more! </div>
					<br>
					<div>
						<div id="loginPageButton" style="cursor: pointer; display:inline-block;text-decoration: underline;" onclick="showLoginPage();">Login</div> | <div id="createPageButton" style="display:inline-block; cursor: pointer;" onclick="showCreatePage();">Create Account</div>
					</div>
					<br><br>
					<form>
						<div id="inputFieldsSignIn" class="inputFieldsSignIn">
							 Username: <input id="usernametest" type="text" name="username" required><br>
							 Password: <input id="passwordtest" type="password" name="psw" required><br>
							 <input id="signinbutton" style='width:70px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Sign In" onclick="authenticate();" />
						</div>
							
					</form> 
					<div id="answer"></div>
				</div>`;
}

function signInDivEvents(){
	document.getElementById('usernametest').addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        authenticate();
	    }
	});
	document.getElementById('passwordtest').addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        authenticate();
	    }
	});
}

function insTopRobin(data){
	return `
					<div id="topRobin">
						User: `  + data.userData.firstname + ` `  + data.userData.lastname + `
						<div style='padding:0px 0 0px 9px; display: inline-block;'>
							<input class="button2" style='width:70px;padding:2px 0 4px 0px; font-size:13px; display: inline-block;' type='button' value='Menu' onclick='robinMenu()' />
							<input class="button2" style='width:70px;padding:2px 0 4px 0px; font-size:13px; display: inline-block;' type='button' value='Log Out' onclick='logout()' />
						</div>
					</div>


			`;
}

function sendToPage(ext, where){
	location.href=ext + '/pages/robin/robin.html?app=' + where ;
}

function robinHomeScreenLoad(data,ext,postname) {
	
	if(data.answer == "dne"){
		document.getElementById('contentdiv').innerHTML = printSignInDiv();
		signInDivEvents();
		document.getElementById('answer').innerHTML = "Please Log In";

	}else if(data.answer == "ue"){

		if(postname.app == "budget"){
			budgetHomePage(data,ext,postname);
		}else if(postname.app == "addpic"){
			addPicHomePage(data,ext,postname);
		}else if(postname.app == "randomizer"){
			randomizerHomePage(data,ext,postname, data.userData.randomizer, false);
		}else{
			document.getElementById('contentdiv').innerHTML = `
				<div>
					` + insTopRobin(data) + `
					` + data.boxes + `
				</div>	

			`;
					    
		    
		    if(document.getElementById('randomizerhomebutton')){
		    	document.getElementById('randomizerhomebutton').onclick = function () {
			        location.href=ext + '/pages/robin/robin.html?app=randomizer';
			    }
		    }
		    if(document.getElementById('budgethomebutton')){
		    	document.getElementById('budgethomebutton').onclick = function () {
			        location.href=ext + '/pages/robin/robin.html?app=budget&datets=' + getDate();
			    }
		    }
		    if(document.getElementById('addpicturehomebutton')){
		    	document.getElementById('addpicturehomebutton').onclick = function () {
			        location.href=ext + '/pages/robin/robin.html?app=addpic';
			    }
		    }
		    
		    
		}		
	}
}

function sortAndHyphon(data, sbYear, sbMonth, skip){
	var newlist = [];
	for(var i in data){
		if(data[i] == "" || data[i] == " " || data[i] == undefined || data[i] == "undefined"){
			newlist[i] = "-";
		}
		else{
			newlist[i] = data[i];
		}
	}

	var splitdate = data[1].split('-');
	//console.log(sbMonth + sbYear + "DIS IS IT month then year" + splitdate[0] + splitdate[2]);
	if((sbYear == "all" && sbMonth == "all") || (sbYear == "all" && sbMonth == splitdate[0]) || (sbYear == splitdate[2] && sbMonth == "all") || (sbYear == splitdate[2] && sbMonth == splitdate[0])){
		return newlist;
	}else{
		if(skip == "skip"){
			return newlist;
		}else{
			return false;
		}
		
	}	
}

function addBackgroundColorBudget(bgColorCounter){
	if(bgColorCounter % 2 == 0){
		return "<tr style='background-color: #f2f2f2;'>";
	}
	else{
		return "<tr style='background-color: #d2d2d2;'>";
	}
}


function printBlockPurchase(ext, newi, updatedList, splitdate){
	return `<div style="text-align: left;max-width: 360px;margin:auto;background-color: #d7d7d7;border-radius: 11px; margin-bottom: 6px; padding: 5px 3px 5px 3px; box-shadow: 2px 2px 5px #a19e9e;"><a href='` + ext + `/pages/robin/robin.html?app=budget&type=cell&sby=` + splitdate[2] + `&sbm=` + splitdate[0] + `&cell=` + newi + `' style='color: black;'>
				<div style='text-align: left; font-size: 12px; padding: 0px 10px 0px 10px; color: #f00;'>
					<div style="text-align: left;max-width: 202px; display: inline-block;">` + updatedList[1] + `</div>
					<div style='text-align: right; display: inline-block; float:right;'>` + updatedList[4] + `  -  ` + updatedList[5] + `</div>
				</div>
				<div style='padding: 4px 5px 7px 0px; padding: 0px 10px 0px 10px;'>
					<div style="text-align: left;max-width: 202px; display: inline-block;">` + updatedList[2] + `</div>
					<div style='text-align: right; display: inline-block; float:right;'>$` + updatedList[3] + `</div>
				</div>
	        </a></div>`;
}

function printBlockPaycheck(ext, newi, updatedList, splitdate){
	return `<div style="text-align: left;max-width: 360px;margin:auto;background-color: #d7d7d7;border-radius: 11px; margin-bottom: 6px; padding: 5px 3px 5px 3px; box-shadow: 2px 2px 5px #a19e9e;"><a href='` + ext + `/pages/robin/robin.html?app=budget&type=cell&sby=` + splitdate[2] + `&sbm=` + splitdate[0] + `&cell=` + newi + `' style='color: black;'>
				<div style='text-align: left; font-size: 12px; padding: 0px 10px 0px 10px; color: #f00;'>
					<div style="text-align: left;max-width: 202px; display: inline-block;">` + updatedList[1] + `</div>
					<div style='text-align: right; display: inline-block; float:right;'>` + updatedList[2] + `</div>
				</div>
				<div style='padding: 4px 5px 7px 0px; padding: 0px 10px 0px 10px; font-size: 15px;'>
					Paycheck Total: <div style="text-align: left;max-width: 202px; display: inline-block;">$` + updatedList[6] + `</div>
					<div style='text-align: right; display: inline-block; float:right;'>Taxes: $` + updatedList[9] + `</div>
				</div>
				<div style='padding: 4px 5px 7px 0px; padding: 0px 10px 0px 10px; font-size: 15px;'>
					Paycheck Net: <div style="text-align: left;max-width: 202px; display: inline-block; color: green">$` + updatedList[7] + `</div>
					<div style='text-align: right; display: inline-block; float:right;'>Investments: $` + updatedList[8] + `</div>
				</div>
	        </a></div>`;
}

function printBudgetData(ext, data, search, amt, sbYear, sbMonth){
	var newdata = data.budgetData;
	var content = "";
	var listofdata = [];
	counter = 0;
	if(amt == -1){
		for(var i in newdata){
			if(newdata[i][0] == search){
				var updatedList = sortAndHyphon(newdata[i], sbYear, sbMonth);
				if(updatedList == false){
				}else{
					var splitdate = updatedList[1].split('-');
					//var newi = (newdata.length-1)-i;
					var newi = i;
					//content += printBlockPurchase(ext, newi, updatedList, splitdate);
					var numsplitdate = splitdate[2]+splitdate[0]+splitdate[1];
					listofdata[counter] = [updatedList, newi, splitdate, numsplitdate];		
					counter++;
				}
			}
		}
		listofdata = listofdata.sort(ComparatorFtL);
		for(var s in listofdata){
			if(listofdata[s][0][0] == "Purchase"){
				content += printBlockPurchase(ext, listofdata[s][1], listofdata[s][0], listofdata[s][2]);
			}else if(listofdata[s][0][0] == "Paycheck"){
				content += printBlockPaycheck(ext, listofdata[s][1], listofdata[s][0], listofdata[s][2]);
			}
			
		}
		
	}else{
		var purchcounter = 0;
		for(var i in newdata){
			if(purchcounter < amt){
				if(newdata[(newdata.length-1)-i][0] == search){
					var updatedList = sortAndHyphon(newdata[(newdata.length-1)-i], sbYear, sbMonth);
					if(updatedList == false){
					}else{
						var splitdate = updatedList[1].split('-');
						var newi = (newdata.length-1)-i;
						//var newi = i;
						//content += printBlockPurchase(ext, newi, updatedList, splitdate)
						var numsplitdate = splitdate[2]+splitdate[0]+splitdate[1];
						listofdata[counter] = [updatedList, newi, splitdate, numsplitdate];		
						counter++;				
					}
					purchcounter++;
				}
				
			}
			else{
				break;
			}
		}
		listofdata = listofdata.sort(ComparatorLtF);
		for(var s in listofdata){
			if(listofdata[s][0][0] == "Purchase"){
				content += printBlockPurchase(ext, listofdata[s][1], listofdata[s][0], listofdata[s][2]);
			}else if(listofdata[s][0][0] == "Paycheck"){
				content += printBlockPaycheck(ext, listofdata[s][1], listofdata[s][0], listofdata[s][2]);
			}
			
		}
		
	}

	
	

	return content;
}

function ComparatorFtL(a, b) {
   if (a[3] < b[3]) return -1;
   if (a[3] > b[3]) return 1;
   return 0;
}

function ComparatorLtF(a, b) {
   if (a[3] < b[3]) return 1;
   if (a[3] > b[3]) return -1;
   return 0;
}

function printSingleBudgetData(ext, data, cell, sbYear, sbMonth){
	var newdata = data.budgetData;
	var content = "<div class='budgetDataTable'><table style='margin:auto; border-collapse: collapse;'>";
	
	if(newdata[cell][0] == "Purchase"){
		content += "<tr style='background-color: black; color: white;'><td style='padding:3px 7px 3px 7px;'>Date</td><td style='padding:3px 7px 3px 7px;'>Name</td><td style='padding:3px 7px 3px 7px;'>Amount</td><td style='padding:3px 7px 3px 7px;'>Category 1</td><td style='padding:3px 7px 3px 7px;'>Category 2</td></tr>";
		bgColorCounter = 0;
		var updatedList = sortAndHyphon(newdata[cell], sbYear, sbMonth, "skip");
		if(updatedList == false){
		}else{
			var splitdate = updatedList[1].split('-');
			content += addBackgroundColorBudget(bgColorCounter);
			content += "<td style='padding:3px 7px 3px 7px;'>" + updatedList[1] + "</td><td style='padding:3px 7px 3px 7px; text-align: left;max-width: 302px;'><a href='" + ext + "/pages/robin/robin.html?app=budget&type=cell&sby=" + splitdate[2] + "&sbm=" + splitdate[0] + "&cell=" + cell + "' style='color: black;'>" + updatedList[2] + "</a></td><td style='padding:3px 7px 3px 7px;'>$" + updatedList[3] + "</td><td style='padding:3px 7px 3px 7px;'>" + updatedList[4] + "</td><td style='padding:3px 7px 3px 7px;'>" + updatedList[5] + "</td></tr>";
			bgColorCounter++;
		}
		
	}else if(newdata[cell][0] == "Paycheck"){
		content += "<tr style='background-color: black; color: white;'><td style='padding:3px 7px 3px 7px;'>Date</td><td style='padding:3px 7px 3px 7px;'>Name</td><td style='padding:3px 7px 3px 7px;'>Paycheck Total</td><td style='padding:3px 7px 3px 7px;'>Paycheck Net</td><td style='padding:3px 7px 3px 7px;'>Taxes Taken Out</td><td style='padding:3px 7px 3px 7px;'>Investments Taken Out</td></tr>";
		bgColorCounter = 0;
		
		var updatedList = sortAndHyphon(newdata[cell], sbYear, sbMonth, "skip");
		if(updatedList == false){
		}else{
			var splitdate = updatedList[1].split('-');
			content += addBackgroundColorBudget(bgColorCounter);
			content += "<td style='padding:3px 7px 3px 7px;'>" + updatedList[1] + "</td><td style='padding:3px 7px 3px 7px; text-align: left;max-width: 302px;'><a href='" + ext + "/pages/robin/robin.html?app=budget&type=cell&sby=" + splitdate[2] + "&sbm=" + splitdate[0] + "&cell=" + cell + "' style='color: black;'>" + updatedList[2] + "</a></td><td style='padding:3px 7px 3px 7px;'>$" + updatedList[6] + "</td><td style='padding:3px 7px 3px 7px;'>$" + updatedList[7] + "</td><td style='padding:3px 7px 3px 7px;'>$" + updatedList[8] + "</td><td style='padding:3px 7px 3px 7px;'>$" + updatedList[9] + "</td></tr>";
			bgColorCounter++;
		}
	}

		
	content += "</table></div>";
	
	return content;
}

function switchToAddPoP(data){
	if(data=="Purchase"){
		document.getElementById("budgetPurchase").style.display = "inline-block";
		document.getElementById("budgetPaycheck").style.display = "none";
		//document.getElementById("budgetOther").style.display = "none";
		document.getElementById('purchaseadder').style.textDecoration = "underline";
		document.getElementById("paycheckadder").style.textDecoration = "none";
		//document.getElementById("budgetOther").style.textDecoration = "none";
	}else if(data=="Paycheck"){
		document.getElementById("budgetPurchase").style.display = "none";
		document.getElementById("budgetPaycheck").style.display = "inline-block";
		//document.getElementById("budgetOther").style.display = "none";
		document.getElementById('purchaseadder').style.textDecoration = "none";
		document.getElementById("paycheckadder").style.textDecoration = "underline";
		//document.getElementById("budgetOther").style.textDecoration = "none";
	}/*else if(data=="Other"){
		document.getElementById("budgetPurchase").style.display = "none";
		document.getElementById("budgetPaycheck").style.display = "none";
		document.getElementById("budgetOther").style.display = "inline-block";
		document.getElementById('budgetPurchase').style.textDecoration = "none";
		document.getElementById("budgetPaycheck").style.textDecoration = "none";
		document.getElementById("budgetOther").style.textDecoration = "underline";
	}*/
}
 
function printBudgetDataTotalMade(newdata, year, columnnum){
	var counter = 0;
	for(var i in newdata){
		if(year == "All"){

			if(newdata[i][columnnum] == "" || newdata[i][columnnum] == "undefined" || newdata[i][columnnum] == undefined){

			}else{
				counter += parseFloat(parseFloat(newdata[i][columnnum]).toFixed(2));
			}
			
		}else{
			var splitdate = newdata[i][1].split('-');
			if(splitdate[2] == year){
				if(newdata[i][columnnum] == "" || newdata[i][columnnum] == "undefined" || newdata[i][columnnum] == undefined){

				}else{
					counter += parseFloat(parseFloat(newdata[i][columnnum]).toFixed(2));
				}
			}
		}
		
	}
	return counter;
}

function getFirstDayOfWeek(day){
	for(var wk in weeks){
		for(var dy in weeks[wk]){
			if(weeks[wk][dy] == day){
				return [weeks[wk][0], weeks[wk][6]];
			}
			else{
			}
		}
	}
}

function getSpendingWithDates(data, monthdays, num, datestart, dateend, purdatestart, purdateend, extradate){
	var newdata = data.budgetData;
	var totalspending = 0;
	var totalspent = 0;

	if(num == 1 || num == 2){
		for(var i in newdata){
			if(newdata[i][0] == "Paycheck"){
				var splitdateextra = extradate.split('-');
				var splitdatedata = newdata[i][1].split('-');
				if(splitdateextra[2] == splitdatedata[2] && splitdateextra[0] == splitdatedata[0]){
					if(splitdatedata[1] == splitdateextra[1]){
						if(newdata[i][12] == "" || newdata[i][12] == "undefined" || newdata[i][12] == undefined){

						}else{
							totalspending += parseFloat(parseFloat(newdata[i][12]).toFixed(2));
						}
					}				
				}		
			}
		}
		
	}
	if(num == 1){
		for(var i in newdata){
			if(newdata[i][0] == "Purchase"){
				var splitdateextra = extradate.split('-');
				var splitdatedata = newdata[i][1].split('-');
				if(splitdateextra[2] == splitdatedata[2] && splitdateextra[0] == splitdatedata[0]){
					if(splitdatedata[1] == splitdateextra[1]){
						if(newdata[i][3] == "" || newdata[i][3] == "undefined" || newdata[i][3] == undefined){

						}else{
							totalspent += parseFloat(parseFloat(newdata[i][3]).toFixed(2));
						}
					}				
				}		
			}
		}
	}

	for(var i in newdata){
		if(newdata[i][0] == "Paycheck"){
			var splitdatestart = datestart.split('-');
			var splitdateend = dateend.split('-');
			var splitdatedata = newdata[i][1].split('-');
			if(splitdatestart[2] == splitdatedata[2] && splitdatestart[0] == splitdatedata[0]){
				if(splitdatedata[1] >= splitdatestart[1] && splitdatedata[1] <= splitdateend[1]){					
					if(newdata[i][12] == "" || newdata[i][12] == "undefined" || newdata[i][12] == undefined){
					}else{
						totalspending += parseFloat(parseFloat(newdata[i][12]).toFixed(2));
					}
				}				
			}		
		}
	}
	for(var i in newdata){		
		if(newdata[i][0] == "Purchase"){
			var splitdatestart = purdatestart.split('-');
			var splitdateend = purdateend.split('-');
			var splitdatedata = newdata[i][1].split('-');
			if(splitdatestart[2] == splitdatedata[2] && splitdatestart[0] == splitdatedata[0]){
				if(splitdatedata[1] >= splitdatestart[1] && splitdatedata[1] <= splitdateend[1]){
					if(newdata[i][3] == "" || newdata[i][3] == "undefined" || newdata[i][3] == undefined){
					}else{
						totalspent += parseFloat(parseFloat(newdata[i][3]).toFixed(2));
					}
				}				
			}		
		}
	}
	var perweekspending = totalspending/2
	var totalleft = perweekspending - totalspent;

	return [parseFloat(totalleft).toFixed(2), parseFloat(totalspent).toFixed(2), parseFloat(perweekspending).toFixed(2)]
}

function getBiweeklySpendingWeek(day, data){
	var splitdate = day.split('-');
	var monthdays = getWholeMonth(splitdate[0], splitdate[2]);
	var lastmonthdate = monthdays[0][monthdays[0].length-1].split('-');
	if(splitdate[1] == lastmonthdate[1]){
		
		var totalspending = getSpendingWithDates(data, monthdays, 1, monthdays[2][0], monthdays[2][13], monthdays[2][0], monthdays[2][5], monthdays[0][monthdays[0].length-1]);
		return [monthdays[0][monthdays[0].length-1], monthdays[2][5], totalspending[0], totalspending[1], totalspending[2]];
	}else if(splitdate[1] >= 1 && splitdate[1] <= 6){
		
		var totalspending = getSpendingWithDates(data, monthdays, 1, monthdays[0][0], monthdays[0][13], monthdays[0][0], monthdays[0][5], monthdays[1][monthdays[1].length-1]);
		return [monthdays[1][monthdays[1].length-1], monthdays[0][5], totalspending[0], totalspending[1], totalspending[2]];
	}else if(splitdate[1] >= 7 && splitdate[1] <= 14){
		
		var totalspending = getSpendingWithDates(data, monthdays, 2, monthdays[0][0], monthdays[0][13],monthdays[0][6], monthdays[0][13], monthdays[1][monthdays[1].length-1]);
		return [monthdays[0][6], monthdays[0][13], totalspending[0], totalspending[1], totalspending[2]];
	}else if(splitdate[1] >= 15 && splitdate[1] <= 21){
		
		var totalspending = getSpendingWithDates(data, monthdays, 4, monthdays[0][14], monthdays[0][monthdays[0].length-2], monthdays[0][14], monthdays[0][20]);
		return [monthdays[0][14], monthdays[0][20], totalspending[0], totalspending[1], totalspending[2]];
	}else if(splitdate[1] >= 22 && splitdate[1] < monthdays[0].length){
		
		var totalspending = getSpendingWithDates(data, monthdays, 5, monthdays[0][14], monthdays[0][monthdays[0].length-2], monthdays[0][21], monthdays[0][monthdays[0].length-2]);
		return [monthdays[0][21], monthdays[0][monthdays[0].length-2], totalspending[0], totalspending[1], totalspending[2]];
	}
}

function getWholeMonth(dmonth, dyear){
	var month = [];
	var monthbefore = [];
	var monthafter = [];
	var counter = 0;
	dmonth = parseInt(dmonth, 10);
	dyear = parseInt(dyear);
	
	if((dmonth-1) == 0){
		var mbefore = 12;
		var ybefore = dyear-1;
	}else{
		var mbefore = (dmonth-1);
		var ybefore = dyear;
	}
	if((dmonth+1) == 13){
		var mafter = 1;
		var yafter = dyear+1;
	}else{
		var mafter = (dmonth+1);
		var yafter = dyear;
	}
	
	for(var wk in weeks){
		for(var dy in weeks[wk]){
			var splitdate = weeks[wk][dy].split('-');
			
			if(splitdate[2] == dyear && splitdate[0] == dmonth){
				month[counter] = weeks[wk][dy];
				counter++;
			}
		}
	}
	counter = 0;
	for(var wk in weeks){
		for(var dy in weeks[wk]){
			var splitdate = weeks[wk][dy].split('-');
			
			if(splitdate[2] == ybefore && splitdate[0] == mbefore){
				monthbefore[counter] = weeks[wk][dy];
				counter++;
			}
		}
	}
	counter = 0;
	for(var wk in weeks){
		for(var dy in weeks[wk]){
			var splitdate = weeks[wk][dy].split('-');
			
			if(splitdate[2] == yafter && splitdate[0] == mafter){
				monthafter[counter] = weeks[wk][dy];

				counter++;
			}
		}
	}
	return [month, monthbefore, monthafter];
}


function printAllSpendingWeekly(ext, data, datets){
	var fullData = "<table style='border-collapse: collapse; margin: auto; text-align: center;'>";
	fullData +=`<tr style="background-color: #a5a5a5; font-weight: bold;">
						<td style="padding-left: 10px; padding-right: 10px; padding-top: 6px; padding-bottom: 6px;">Spending Dates</td>
						<td style="padding-left: 10px; padding-right: 10px;">Max</td>
						<td style="padding-left: 10px; padding-right: 10px;">Spent</td>
						<td style="padding-left: 10px; padding-right: 10px;">Left</td>
					 </tr>`;
	var todaysdate = getDate();
	var splitdate = todaysdate.split('-');
	var years = ["2017", "2018", "2019", "2020"];
	var months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
	var days= ["1", "8", "15", "24"];
	var colorcounter = 0;

	for(var yrs = years.length-1; yrs >= 0; yrs--){
		for(var mths = months.length-1; mths >= 0; mths--){
			for(var dys = days.length-1; dys >= 0; dys--){
				// console.log(parseInt(years[yrs]) + " | " + parseInt(splitdate[2]) + " | " + parseInt(months[mths]) + " | " + parseInt(splitdate[0]) + " | " + parseInt(days[dys]) + " | " + parseInt(splitdate[1]) );
				// console.log( ((parseInt(years[yrs]) >= parseInt(splitdate[2])) && (parseInt(months[mths]) >= parseInt(splitdate[0])) && (parseInt(days[dys]) >= parseInt(splitdate[1]))) );
				if((years[yrs] == "2017" && (months[mths] == "2" || months[mths] == "1" )) || ((parseInt(years[yrs]) >= parseInt(splitdate[2])) && (parseInt(months[mths]) > parseInt(splitdate[0]))) ){

				}else{
					var newdate = months[mths] + "-" + days[dys] + "-" + years[yrs];
					//console.log("NEW DATE " + newdate);
					var biweeklyspendingamount = getBiweeklySpendingWeek(newdate, data);
					if(colorcounter == 0){
						var bckcolor = "white";
						colorcounter = 1;
					}else{
						var bckcolor = "#d5d5d5";
						colorcounter = 0;
					}
					if(parseFloat(parseFloat(biweeklyspendingamount[2]).toFixed(2)) < 0 ){
						var textcolor = "red";
					}else{
						var textcolor = "green";
					}

					fullData +=`<tr style="background-color: ` + bckcolor + `;">
						<td style="padding-left: 10px; padding-right: 10px; padding-top: 4px; padding-bottom: 4px;">` + biweeklyspendingamount[0] + ` to ` + biweeklyspendingamount[1] + `</td>
						<td style="padding-left: 10px; padding-right: 10px;">` + biweeklyspendingamount[4] + `</td>
						<td style="padding-left: 10px; padding-right: 10px;">` + biweeklyspendingamount[3] + `</td>
						<td style="padding-left: 10px; padding-right: 10px; color: ` + textcolor + `">` + biweeklyspendingamount[2] + `</td>
					 </tr>`;
				}
			}
		}
	}

	return fullData += "</table>";

}



function getHomeMoneyData(ext, data, datets){
	var newdata = data.budgetData;
	var totalspentall = printBudgetDataTotalMade(newdata, "All", 3);
	var totalmadeall = printBudgetDataTotalMade(newdata, "All", 6);
	var totalpaychecknetall = printBudgetDataTotalMade(newdata, "All", 7);
	var totalinvestmentsall = printBudgetDataTotalMade(newdata, "All", 8);
	var totaltaxesall = printBudgetDataTotalMade(newdata, "All", 9);
	var totalsavedall = printBudgetDataTotalMade(newdata, "All", 11);
	var curravailable = parseFloat(parseFloat(totalpaychecknetall - totalspentall).toFixed(2)); 
	var spendingtotal = parseFloat(parseFloat(curravailable - totalsavedall).toFixed(2));
	//var todaysdate = getDate();
	var todaysdate = datets;
	//var todaysdate = "07-05-2019;"
	//var firstdayofthisweek = getFirstDayOfWeek(todaysdate);
	var biweeklyspendingamount = getBiweeklySpendingWeek(todaysdate, data);

	return content = `
				<div>
					   
					Week of <div style='font-weight:bold;'>` + biweeklyspendingamount[0] + ` to ` + biweeklyspendingamount[1] + `</div> 
					<br>
					You have spent <div style='font-weight:bold; display: inline-block;'>$` + biweeklyspendingamount[3] + `</div>  of <div style='font-weight:bold; display: inline-block;'>$` + biweeklyspendingamount[4] + `</div> 
					<br><br>
					This Weeks Spending Left: <br><div style='font-weight:bold;font-size:16px'>$` + biweeklyspendingamount[2] + `</div>
					<br>
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=spending' class='myheading3 changetoblue' style="">View Weekly Spending</a>
				</div>
			`;
}

function unhideStats(year) {
	for(var i in yearstatsvisible){
		if(yearstatsvisible[i][0] == year){
			if(yearstatsvisible[i][1] == false){
				yearstatsvisible[i][1] = true;
				document.getElementById(year + 'statblock').style.display = "inline-block";
			}else{
				yearstatsvisible[i][1] = false;
				document.getElementById(year + 'statblock').style.display = "none";
			}
		// }else{
		// 		yearstatsvisible[i][1] = false;
		// 		document.getElementById(yearstatsvisible[i][0] + 'statblock').style.display = "none";
		// 	}
		}
	}
}

var yearstatsvisible = [["all", false],["2017", false],["2018", false],["2019", false]];

function printSettingsData(ext, data){
	var newdata = data.budgetData;
	var totalspentall = printBudgetDataTotalMade(newdata, "All", 3);
	var totalmadeall = printBudgetDataTotalMade(newdata, "All", 6);
	var totalpaychecknetall = printBudgetDataTotalMade(newdata, "All", 7);
	var totalinvestmentsall = printBudgetDataTotalMade(newdata, "All", 8);
	var totaltaxesall = printBudgetDataTotalMade(newdata, "All", 9);
	var totalsavedall = printBudgetDataTotalMade(newdata, "All", 11);
	var curravailable = parseFloat(parseFloat(totalpaychecknetall - totalspentall).toFixed(2)); 
	var spendingtotal = parseFloat(curravailable - totalsavedall).toFixed(2);



	return content = `
			<div id="allAndTotalDiv">
				All of Your Money: $` + curravailable + `
				<br><br>
				Total Spending Amount: $` + spendingtotal + `
				<br><br>

				<a href='#allAndTotalDiv' id="allstatheading" class='myheading2' onclick="unhideStats('all');">All Stats:</a><br>
				<div id="allstatblock" style="display: none">
					Total Money Made: $` + parseFloat(totalmadeall).toFixed(2) + `
					<br><br>
					Total Spent: $` + parseFloat(totalspentall).toFixed(2) + `
					<br><br>
					Total Paycheck Net: $` + parseFloat(totalpaychecknetall).toFixed(2) + `
					<br><br>
					Total Put Into Investments: $` + parseFloat(totalinvestmentsall).toFixed(2) + `
					<br><br>
					Total Taxes From Paychecks: $` + parseFloat(totaltaxesall).toFixed(2) + `
					<br><br>
					Total in Savings: $` + parseFloat(totalsavedall).toFixed(2) + `
				</div>
				<br><br><br>

				<a href='#allstatheading' id="2019statheading" class='myheading2' onclick="unhideStats('2019');">2019 Stats:</a><br>
				<div id="2019statblock" style="display: none">
					2019 Total Made: $` + parseFloat(printBudgetDataTotalMade(newdata, "2019", 6)).toFixed(2) + `
					<br><br>
					2019 Total Spent: $` + parseFloat(printBudgetDataTotalMade(newdata, "2019", 3)).toFixed(2) + `
					<br><br>
					2019Total Paycheck Net: $` + parseFloat(printBudgetDataTotalMade(newdata, "2019", 7)).toFixed(2) + `
					<br><br>
					2019 Total Investments: $` + parseFloat(printBudgetDataTotalMade(newdata, "2019", 8)).toFixed(2) + `
					<br><br>
					2019 Total Taxes: $` + parseFloat(printBudgetDataTotalMade(newdata, "2019", 9)).toFixed(2) + `
					<br><br>
					2019 Total Saved: $` + parseFloat(printBudgetDataTotalMade(newdata, "2019", 11)).toFixed(2) + `
				</div>
				<br><br><br>

				<a href='#2019statheading' id="2018statheading" class='myheading2' onclick="unhideStats('2018');">2018 Stats:</a><br>
				<div id="2018statblock" style="display: none">
					2018 Total Made: $` + parseFloat(printBudgetDataTotalMade(newdata, "2018", 6)).toFixed(2) + `
					<br><br>
					2018 Total Spent: $` + parseFloat(printBudgetDataTotalMade(newdata, "2018", 3)).toFixed(2) + `
					<br><br>
					2018 Total Paycheck Net: $` + parseFloat(printBudgetDataTotalMade(newdata, "2018", 7)).toFixed(2) + `
					<br><br>
					2018 Total Investments: $` + parseFloat(printBudgetDataTotalMade(newdata, "2018", 8)).toFixed(2) + `
					<br><br>
					2018 Total Taxes: $` + parseFloat(printBudgetDataTotalMade(newdata, "2018", 9)).toFixed(2) + `
					<br><br>
					2018 Total Saved: $` + parseFloat(printBudgetDataTotalMade(newdata, "2018", 11)).toFixed(2) + `
				</div>
				<br><br><br>

				<a href='#2018statheading' id="2017statheading" class='myheading2' onclick="unhideStats('2017');">2017 Stats:</a><br>
				<div id="2017statblock" style="display: none">
					2017 Total Made: $` + parseFloat(printBudgetDataTotalMade(newdata, "2017", 6)).toFixed(2) + `
					<br><br>
					2017 Total Spent: $` + parseFloat(printBudgetDataTotalMade(newdata, "2017", 3)).toFixed(2) + `
					<br><br>
					2017 Total Paycheck Net: $` + parseFloat(printBudgetDataTotalMade(newdata, "2017", 7)).toFixed(2) + `
					<br><br>
					2017 Total Investments: $` + parseFloat(printBudgetDataTotalMade(newdata, "2017", 8)).toFixed(2) + `
					<br><br>
					2017 Total Taxes: $` + parseFloat(printBudgetDataTotalMade(newdata, "2017", 9)).toFixed(2) + `
					<br><br>
					2017 Total Saved: $` + parseFloat(printBudgetDataTotalMade(newdata, "2017", 11)).toFixed(2) + `
				</div>
				<br><br><br>
				To change how much you would like to save per paycheck:<br>
				<div style="font-size: 12px;">(Decimal Form - Ex. 70% = 0.7)</div>
				Number: <input id="setpercenttochange" style="max-width: 240px;" placeholder="` + data.autoamttosave + `" type="text" name="username"><br>
				Password: <input id="passwordpercenttochange" type="password" name="psw" required><br>
				<input id="budgetpurchasebutton" class="button2" style='width:40px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Change Percent" onclick="setPercentToChangeButton();" />

			</div>
		`;	

}

function setPercentToChangeButton(){
	var perc=document.getElementById('setpercenttochange').value;
	var pass=document.getElementById('passwordpercenttochange').value;
	if(perc =="" || pass ==""){
		alert("Please fill out all fields!");
	}else{
		var name = getCookie("username");
		socket.emit('setpercenttochange',{username:name, password:pass, percent:perc});
	}
}

function budgetHomePage(data, ext, postname) {
	if(postname.sby==undefined || postname.sby=="home"){var sortbyyear = "home";}else if(postname.sby=="all"){var sortbyyear = "all";}else{var sortbyyear = postname.sby;}
	if(postname.sbm==undefined || postname.sbm=="all"){var sortbymonth = "all";}else{var sortbymonth = postname.sbm;}
	if(postname.cell==undefined){var thecell=0;}else{var thecell=postname.cell;}
	if(postname.add==undefined){var newadd=0;}else{var newadd=postname.add;}
	if(postname.type==undefined){var newtype=0;}else{var newtype=postname.type;}
	if(postname.datets==undefined){var newdatets=getDate();}else{var newdatets=postname.datets;}

	if(newtype == "sort"){
		var whatToPrintBudgetData =  `
			<div>
				Purchases:
				<br>
				<div id="alldata">
					` + printBudgetData(ext, data,"Purchase", -1, sortbyyear, sortbymonth) + `
				</div>
			</div>
			<br>
			<div>
				Paychecks:
				<br>
				<div id="alldata">
					` + printBudgetData(ext, data, "Paycheck", -1, sortbyyear, sortbymonth) + `
				</div>
			</div>
		`;
	}else if(newtype == "cell"){
		var whatToPrintBudgetData =  `
			<div>
				` + printSingleBudgetData(ext, data, thecell, sortbyyear, sortbymonth) + `
			</div>
		`;	
	}else if(newtype == "add"){
		// if(data.autoamttosave == undefined || data.autoamttosave == "" || data.autoamttosave = "undefined"){
		// 	var thepercent="";
		// }else{
		// 	var thepercent=data.autoamttosave;
		// }
		var thepercent = data.autoamttosave;

		var whatToPrintBudgetData =  `
			<div>
				I would like to add a:
				<br>
				<div >
					<a id="purchaseadder" href='#' style="font-size: 21px; font-weight: bold; color: black;" onclick="switchToAddPoP('Purchase');">Purchase</a> | <a id="paycheckadder" href='#' style="font-size: 21px; font-weight: bold; color: black;" onclick="switchToAddPoP('Paycheck');">Paycheck</a>
				</div>
				<br>
				<div id="budgetPurchase" style="text-align:center; max-width: 243px; margin: auto; display: none;">
					
					<div style="text-align:left;">Date:</div> <div style="text-align:left;"><input id="budgetAddNewDate" style="max-width: 240px;" type="text" name="username" required></div>
					<div style="text-align:left;"><input id="datebox1" type="checkbox" name="datebox1" value="autodate" onclick="autoFillDate('Purchase')"> Today's Date</div><br>
					<div style="text-align:left;">Description:</div> <div style="text-align:left;"><input id="budgetAddNewName" style="max-width: 240px;" type="text" name="username" required></div><br>
					<div style="text-align:left;">Amount:</div> <div style="text-align:left;"><input id="budgetAddNewAmount" style="max-width: 240px;" type="text" name="username" required></div><br>
					<div style="text-align:left;">Category 1:</div> <div style="text-align:left;"> <select id="budgetAddNewCat1" style="width: 148px; height: 24px;" required>
																									  <option value="Empty"></option>
																									  <option value="Food">Food</option>
																									  <option value="Work/School">Work/School</option>
																									  <option value="Trips">Trips</option>
																									  <option value="Fun">Fun</option>
																									  <option value="Gift">Gift</option>
																									  <option value="Gas">Gas</option>
																									  <option value="House">House</option>
																									  <option value="Medical">Medical</option>
																									  <option value="Money Back">Money Back</option>
																									  <option value="Bills">Bills</option>
																									  <option value="Personal">Personal</option>
																									</select></div><br><br>
					<div style="text-align:left;">Category 2:</div> <div style="text-align:left;"><select id="budgetAddNewCat2" style="width: 148px; height: 24px;" required>
																									  <option value="Empty"></option>
																									  <option value="Breakfast">Breakfast</option>
																									  <option value="Lunch">Lunch</option>
																									  <option value="Dinner">Dinner</option>
																									  <option value="Snack">Snack</option>
																									  <option value="Alcohol">Alcohol</option>
																									  <option value="Store/Grocery">Store/Grocery</option>
																									  <option value="Work">Work</option>
																									  <option value="School">School</option>
																									  <option value="Hotel">Hotel</option>
																									  <option value="Games">Games</option>
																									  <option value="Clothes">Clothes</option>
																									  <option value="Entertainment">Entertainment</option>
																									  <option value="Accessories">Accessories</option>
																									  <option value="Gambling">Gambling</option>
																									  <option value="Services">Services</option>
																									  <option value="Gas">Gas</option>
																									  <option value="Health">Health</option>
																									  <option value="Decoration">Decoration</option>
																									  <option value="Interior">Interior</option>
																									  <option value="Outside">Outside</option>
																									  <option value="Family/Friends">Family/Friends</option>
																									  <option value="Personal Hygeine">Personal Hygeine</option>
																									  <option value="Natural Gas">Natural Gas</option>
																									  <option value="Trash">Trash</option>
																									  <option value="Internet">Internet</option>
																									  <option value="Phone">Phone</option>
																									  <option value="Water and Sewer">Water and Sewer</option>
																									  <option value="Electricity">Electricity</option>
																									  <option value="Cable or Satellite">Cable or Satellite</option>
																									  <option value="Parking">Parking</option>
																									  <option value="Trip Gift">Trip Gift</option>
																									  <option value="Pets">Pets</option>
																									</select></div><br><br>
					<input id="budgetpurchasebutton" class="button2" style='width:40px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Add" onclick="baddpurchase();" />
				</div>

				<div id="budgetPaycheck" style="text-align:center; max-width: 243px; margin: auto; display: none;">
					
					<div style="text-align:left;">Date:</div><div style="text-align:left;"><input id="budgetAddNewDate2" style="max-width: 240px;" type="text" name="username" required></div>
					<div style="text-align:left;"><input id="datebox2" type="checkbox" name="datebox2" value="autodate" onclick="autoFillDate('Paycheck')"> Today's Date</div><br>
					<div style="text-align:left;">Description:</div><div style="text-align:left;"><input id="budgetAddNewName2" style="max-width: 240px;" type="text" name="username" required></div><br>
					<div style="text-align:left;">Paycheck Total:</div><div style="text-align:left;"><input id="budgetAddNewPayTotal" style="max-width: 240px;" type="text" name="username"></div><br>
					<div style="text-align:left;">Paycheck Net:</div><div style="text-align:left;"><input id="budgetAddNewPayNet" style="max-width: 240px;" type="text" name="username" required></div><br>
					<div style="text-align:left;">Investments:</div><div style="text-align:left;"><input id="budgetAddNewInvestment" style="max-width: 240px;" type="text" name="username"></div><br>
					<div style="text-align:left;">Taxes Taken Out:</div><div style="text-align:left;"><input id="budgetAddNewTaxes" style="max-width: 240px;" type="text" name="username"></div><br>
					<div style="text-align:left;">Percentage To Save</div><div style="font-size:12px;">(Decimal Form - Ex. 70% = 0.7):</div><div style="text-align:left;"><input id="budgetAddNewSave" style="max-width: 240px;" value="` + thepercent + `" type="text" name="username"></div><br>
					<input id="budgetpaycheckbutton" class="button2" style='width:40px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Add" onclick="baddpaycheck();" />
				</div>
				<!--<div id="budgetOther" style="text-align:center; max-width: 243px; margin: auto; display: none;">
					<div style="text-align:left;">Date:</div><div style="text-align:left;"><input id="budgetAddNewDate2" style="max-width: 240px;" type="text" name="username" required></div>
					<div style="text-align:left;"><input id="datebox2" type="checkbox" name="datebox2" value="autodate" onclick="autoFillDate('Paycheck')"> Today's Date</div><br>
					<div style="text-align:left;">Description:</div><div style="text-align:left;"><input id="budgetAddNewName2" style="max-width: 240px;" type="text" name="username" required></div><br>
					<div style="text-align:left;">To Add or Remove Any Money in Savings:</div><div style="text-align:left;"><input id="budgetAddNewPayNet" style="max-width: 240px;" type="text" name="username"></div><br>
					<div style="text-align:left;">To Add or Remove Any Investments:</div><div style="text-align:left;"><input id="budgetAddNewInvestment" style="max-width: 240px;" type="text" name="username"></div><br>
					<input id="budgetpaycheckbutton" class="button2" style='width:40px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Add" onclick="baddother();" />
				</div>-->
			</div>
		`;	


	}else if(newtype == "added"){
		var whatToPrintBudgetData =  `
			<div>
				Your entry has been added!
			</div>
		`;	

	}else if(newtype == "percchanged"){
		var whatToPrintBudgetData =  `
			<div>
				You have changed your Save To Percent Value!
			</div>
		`;	

	}else if(newtype == "settings"){
		var whatToPrintBudgetData =  `
			<div>
				` + printSettingsData(ext, data) + `
			</div>
		`;	

	}else if(newtype == "spending"){
		var whatToPrintBudgetData =  `
			<div>
				` + printAllSpendingWeekly(ext, data) + `
			</div>
		`;
	}else{
		var whatToPrintBudgetData =  `
			<div>
				` + getHomeMoneyData(ext, data, newdatets) + `
				<br><br>
				Last 25 Purchases:
				<br>
				<div id="alldatapurch">
					` + printBudgetData(ext, data,"Purchase", 25, "all", "all") + `
				</div>
			</div>
			<br>
			<div>
				Last 25 Paychecks:
				<br>
				<div id="alldatapay">
					` + printBudgetData(ext, data, "Paycheck", 25, "all", "all") + `
				</div>
			</div>
		`;
	}

	document.getElementById('contentdiv').innerHTML = `
			<div class="middlepanel" style="padding: 0 20px 20px 0px;">
				` + insTopRobin(data) + `
				<div>
				<br>
				<div id="menubar" style="padding: 0 0 12px 0;">
					<a href='` + ext + `/pages/robin/robin.html?app=budget&datets=` + getDate() + `' id='sbyhome' class='myheading3' style="">Home</a>
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=add' id='addbudgetcell' class='myheading3' style="">Add</a>
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=all&sbm=all' id='sortAllData' class='myheading3' style="">Sort</a>
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=settings' id='settingsData' class='myheading3' style="">Settings/Data</a>
				</div>
				<div id="sortbar" style="padding: 0 0 12px 0;">
					
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=all&sbm=` + sortbymonth + `' id='sbyall' class='myheading3 changetoblue' style="">All</a>  
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=2017&sbm=` + sortbymonth + `'  id='sby2017'class='myheading3 changetoblue' style="">2017</a>
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=2018&sbm=` + sortbymonth + `' id='sby2018' class='myheading3 changetoblue' style="">2018</a>
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=2019&sbm=` + sortbymonth + `' id='sby2019' class='myheading3 changetoblue' style="">2019</a>    
				</div>
				<div id="monthsortbar" style="padding: 0 0 12px 0;">
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=all' id='sbmall' class='myheading3 changetoblue' style="">All</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=01' id='sbm01' class='myheading3 changetoblue' style="">Jan</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=02' id='sbm02' class='myheading3 changetoblue' style="">Feb</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=03' id='sbm03' class='myheading3 changetoblue' style="">Mar</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=04' id='sbm04' class='myheading3 changetoblue' style="">Apr</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=05' id='sbm05' class='myheading3 changetoblue' style="">May</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=06' id='sbm06' class='myheading3 changetoblue' style="">Jun</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=07' id='sbm07' class='myheading3 changetoblue' style="">Jul</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=08' id='sbm08' class='myheading3 changetoblue' style="">Aug</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=09' id='sbm09' class='myheading3 changetoblue' style="">Sep</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=10' id='sbm10' class='myheading3 changetoblue' style="">Oct</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=11' id='sbm11' class='myheading3 changetoblue' style="">Nov</a> 
					<a href='` + ext + `/pages/robin/robin.html?app=budget&type=sort&sby=` + sortbyyear + `&sbm=12' id='sbm12' class='myheading3 changetoblue' style="">Dec</a> 
				</div>
				<br>
				` + whatToPrintBudgetData + `
			</div>
			</div>	

		`;
	if(postname.sby==undefined || postname.sby=="home"){document.getElementById('sbyhome').style.textDecoration = "underline";document.getElementById('monthsortbar').style.display = "none";document.getElementById('sortbar').style.display = "none";}else if(postname.sby=="all"){document.getElementById('sbyall').style.textDecoration = "underline";}else{document.getElementById('sby' + postname.sby).style.textDecoration = "underline";}
	if(postname.sbm==undefined || postname.sbm=="all"){document.getElementById('sbmall').style.textDecoration = "underline";}else{document.getElementById('sbm' + postname.sbm).style.textDecoration = "underline";}
	if(newtype == "added"){document.getElementById('addbudgetcell').innerHTML = "Add Another"; document.getElementById('settingsData').style.display = "none"; document.getElementById('sbyhome').style.textDecoration = "none";document.getElementById('sbyall').style.display = "none";document.getElementById('sby2017').style.display = "none";document.getElementById('sby2018').style.display = "none";document.getElementById('sby2019').style.display = "none";}
	if(newtype == "add"){document.getElementById('addbudgetcell').style.textDecoration = "underline"; document.getElementById('sbyhome').style.textDecoration = "none";document.getElementById('sbyall').style.display = "none";document.getElementById('sby2017').style.display = "none";document.getElementById('sby2018').style.display = "none";document.getElementById('sby2019').style.display = "none";}
	if(newtype == "settings"){document.getElementById('settingsData').style.textDecoration = "underline"; document.getElementById('sbyhome').style.textDecoration = "none";document.getElementById('sbyall').style.display = "none";document.getElementById('sby2017').style.display = "none";document.getElementById('sby2018').style.display = "none";document.getElementById('sby2019').style.display = "none";}


}

function getDate(){
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	return today = mm + '-' + dd + '-' + yyyy;
}

function autoFillDate(data){
	var today = getDate();
	if(data == "Purchase"){
	  if (document.getElementById('datebox1').checked == true){
	    document.getElementById('budgetAddNewDate').value = today;
	  } else {
	    document.getElementById('budgetAddNewDate').value = "";
	  }
	} else if(data == "Paycheck"){
	  if (document.getElementById('datebox2').checked == true){
	    document.getElementById('budgetAddNewDate2').value = today;
	  } else {
	    document.getElementById('budgetAddNewDate2').value = "";
	  }
	}
}

function baddpurchase(){
	var name = getCookie("username");
	var thid = getCookie("nid");
	var budAddNewDate = document.getElementById('budgetAddNewDate').value;
	var budAddNewName = document.getElementById('budgetAddNewName').value;
	var budAddNewAmount = document.getElementById('budgetAddNewAmount').value;
	var budAddNewCat1 = document.getElementById('budgetAddNewCat1').value;
	var budAddNewCat2 = document.getElementById('budgetAddNewCat2').value;

	if(budAddNewDate == ""){
		budAddNewDate = getDate();
	}else{

	}

	if(budAddNewDate.length == 10 && budAddNewDate[2] == "-" && budAddNewDate[5] == "-"){
		socket.emit('addToSheet',{type:"Purchase", date:budAddNewDate, name:budAddNewName, amount:budAddNewAmount, cat1:budAddNewCat1, cat2:budAddNewCat2, paytotal:"", paynet:"", invest:"", taxes:"", username:name, tid:thid});
	}else{
		alert("Please use the standard date format: ##-##-####");		
	}

}

function baddpaycheck(){
	var name = getCookie("username");
	var thid = getCookie("nid");
	var budAddNewDate2 = document.getElementById('budgetAddNewDate2').value;
	var budAddNewName2 = document.getElementById('budgetAddNewName2').value;
	var budAddNewPayTotal = document.getElementById('budgetAddNewPayTotal').value;
	var budAddNewPayNet = document.getElementById('budgetAddNewPayNet').value;
	var budAddNewInvestment = document.getElementById('budgetAddNewInvestment').value;
	var budAddNewTaxes = document.getElementById('budgetAddNewTaxes').value;
	var budAddNewSave = document.getElementById('budgetAddNewSave').value;

	if(budAddNewDate2 == ""){
		budAddNewDate2 = getDate();
	}

	if(budAddNewDate2.length == 10 && budAddNewDate2[2] == "-" && budAddNewDate2[5] == "-"){
		socket.emit('addToSheet',{type:"Paycheck", date:budAddNewDate2, name:budAddNewName2, amount:"", cat1:"", cat2:"", paytotal:budAddNewPayTotal, paynet:budAddNewPayNet, invest:budAddNewInvestment, taxes:budAddNewTaxes, save:budAddNewSave, username:name, tid:thid});
	}else{
		alert("Please use the standard date format: ##-##-####");		
	}

}

function baddother(){
	var name = getCookie("username");
	var thid = getCookie("nid");
	var budAddNewDate = document.getElementById('budgetAddNewDate').value;
	var budAddNewName = document.getElementById('budgetAddNewName').value;
	var budAddNewAmount = document.getElementById('budgetAddNewAmount').value;
	var budAddNewCat1 = document.getElementById('budgetAddNewCat1').value;
	var budAddNewCat2 = document.getElementById('budgetAddNewCat2').value;

	if(budAddNewDate == ""){
		budAddNewDate = getDate();
	}else{

	}

	if(budAddNewDate.length == 10 && budAddNewDate[2] == "-" && budAddNewDate[5] == "-"){
		socket.emit('addToSheet',{type:"Other", date:budAddNewDate, name:budAddNewName, amount:budAddNewAmount, cat1:budAddNewCat1, cat2:budAddNewCat2, paytotal:"", paynet:"", invest:"", taxes:"", username:name, save:1, tid:thid});
	}else{
		alert("Please use the standard date format: ##-##-####");		
	}

}


function addPicHomePage(data, ext, postname) {
	document.getElementById('contentdiv').innerHTML = `
		<div class="middlepanel" style="padding: 0 20px 20px 0px;">
			` + insTopRobin(data) + `
			<div style="max-width: 236px; margin: auto;">
				<br>
				<div style="text-align:left;">Picture Name:</div><div style="text-align:left;"><input id="addPictureName" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div style="text-align:left;">IMG URL (ex: https://imgur.com/lVRaUfZ):</div><div style="text-align:left;"><input id="addIMGURL" style="max-width: 240px;" type="text" name="username"></div><br>
				<div style="text-align:left;">Price:</div><div style="text-align:left;"><input id="addPrice" style="max-width: 240px;" type="text" name="username"></div><br>
				<div style="text-align:left;">Availability (0-available, 1-sold, 2-unavailable):</div><div style="text-align:left;"><input id="addAvailability" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div style="text-align:left;">Material:</div><div style="text-align:left;"><input id="addMaterial" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div style="text-align:left;">Size:</div><div style="text-align:left;"><input id="addSize" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div style="text-align:left;">Description:</div><div style="text-align:left;"><input id="addDesription" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div style="text-align:left;">Creator:</div><div style="text-align:left;"><input id="addCreator" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div style="text-align:left;">Paypal Code:</div><div style="text-align:left;"><input id="addPaypalCode" style="max-width: 240px;" type="text" name="username" ></div><br>
				<div id="respondmessage" style="color:red;"></div>
				<input id="addPaintingButton" class="button2" style='width:40px;padding:0px 0 5px 0; font-size:13px;' type="button" value="Add" onclick="addPainting();" />
			</div>
		</div>	

	`;

}

function printAllRandomLists(list, draggbleliststate){
	var printedList = "<div>";
	var counter = 0;
	for(var h in list){
		printedList += `<div class="listbox" draggable='` + draggbleliststate + `' id='listbox-` + counter + `'>`;
		counter++
		for(var i in list[h]){
			
			if(i == 0){
				printedList += `<input class="listcheckbox" type="checkbox" id='cb-` + h + `'/><div class="listheader" id="header-` + h + `" onclick="clickOpenCloseRandomList('` + h + `')"><b><u>` + list[h][i] + ` List (` + (list[h].length-1) + `)</u></b></div><br/>`;
				printedList += `<div id="list-` + h + `" style="display:none;"> `;
			}else{
				printedList += `<div class='listitem' id='listitem-` + h + `-` + i + `'><div id='listname-` + h + `-` + i + `' class='listitemname'>` + list[h][i] + `</div><div class='listex' id='ind-` + h + `-` + i + `' onclick='deleteRandomListItem("` + h + `","` + i + `")'>(X)</div><div class='listupdn lup' id='mvup-` + h + `-` + i + `' onclick='mvupRandomListItem("` + h + `","` + i + `")'>&#8593;</div><div class='listupdn ldn' id='mvdn-` + h + `-` + i + `' onclick='mvdnRandomListItem("` + h + `","` + i + `")'>&#8595;</div></div>`;
			}
		}
		printedList += `<br><input id="itemToThisRandomList-` + h + `" style="max-width: 240px;" type="text" name="username" >
		<input id="addToThisRandomList" class="button2" style="width:40px;padding:0px 0 5px 0; font-size:13px;" type="button" value="Add" onclick="addToRandomList('` + h + `')"/>
		<br><br>
		<input id="addToThisRandomList" class="button2" style="width:110px;padding:0px 0 5px 0; font-size:13px; background-color: #7e1313;" type="button" value="Delete This List" onclick="deleteThisList('` + h + `')"/> </div></div><br/>`;
	}
	
	printedList += "<br/></div>";
	return printedList;
}

function mvupRandomListItem(listname, itemname){
	var name = getCookie("username");
	var thid = getCookie("nid");

	socket.emit('mvupRandomItem',{username:name, tid:thid, listnum:listname, itemnum:itemname});
}

function mvDraggedRandomList(firstlistname, secondlistname){
	var name = getCookie("username");
	var thid = getCookie("nid");

	socket.emit('mvDraggedRandomList',{username:name, tid:thid, firstnum:firstlistname, secondnum:secondlistname});
}

function mvdnRandomListItem(listname, itemname){
	var name = getCookie("username");
	var thid = getCookie("nid");

	socket.emit('mvdnRandomItem',{username:name, tid:thid, listnum:listname, itemnum:itemname});
}

function enableMoveLists(list){

	if(document.getElementById('moveListButton').value == "Disable Draggable Lists"){
		var cols = document.querySelectorAll('.listbox');
		[].forEach.call(cols, function(col) {
		  col.setAttribute('draggable', false);
		});

		document.getElementById('moveListButton').value = "Enable Draggable Lists";
	}else{
		var cols = document.querySelectorAll('.listbox');
		[].forEach.call(cols, function(col) {
		  col.setAttribute('draggable', true);
		});

		document.getElementById('moveListButton').value = "Disable Draggable Lists";
	}

	
}

function addEventListenerToItems(list){

	document.getElementById('randomizeListItem').onclick = function () {
        randomizeListItem(list);
    }
	document.getElementById('addNewListButton').onclick = function () {
        addNewList(list);
    }
    document.getElementById('moveListButton').onclick = function () {
        enableMoveLists(list);
    }

    var cols = document.querySelectorAll('.listbox');
		[].forEach.call(cols, function(col) {
		  col.addEventListener('dragstart', handleDragStart, false);
		  col.addEventListener('dragenter', handleDragEnter, false)
		  col.addEventListener('dragover', handleDragOver, false);
		  col.addEventListener('dragleave', handleDragLeave, false);
		  col.addEventListener('drop', handleDrop, false);
		  col.addEventListener('dragend', handleDragEnd, false);
		});
    

    document.getElementById("addNewList").addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
		        addNewList(newestlist);
		    }
	});  

	for(let h in list){
		document.getElementById('itemToThisRandomList-' + h).addEventListener("keyup", function(event) {
		    if (event.key === "Enter") {
		        addToRandomList(h);
		    }
		});

		for(let i in list[h]){
			if(i==0){

			}else{
				//console.log(i + " | " + h);
				document.getElementById('listname-' + h + "-" + i).onclick = function () {
					if(document.getElementById("listItemInput-" + h + "-" + i)){

					}else{
						changeToInput(list, h, i);
					}
			        
			    }
			}
			
		}


	}
}

function addEvent(elem, event, fn){
	if(elem.addEventListener){
	  elem.addEventListener(event, fn, false);
	}else{
	  elem.attachEvent("on" + event,
	  function(){ return(fn.call(elem, window.event)); });
	}
}

function changeToInput(list, h, i){
	document.getElementById('listname-' + h + "-" + i).innerHTML = `<input id="listItemInput-` + h + "-" + i + `" class="listitemname" type="text" name="username" value="` + list[h][i] + `" style="border: 0;">`;
	//document.getElementById("listItemInput-" + h + "-" + i).click();
	
	document.getElementById("listItemInput-" + h + "-" + i).focus(); //sets focus to element
	var val = this.document.getElementById("listItemInput-" + h + "-" + i).value; //store the value of the element
	this.document.getElementById("listItemInput-" + h + "-" + i).value = ''; //clear the value of the element
	this.document.getElementById("listItemInput-" + h + "-" + i).value = val; //set that value back. 

	document.getElementById("listItemInput-" + h + "-" + i).addEventListener("keyup", function(event) {
	    if (event.key === "Enter") {
	        updateRandomListItem(h, i, document.getElementById("listItemInput-" + h + "-" + i).value);
	    }
	});

	document.getElementById("listItemInput-" + h + "-" + i).addEventListener("focusout", function(event) {
		    updateRandomListItem(h, i, document.getElementById("listItemInput-" + h + "-" + i).value);
		});  

}

function updateRandomListItem(listname, itemname, value){
	var name = getCookie("username");
	var thid = getCookie("nid");
	
	socket.emit('updateRandomItem',{username:name, item:value, tid:thid, listnum:listname, itemnum:itemname});
		
}

function deleteRandomListItem(listname, itemname){
	var name = getCookie("username");
	var thid = getCookie("nid");
	var todelete=document.getElementById('ind-' + listname + "-" + itemname).value;

	
	if (confirm('Are you sure you want to delete this list item: ' + todelete)) {
		document.getElementById('listitem-' + listname + "-" + itemname).style.height = "0px";
		document.getElementById('listitem-' + listname + "-" + itemname).style.padding = "0px";
		document.getElementById('listitem-' + listname + "-" + itemname).style.border = "0";
    	setTimeout(function() {
			socket.emit('deleteRandomItem',{username:name, item:todelete, tid:thid, listnum:listname, itemnum:itemname});
		}, 600);
	} else {
	    // Do nothing!
	}
	
	
}

function deleteThisList(listname){
	var name = getCookie("username");
	var thid = getCookie("nid");
	if (confirm('Are you sure you want to delete this list: ' + listname)) {
		socket.emit('deleteThisList',{username:name, tid:thid, listnum:listname});
	} else {
	    // Do nothing!
	}
	
	
}

function addToRandomList(listname){
	var name = getCookie("username");
	var thid = getCookie("nid");
	var toadd=document.getElementById('itemToThisRandomList-' + listname).value;


	socket.emit('addNewRandomItem',{username:name, newitem:toadd, tid:thid, listnum:listname});
	
}

function clickOpenCloseRandomList(listname){
	if(document.getElementById('list-' + listname).style.display == 'inline-block'){
		document.getElementById('list-' + listname).style.display = 'none';
	}else{
		document.getElementById('list-' + listname).style.display = 'inline-block';
	}		
}

function addNewList(list){
	var name = getCookie("username");
	var thid = getCookie("nid");
	let thelistname = document.getElementById('addNewList').value;

	socket.emit('addNewList',{listname:thelistname, username:name, tid:thid });
}

function randomizerHomePage(data, ext, postname, newestlist, draggbleliststate) {
	if(draggbleliststate == true){
		var dlstate = "Disable Draggable Lists";
	}else{
		var dlstate = "Enable Draggable Lists";
	}

	document.getElementById('contentdiv').innerHTML = `
		<div class="middlepanel" style="padding: 0 20px 20px 0px;">
			` + insTopRobin(data) + `
			<div style="max-width: 400px; margin: auto;">
				<br>
				Please check each list you want to add in the randomization. 
				<br><br>
				<input id="randomizeListItem" class="button2" style='width:81px;padding: 2px 0 5px 0; font-size:13px;' type="button" value="Randomize" />
				<br>
				<div id="theAnswerOfTheLists"></div>
				<br><br>
				<input id="addNewList" style="max-width: 240px;" type="text" name="username" >
				<input id="addNewListButton" class="button2" style='width:110px;padding: 3px 0 4px 0; font-size:13px;' type="button" value="Add New List" />
				<br><br>
				<input id="moveListButton" class="button2" style='width:200px;padding: 3px 0 4px 0; font-size:13px;' type="button" value="` + dlstate + `" />
				<br><br>
				<div id="thelistdiv">
					` + printAllRandomLists(newestlist, draggbleliststate) + `
				</div>
			</div>
		</div>	

	`;


	addEventListenerToItems(newestlist);
	

}

function randomizeListItem(list){
	var thelistitems = [];
	var totalnumber = 0;
	for(var h in list){
		if(document.getElementById('cb-' + h).checked == true){
			for(var i in list[h]){
				if(i == 0){

				}else{
					thelistitems[thelistitems.length] = list[h][i];
				}
			}
		}
	}
	if(thelistitems.length == 0){
		document.getElementById('theAnswerOfTheLists').innerHTML = "Please Select Any Lists";
	}else{
		var randomnum = Math.floor(Math.random() * thelistitems.length);
		//console.log(thelistitems + " | " + randomnum);
		document.getElementById('theAnswerOfTheLists').innerHTML = thelistitems[randomnum];
	}
	

}


function addPainting(){
	var name = getCookie("username");
	var thid = getCookie("nid");
	let pname = document.getElementById('addPictureName').value;
	let pimgurl = document.getElementById('addIMGURL').value;
	let pprice =document.getElementById('addPrice').value;
	let pavail = document.getElementById('addAvailability').value;
	let pmaterial = document.getElementById('addMaterial').value;
	let psize = document.getElementById('addSize').value;
	let pdesc = document.getElementById('addDesription').value;
	let pcreator = document.getElementById('addCreator').value;
	let ppaypalcode = document.getElementById('addPaypalCode').value;

	socket.emit('addPictureToMLab',{name:pname, imgurl:pimgurl, price:pprice, avail:pavail, material:pmaterial, size:psize, desc:pdesc, creator:pcreator, paypalcode:ppaypalcode, username:name, tid:thid });
}

var weeks = [["01-01-2017","01-02-2017","01-03-2017","01-04-2017","01-05-2017","01-06-2017","01-07-2017"],
["01-08-2017","01-09-2017","01-10-2017","01-11-2017","01-12-2017","01-13-2017","01-14-2017"],
["01-15-2017","01-16-2017","01-17-2017","01-18-2017","01-19-2017","01-20-2017","01-21-2017"],
["01-22-2017","01-23-2017","01-24-2017","01-25-2017","01-26-2017","01-27-2017","01-28-2017"],
["01-29-2017","01-30-2017","01-31-2017","02-01-2017","02-02-2017","02-03-2017","02-04-2017"],
["02-05-2017","02-06-2017","02-07-2017","02-08-2017","02-09-2017","02-10-2017","02-11-2017"],
["02-12-2017","02-13-2017","02-14-2017","02-15-2017","02-16-2017","02-17-2017","02-18-2017"],
["02-19-2017","02-20-2017","02-21-2017","02-22-2017","02-23-2017","02-24-2017","02-25-2017"],
["02-26-2017","02-27-2017","02-28-2017","03-01-2017","03-02-2017","03-03-2017","03-04-2017"],
["03-05-2017","03-06-2017","03-07-2017","03-08-2017","03-09-2017","03-10-2017","03-11-2017"],
["03-12-2017","03-13-2017","03-14-2017","03-15-2017","03-16-2017","03-17-2017","03-18-2017"],
["03-19-2017","03-20-2017","03-21-2017","03-22-2017","03-23-2017","03-24-2017","03-25-2017"],
["03-26-2017","03-27-2017","03-28-2017","03-29-2017","03-30-2017","03-31-2017","04-01-2017"],
["04-02-2017","04-03-2017","04-04-2017","04-05-2017","04-06-2017","04-07-2017","04-08-2017"],
["04-09-2017","04-10-2017","04-11-2017","04-12-2017","04-13-2017","04-14-2017","04-15-2017"],
["04-16-2017","04-17-2017","04-18-2017","04-19-2017","04-20-2017","04-21-2017","04-22-2017"],
["04-23-2017","04-24-2017","04-25-2017","04-26-2017","04-27-2017","04-28-2017","04-29-2017"],
["04-30-2017","05-01-2017","05-02-2017","05-03-2017","05-04-2017","05-05-2017","05-06-2017"],
["05-07-2017","05-08-2017","05-09-2017","05-10-2017","05-11-2017","05-12-2017","05-13-2017"],
["05-14-2017","05-15-2017","05-16-2017","05-17-2017","05-18-2017","05-19-2017","05-20-2017"],
["05-21-2017","05-22-2017","05-23-2017","05-24-2017","05-25-2017","05-26-2017","05-27-2017"],
["05-28-2017","05-29-2017","05-30-2017","05-31-2017","06-01-2017","06-02-2017","06-03-2017"],
["06-04-2017","06-05-2017","06-06-2017","06-07-2017","06-08-2017","06-09-2017","06-10-2017"],
["06-11-2017","06-12-2017","06-13-2017","06-14-2017","06-15-2017","06-16-2017","06-17-2017"],
["06-18-2017","06-19-2017","06-20-2017","06-21-2017","06-22-2017","06-23-2017","06-24-2017"],
["06-25-2017","06-26-2017","06-27-2017","06-28-2017","06-29-2017","06-30-2017","07-01-2017"],
["07-02-2017","07-03-2017","07-04-2017","07-05-2017","07-06-2017","07-07-2017","07-08-2017"],
["07-09-2017","07-10-2017","07-11-2017","07-12-2017","07-13-2017","07-14-2017","07-15-2017"],
["07-16-2017","07-17-2017","07-18-2017","07-19-2017","07-20-2017","07-21-2017","07-22-2017"],
["07-23-2017","07-24-2017","07-25-2017","07-26-2017","07-27-2017","07-28-2017","07-29-2017"],
["07-30-2017","07-31-2017","08-01-2017","08-02-2017","08-03-2017","08-04-2017","08-05-2017"],
["08-06-2017","08-07-2017","08-08-2017","08-09-2017","08-10-2017","08-11-2017","08-12-2017"],
["08-13-2017","08-14-2017","08-15-2017","08-16-2017","08-17-2017","08-18-2017","08-19-2017"],
["08-20-2017","08-21-2017","08-22-2017","08-23-2017","08-24-2017","08-25-2017","08-26-2017"],
["08-27-2017","08-28-2017","08-29-2017","08-30-2017","08-31-2017","09-01-2017","09-02-2017"],
["09-03-2017","09-04-2017","09-05-2017","09-06-2017","09-07-2017","09-08-2017","09-09-2017"],
["09-10-2017","09-11-2017","09-12-2017","09-13-2017","09-14-2017","09-15-2017","09-16-2017"],
["09-17-2017","09-18-2017","09-19-2017","09-20-2017","09-21-2017","09-22-2017","09-23-2017"],
["09-24-2017","09-25-2017","09-26-2017","09-27-2017","09-28-2017","09-29-2017","09-30-2017"],
["10-01-2017","10-02-2017","10-03-2017","10-04-2017","10-05-2017","10-06-2017","10-07-2017"],
["10-08-2017","10-09-2017","10-10-2017","10-11-2017","10-12-2017","10-13-2017","10-14-2017"],
["10-15-2017","10-16-2017","10-17-2017","10-18-2017","10-19-2017","10-20-2017","10-21-2017"],
["10-22-2017","10-23-2017","10-24-2017","10-25-2017","10-26-2017","10-27-2017","10-28-2017"],
["10-29-2017","10-30-2017","10-31-2017","11-01-2017","11-02-2017","11-03-2017","11-04-2017"],
["11-05-2017","11-06-2017","11-07-2017","11-08-2017","11-09-2017","11-10-2017","11-11-2017"],
["11-12-2017","11-13-2017","11-14-2017","11-15-2017","11-16-2017","11-17-2017","11-18-2017"],
["11-19-2017","11-20-2017","11-21-2017","11-22-2017","11-23-2017","11-24-2017","11-25-2017"],
["11-26-2017","11-27-2017","11-28-2017","11-29-2017","11-30-2017","12-01-2017","12-02-2017"],
["12-03-2017","12-04-2017","12-05-2017","12-06-2017","12-07-2017","12-08-2017","12-09-2017"],
["12-10-2017","12-11-2017","12-12-2017","12-13-2017","12-14-2017","12-15-2017","12-16-2017"],
["12-17-2017","12-18-2017","12-19-2017","12-20-2017","12-21-2017","12-22-2017","12-23-2017"],
["12-24-2017","12-25-2017","12-26-2017","12-27-2017","12-28-2017","12-29-2017","12-30-2017"],
["12-31-2017","01-01-2018","01-02-2018","01-03-2018","01-04-2018","01-05-2018","01-06-2018"],
["01-07-2018","01-08-2018","01-09-2018","01-10-2018","01-11-2018","01-12-2018","01-13-2018"],
["01-14-2018","01-15-2018","01-16-2018","01-17-2018","01-18-2018","01-19-2018","01-20-2018"],
["01-21-2018","01-22-2018","01-23-2018","01-24-2018","01-25-2018","01-26-2018","01-27-2018"],
["01-28-2018","01-29-2018","01-30-2018","01-31-2018","02-01-2018","02-02-2018","02-03-2018"],
["02-04-2018","02-05-2018","02-06-2018","02-07-2018","02-08-2018","02-09-2018","02-10-2018"],
["02-11-2018","02-12-2018","02-13-2018","02-14-2018","02-15-2018","02-16-2018","02-17-2018"],
["02-18-2018","02-19-2018","02-20-2018","02-21-2018","02-22-2018","02-23-2018","02-24-2018"],
["02-25-2018","02-26-2018","02-27-2018","02-28-2018","03-01-2018","03-02-2018","03-03-2018"],
["03-04-2018","03-05-2018","03-06-2018","03-07-2018","03-08-2018","03-09-2018","03-10-2018"],
["03-11-2018","03-12-2018","03-13-2018","03-14-2018","03-15-2018","03-16-2018","03-17-2018"],
["03-18-2018","03-19-2018","03-20-2018","03-21-2018","03-22-2018","03-23-2018","03-24-2018"],
["03-25-2018","03-26-2018","03-27-2018","03-28-2018","03-29-2018","03-30-2018","03-31-2018"],
["04-01-2018","04-02-2018","04-03-2018","04-04-2018","04-05-2018","04-06-2018","04-07-2018"],
["04-08-2018","04-09-2018","04-10-2018","04-11-2018","04-12-2018","04-13-2018","04-14-2018"],
["04-15-2018","04-16-2018","04-17-2018","04-18-2018","04-19-2018","04-20-2018","04-21-2018"],
["04-22-2018","04-23-2018","04-24-2018","04-25-2018","04-26-2018","04-27-2018","04-28-2018"],
["04-29-2018","04-30-2018","05-01-2018","05-02-2018","05-03-2018","05-04-2018","05-05-2018"],
["05-06-2018","05-07-2018","05-08-2018","05-09-2018","05-10-2018","05-11-2018","05-12-2018"],
["05-13-2018","05-14-2018","05-15-2018","05-16-2018","05-17-2018","05-18-2018","05-19-2018"],
["05-20-2018","05-21-2018","05-22-2018","05-23-2018","05-24-2018","05-25-2018","05-26-2018"],
["05-27-2018","05-28-2018","05-29-2018","05-30-2018","05-31-2018","06-01-2018","06-02-2018"],
["06-03-2018","06-04-2018","06-05-2018","06-06-2018","06-07-2018","06-08-2018","06-09-2018"],
["06-10-2018","06-11-2018","06-12-2018","06-13-2018","06-14-2018","06-15-2018","06-16-2018"],
["06-17-2018","06-18-2018","06-19-2018","06-20-2018","06-21-2018","06-22-2018","06-23-2018"],
["06-24-2018","06-25-2018","06-26-2018","06-27-2018","06-28-2018","06-29-2018","06-30-2018"],
["07-01-2018","07-02-2018","07-03-2018","07-04-2018","07-05-2018","07-06-2018","07-07-2018"],
["07-08-2018","07-09-2018","07-10-2018","07-11-2018","07-12-2018","07-13-2018","07-14-2018"],
["07-15-2018","07-16-2018","07-17-2018","07-18-2018","07-19-2018","07-20-2018","07-21-2018"],
["07-22-2018","07-23-2018","07-24-2018","07-25-2018","07-26-2018","07-27-2018","07-28-2018"],
["07-29-2018","07-30-2018","07-31-2018","08-01-2018","08-02-2018","08-03-2018","08-04-2018"],
["08-05-2018","08-06-2018","08-07-2018","08-08-2018","08-09-2018","08-10-2018","08-11-2018"],
["08-12-2018","08-13-2018","08-14-2018","08-15-2018","08-16-2018","08-17-2018","08-18-2018"],
["08-19-2018","08-20-2018","08-21-2018","08-22-2018","08-23-2018","08-24-2018","08-25-2018"],
["08-26-2018","08-27-2018","08-28-2018","08-29-2018","08-30-2018","08-31-2018","09-01-2018"],
["09-02-2018","09-03-2018","09-04-2018","09-05-2018","09-06-2018","09-07-2018","09-08-2018"],
["09-09-2018","09-10-2018","09-11-2018","09-12-2018","09-13-2018","09-14-2018","09-15-2018"],
["09-16-2018","09-17-2018","09-18-2018","09-19-2018","09-20-2018","09-21-2018","09-22-2018"],
["09-23-2018","09-24-2018","09-25-2018","09-26-2018","09-27-2018","09-28-2018","09-29-2018"],
["09-30-2018","10-01-2018","10-02-2018","10-03-2018","10-04-2018","10-05-2018","10-06-2018"],
["10-07-2018","10-08-2018","10-09-2018","10-10-2018","10-11-2018","10-12-2018","10-13-2018"],
["10-14-2018","10-15-2018","10-16-2018","10-17-2018","10-18-2018","10-19-2018","10-20-2018"],
["10-21-2018","10-22-2018","10-23-2018","10-24-2018","10-25-2018","10-26-2018","10-27-2018"],
["10-28-2018","10-29-2018","10-30-2018","10-31-2018","11-01-2018","11-02-2018","11-03-2018"],
["11-04-2018","11-05-2018","11-06-2018","11-07-2018","11-08-2018","11-09-2018","11-10-2018"],
["11-11-2018","11-12-2018","11-13-2018","11-14-2018","11-15-2018","11-16-2018","11-17-2018"],
["11-18-2018","11-19-2018","11-20-2018","11-21-2018","11-22-2018","11-23-2018","11-24-2018"],
["11-25-2018","11-26-2018","11-27-2018","11-28-2018","11-29-2018","11-30-2018","12-01-2018"],
["12-02-2018","12-03-2018","12-04-2018","12-05-2018","12-06-2018","12-07-2018","12-08-2018"],
["12-09-2018","12-10-2018","12-11-2018","12-12-2018","12-13-2018","12-14-2018","12-15-2018"],
["12-16-2018","12-17-2018","12-18-2018","12-19-2018","12-20-2018","12-21-2018","12-22-2018"],
["12-23-2018","12-24-2018","12-25-2018","12-26-2018","12-27-2018","12-28-2018","12-29-2018"],
["12-30-2018","12-31-2018","01-01-2019","01-02-2019","01-03-2019","01-04-2019","01-05-2019"],
["01-06-2019","01-07-2019","01-08-2019","01-09-2019","01-10-2019","01-11-2019","01-12-2019"],
["01-13-2019","01-14-2019","01-15-2019","01-16-2019","01-17-2019","01-18-2019","01-19-2019"],
["01-20-2019","01-21-2019","01-22-2019","01-23-2019","01-24-2019","01-25-2019","01-26-2019"],
["01-27-2019","01-28-2019","01-29-2019","01-30-2019","01-31-2019","02-01-2019","02-02-2019"],
["02-03-2019","02-04-2019","02-05-2019","02-06-2019","02-07-2019","02-08-2019","02-09-2019"],
["02-10-2019","02-11-2019","02-12-2019","02-13-2019","02-14-2019","02-15-2019","02-16-2019"],
["02-17-2019","02-18-2019","02-19-2019","02-20-2019","02-21-2019","02-22-2019","02-23-2019"],
["02-24-2019","02-25-2019","02-26-2019","02-27-2019","02-28-2019","03-01-2019","03-02-2019"],
["03-03-2019","03-04-2019","03-05-2019","03-06-2019","03-07-2019","03-08-2019","03-09-2019"],
["03-10-2019","03-11-2019","03-12-2019","03-13-2019","03-14-2019","03-15-2019","03-16-2019"],
["03-17-2019","03-18-2019","03-19-2019","03-20-2019","03-21-2019","03-22-2019","03-23-2019"],
["03-24-2019","03-25-2019","03-26-2019","03-27-2019","03-28-2019","03-29-2019","03-30-2019"],
["03-31-2019","04-01-2019","04-02-2019","04-03-2019","04-04-2019","04-05-2019","04-06-2019"],
["04-07-2019","04-08-2019","04-09-2019","04-10-2019","04-11-2019","04-12-2019","04-13-2019"],
["04-14-2019","04-15-2019","04-16-2019","04-17-2019","04-18-2019","04-19-2019","04-20-2019"],
["04-21-2019","04-22-2019","04-23-2019","04-24-2019","04-25-2019","04-26-2019","04-27-2019"],
["04-28-2019","04-29-2019","04-30-2019","05-01-2019","05-02-2019","05-03-2019","05-04-2019"],
["05-05-2019","05-06-2019","05-07-2019","05-08-2019","05-09-2019","05-10-2019","05-11-2019"],
["05-12-2019","05-13-2019","05-14-2019","05-15-2019","05-16-2019","05-17-2019","05-18-2019"],
["05-19-2019","05-20-2019","05-21-2019","05-22-2019","05-23-2019","05-24-2019","05-25-2019"],
["05-26-2019","05-27-2019","05-28-2019","05-29-2019","05-30-2019","05-31-2019","06-01-2019"],
["06-02-2019","06-03-2019","06-04-2019","06-05-2019","06-06-2019","06-07-2019","06-08-2019"],
["06-09-2019","06-10-2019","06-11-2019","06-12-2019","06-13-2019","06-14-2019","06-15-2019"],
["06-16-2019","06-17-2019","06-18-2019","06-19-2019","06-20-2019","06-21-2019","06-22-2019"],
["06-23-2019","06-24-2019","06-25-2019","06-26-2019","06-27-2019","06-28-2019","06-29-2019"],
["06-30-2019","07-01-2019","07-02-2019","07-03-2019","07-04-2019","07-05-2019","07-06-2019"],
["07-07-2019","07-08-2019","07-09-2019","07-10-2019","07-11-2019","07-12-2019","07-13-2019"],
["07-14-2019","07-15-2019","07-16-2019","07-17-2019","07-18-2019","07-19-2019","07-20-2019"],
["07-21-2019","07-22-2019","07-23-2019","07-24-2019","07-25-2019","07-26-2019","07-27-2019"],
["07-28-2019","07-29-2019","07-30-2019","07-31-2019","08-01-2019","08-02-2019","08-03-2019"],
["08-04-2019","08-05-2019","08-06-2019","08-07-2019","08-08-2019","08-09-2019","08-10-2019"],
["08-11-2019","08-12-2019","08-13-2019","08-14-2019","08-15-2019","08-16-2019","08-17-2019"],
["08-18-2019","08-19-2019","08-20-2019","08-21-2019","08-22-2019","08-23-2019","08-24-2019"],
["08-25-2019","08-26-2019","08-27-2019","08-28-2019","08-29-2019","08-30-2019","08-31-2019"],
["09-01-2019","09-02-2019","09-03-2019","09-04-2019","09-05-2019","09-06-2019","09-07-2019"],
["09-08-2019","09-09-2019","09-10-2019","09-11-2019","09-12-2019","09-13-2019","09-14-2019"],
["09-15-2019","09-16-2019","09-17-2019","09-18-2019","09-19-2019","09-20-2019","09-21-2019"],
["09-22-2019","09-23-2019","09-24-2019","09-25-2019","09-26-2019","09-27-2019","09-28-2019"],
["09-29-2019","09-30-2019","10-01-2019","10-02-2019","10-03-2019","10-04-2019","10-05-2019"],
["10-06-2019","10-07-2019","10-08-2019","10-09-2019","10-10-2019","10-11-2019","10-12-2019"],
["10-13-2019","10-14-2019","10-15-2019","10-16-2019","10-17-2019","10-18-2019","10-19-2019"],
["10-20-2019","10-21-2019","10-22-2019","10-23-2019","10-24-2019","10-25-2019","10-26-2019"],
["10-27-2019","10-28-2019","10-29-2019","10-30-2019","10-31-2019","11-01-2019","11-02-2019"],
["11-03-2019","11-04-2019","11-05-2019","11-06-2019","11-07-2019","11-08-2019","11-09-2019"],
["11-10-2019","11-11-2019","11-12-2019","11-13-2019","11-14-2019","11-15-2019","11-16-2019"],
["11-17-2019","11-18-2019","11-19-2019","11-20-2019","11-21-2019","11-22-2019","11-23-2019"],
["11-24-2019","11-25-2019","11-26-2019","11-27-2019","11-28-2019","11-29-2019","11-30-2019"],
["12-01-2019","12-02-2019","12-03-2019","12-04-2019","12-05-2019","12-06-2019","12-07-2019"],
["12-08-2019","12-09-2019","12-10-2019","12-11-2019","12-12-2019","12-13-2019","12-14-2019"],
["12-15-2019","12-16-2019","12-17-2019","12-18-2019","12-19-2019","12-20-2019","12-21-2019"],
["12-22-2019","12-23-2019","12-24-2019","12-25-2019","12-26-2019","12-27-2019","12-28-2019"],
["12-29-2019","12-30-2019","12-31-2019","01-01-2020","01-02-2020","01-03-2020","01-04-2020"],
["01-05-2020","01-06-2020","01-07-2020","01-08-2020","01-09-2020","01-10-2020","01-11-2020"],
["01-12-2020","01-13-2020","01-14-2020","01-15-2020","01-16-2020","01-17-2020","01-18-2020"],
["01-19-2020","01-20-2020","01-21-2020","01-22-2020","01-23-2020","01-24-2020","01-25-2020"],
["01-26-2020","01-27-2020","01-28-2020","01-29-2020","01-30-2020","01-31-2020","02-01-2020"],
["02-02-2020","02-03-2020","02-04-2020","02-05-2020","02-06-2020","02-07-2020","02-08-2020"],
["02-09-2020","02-10-2020","02-11-2020","02-12-2020","02-13-2020","02-14-2020","02-15-2020"],
["02-16-2020","02-17-2020","02-18-2020","02-19-2020","02-20-2020","02-21-2020","02-22-2020"],
["02-23-2020","02-24-2020","02-25-2020","02-26-2020","02-27-2020","02-28-2020","02-29-2020"],
["03-01-2020","03-02-2020","03-03-2020","03-04-2020","03-05-2020","03-06-2020","03-07-2020"],
["03-08-2020","03-09-2020","03-10-2020","03-11-2020","03-12-2020","03-13-2020","03-14-2020"],
["03-15-2020","03-16-2020","03-17-2020","03-18-2020","03-19-2020","03-20-2020","03-21-2020"],
["03-22-2020","03-23-2020","03-24-2020","03-25-2020","03-26-2020","03-27-2020","03-28-2020"],
["03-29-2020","03-30-2020","03-31-2020","04-01-2020","04-02-2020","04-03-2020","04-04-2020"],
["04-05-2020","04-06-2020","04-07-2020","04-08-2020","04-09-2020","04-10-2020","04-11-2020"],
["04-12-2020","04-13-2020","04-14-2020","04-15-2020","04-16-2020","04-17-2020","04-18-2020"],
["04-19-2020","04-20-2020","04-21-2020","04-22-2020","04-23-2020","04-24-2020","04-25-2020"],
["04-26-2020","04-27-2020","04-28-2020","04-29-2020","04-30-2020","05-01-2020","05-02-2020"],
["05-03-2020","05-04-2020","05-05-2020","05-06-2020","05-07-2020","05-08-2020","05-09-2020"],
["05-10-2020","05-11-2020","05-12-2020","05-13-2020","05-14-2020","05-15-2020","05-16-2020"],
["05-17-2020","05-18-2020","05-19-2020","05-20-2020","05-21-2020","05-22-2020","05-23-2020"],
["05-24-2020","05-25-2020","05-26-2020","05-27-2020","05-28-2020","05-29-2020","05-30-2020"],
["05-31-2020","06-01-2020","06-02-2020","06-03-2020","06-04-2020","06-05-2020","06-06-2020"],
["06-07-2020","06-08-2020","06-09-2020","06-10-2020","06-11-2020","06-12-2020","06-13-2020"],
["06-14-2020","06-15-2020","06-16-2020","06-17-2020","06-18-2020","06-19-2020","06-20-2020"],
["06-21-2020","06-22-2020","06-23-2020","06-24-2020","06-25-2020","06-26-2020","06-27-2020"],
["06-28-2020","06-29-2020","06-30-2020","07-01-2020","07-02-2020","07-03-2020","07-04-2020"],
["07-05-2020","07-06-2020","07-07-2020","07-08-2020","07-09-2020","07-10-2020","07-11-2020"],
["07-12-2020","07-13-2020","07-14-2020","07-15-2020","07-16-2020","07-17-2020","07-18-2020"],
["07-19-2020","07-20-2020","07-21-2020","07-22-2020","07-23-2020","07-24-2020","07-25-2020"],
["07-26-2020","07-27-2020","07-28-2020","07-29-2020","07-30-2020","07-31-2020","08-01-2020"],
["08-02-2020","08-03-2020","08-04-2020","08-05-2020","08-06-2020","08-07-2020","08-08-2020"],
["08-09-2020","08-10-2020","08-11-2020","08-12-2020","08-13-2020","08-14-2020","08-15-2020"],
["08-16-2020","08-17-2020","08-18-2020","08-19-2020","08-20-2020","08-21-2020","08-22-2020"],
["08-23-2020","08-24-2020","08-25-2020","08-26-2020","08-27-2020","08-28-2020","08-29-2020"],
["08-30-2020","08-31-2020","09-01-2020","09-02-2020","09-03-2020","09-04-2020","09-05-2020"],
["09-06-2020","09-07-2020","09-08-2020","09-09-2020","09-10-2020","09-11-2020","09-12-2020"],
["09-13-2020","09-14-2020","09-15-2020","09-16-2020","09-17-2020","09-18-2020","09-19-2020"],
["09-20-2020","09-21-2020","09-22-2020","09-23-2020","09-24-2020","09-25-2020","09-26-2020"],
["09-27-2020","09-28-2020","09-29-2020","09-30-2020","10-01-2020","10-02-2020","10-03-2020"],
["10-04-2020","10-05-2020","10-06-2020","10-07-2020","10-08-2020","10-09-2020","10-10-2020"],
["10-11-2020","10-12-2020","10-13-2020","10-14-2020","10-15-2020","10-16-2020","10-17-2020"],
["10-18-2020","10-19-2020","10-20-2020","10-21-2020","10-22-2020","10-23-2020","10-24-2020"],
["10-25-2020","10-26-2020","10-27-2020","10-28-2020","10-29-2020","10-30-2020","10-31-2020"],
["11-01-2020","11-02-2020","11-03-2020","11-04-2020","11-05-2020","11-06-2020","11-07-2020"],
["11-08-2020","11-09-2020","11-10-2020","11-11-2020","11-12-2020","11-13-2020","11-14-2020"],
["11-15-2020","11-16-2020","11-17-2020","11-18-2020","11-19-2020","11-20-2020","11-21-2020"],
["11-22-2020","11-23-2020","11-24-2020","11-25-2020","11-26-2020","11-27-2020","11-28-2020"],
["11-29-2020","11-30-2020","12-01-2020","12-02-2020","12-03-2020","12-04-2020","12-05-2020"],
["12-06-2020","12-07-2020","12-08-2020","12-09-2020","12-10-2020","12-11-2020","12-12-2020"],
["12-13-2020","12-14-2020","12-15-2020","12-16-2020","12-17-2020","12-18-2020","12-19-2020"],
["12-20-2020","12-21-2020","12-22-2020","12-23-2020","12-24-2020","12-25-2020","12-26-2020"],
["12-27-2020","12-28-2020","12-29-2020","12-30-2020","12-31-2020","01-01-2021","01-02-2021"],
["01-03-2021","01-04-2021","01-05-2021","01-06-2021","01-07-2021","01-08-2021","01-09-2021"],
["01-10-2021","01-11-2021","01-12-2021","01-13-2021","01-14-2021","01-15-2021","01-16-2021"],
["01-17-2021","01-18-2021","01-19-2021","01-20-2021","01-21-2021","01-22-2021","01-23-2021"],
["01-24-2021","01-25-2021","01-26-2021","01-27-2021","01-28-2021","01-29-2021","01-30-2021"],
["01-31-2021","02-01-2021","02-02-2021","02-03-2021","02-04-2021","02-05-2021","02-06-2021"],
["02-07-2021","02-08-2021","02-09-2021","02-10-2021","02-11-2021","02-12-2021","02-13-2021"],
["02-14-2021","02-15-2021","02-16-2021","02-17-2021","02-18-2021","02-19-2021","02-20-2021"],
["02-21-2021","02-22-2021","02-23-2021","02-24-2021","02-25-2021","02-26-2021","02-27-2021"],
["02-28-2021","03-01-2021","03-02-2021","03-03-2021","03-04-2021","03-05-2021","03-06-2021"],
["03-07-2021","03-08-2021","03-09-2021","03-10-2021","03-11-2021","03-12-2021","03-13-2021"],
["03-14-2021","03-15-2021","03-16-2021","03-17-2021","03-18-2021","03-19-2021","03-20-2021"],
["03-21-2021","03-22-2021","03-23-2021","03-24-2021","03-25-2021","03-26-2021","03-27-2021"],
["03-28-2021","03-29-2021","03-30-2021","03-31-2021","04-01-2021","04-02-2021","04-03-2021"],
["04-04-2021","04-05-2021","04-06-2021","04-07-2021","04-08-2021","04-09-2021","04-10-2021"],
["04-11-2021","04-12-2021","04-13-2021","04-14-2021","04-15-2021","04-16-2021","04-17-2021"],
["04-18-2021","04-19-2021","04-20-2021","04-21-2021","04-22-2021","04-23-2021","04-24-2021"],
["04-25-2021","04-26-2021","04-27-2021","04-28-2021","04-29-2021","04-30-2021","05-01-2021"],
["05-02-2021","05-03-2021","05-04-2021","05-05-2021","05-06-2021","05-07-2021","05-08-2021"],
["05-09-2021","05-10-2021","05-11-2021","05-12-2021","05-13-2021","05-14-2021","05-15-2021"],
["05-16-2021","05-17-2021","05-18-2021","05-19-2021","05-20-2021","05-21-2021","05-22-2021"],
["05-23-2021","05-24-2021","05-25-2021","05-26-2021","05-27-2021","05-28-2021","05-29-2021"],
["05-30-2021","05-31-2021","06-01-2021","06-02-2021","06-03-2021","06-04-2021","06-05-2021"],
["06-06-2021","06-07-2021","06-08-2021","06-09-2021","06-10-2021","06-11-2021","06-12-2021"],
["06-13-2021","06-14-2021","06-15-2021","06-16-2021","06-17-2021","06-18-2021","06-19-2021"],
["06-20-2021","06-21-2021","06-22-2021","06-23-2021","06-24-2021","06-25-2021","06-26-2021"],
["06-27-2021","06-28-2021","06-29-2021","06-30-2021","07-01-2021","07-02-2021","07-03-2021"],
["07-04-2021","07-05-2021","07-06-2021","07-07-2021","07-08-2021","07-09-2021","07-10-2021"],
["07-11-2021","07-12-2021","07-13-2021","07-14-2021","07-15-2021","07-16-2021","07-17-2021"],
["07-18-2021","07-19-2021","07-20-2021","07-21-2021","07-22-2021","07-23-2021","07-24-2021"],
["07-25-2021","07-26-2021","07-27-2021","07-28-2021","07-29-2021","07-30-2021","07-31-2021"],
["08-01-2021","08-02-2021","08-03-2021","08-04-2021","08-05-2021","08-06-2021","08-07-2021"],
["08-08-2021","08-09-2021","08-10-2021","08-11-2021","08-12-2021","08-13-2021","08-14-2021"],
["08-15-2021","08-16-2021","08-17-2021","08-18-2021","08-19-2021","08-20-2021","08-21-2021"],
["08-22-2021","08-23-2021","08-24-2021","08-25-2021","08-26-2021","08-27-2021","08-28-2021"],
["08-29-2021","08-30-2021","08-31-2021","09-01-2021","09-02-2021","09-03-2021","09-04-2021"],
["09-05-2021","09-06-2021","09-07-2021","09-08-2021","09-09-2021","09-10-2021","09-11-2021"],
["09-12-2021","09-13-2021","09-14-2021","09-15-2021","09-16-2021","09-17-2021","09-18-2021"],
["09-19-2021","09-20-2021","09-21-2021","09-22-2021","09-23-2021","09-24-2021","09-25-2021"],
["09-26-2021","09-27-2021","09-28-2021","09-29-2021","09-30-2021","10-01-2021","10-02-2021"],
["10-03-2021","10-04-2021","10-05-2021","10-06-2021","10-07-2021","10-08-2021","10-09-2021"],
["10-10-2021","10-11-2021","10-12-2021","10-13-2021","10-14-2021","10-15-2021","10-16-2021"],
["10-17-2021","10-18-2021","10-19-2021","10-20-2021","10-21-2021","10-22-2021","10-23-2021"],
["10-24-2021","10-25-2021","10-26-2021","10-27-2021","10-28-2021","10-29-2021","10-30-2021"],
["10-31-2021","11-01-2021","11-02-2021","11-03-2021","11-04-2021","11-05-2021","11-06-2021"],
["11-07-2021","11-08-2021","11-09-2021","11-10-2021","11-11-2021","11-12-2021","11-13-2021"],
["11-14-2021","11-15-2021","11-16-2021","11-17-2021","11-18-2021","11-19-2021","11-20-2021"],
["11-21-2021","11-22-2021","11-23-2021","11-24-2021","11-25-2021","11-26-2021","11-27-2021"],
["11-28-2021","11-29-2021","11-30-2021","12-01-2021","12-02-2021","12-03-2021","12-04-2021"],
["12-05-2021","12-06-2021","12-07-2021","12-08-2021","12-09-2021","12-10-2021","12-11-2021"],
["12-12-2021","12-13-2021","12-14-2021","12-15-2021","12-16-2021","12-17-2021","12-18-2021"],
["12-19-2021","12-20-2021","12-21-2021","12-22-2021","12-23-2021","12-24-2021","12-25-2021"],
["12-26-2021","12-27-2021","12-28-2021","12-29-2021","12-30-2021","12-31-2021","01-01-2022"],
["01-02-2022","01-03-2022","01-04-2022","01-05-2022","01-06-2022","01-07-2022","01-08-2022"],
["01-09-2022","01-10-2022","01-11-2022","01-12-2022","01-13-2022","01-14-2022","01-15-2022"],
["01-16-2022","01-17-2022","01-18-2022","01-19-2022","01-20-2022","01-21-2022","01-22-2022"],
["01-23-2022","01-24-2022","01-25-2022","01-26-2022","01-27-2022","01-28-2022","01-29-2022"],
["01-30-2022","01-31-2022","02-01-2022","02-02-2022","02-03-2022","02-04-2022","02-05-2022"],
["02-06-2022","02-07-2022","02-08-2022","02-09-2022","02-10-2022","02-11-2022","02-12-2022"],
["02-13-2022","02-14-2022","02-15-2022","02-16-2022","02-17-2022","02-18-2022","02-19-2022"]];