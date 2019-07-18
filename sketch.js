var movingrect, fixrect;
function setup() {
  createCanvas(1200,800);
 fixrect= createSprite(600, 400, 50, 80);
 movingrect=createSprite(400,200,80,30);
}

function draw() {
  background(255,255,255);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2){
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="blue";
    fixrect.shapeColor="blue";
  }
  drawSprites();
}