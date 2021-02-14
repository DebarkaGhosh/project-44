var box;
var line1,line2,line3,line4;
var obst1,obst2,obst3 ;
var obst1img,obst2img,obst3img;
var safeBox;
var bg;
var bgimg;
var home;
var homeimg;



function preload(){

bgimg = loadImage("bg.jpg");

homeimg = loadImage("home.png");

obst1img = loadImage("obst.jpg");
obst2img = loadImage("obst.jpg");
obst3img = loadImage("obst.jpg");
  
}

function setup() {
  
  createCanvas(800,400);
  //box
   box = createSprite(10, 200, 50, 50);
   box.shapeColor ="orange"
   box.scale = 0.5

//left border
   line1 = createSprite(0,0,30,800)
   line1.shapeColor = "red";
   
//right border
   line2 = createSprite(800,0,30,800)
   line2.shapeColor = "blue";
//top border
   line3 = createSprite(0,0,1600,30);
   line3.shapeColor = "green";
//buttom border
   line4 = createSprite(0,400,1600,30);
   line4.shapeColor = "yellow";
   
//obstacles;
obst1 = createSprite(150,0,20,100)
obst1.addImage(obst1img)
obst1.velocityY = 10;
obst1.scale = 0.15;

obst2 = createSprite(350,0,20,100)
obst2.addImage(obst1img)
obst2.velocityY = 8;
obst2.scale = 0.15;

obst3 = createSprite(550,0,20,100)
obst3.addImage(obst1img)
obst3.velocityY = 6;
obst3.scale = 0.15;

//home
home = createSprite(750,200,70)
home.addImage(homeimg)
home.scale = 0.15

}

function draw() {

  background(bgimg  );  
push();
  fill("black")
  stroke("red");
  strokeWeight(7)
  textStyle(BOLDITALIC);
  textSize(25)
  text("Press the arrow keys to control",200,100)
pop();

  createEdgeSprites();
  box.bounceOff(line1);
  box.bounceOff(line2);
  box.bounceOff(line3);
  box.bounceOff(line4);
  obst1.bounceOff(line3);
  obst1.bounceOff(line4);
  obst2.bounceOff(line3);
  obst2.bounceOff(line4);
  obst3.bounceOff(line3);
  obst3.bounceOff(line4);
  
if(box.isTouching(obst1)){
   textSize(55)
   textStyle(BOLDITALIC);
   stroke("black");
   strokeWeight(7)
  fill("red");
  text("You lose",300,200)

}
if(box.isTouching(obst2)){
 textSize(55)
 textStyle(BOLDITALIC);
   stroke("black");
   strokeWeight(7)
  fill("red");
  text("You lose",300,200)
}
if(box.isTouching(obst3)){
  textSize(55)
  textStyle(BOLDITALIC);
  stroke("black");
  strokeWeight(7)
  fill("red");
  text("You lose",300,200)
}
if(box.isTouching(home)){
  textSize(55)
  stroke("red");
  strokeWeight(7)
  fill("green");
  textStyle(BOLDITALIC)
  text("You are safe",300,200)
}


 
  
  if(keyDown("Up")){
    box.velocityY = -5;  
   }
   if(keyDown("Down")){
     box.velocityY = 5;  
   }
   if(keyDown("Left")){
     box.velocityX= -  5;  
   }
   if(keyDown("Right")){
     box.velocityX= 5;  
   }


 
  drawSprites();
}
