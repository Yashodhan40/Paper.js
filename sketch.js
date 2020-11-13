const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(170,300,50,50);
    box2 = new Box(200,100,50,100);
    Ground = new Gro(5,380,500,20);
    PIG = new piG(100,100);
    bird = new Bird(100,150);
    log1 = new Log(200,250,200,60,PI/2);
   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    //box1.display();
    //box2.display();
    Ground.display();
    PIG.display();
    log1.display();
    bird.display();
}