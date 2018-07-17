var snake;
var fruit;
var WIDTH = 400;
var HEIGHT = 400;
var ctx;
var interval;
var length_snake;
var d_snake={mov_x:1,mox_y:0};
var size = 10;
var have_fruit = false;
var his_snake;
var i;
var socre = 0;
var speed ;
var plus_socre=1;

function init(){
	ctx = document.getElementById("container").getContext("2d");
	
	//need interval = setInterval(draw,1);
	//draw(snake.x,snake.y,size,"black");
	snake = {x:0,y:20};
	his_snake = [{x:snake.x,y:snake.y}];
	length_snake = 1;
	fruit = {x:0,y:20};
	speed = 200;
	updateFruit();
	document.getElementById("play").disabled = true;
	interval = setInterval(update,speed);

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
	document.getElementById("socre").innerHTML = socre;
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
function reset() {
	clearInterval(interval);
	init();
}
function game_over(){
	clearInterval(interval);
	document.getElementById("play").disabled = false;
}

function updatesnake(){
	var c_snake = {x:snake.x,y:snake.y};
	var n_snake = {x:snake.x,y:snake.y};
	if(d_snake.mov_x!=null){
		n_snake.x = n_snake.x+d_snake.mov_x*size;
		if(n_snake.x>=WIDTH) n_snake.x = 0;
		else if(n_snake.x < 0) n_snake.x = WIDTH-size;
	}
	if(d_snake.mov_y!=null){
		n_snake.y = n_snake.y+d_snake.mov_y*size;
		if(n_snake.y>=HEIGHT) n_snake.y =0;
		else if(n_snake.y<0) n_snake.y = HEIGHT-size;
	}
	for(i = 0; i < length_snake-1; ++i){
		if(his_snake[i].x==n_snake.x && his_snake[i].y== n_snake.y){
			game_over();
		} 
	}
	if((snake.x == fruit.x) && (snake.y == fruit.y)){
		have_fruit = false;
		length_snake++;
		his_snake.push({x:n_snake.x,y:n_snake.y});
		updateFruit();
		socre = socre + plus_socre;
		if(length_snake <= 30 && length_snake%5==0){
			speed = speed /2;
			plus_socre = plus_socre+1;
		}
		
	}
	if((length_snake != 1)){
		for(var i = 0; i < length_snake-1; ++i){
			var aux = {x:his_snake[i+1].x,y:his_snake[i+1].y};
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
	//console.log(his_snake);
}

window.onload = function (){
	
	init();
}
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
