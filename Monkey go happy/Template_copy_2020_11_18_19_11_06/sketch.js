var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600, 200);
 
  monkey = createSprite(50,180,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.5;
 
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
 
  
 

 
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  cloudsGroup = createGroup();
 
 
  monkey.setCollider("circle",0,0,40);
 mpnkey.debug = true
 
  score = 0;
 
}

function draw() {
 
  background(180);
  //displaying score
  text("Score: "+ score, 500,50);
 
    ground.velocityX = -4;
    //scoring
    score = score + Math.round(frameCount/60);
   
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
   
    if(keyDown("space")&& trex.y >= 100) {
        monkey.velocityY = -12;
    }
   
  
    monkey.velocityY = trex.velocityY + 0.8;
 
    
    spawnBanana();
 
    
    spawnObstacles();
   
    if(obstaclesGroup.isTouching(monkey)){
        gameState = END;
    }
  }
  
     
      ground.velocityX = 0;
      monkey.velocityY = 0;
     
      //change the trex animation
     monkey.changeAnimation("collided", trex_collided);
     
    
    obstaclesGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstaclesGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
   }
 
 
  //stop trex from falling down
  monkey.collide(invisibleGround);
 
 
 
  drawSprites();
}

function spawnBanana(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(400,165,10,40);
   obstacle.velocityX = -6;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      case 4: obstacle.addImage(obstacle4);
              break;
      case 5: obstacle.addImage(obstacle5);
              break;
      case 6: obstacle.addImage(obstacle6);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle          
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(10,60));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
   
     //assign lifetime to the variable
    banana.lifetime = 134;
   
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
   
    //adding cloud to the group
   bananaGroup.add(banana);
    }
}
