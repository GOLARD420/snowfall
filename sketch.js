const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgimg,engine,world;
var snow1
function preload(){
bgimg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.World;
  snow1 = new Snow(200,100,20,20);

}

function draw() {
  background(bgimg);  
  Engine.update(engine)
  snow1.display()

}