var soundElem;

function init(oEvent){
    var t=document.getElementById("mouse_action");
    var o=oEvent||window.event;
    t.style.left=o.pageX-t.offsetWidth/2+40+'px';
    t.style.top=o.pageY-t.offsetHeight/2+60+'px';
}
window.onload=function(){
	soundElem = document.getElementById("mhw_bgm"); 
	soundElem.volume = 0.5;
    var d=document;
    d.attachEvent?
        d.attachEvent("onmousemove",init)
    :
        d.addEventListener("mousemove",init,false)
}
function volumplus(){
	soundElem = document.getElementById("mhw_bgm"); 
	soundElem.volume += 0.1;
}
function volumless(){
	soundElem = document.getElementById("mhw_bgm"); 
	soundElem.volume -= 0.1;
}
function toggleSound() {
  soundElem = document.getElementById("mhw_bgm"); 
  if (soundElem.paused) {
    soundElem.play();
  }
  else soundElem.pause();
}