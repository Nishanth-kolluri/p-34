const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var box11,box12,box13,box14,box15;
var box111,box112,box113,box114,box115,box116;
var box234,box342,box432;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box11 = new Box(600, 100, 70, 70);
  box12 = new Box(600, 100, 70, 70);
  box13 = new Box(600, 100, 70, 70);
  box14 = new Box(600, 100, 70, 70);
  box15 = new Box(600, 100, 70, 70);

  box111 = new Box(750,100,70,70);
  box112 = new Box(750,100,70,70);
  box113 = new Box(750,100,70,70);
  box114 = new Box(750,100,70,70);
  box115 = new Box(750,100,70,70);
  box116 = new Box(750,100,70,70);

  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box234 = new Box(900, 100, 70, 70);
  box342 = new Box(900, 100, 70, 70);
  box432 = new Box(900, 100, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
 
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box111.display();
  box112.display();
  box113.display();
  box114.display();
  box115.display();
  box116.display();

  box234.display();
  box342.display();
  box432.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x : mouseX,  y : mouseY});
}