const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,380,width,20);
    bird = new Bird(620,420);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2); 
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    bird.display();
    box2.display();
    box1.display();
    pig1.display();
    log1.display();
}
