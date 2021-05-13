var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){

}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(285,580,200,30);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here
    block3 = createSprite(490,580,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(695,580,200,30);
    block4.shapeColor = "green";

    ball = createSprite(random(20,750),200, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.setVelocity(8,8);
    
}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
    }
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = "red";
    }
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = "green";
        ball.setVelocity(0,0);
    }

    drawSprites();
}
