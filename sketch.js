var ball,position;
var database;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var dbRef=database.ref('ballPosition');
    dbRef.on("value",read)
    ball = createSprite(25,25,10,10);
    ball.addImage(ironman)
    ball.scale=0.3
    ball.shapeColor = "red";
}

function preload(){
    ironman=loadImage("iron man.png")
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ballPosition").set({
        x:ball.x+x,
        y:ball.y+y
    })
  
}
function read(data){
position=data.val();
ball.x=position.x
ball.y=position.y
}