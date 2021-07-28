var playerAnimation;
var game;
var gameState="start";
var coinImage;
var hitSound;
var goldieSound;

function preload(){
  playerAnimation=loadAnimation("images/Walk/walk1.png","images/Walk/walk2.png","images/Walk/walk3.png","images/Walk/walk4.png","images/Walk/walk5.png","images/Walk/walk6.png");
  coinImage=loadImage("images/goldie.png");
  hitSound=loadSound("bomb.mp3");
  goldieSound=loadSound("goldie2.0.mp3");

}
function setup() {
  createCanvas(1000,500);
  game=new Game(); 
}
function draw() {
  background("#F0D9E7");
  drawSprites();
  if(gameState==="start"){
    game.start();
  }
  if(gameState==="play"){
    textSize(20);
        fill("white");
        text("Coins "+game.coins+"/6",width/2-200,15);
        text("Lives "+game.lives+"/3",width/2+200,15);
    game.play();
  }
  if(gameState==="end"){
    game.end();
  }
  if(gameState==="win"){
    game.win();
  }

 // text(mouseX+":"+mouseY,mouseX,mouseY);  
}