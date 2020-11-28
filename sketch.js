var canvas, playerCount, allPlayers, distance, database, form, player, game;
var gameState=0
var car1, car2, car3, car4, cars;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database()
    game=new Game();
        game.getState();
        game.start();
}
function draw(){
    
}