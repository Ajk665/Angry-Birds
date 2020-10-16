const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground,platform;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(450,100);
  pig1 = new Pig(900,375);
  pig2 = new Pig(900,330);
  box1 = new Box(840,375,50,50);
  box2 = new Box(960,375,50,50);
  box3 = new Box(960,330,50,50);
  box4 = new Box(840,330,50,50);
  box5 = new Box(900,260,50,50);
  log1 = new Log(900,365,190,PI/2);
  log2 = new Log(900,295,190,PI/2);
  log3 = new Log(960,210,100,PI/-4);
  log4 = new Log(840,210,100,PI/4);
  ground = new Ground(600,height,1200,20);
  platform = new Ground(200,275,350,250);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  ground.display();
  box2.display();
  box1.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird.display();
  platform.display();
}