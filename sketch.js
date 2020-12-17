const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,600,1200,20);
    

    
    box1 = new Box(700,500,40,40);
    box2 = new Box(700,430,40,40);
    box3 = new Box(700,360,40,40);
    box4 = new Box(700,290,40,40);
    box5 = new Box(700,220,40,40);

    box1x = new Box(700,20,40,40);
    box2x = new Box(700,60,40,40);
    box3x = new Box(700,100,40,40);
    box4x = new Box(700,140,40,40);
    box5x = new Box(700,180,40,40);

    box6 = new Box(740,500,40,40);
    box7 = new Box(740,430,40,40);
    box8 = new Box(740,360,40,40);
    box9 = new Box(740,290,40,40);
    box10 = new Box(740,220,40,40);

    box6x = new Box(740,20,40,40);
    box7x = new Box(740,60,40,40);
    box8x = new Box(740,100,40,40);
    box9x = new Box(740,140,40,40);
    box10x = new Box(740,180,40,40);
    
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("white");
    if(backgroundImg)
        
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box1x.display();
    box2x.display();
    box3x.display();
    box4x.display();
    box5x.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box6x.display();
    box7x.display();
    box8x.display();
    box9x.display();
    box10x.display();
    
    ground.display();
    

    

    

    bird.display();
    
    //log6.display();
    slingshot.display();
    console.log(gameState);    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    //slingshot.fly();
    //gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
        gameState = "onSling";
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}