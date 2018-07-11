var snake = [{x:0,y:0}];
var fruit =[{x:150,y:150}];
var WIDTH = 100;
var HEIGHT = 100;
var ctx;
var interval;
var length_snake = 1;
var d_snake={mov_x=1,mox_y=0};
var size = 10;
var have_fruit = false;
var DSNAKEX = 10;
var DSNAKEY = 10;

function init(){
	ctx = document.getElementById("container").getContext("2d");
	updateFruit();
	//need interval = setInterval(draw,1);
	updatesnake();
}
function updateFruit(){
	if(!have_fruit){
		parseInt(Math.random()*((WIDTH/size-1)+0),10);
		var x = fruit[0].x = Math.floor(Math.random()*((WIDTH/size-1)+1)+0);
		x *=10;
		parseInt(Math.random()*((HEIGHT/size-1)+0),10);
		var y = fruit[0].y = Math.floor(Math.random()*((HEIGHT/size-1)+1)+0);
		y *=10;
		have_fruit = true;
	}
	draw(x,y,size,"red");
}
function update(){
	clear();
	if(snake[0].x == fruit[0].x && snake[0].y == fruit[0].y){
		updateFruit();
		length_snake++;
	}
	else{
		draw(fruit[0].x,fruit[0].y,size,"red");
	}
	updatesnake();
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}
function draw(x,y,size,color = "black"){
	ctx.beginPath();
	ctx.rect(x,y,size,size);
	//var aux = Math.floor(Math.random()*(WIDTH)+1);
	ctx.fillStyle = color;
	ctx.fill();
}

function updatesnake(){
	var c_snake = snake;
	draw(snake[0].x,snake[0].y,size,"black");
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
window.onkeydown = function(new_event){
	if(new_event.keycode == 37) {
		d_snake.left = true;
		d_snake.right = false;
		d_snake.top = false;
		d_snake.bot = false;
	}
	else if(new_event.keycode == 38){
		d_snake.left = false;
		d_snake.right = false;
		d_snake.top = true;
		d_snake.bot = false;
	}
	else if(new_event.keycode == 39){
		d_snake.left = false;
		d_snake.right = true;
		d_snake.top = false;
		d_snake.bot = false;
	}
	else if(new_event.keycode == 40){
		d_snake.left = false;
		d_snake.right = false;
		d_snake.top = false;
		d_snake.bot = true;
	}
}