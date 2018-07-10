var i_switch = 0;

function myFunction() {
	
	setInterval(change, 100);
}	
function change(){
	i_switch++;
	if (i_switch==4) i_switch= 0;
	if(i_switch == 0) document.getElementById("container").src = "bizhi1.jpg";
	else if(i_switch == 1) document.getElementById("container").src = "bizhi2.jpg";
	else if(i_switch == 2) document.getElementById("container").src = "bizhi3.jpg";
	else {
		document.getElementById("container").src = "bizhi4.jpg";
	}
}
