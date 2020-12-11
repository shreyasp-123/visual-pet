//Create variables here
var dog, happyDog, database, foodS, foodStock, doggy, dogHappy;
function preload()
{
  //load images here
  doggy = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
  
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
  dog = createSprite(250, 250, 20, 20)
  dog.scale = 0.3
  dog.addImage("doggy", doggy)
  dog.addImage("dogHappy", dogHappy)
  
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.changeImage("dogHappy", dogHappy)
  }
  drawSprites();
  //add styles here

}


function readStock(data){
  foodS = data.val()
}

function writeStock(x){
  database.ref('/').update({
    Food: x
  })
}



