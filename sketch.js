const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  var ground = new Ground(800,400,100,100);
  var stand = new Ground(800,300,100,100);

  var block1 = new Box(300, 275, 30, 40);
  var block2 = new Box(330, 275, 30, 40);
  var block3 = new Box(360, 275, 30, 40);
  var block4 = new Box(390, 275, 30, 40);
  var block5 = new Box(420, 275, 30, 40);
  var block6 = new Box(450, 275, 30, 40);
  var block7 = new Box(480, 275, 30, 40);

  var block8 = new Box(330, 195, 30, 40);
  var block9 = new Box(360, 195, 30, 40);
  var block10 = new Box(390, 195, 30, 40);
  var block11 = new Box(420, 195, 30, 40);
  var block12 = new Box(450, 195, 30, 40);

  var block13 = new Box(390, 155, 30, 40);

  var Polygon = Bodies.circle(50, 200, 20)

  World.add(world, this.body);

  slingshot = new Slingshot(this.polygon, {x: 100, y:200});

}

function draw() {
  background(255,255,255);  
  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  ground.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  Polygon.display();

  drawSprites();
  
}

function mousePressed(){
  if (value === 0){
    value = 255;
  } else {
    value = 0;
  }
}

function mouseDragged(){
  value = value + 5;
  if (value > 255){
    value = 0;
  }
}