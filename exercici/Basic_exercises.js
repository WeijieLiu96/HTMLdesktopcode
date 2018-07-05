var int_num;
var lowervalue;
var uppervalue;
var a,b,c,d;
function square(int_num){
	return int_num*int_num;
}
function even_or_odd(int_num){
	if(int_num%2==0) console.log(odd);
	else console.log(even);
}
function factorial(int_num){
	var int_fact = 1;
	for(var i = 1; i <= int_num; ++i){
		int_fact *= i;
	}
	return int_fact;
}
function random(lowervalue,uppervalue){
	var int_temp = uppervalue -lowervalue + 1; 
	return Math.floor(Math.random()*int_temp+lowervalue)
}
function biggest( a, b, c,  d){
	var big = a;
	if(b>big) big = b;
	if(c>big) big = c;
	if(d>big) big = d;
	return big;
}
function call(int_num){
	int_num = square(int_num);
	return int_num;
}
function console1(){
	console.log("1 2 3\n4 5 6\n7 8 9\n10 11 12");
}