var snake = {x:0,y:20};
var fruit ={x:150,y:150};
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
var his_snake = [{x:snake.x,y:snake.y}];

function init(){
	ctx = document.getElementById("container").getContext("2d");
	updateFruit();
	//need interval = setInterval(draw,1);
	draw(snake.x,snake.y,size,"black");
	interval = setInterval(update,500);

}
function updateFruit(){
	if(!have_fruit){
		parseInt(Math.random()*((WIDTH/size-1)+0),10);
		var x = fruit.x = Math.floor(Math.random()*((WIDTH/size-1)+1)+0);
		fruit.x=x *=10;
		parseInt(Math.random()*((HEIGHT/size-1)+0),10);
		var y = fruit.y = Math.floor(Math.random()*((HEIGHT/size-1)+1)+0);
		fruit.y = y *=10;
		have_fruit = true;
	}
	draw(x,y,size,"red");
}
function update(){
	clear();
	draw(fruit.x,fruit.y,size,"red");
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
	var c_snake = {x:snake.x,y:snake.y};
	var n_snake = {x:snake.x,y:snake.y};
	if(d_snake.mov_x!=null)n_snake.x = n_snake.x+d_snake.mov_x*size;
	if(d_snake.mov_y!=null)n_snake.y = n_snake.y+d_snake.mov_y*size;
	if((snake.x == fruit.x) && (snake.y == fruit.y)){
		for(var i = 0; i < length_snake-2; ++i){
			var aux = {x:his_snake[i+1].x,y:his_snake[i+1].y};
			his_snake[i].x = aux.x;
			his_snake[i].y = aux.y;
		}
		his_snake[length_snake-1].x = snake.x;
		his_snake[length_snake-1].y = snake.y;
		have_fruit = false;
		length_snake++;
		his_snake.push({x:n_snake.x,y:n_snake.y});
		updateFruit();
		for(i = 0; i < length_snake; ++i){
			draw(his_snake[i].x,his_snake[i].y,size,"black");
		}
	}
	else if((length_snake != 1)){
		for(var i = 0; i < length_snake-2; ++i){
			var aux = {x:his_snake[i+1].x,y:his_snake[1].y};
			his_snake[i].x = aux.x;
			his_snake[i].y = aux.y;
		}
		his_snake[length_snake-1].x = snake.x;
		his_snake[length_snake-1].y = snake.y;
		for(i = 0; i < length_snake; ++i){
			draw(his_snake[i].x,his_snake[i].y,size,"black");
		}
	}
	else {
		//draw(n_snake.x,n_snake.y,size,"black");

		his_snake[0].x = c_snake.x;
		his_snake[0].y = c_snake.y;
		draw(his_snake[0].x,his_snake[0].y,size,"black");
	}
	snake.x = n_snake.x;
	snake.y = n_snake.y;
	
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
		if(d_snake.mov_x!=1)d_snake.mov_x = -1;
		d_snake.mov_y = 0;
	}
	else if(code_b == 38){
		if(d_snake.mov_y!=1)d_snake.mov_y = -1;
		d_snake.mov_x = 0;
	}
	else if(code_b == 39){
		if(d_snake.mov_x!=-1)d_snake.mov_x = 1;
		d_snake.mov_y = 0;
	}
	else if(code_b == 40){
		if(d_snake.mov_y!=-1)d_snake.mov_y = 1;
		d_snake.mov_x = 0;
	}
}