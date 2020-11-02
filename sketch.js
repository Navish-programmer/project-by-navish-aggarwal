
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	base= new dustbin (600,540,100,20)
	left = new dustbin (555,502,20,100)
	right= new dustbin (655,502,20,100)
	platform = new ground(400,570,800,40)
	paper = new paper(30,560,20)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  base.display();
  left.display();
  right.display();
  platform.display();
  paper.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body ,paper.body.position,{x:85,y:-85})
	}
}



