import * as Player from "./player.js";
import * as Food from "./food.js";


//Get the game canvas.
let canvas = document.getElementById("gameView");
let gameCanvas = canvas.getContext("2d");

//How many grid blocks per row and column.
const gridSize = 15;

//Size of each grid block.
const gridBlockSize = canvas.scrollWidth / gridSize;

let startX = Math.floor((Math.random() * (canvas.scrollWidth - gridBlockSize)) + 1);
let startY = Math.floor((Math.random() * (canvas.scrollHeight - gridBlockSize)) + 1);
const tailLength = 3;

const speed = 15;
const player = new Player.createPlayer(startX, startY, tailLength);


startX = Math.floor((Math.random() * (canvas.scrollWidth - gridBlockSize)) + 1);
startY = Math.floor((Math.random() * (canvas.scrollHeight - gridBlockSize)) + 1);
const food = new Food.createFood(startX, startY);


//Draw grid.
function drawGame () {
    
    //Spawn player.
    gameCanvas.fillStyle = "red";
    gameCanvas.fillRect(player.posX, player.posY, gridBlockSize, gridBlockSize);
    

    //Spawn food.
    gameCanvas.fillStyle = "yellow";
    gameCanvas.fillRect(food.posX, food.posY, gridBlockSize, gridBlockSize);
}

//Move player.
function movePlayer() {
    var interval = window.setInterval(function() {

        if (player.velocityX != 0) {
            player.posX = player.posX + (player.velocityX * speed); 
        }   
        
        if (player.velocityY != 0) {
            player.posY = player.posY + (player.velocityY * speed); 
        } 

        gameCanvas.fillStyle = "red";
        gameCanvas.fillRect(player.posX, player.posY, gridBlockSize, gridBlockSize);

    }, 100);
}


//Detect key press.

document.body.addEventListener('keydown', keyPressed);




function keyPressed(event) {
        //Pressed left.
        if (event.keyCode == 37 || event.keyCode == 65) {
            Player.moveLeft(player);
        }
    
        //Pressed right.
        if (event.keyCode == 39 || event.keyCode == 68) {
            Player.moveRight(player);
        }
    
        //Pressed up.
        if (event.keyCode == 38 || event.keyCode == 87 && Player.playerVelocityY != 1) {
            Player.moveUp(player);
        }
    
        //Pressed down.
        if (event.keyCode == 40 || event.keyCode == 83) {
            Player.moveDown(player);
        }
}


//Detect if player is out of bounds.


//Run the game.

function run() {


    movePlayer();
    drawGame();
    Player.foodCollision();
    

}

run();

document.getElementById("btnUp").addEventListener("click", () => {
    alert("Retard");
});