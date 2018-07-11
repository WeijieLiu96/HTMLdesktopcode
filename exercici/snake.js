var snake = [{x:0,y:20}];
var fruit =[{x:150,y:150}];
var WIDTH = 200;
var HEIGHT = 50;
var ctx;
var interval;
var length_snake = 1;
var d_snake={mov_x:1,mox_y:0};
var size = 10;
var have_fruit = false;
var DSNAKEX = 10;
var DSNAKEY = 10;
var his_snake = [{x:snake[0].x,y:snake[0].y}];
var i;
var c_snake;
var n_snake;
var text = 0;

function init(){
	ctx = document.getElementById("container").getContext("2d");
	updateFruit();
	//need interval = setInterval(draw,1);
	draw(snake[0].x,snake[0].y,size,"black");
	interval = setInterval(update,500);

}
function updateFruit(){
	if(!have_fruit){
		parseInt(Math.random()*((WIDTH/size-1)+0),10);
		var x = fruit[0].x = Math.floor(Math.random()*((WIDTH/size-1)+1)+0);
		fruit[0].x=x *=10;
		parseInt(Math.random()*((HEIGHT/size-1)+0),10);
		var y = fruit[0].y = Math.floor(Math.random()*((HEIGHT/size-1)+1)+0);
		fruit[0].y = y *=10;
		have_fruit = true;
	}
	draw(x,y,size,"red");
}
function update(){
	clear();
	if(snake[0].x == fruit[0].x && snake[0].y == fruit[0].y){
		have_fruit=false;
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
	c_snake = {x:snake[0].x,y:snake[0].y};
	n_snake = {x:snake[0].x,y:snake[0].y};
	if(d_snake.mov_x!=null)n_snake.x = n_snake.x+d_snake.mov_x*size;
	if(d_snake.mov_y!=null)n_snake.y = n_snake.y+d_snake.mov_y*size;
	if((length_snake != 1)&& !(snake[0].x == fruit[0].x) && (snake[0].y == fruit[0].y)){
		for(i = 0; i < length_snake-1; ++i){
			his_snake[i].x = his_snake[i+1].x;
			his_snake[i].y = his_snake[i+1].y;
			text = 1;
		}
		his_snake[length_snake-1].x = snake[0].x;
		his_snake[length_snake-1].y = snake[0].y;
		for(i = 0; i < length_snake; ++i){
			draw(his_snake[i].x,his_snake[i].y,size,"black");
		}
		snake[0].x = n_snake.x;
		snake[0].y = n_snake.y;
	}
	else if((snake[0].x == fruit[0].x) && (snake[0].y == fruit[0].y)){
		for(i = 0; i < length_snake-1; ++i){
			his_snake[i].x = his_snake[i+1].x;
			his_snake[i].y = his_snake[i+1].y;
		}
		length_snake++;
		snake[0].x = n_snake.x;
		snake[0].y = n_snake.y;
		his_snake.push({x:c_snake.x,y:c_snake.y});
		updateFruit();
	}
	else {
		draw(n_snake.x,n_snake.y,size,"black");
		snake[0].x = n_snake.x;
		snake[0].y = n_snake.y;
		his_snake[0].x = c_snake.x;
		his_snake[0].y = c_snake.y;
		draw(snake[0].x,snake[0].y,size,"black");
	}
	
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
	var code_b=new_event.keyCode;
	if(code_b == 37) {
		d_snake.mov_x = -1;
		d_snake.mov_y = 0;
	}
	else if(code_b == 38){
		d_snake.mov_y = -1;
		d_snake.mov_x = 0;
	}
	else if(code_b == 39){
		d_snake.mov_x = 1;
		d_snake.mov_y = 0;
	}
	else if(code_b == 40){
		d_snake.mov_y = 1;
		d_snake.mov_x = 0;
	}
}