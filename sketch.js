const Engine=Matter.Engine
const World=Matter.World
const bodies=Matter.Bodies
const body=Matter.Body


//Create namespace for Engine
//Create namespace for World
//Create namespace for Bodies
//Create namespace for Body
var engine, world, ball, ground

function setup() {
  createCanvas(400,400);
//create the engine
  //Add world to the engine
   engine=Engine.create();
   world=engine.world
   
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  ball=bodies.circle(100,10,20,ball_options)
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  
  World.add(world,ball);
  var ground_options = {
     isStatic:true
  }
  ground=bodies.rectangle(100,400,400,20,ground_options)
  World.add(world,ground)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
 rect(ground.position.x,ground.position.y,500,20)


  
  
}

