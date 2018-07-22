var can;
var ctx;

var w;
var h;

var padLeft = 0;
var padTop = 0;

var Width = 800;
var Height = 600;

var deltaTime;
var lastTime;

var starPic = new Image();

var stars = [];
var num = 30;

var alive = 0;

var switchy = false;

var starObj = function() {
	this.x;
	this.y;

	this.ySpd;

	this.picNo;

	this.timer;

	this.beta;
}

starObj.prototype.init = function() {
	this.x = Math.random() * Width + padLeft;
	this.y = Math.random() * Height + padTop;

	this.ySpd = Math.random() * 0.6 - 0.3; //[0,2) [-1, 1)
	this.xSpd = Math.random() * 0.2 - 0.1; //[0,2) [-1, 1)

	this.picNo = Math.floor(Math.random() * 7);
	this.timer = 0;

	this.beta = Math.random() * Math.PI * 0.5;
}

starObj.prototype.update = function() {
	this.xSpd = Math.random() * 0.2 - 0.1; //[0,2) [-1, 1)
	this.x += this.xSpd;
	this.y += this.ySpd;

	if (this.x > (padLeft + Width) || this.x < (padLeft - 10))
		this.init();
	else if (this.y > (padTop +Height) || this.y < (padTop - 10))
		this.init();

	this.timer += deltaTime;
	if (this.timer > 30) {
		this.picNo += 1;
		this.picNo %= 7;
		this.timer = 0;
	}
}

starObj.prototype.draw = function() {
	this.beta += deltaTime * 0.005;
	ctx.save();
	ctx.globalAlpha = Math.sin(this.beta) * alive;
	ctx.drawImage(starPic, this.picNo * 7, 0, 7, 7, this.x, this.y, 7, 7);
	//ctx.restore();
}

function drawStars() {
	for (var i = 0; i < num; i++) {
		stars[i].update();
		stars[i].draw();
	}
}

function aliveUpdate() {
	if (switchy) {
		alive += 0.03;
		if (alive > 0.7) {
			alive = 0.7;
		}
	} else {
		alive -= 0.03;
		if (alive < 0) {
			alive = 0;
		}
	}
}

function init() {
	can = document.getElementById("canvas");
	ctx = can.getContext("2d");

	w = can.width;
	h = can.height;

	document.addEventListener('mousemove', mousemove, false);

	starPic.src = "src/star.png";

	for (var i = 0; i < num; i++) {
		stars[i] = new starObj();
		stars[i].init();
	}

	lastTime = Date.now();
	gameLoop();
}

function gameLoop() {
	window.setTimeout(gameLoop,10);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;

	fillCanvas();

	drawStars();

	aliveUpdate();
}

function fillCanvas() {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}

function mousemove(e) {
	if (e.offsetX || e.layerX) {

		var px = e.offsetX == undefined ? e.layerX : e.offsetX;
		var py = e.offsetY == undefined ? e.layerY : e.offsetY;

		if (px > padLeft && px < (padLeft +Width) && py > padTop && py < (padTop + Height)) {
			switchy = true;
		} else {
			switchy = false;
		}
	}
}
