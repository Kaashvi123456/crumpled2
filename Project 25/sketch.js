
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper;

function setup() {
	createCanvas(800, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;
	engine.run(engine)
	//Create the Bodies Here.
     dustbin=new dustbin(720,390,100,10);
	 paper=new paper(100,300,10);
	Engine.run(engine);
  
	ground=Bodies.rectangle(width / 2, 400, width, 10)
{
isStatic:true
};
World.add(world,ground);

}


function draw() {
  rectMode(CENTER);
  background("black");
  
dustbin.diplay();
paper.diplay();

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:12,y:-13})
	 }
   }
