var i_switch = 0;

function myFunction() {
	
	setInterval(change, 2000);
}	
function change(){
	i_switch++;
	if (i_switch==3) i_switch= 0;
	if(i_switch == 0) document.getElementById("container").src = "blue.png";
	else if(i_switch == 1) document.getElementById("container").src = "red.png";
	else {
		document.getElementById("container").src = "green.png";
	}
}
