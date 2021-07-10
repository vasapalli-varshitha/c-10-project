var ship, ship_moving, ship_collided;
  
function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png",);
  ship_collided = loadImage("ship_collided.png");
  
  groundImage = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);

  ship = createSprite(300,300)
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.10;
  
  ground = createSprite(400,400);
  ground.addImage("ground",groundImage);
}

function draw() {
  background("blue");
  drawSprites();
}