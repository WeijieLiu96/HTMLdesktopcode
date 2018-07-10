var i_switch = 0;
var s;
var m;
var h;
s = 0;
m = 0;
h = 0;

function c_myFunction() {
	setInterval(c_plus, 1000);
}	
function c_plus(){
	s = s + 1;
	if(s == 60) {
		m = m +1;
		s = 0;
	}
	if(m == 60) {
		m = 0;
		h = h +1;
	}
	if(h == 24) h = 0;
	c_change();
}

function c_change(){
	if(h < 10) document.getElementById("hour").innerHTML = "0"+h;
	else document.getElementById("hour").innerHTML = h;
	if(m<10) document.getElementById("minute").innerHTML = "0"+m;
	else document.getElementById("minute").innerHTML = m;
	if(s<10)document.getElementById("second").innerHTML = "0"+s;
	else document.getElementById("second").innerHTML = s;
}

function img_myFunction() {
	
	setInterval(img_change, 500);
}	
function img_change(){
	i_switch++;
	if (i_switch==4) i_switch= 0;
	if(i_switch == 0) {
		document.getElementById("imatge").src = "bizhi1.jpg";
	}
	else if(i_switch == 1) document.getElementById("imatge").src = "bizhi2.jpg";
	else document.getElementById("imatge").src = "bizhi3.jpg";
}
