const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var coffee
var coffeeIMG
var water=[]
var waterG
var waterIMG
var backgroundIMG

var maxWater=2

var gameover

var score=0

var gameState=1

function preload() {
    waterIMG=loadImage("water.png")
    backgroundIMG=loadImage("background1.jpg")
    gameover=loadImage("gameover.png")
    coffeeIMG=loadImage("coffee.png")
    waterG=new Group()
}

function setup(){
    canvas = createCanvas(800,500);
    engine = Engine.create()
    world = engine.world
    coffee= createSprite(400,470,130,70)
    coffee.addImage(coffeeIMG)
    coffee.scale = 0.23
}

function draw(){
   background(backgroundIMG)
   Engine.update(engine)
   if(gameState===1){
       coffee.x=mouseX
       waterDrops()
       if(waterG.isTouching(coffee)){
        gameState=2
    }
   }
   if(gameState===2){
       background(gameover)
       waterG.destroyEach()
   }
   drawSprites()
}

function waterDrops(){
    if (frameCount % 8 === 0) {
        water = createSprite(random(100, 1000), 0, 100, 100);
        water.velocityY = 8;
        water.addImage(waterIMG)
        water.scale=0.0155
        water.lifetime=300
        waterG.add(water)
    }
}