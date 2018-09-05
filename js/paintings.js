body {
	
	margin-left: 0px;
	margin-right: 0px;
	margin-top: 0px;
	margin-bottom: 0px;
	font-family: 'Proxima Nova Soft', 'Helvetica Neue', sans-serif;
}

.content {
	margin-right: auto; 
	margin-left: auto; 
	text-align: center;
	height: 100%; 
    width: 100%; 
    overflow-x: hidden; 
}

.footer {
	width: 100%;
	height:80px;
	text-align: left;
	background-color: black; 
	color:white;
}

.header {
	width: 100%;
	text-align: center;
	background-color: black; 
	color:white;
}

.header a {
	padding: 0px 15px 0px 0px;
    text-decoration: none;
    font-size: 15px;
    color: #ffffff;
}

.header a:hover {
    cursor: hand;
    cursor: pointer;
    opacity: .5;
}

.infobox {
	width: 100%;
	height:auto;
	text-align: center;
	color:white;
	position:relative;	
}

.infoboxcontentwords {
	width:100%;
    position: absolute;
    top: 30%;
    left: 50%;
	font-size:50px;
    transform: translate(-50%, -50%);
}

.infoboxcontentbutton {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #000000; 
    border: none;
    color: white;
    padding: 20px 20px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
	border-radius: 5px;
}

.infoboxcontentbutton:hover {
    background-color: #95c3de; 
    cursor: hand;
    cursor: pointer;
}

.information {
	padding: 30px 10px 0 10px;
	height: 30px;
}

.middlepanel {
	height: 100%; 
	width:65%;
	overflow-wrap: normal;
	margin:auto;
}

.blogcontent {
	text-align:left;
}

.posttitle {
	font-size:18px;
	padding:30px 0 5px 0;
}

.posttitle a{
	text-decoration:none;
	color: inherit;
}

.posttitle a:hover{
	opacity: .5;
}

.postdate {
	color:#5b5858;
	font-size:11px;
	padding:0 0 25px 0;
}

.paintingbox {
	text-align: center;
}

.paintingdescription {
	width:300px;
	height:100px;
	border: 1px solid black; 
	text-align:left;
}

.paintinginfo {
	width:300px;
	text-align:left;
	margin:auto;
}

.paintingprice {
	float: left;
}

.paintingavail {
	float: right;
}

.biggerpic {

}

.biggerpic:hover{
	opacity: .8;
	cursor: hand;
    cursor: pointer;
}

.postcontent {
	color:#5b5858;
	font-size:15px;
	padding:10px 0 30px 0;
}

.smallcontent {
	height: 100%; 
    background-color: #467832; 
}

.lefthomecontainer {
	padding:10px 0 0 0
}

.contacthome {
	width: 100%;
	text-align: center;
	padding: 25px 0 25px 0;
	background-color: #95c3de; 
}

.emailbox {
	padding: 25px 15px 25px 15px;
    position: absolute; 
    z-index: 1; 
	bottom:70px;
	left: 45px;
    background-color: black; 
	color:white;
}

a, a:hover, a:active, a:visited, a:focus {
    text-decoration:none;
}

.myheading1 {
	font-weight:bold;
	color:#3d3c3c;
	font-size:21px;
}

.myheading2 {
	text-align:center;
	font-weight:bold; 
}

/* All pictures are located here/////////////////////////////////////////////////////////*/

.homepics {
	transition: transform .2s;
}

.homepics:hover {
    cursor: hand;
    cursor: pointer;
    transform: scale(1.08);
}

.contactpics {
	transition: transform .2s;
	padding: 5px 25px 5px 25px;
}

.contactpics:hover {
    cursor: hand;
    cursor: pointer;
    transform: scale(1.3);
}

/* All buttons are located here/////////////////////////////////////////////////////////*/


.menubutt {
	vertical-align: middle;
}

.menubutt:hover {
    cursor: hand;
    cursor: pointer;
    opacity: .5;
}


.button1 {
    background-color: #000000; 
    border: none;
    color: white;
    padding: 10px 20px;
    width: 150px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

.button1:hover {
    background-color: #5f5f5f; 
    cursor: hand;
    cursor: pointer;
    opacity: .9;
}



.button2 {
    background-color: #000000; 
    border: none;
    color: white;
    padding: 5px 7px 5px 7px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
	border-radius: 2px;
}

.button2:hover {
    background-color: #5f5f5f; 
    cursor: hand;
    cursor: pointer;
    opacity: .9;
}

 /* The slide show css /////////////////////////////////////////////////////////////*/

/* Slideshow container */
.slideshow-container {
 	max-width: 500px;
  	position: relative;
  	margin: auto;
}

/* Hide the images by default */
.mySlides {
    display: none;
}

/* Next & previous buttons */
.prev, .next {
	cursor: pointer;
	position: absolute;
	top: 50%;
	width: auto;
	margin-top: -22px;
	padding: 16px;
	color: white;
	font-weight: bold;
	font-size: 18px;
	transition: 0.6s ease;
	border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
	right: 15px;
	border-radius: 3px 0 0 3px;
}

.prev {
	left: 15px;
	border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  	background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
	color: #f2f2f2;
	font-size: 15px;
	padding: 8px 12px;
	position: absolute;
	bottom: 8px;
	width: 100%;
	text-align: center;
	}

/* Number text (1/3 etc) */
.numbertext {
	color: #f2f2f2;
	font-size: 12px;
	padding: 8px 25px;
	position: absolute;
	top: 0;
}

/* The dots/bullets/indicators */
.dot {
	cursor: pointer;
	height: 15px;
	width: 15px;
	margin: 0 2px;
	background-color: #bbb;
	border-radius: 50%;
	display: inline-block;
	transition: background-color 0.6s ease;
}

.active, .dot:hover {
	background-color: #717171;
}

/* Fading animation */
.fade {
	-webkit-animation-name: fade;
	-webkit-animation-duration: 1.5s;
	animation-name: fade;
	animation-duration: 1.5s;
}

@-webkit-keyframes fade {
	from {opacity: .4}
	to {opacity: 1}
}

@keyframes fade {
	from {opacity: .4}
	to {opacity: 1}
}



 /* The side navigation menu /////////////////////////////////////////////////////////////*/
.sidenav {
    height: 100%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidenav a:hover {
    color: #f1f1f1;
}

.sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

.sidenav .sidenavlabel {
	margin-left: 8px;
	color: white;

}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
} 


