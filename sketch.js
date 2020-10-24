var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	

	engine = Engine.create();
	world = engine.world;


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	var rect1_options= {
       isStatic:true

	}
	fill("red");
	rect1 = Bodies.rectangle(400,650,200,20,rect1_options);
	World.add(world,rect1);

	var rect2_options= {
		isStatic:true
 
	 }
	 fill("red");
	 rect2 = Bodies.rectangle(100,650,20,200,rect2_options);
	 World.add(world,rect2);
	
}
    var rect3_options= {
	  isStatic:true

	}
	fill("red");
	rect1 = Bodies.rectangle(400,650,200,20,rect3_options);
	World.add(world,rect1);


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
	
   Matter.packageBody.isStatic(false);	
  }
}

