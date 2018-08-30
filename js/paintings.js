const paintings = [
	{
	  name:'Sailboat',
	  img:'sailboat.jpg',
	  price:80,
	  sold:true,
	  material:'oil on canvas',
	  size:'20x20'  
	},
	{
	  name:'Orange Flower',
	  img:'flower.jpg',
	  price:50,
	  sold:false,
	  material:'oil on canvas',
	  size:'15x20'  
	},
	{
	  name:'Austin',
	  img:'austin.jpg',
	  price:20,
	  sold:true,
	  material:'digital',
	  size:'10x10'  
	},
	{
	  name:'Nat',
	  img:'nat.jpg',
	  price:15,
	  sold:true,
	  material:'digital',
	  size:'10x10'  
	},
	{
	  name:'Spacesuit',
	  img:'spacesuit.jpeg',
	  price:1000,
	  sold:true,
	  material:'sculpture',
	  size:'70x70'  
	},
	{
	  name:'Cat',
	  img:'cat.jpg',
	  price:100,
	  sold:true,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Dog',
	  img:'dog.jpg',
	  price:500,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Einstein',
	  img:'einstein.jpeg',
	  price:314,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Love Boat',
	  img:'love.jpg',
	  price:600,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Fruits of My Labor',
	  img:'stillart.jpeg',
	  price:1005,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'Sunflowers',
	  img:'sunflowers.jpg',
	  price:120,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	},
	{
	  name:'The Van Goes',
	  img:'vango.jpeg',
	  price:1001,
	  sold:false,
	  material:'oil on canvas',
	  size:'30x30'  
	}
];

function getLatestPainting(){
	return paintings[0];
}

function findFeaturedPainting(arr, total){
	let rand=Math.floor(Math.random() * paintings.length); 
	if(paintings[rand].sold==false){	
		for(let i=0;i<arr.length;i++){
			if(arr[i]===paintings[rand]){
				return findFeaturedPainting(arr,total);
			}
		}
		
		arr.push(paintings[rand]);		
		if(arr.length===total){	
			return arr;	
		}
		else{
			return findFeaturedPainting(arr,total);
		}
	} 
	else{
		return findFeaturedPainting(arr,total);
	}
}