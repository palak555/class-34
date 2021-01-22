// namspacing Matter.Engine as Engine etc
const Body=Matter.Body;
const Engine=Matter.Engine;
const Bodies= Matter.Bodies;
const Constraint=Matter.Constraint;
const World= Matter.World


var engine;
var world;
var ground1;
var box1=[];
var ball;
var rope;



function setup() {
  createCanvas(1400,700);
  // creating engine
  engine=Engine.create(); 
  world=engine.world;

  ground1=new Ground(700,680,1500,20);

  for(var b=100;b<700;b=b+50){
    box1.push(new Box(700,b))
  }

  ball=new Ball(300,300,50)
  rope=new Rope(ball.body,{x:300,y:0})
  



 
  
}
function draw() {
  background(0);  
  Engine.run(engine);
  ground1.display();

  for(var index=0;index<box.length;index++){
    box1[index].display()
  }

  ball.display();
  rope.display();
  



}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX   ,y:mouseY })
}
