
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	changeBg();
}

var score = 0;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	g1 = new ground(500,585,1000,30);
	g2 = new ground(500,450,200,10);
	g3 = new ground(850,200,200,10);

	block1 = new blockBlue(500,435);
	block2 = new blockBlue(480,435);
	block3 = new blockBlue(460,435);
	block4 = new blockBlue(440,435);
	block5 = new blockBlue(520,435);
	block6 = new blockBlue(540,435);
	block7 = new blockBlue(560,435);

	block8 = new blockPink(500,405);
	block9 = new blockPink(480,405);
	block10 = new blockPink(460,405);
	block11 = new blockPink(520,405);
	block12 = new blockPink(540,405);

	block13 = new blockGreen(500,375);
	block14 = new blockGreen(520,375);
	block15 = new blockGreen(480,375);

	block17 = new blockRed(500,345);

	block18 = new blockBlue(850,185);
	block19 = new blockBlue(830,185);
	block20 = new blockBlue(810,185);
	block21 = new blockBlue(790,185);
	block22 = new blockBlue(870,185);
	block23 = new blockBlue(890,185);
	block24 = new blockBlue(910,185);

	block25 = new blockPink(850,155);
	block26 = new blockPink(830,155);
	block27 = new blockPink(810,155);
	block28 = new blockPink(870,155);
	block29 = new blockPink(890,155);

	block30 = new blockGreen(850,125);
	block31 = new blockGreen(830,125);
	block32 = new blockGreen(870,125);

	block33 = new blockRed(850,95);

	poly = new polygon();

	s = new slingShot(poly.body,{x:100, y:500});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  textSize(25);
  fill("white");
  text("Score = "+ score,100,100);
  
  g1.display();
  g2.display();
  g3.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block17.display();

  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();

  block30.display();
  block31.display();
  block32.display();

  block33.display();

  
  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();

  block8.Score();
  block9.Score();
  block10.Score();
  block11.Score();
  block12.Score();

  block13.Score();
  block14.Score();
  block15.Score();

  block17.Score();

  block18.Score();
  block19.Score();
  block20.Score();
  block21.Score();
  block22.Score();
  block23.Score();
  block24.Score();

  block25.Score();
  block26.Score();
  block27.Score();
  block28.Score();
  block29.Score();

  block30.Score();
  block31.Score();
  block32.Score();

  block33.Score();

  poly.display();

  s.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    s.fly();
}

function keyPressed(){
    if(keyCode === 32){
        s.attach(poly.body);
    }
}

async function changeBg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

    if(hour>=06 && hour<= 18){
        background(200);
    }
    else{
        background(0);
    }
}