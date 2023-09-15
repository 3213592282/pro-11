var sea, ship;
var seaImg, shipImg;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
sea = createSprite(200, 200, 400, 100);
sea.addImage("sea", seaImg);
sea.scale =0.3;
ship = createSprite(200, 200, 50, 50);
ship.addAnimation("running", shipImg);
ship.scale = 0.4
}

function draw() {
  background("blue");
 drawSprites();
}