//namespacing
//the entire physics engine - universe 
const Engine = Matter.Engine;

//World inside the universe - inside which there are objects 
const World = Matter.World;

//objects that you create - that will be inside te world. 
const Bodies = Matter.Bodies;


var engine, world;
var object;
var ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //it creates the object but you cannot see it - it creates it only in the memory of the computer. 
  var options = {
    isStatic: true
  }
  object = Bodies.rectangle(400,380,800,20,options);
  World.add(world, object);
  console.log(object);

  var ballOptions = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world, ball);
  console.log(ball);
  // console.log(object.position.x);

  }

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);

  
}