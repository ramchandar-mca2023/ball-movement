var xmin=0;
var ymin=0;
var velocity=100;
var time=500
var xmax=1000
var ymax=1000
var ball=document.getElementById("ball")
function move(){
  if(xmin<xmax && ymin<ymax){
    xmin=xmin+velocity;
    ymin=ymin+velocity;
    ball.style.top=xmin+"px"
    ball.style.left=ymin+"px"
  }
  else if(xmax>0 && ymax>0){
    xmax=xmax-velocity;
    ymax=ymax-velocity;
    ball.style.top=xmax+"px"
    ball.style.left=ymax+"px"
  }
  else{
    xmin=0
    ymin=0
    xmax=1000
    ymax=1000
  }
  
    
}
setInterval(move,time)