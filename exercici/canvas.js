var position = [{x:150,y:150,dx:2,dy:3}];
var r = 10;
var WIDTH = 300;
var HEIGHT = 300;
var ctx;
var interval;

function init(){
	/*var CV = document.getElementById('container');*/
	ctx = document.getElementById("container").getContext("2d");
	var aux = Math.floor(Math.random()*(WIDTH)+1);
	//position[1]={x:aux,y:aux,dx:2,dy:3};
	position.push({x:aux,y:aux,dx:2,dy:3});
	interval = setInterval(draw,1);
	
}
function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}
function drawball(newx,newy,r,color = "black"){
	ctx.beginPath();
	ctx.arc(newx,newy,r,0,Math.PI*2,true);
	//var aux = Math.floor(Math.random()*(WIDTH)+1);
	ctx.fillStyle = color;
	ctx.fill();
}

function draw(){
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

	/*drawball(position[i]);
	ctx.beginPath();
	ctx.arc(newx,newy,r,0,Math.PI*2,true);
	ctx.fillStyle = "rgba(10,150,150,.5)";
	ctx.fill();*/
	if(i==0) drawball(newx,newy,r,"rgba(10,150,150,.5)");
	else drawball(newx,newy,r);
	}
	//?clearInterval()
}

window.onload = init;