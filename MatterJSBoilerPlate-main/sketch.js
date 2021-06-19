
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(width/2,670,width,30);
    World.add(world,ground);
		



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGreen");

  ground.show();

 
  //engine.update(engine);
  

  drawSprites();
 
}



