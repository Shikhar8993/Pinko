const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var groundimg;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;
var score= 0;
var particle;
var turn=0;
var count = 0;

function setup() { 
  createCanvas(480,790);
  
  back = createSprite(240, 798, 480, 60);
  back.shapeColor=rgb(220,20,117);
  stroke(18, 6, 77);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 480, 30);

  //create division bodies
  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  //create plinko bodies
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  //spawn particles
  
  
}

function draw() {
  Engine.update(engine);
  background("yellow" );
  textSize(35)
  fill("white")
  text("Score : "+score,20,40);
  fill("white");
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }

 for (var i = 0; i < particles.length; i++) {
    particles[i].display();
     
    if (particles[i].body.position.x < 300 && particles[i].body.position.y>760) {
     score=score+500;
     particles.pop();
    }
   else if (particles[i].body.position.x < 600 && particles[i].body.position.x > 301 && particles[i].body.position.y > 760) {
     score = score + 100;
     particles.pop();
   }
   else if (particles[i].body.position.x < 900 && particles[i].body.position.x > 601 && particles[i].body.position.y > 760) {
     score = score + 200;
     particles.pop();
   }
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  
  ground.display();
}

function mousePressed(){
  if(gameState!=="end"){
      count++;
     particles.push(new Particle(mouseX, 10, 10, 10)); 
  }   
}

