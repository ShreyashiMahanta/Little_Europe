var bubblees, littleEuropeImg,littleEurope;
var pink,red,blue,yellow,orange;
var pinkImg,yellowImg,blueImg,redImg,orangeImg;
var shooter,arrow;


function preload(){
 littleEuropeImg =  loadImage("little europe.jpg");
 pinkImg = loadImage("pink.png");
 yellowImg = loadImage("yellow.png");
 blueImg = loadImage("blue.png");
 redImg = loadImage("red.png");
 orangeImg = loadImage("orange.png");
 shooterImg = loadImage("shooter.png");
 arrowImg = loadImage("arrow.png");
}
function setup(){
    createCanvas(700,600);
    littleEurope = createSprite(350,300,10,10);
    littleEurope.addImage(littleEuropeImg);
    littleEurope.scale = 1.4;

    shooter = createSprite(350,530,10,10);
    shooter.addImage(shooterImg);
    shooter.scale = 0.3;

    pink = createSprite(100,110,10,10);
    pink.addImage(pinkImg);
    pink.scale = 0.25;

    red = createSprite(200,100,10,10);
    red.addImage(redImg);
    red.scale = 0.2;

    blue = createSprite(300,100,10,10);
    blue.addImage(blueImg);
    blue.scale = 0.2;

    yellow = createSprite(400,100,10,10);
    yellow.addImage(yellowImg);
    yellow.scale = 0.2;

    pink = createSprite(400,180,10,10);
    pink.addImage(pinkImg);
    pink.scale = 0.25;
   // pink.velocityX = -2;
   // pink.velocityY = -2;


    red = createSprite(20,180,10,10);
    red.addImage(redImg);
    red.scale = 0.2;
   // red.velocityX = 2;
   // red.velocityY = 2;


    blue = createSprite(200,180,10,10);
    blue.addImage(blueImg);
    blue.scale = 0.2;
   // blue.velocityX = -2;
   // blue.velocityY = -2;


    yellow = createSprite(130,180,10,10);
    yellow.addImage(yellowImg);
    yellow.scale = 0.2;
   // yellow.velocityX = -2;
    //yellow.velocityY = -2;

    orange = createSprite(30,100,10,10);
    orange.addImage(orangeImg);
    orange.scale = 0.18;

    orange = createSprite(300,180,10,10);
    orange.addImage(orangeImg);
    orange.scale = 0.18;
   orange.velocityX = 2;
   orange.velocityY = 2;

}

function draw(){
    background(0)
    
    shooter.x = World.mouseX;
    if(keyDown("UP_ARROW")){
        arrow = createSprite(shooter.x,530,10,10);
        arrow.velocityY = -10;
        arrow.addImage(arrowImg);
        arrow.scale = 0.1;
    }

   /* if(isTouching(arrow,orange)){
        orange.destroy();
        
      }*/

    if(arrow.isTouching(yellow)){
        yellow.destroy();
        
      }

     

      if(arrow.isTouching(pink)){
        pink.destroy();
        
      }
      if(arrow.isTouching(blue)){
        blue.destroy();
        
      }
      if(arrow.isTouching(red)){
        red.destroy();
        
      }

    drawSprites();
}