
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
DustbinImg = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,650,1600,20);
	ball = new Ball(400,600);
	bottom = new Dustbin(800,630,200,20);
	left = new Dustbin(700,580,20,100);
	right = new Dustbin(900,580,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display();
  ball.display();
  bottom.display();
  left.display();
  right.display();
  this.image(DustbinImg,700,630,200,20);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-150});		
	}
}

