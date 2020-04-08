 // UDANT KANDARPA
//Snake Game 
//referred Daniel Shiffman from youtube. 

//The video is given below.
// Coding Challenge #115: Snake Game Redux
// https://youtu.be/OMoVcohRgZA







let snake;
let rez = 20;
let food;
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(5);
  snake = new Snake();
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === 32) {
    snake.grow();
  }else if (keyCode === 77) {
    foodLocation();
  }else if (keyCode === 76) {
    snake.shrink();
  }
}

function draw() {
  scale(rez);
  background(220);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();
  console.log (keyCode);

  if (snake.endGame()) {
    print("END GAME");
    background(255, 0, 0);
    noLoop();
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}
/*var snake;







/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snake;
var bug;
var rad;
var spos

function setup(){
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  //rad = random(50,750);
  bug = new Bug(200,200,15,15);
  snake = new Snake(400,400,15,15);
  //console.log("setup");  

}
function draw(){
  background("black");
  rad = random(50,750);
  //bug.x = rad;
  //bug.y = rad;
  snake.velocityX = 1;
  snake.velocityY = 1;
  console.log("draw" +keyCode );  
  if (keyCode === 38) {
    snake.x = -2 ; 
    console.log("up");       
  }else if (keyCode === 40) {
          snake.velocityY = 2;
          console.log("down");
  } else if (keyCode === 39) {
          snake.velocityX = -2;
          console.log("right");
  } else if(keyCode === 37) {
    snake.velocityX = -2;
    console.log("left");
  }


  snake.display();
  bug.display();
}*/

