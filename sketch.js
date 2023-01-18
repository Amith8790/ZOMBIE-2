var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie,zombieImg;
var zombieGroup;


function preload(){
  bgImg = loadImage("assets/bg.jpeg")
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
 bg.addImage(bgImg)
 bg.scale=1.1

 player = createSprite(displayWidth-1150,displayHeight-300,50,50)
 player.addImage(shooterImg)
 player.scale=0.5

zombieGroup = new Group()

}

function draw() {
  background(0); 


if(keyWentDown("space")){
  player.addImage(shooter_shooting)
}
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

if (keyDown("UP_ARROW")){
  player.y=player.y-30
}

if(keyDown("DOWN_ARROW")){
  player.y=player.y+30
}

if(keyDown("LEFT_ARROW")){
  player.x=player.x-20
}

if(keyDown("RIGHT_ARROW")){
  player.x=player.x+20
}
  //moving the player up and down and making the game mobile compatible using touches

if(zombieGroup.isTouching(player)){
  for(var i=0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy()
    }
  }
}







enemy();

drawSprites();


}

function enemy() {
  if(frameCount%50===0){

    zombie = createSprite(random(500,1100),random(100,500),40,40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX= -3
    zombie.debug=true
    zombie.setCollider("rectangle",0,0,400,400)

    zombie.lifetime=400
    zombieGroup.add(zombie);
  }
}