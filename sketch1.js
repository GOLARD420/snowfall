var snowImg, bgImg;
var snow, snowBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
snowImg = loadImage("snow5.jpg");
bgImg = loadImage("snow1.jpg");


}

function setup() {
createCanvas(800, 750);



snow = createSprite(130, 520);
snow.addImage("snowflying",snowImg);  
snow.scale =0.2;



engine = Engine.create();
world = engine.world;

snowBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
World.add(world, snowBody);

Engine.run(engine);

}


function draw() {
  background(bgImg);

  snow.x= snowBody.position.x
  snow.y= snowBody.position.y

  console.log(snow.y);

  if(snow.y > 470 && snowBody.position.y > 470 ){
    Matter.Body.setStatic(snowBody,true);
    World.remove(world, snowBody);
  }

  drawSprites();

}

function keyPressed() {

if(keyCode === RIGHT_ARROW){
           snowBody.position.x = snowBody.position.x + 20;
}

        if(keyCode === LEFT_ARROW){
          snowBody.position.x = snowBody.position.x - 20;
}

if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(snowBody,false);
   
   }
}




