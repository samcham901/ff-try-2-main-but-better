
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var Nani;
var Glob;

var canvas;
var backgroundImage, nani_img, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image; 
var blastImage;                   //C42// SA
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles; 
var cars = [];

// gameState. playerCounts
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  Nani = createSprite(200, 200, 30, 30);
  //Nani.addAnimation("Nani", nani_Img)
  //Nani.addAnimation("Nani-right", naniRight_Img)
  Nani.addAnimation("running left",naniRunLeft)
  Nani.addAnimation("running right", naniRunRight)
  
    Glob = createSprite(300, 300, 30, 30);
  Glob.addAnimation("Glob-right", glob_ImgRight)
  Glob.scale=2
  p1 = new Platform(windowWidth / 4, windowHeight / 3, windowWidth / 2 - 200, 10, "lightblue")
    p2 = new Platform(windowWidth*3/4, windowHeight/3, windowWidth/2-200, 10, "lightblue")
  p3 = new Platform(windowWidth/2 , windowHeight / 2+100, windowWidth- 200, 10, "lightblue")
  p4 = new Platform(windowWidth * 3 / 4, windowHeight / 3, windowWidth / 2 - 200, 10, "lightblue")
  p5 = new Platform(windowWidth * 3 / 4, windowHeight / 3, windowWidth / 2 - 200, 10, "lightblue")
  p6 = new Platform(windowWidth*3/4, windowHeight/3, windowWidth/2-200, 10, "lightblue")
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function preload() {
  nani_Img = loadImage("Nani.png");
  naniRight_Img = loadImage("Nani-right.png");

  glob_Img = loadImage("Glob.png");
    glob_ImgRight = loadImage("Glob-right.png");

  naniRunLeft = loadAnimation("Nani.png", "Nani_run.png", "Nani_run_2.png")
  naniRunRight = loadAnimation("Nani-right.png", "Nani_runright.png", "Nani_run_2right.png")
}

function draw() 
{
  background(51);
  Engine.update(engine);
if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }

  if (keyDown("LEFT")) {
    Nani.x -= 1
    Nani.changeAnimation("running left",naniRunLeft)
  }

   if(keyDown("RIGHT")){
    Nani.x += 1
    Nani.changeAnimation("running right",naniRunRight)
   }
  
   
  
  //ellipse(ball.position.x,ball.position.y,20);
  //rect(ground.position.x,ground.position.y,400,20);
 //drawSprites()
}

function makePlatform(x,y,width,height) {
  
}