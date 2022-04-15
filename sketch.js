var canvas;
var music;
var block1,block2,block3,block4
var ball
var edges
var music
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1=createSprite(0,580,360,30)
block1.shapeColor="purple"
block2=createSprite(295,580,200,30)
block2.shapeColor="pink"
block3=createSprite(515,580,200,30)
block3.shapeColor="grey"
block4=createSprite(740,580,220,30)
block4.shapeColor="black"

    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=4
ball.velocityY=9

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)


    //add condition to check if box touching surface and make it box

if(block1.isTouching(ball) && ball.bounceOff(block1))
{ ball.shapeColor = "purple";
     music.play(); }
if(block2.isTouching(ball))
{ ball.shapeColor = "pink";
     ball.velocityX = 0;
      ball.velocityY = 0;
       music.stop(); }
       if (block3.isTouching(ball)){
        ball.shapeColor = "grey"
       }
       if (block4.isTouching(ball)){
        ball.shapeColor = "black"
       }
}
