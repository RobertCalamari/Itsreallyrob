const paintings = [
	{
	  name:'Sailboat',
	  img:'sailboat.jpg',
	  price:80,
	  sold:false,
	  material:'oil on canvas',
	  size:'20x20'  
	},
	{
	  name:'Flower1',
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
	  sold:false,
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