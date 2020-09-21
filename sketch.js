var bg ;

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);
}
//function preload(){
//bg=loadImage("bg.png");
//}

function draw() {
  background("pink");

  console.log(mouseX,mouseY);

  hr=hour();
  mn=minute();
  sc=second();
  
 angleMode(DEGREES);

 scAngle=map(sc,0,60,0,360);
 mnAngle=map(mn,0,60,0,360);
 hrAngle=map(hr%12,0,60,0,360);


fill(154,232,233);
ellipse(400,400,500,500);


//second hand
  translate(400,400);
  rotate(-80);
  push();
  rotate(scAngle);
  stroke("blue"); 
  strokeWeight(4);
  line(0,0,190,0);
  pop();


  //minute hand
  translate(0,0);
  rotate(-10);//-180
  push();
  rotate(mnAngle);
  stroke("red"); 
  strokeWeight(5);
  line(0,0,175,0);
  pop();

 //hour hand
  translate(0,0);
  rotate(180);//180
  push();
  rotate(hrAngle);
  stroke("green"); 
  strokeWeight(6);
  line(0,0,130,0);
  pop();
  
  //textSize(30)
  //fill("black")
 // textFont("Algerian");
 // text("Hello! See the clock spin...",300,200)


  drawSprites();
}
