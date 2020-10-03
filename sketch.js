
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3, paperObject, groundObject

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	background("white");
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundObject=new Ground(width/2,700,width, 20);
	bin1=new Bin(1100,700);
	//bin2=new Bin(1000,530);
	//bin3=new Bin(1100,620);
	paperObject = new Ball(100,500,50,50);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paperObject.display();
  bin1.display();
  //bin2.display();
  //bin3.display();
  groundObject.display();
  
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}




