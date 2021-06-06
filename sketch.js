const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var ground;

function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(400,400);
  var ground_options={
    isStatic:true
  }
  ground = Bodies.rectangle(200,360,400,20,ground_options);
  World.add(world,ground);
  var ball_options={
    restitution:1.0
  }

  ball = Bodies.circle(200,260,20,ball_options);
  World.add(world,ball);






  
}

function draw() {
  Engine.update(engine);
  background("red"); 
  ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20) 
  drawSprites();
}