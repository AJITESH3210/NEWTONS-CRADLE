var roof, bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var rope1, rope2, rope3, rope4, rope5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(240, 500);
	bobObject2 = new Bob(325,500);
	bobObject3 = new Bob(410,500);
	bobObject4 = new Bob(495,500);
	bobObject5 = new Bob(580,500);

	roof = new Roof(400,100,600,30);
	
	rope1 = new Rope(bobObject1.body, roof.body, -157, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -76, 0);
	rope3 = new Rope(bobObject3.body, roof.body, 12, 0);
	rope4 = new Rope(bobObject4.body, roof.body, 102, 0);
	rope5 = new Rope(bobObject5.body, roof.body, 185, 0);
	
	Engine.run(engine);
  
}


function draw() {
    background(255,0,0);
	Engine.update(engine);
	rectMode(CENTER);

  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}

function keyPressed(){
    if(keyCode === LEFT_ARROW) {
        Matter.Body.applyForce(bobObject1.body, rope1.body,{x : 85 , y : -85 })
    }
}