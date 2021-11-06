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

//Detect if player is out of bounds.


//Run the game.

function run() {
    drawGame(gridSize);
    console.log(player.posX);
    console.log(player.posY);
    Player.foodCollision();
    
}

run();
