
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constrain = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5,bob6;
var constrain1,constrain2,constrain3,constrain4,constrain5,constrain6;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof();

	bob1=new Bob(600,220,20);
	bob2=new Bob(580,220,20);
	bob3=new Bob(720,220,20);
	bob4=new Bob(560,220,20);
	bob5=new Bob(740,220,20);
	bob6=new Bob(540,220,20);
	
	constrain1=new ConstrainBody(bob1.body,roof.body,0,200);
	constrain2=new ConstrainBody(bob2.body,roof.body,-20,200);
	constrain3=new ConstrainBody(bob3.body,roof.body,20,200);
	constrain4=new ConstrainBody(bob4.body,roof.body,-40,200);
	constrain5=new ConstrainBody(bob5.body,roof.body,40,200);
	constrain6=new ConstrainBody(bob6.body,roof.body,-60,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("White");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  constrain1.display();
  constrain2.display();
  constrain3.display();
  constrain4.display();
  constrain5.display();
  constrain6.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode= UP_ARROW){
		var options={
			x:-85,
			y:85
        }
		Matter.Body.applyForce(bob6.body,bob6.body.position,options)
	}
}

