const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,box1,box2;

function setup() {
  createCanvas(1200,400);
  
  engine=Engine.create();
  world=engine.world;

  ground= new Ground(600,height,1200,20); 
  box1= new Box(1050,350,20,100);
	box2= new Box(900,350,20,100);
  box3= new Box(975,390,130,20);
  paper= new Paper(100,390)
  



}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80});
  }
}





