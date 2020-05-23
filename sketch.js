var gameState=0;
var form,player,game,playerCount=0;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);
    // form=new Form();
    // player=new Player();
    game=new Game();
    game.readState();
    game.start();
   
    
}

function draw(){
    background("yellow");
    
}

