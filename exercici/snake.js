var snake = [{x:150,y:150}];
var fruit =[{x:150,y:150}]
var WIDTH = 100;
var HEIGHT = 100;
var ctx;
var interval;
var length_snake = 2;
var size_snake = 10;
var size_fruit = 10;
var have_fruit = false;
var DSNAKEX = 10;
var DSNAKEY = 10;

function init(){
	ctx = document.getElementById("container").getContext("2d");
	updateFruit();
	//need interval = setInterval(draw,1);
}
function updateFruit(){
	if(!have_fruit){
		parseInt(Math.random()*((WIDTH/size_snake-1)-(1)+1),10);
		var newx = fruit[0].x = Math.floor(Math.random()*((WIDTH/size_snake-1)-(1)+1)+1);
		newx *=10;
		parseInt(Math.random()*((HEIGHT/size_snake-1)-(1)+1),10);
		var newy = fruit[0].y = Math.floor(Math.random()*((HEIGHT/size_snake-1)-(1)+1)+1);
		newy *=10;
		have_fruit = true;
	}
	drawfruit(newx,newy,size_fruit,"red");
}

/*function init(){
	//var CV = document.getElementById('container');
	ctx = document.getElementById("container").getContext("2d");
	var aux = Math.floor(Math.random()*(WIDTH)+1);
	//position[1]={x:aux,y:aux,dx:2,dy:3};
	//position.push({x:aux,y:aux,dx:2,dy:3});
	interval = setInterval(draw,1);
	
}*/

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}
function drawfruit(newx,newy,size_fruit,color = "black"){
	ctx.beginPath();
	ctx.arc(newx,newy,size_fruit,0,Math.PI*2,true);
	//var aux = Math.floor(Math.random()*(WIDTH)+1);
	ctx.fillStyle = color;
	ctx.fill();
}

function updatesnake(){
	
}

function drawsnake(){

}
/*function draw(){
	clear();
	for(i = 0; i <position.length;i++){
		var newx = position[i].x;
		var newy = position[i].y;
		var newdy = position[i].dy;
		var newdx = position[i].dx;
		var pos = position[i];

		if(newx+r+newdx>WIDTH || newx-r+newdx<0){
			newdx = -newdx;
		}
		if(newy+r+newdy>HEIGHT || newy-r+newdy<0){
			newdy = -newdy;
		}

		
		newx += newdx;
		newy += newdy;

		position[i].x = newx;
		position[i].y = newy;
		position[i].dx = newdx;
		position[i].dy = newdy;
		drawball(newx,newy,r,"rgba(10,150,150,.5)");
	}
	
}*/

window.onload = init;