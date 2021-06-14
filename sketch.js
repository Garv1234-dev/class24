const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4,box5 ;
var pig1, log1, pig2, log2,log3,log4,redBird;

function setup(){
    var canvas = createCanvas(1100,600);
    engine = Engine.create();
    world = engine.world;
    
    // console.log(ground);
    angleMode(RADIANS);

    box1 = new Box(770,550, 90, 90);
    box2 = new Box(1000,550,90,90);
    box3 = new Box(770,450,90,90);
    box4 = new Box(1000,450,90,90);
    box5 = new Box(885,350,90,90)
    pig1 = new Pig(885,550,50,50);
    pig2 = new Pig(885,450,50,50);
    redBird= new Bird(200,400,50,50);
    ground= new Ground(550,590,1100,20);
    log1 = new Log(885,500,20,320,PI/2);
    log2 = new Log(885,400,20,320,PI/2);
    log3 = new Log(820,300,20,170,PI/4);
    log4 = new Log(950,300,20,170,-PI/4);
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    redBird.display();
    ground.display();
}