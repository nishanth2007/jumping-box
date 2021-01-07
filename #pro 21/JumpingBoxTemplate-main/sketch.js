var canvas;
var music;

var box1,box2,box3,box4;

var ball
  


function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(950,550);

    //create 4 different surfaces
    box1 = createSprite(50,600,230,150);
    box1.shapeColor = "blue";
    box2 = createSprite(300,600,230,150)
    box2.shapeColor =  "lightBlue"
    box3 = createSprite(550,600,230,150)
    box3.shapeColor = "red"
    box4 = createSprite(800,600,230,150)
    box4.shapeColor =  "purple"
    

    //create box sprite and give velocity
    ball = createSprite(50,200,20,20);
    ball.velocityY = 20
    ball.velocityX = 20
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();

    ball.bounceOff(edges);

  if(box1.isTouching(ball) && ball.bounceOff(box1)){

    ball.shapeColor = "blue"

  }

  if(box2.isTouching(ball) && ball.bounceOff(box2)){

    ball.shapeColor = "lightblue"

  }

  if(box3.isTouching(ball) && ball.bounceOff(box3)){

    ball.shapeColor = "red"

  }

  if(box4.isTouching(ball) && ball.bounceOff(box4)){

    ball.shapeColor = "purple"

  }

  
drawSprites();
    //add condition to check if box touching surface and make it box
}
