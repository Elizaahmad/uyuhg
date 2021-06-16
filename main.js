img="";
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
  canvas=createCanvas(640,420);
  canvas.center();
}

function draw(){
image(img, 0,0,640,420);
fill("yellow");
textSize(20);
text("Dog", 100,55);
fill("purple")
noFill();
stroke('purple');
rect(100,55,400,300);
}