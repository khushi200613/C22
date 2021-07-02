const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const cons = Matter.Constraint;
let engine;
let world;
var ball,ball1
var ground;
var left;
var right;
var top_wall;
var bt1,bt2
var sling,sling1

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 var option= {
   restitution : 0.08
  
 }
  ball = Bodies.circle(200,100,10,option);
  World.add(world,ball)
  ball1 = Bodies.circle(200,300,10,option);
  World.add(world,ball1)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  sling= cons.create({
    pointA:{x:200,y:20},
   bodyB:ball,
   //length:90,
   stiffness:0.6
  })

World.add(world,sling);
sling1= cons.create({
  bodyA:ball,
 bodyB:ball1,
 //length:90,
 stiffness:0.6
})

World.add(world,sling1);

 /*bt1= createImg("right.png")
  bt1.position(20,50)
  bt1.size(50,80)
  //blinding a function to event at call back function
  bt1.mouseClicked(hforce)
  bt2 = createImg("up.png")
  bt2.position(250,150)
  bt2.size(40,50)
  bt2.mouseClicked(vforce)*/
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,10)
  ellipse(ball1.position.x,ball1.position.y,10)
  Engine.update(engine);

push ()
strokeWeight(4)
stroke("white")
line (sling.pointA.x,sling.pointA.y,ball.position.x,ball.position.y)
line (ball.position.x,ball.position.y,ball1.position.x,ball1.position.y,)
pop ()


}
function keyPressed(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

/*function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005})
}*/







