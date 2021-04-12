
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperobj;

function setup() {
	createCanvas(600,600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,570,width,20);
	dustbinObj=new dustbin(500, 550);
    paperobj = new Paper(200,490,1.5);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(230);

  paperobj.display();
  groundObject.display();
  dustbinObj.display();
}

function keypressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperobj.body, paperobj.Body.position,(x=130,y=-145));
}
} 