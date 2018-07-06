var s;
var m;
var h;
var canclick = true;
s = 0;
m = 0;
h = 0;

function myFunction() {
	if(canclick){
		setInterval(plus, 1000);
		canclick = false;
	}
}	
function plus(){
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
	change();
}
function change(){
	if(h < 10) document.getElementById("hour").innerHTML = "0"+h;
	else document.getElementById("hour").innerHTML = h;
	if(m<10) document.getElementById("minute").innerHTML = "0"+m;
	else document.getElementById("minute").innerHTML = m;
	if(s<10)document.getElementById("second").innerHTML = "0"+s;
	else document.getElementById("second").innerHTML = s;
}
