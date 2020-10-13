var car,wall,speed,weight;


function hasCollided( car,wall)
{
 carRightEdge=car.x+car.width;
 wallLeftEdge=wall.x;
 if(carRightEdge>=wallLeftEdge)
 {
   return true
 }
 return false;
}
function setup() {
 createCanvas(1300,400);
 
  
speed=random(55,90);
weight=random(400,1500);

//wall.setCollider("rectangle");
wall=createSprite(1200, 200, 60,height/2);
//wall.isStatic=true;
wall.shapeColor=color(80,80,80);
car=createSprite(50,200,50,50);

//io=createSprite(700,200,60,height/2);
//io.visible=false;
//car.collide(wall);

//wall.debug=true;
car.velocityX=speed;
}

function draw() {
background(0,30,200);
drawSprites();

if(wall.x-car.x < (car.width+wall.width)/2)
{
  
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22500;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  if(deformation<180 && deformation>100);
  {
    car.shapeColor=color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }

}
}