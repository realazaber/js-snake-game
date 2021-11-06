import * as Player from "./player.js";


//Get the game canvas.
let canvas = document.getElementById("gameView");
let gameCanvas = canvas.getContext("2d");

//How many grid blocks per row and column.
const gridSize = 15;

//Size of each grid block.
const gridBlockSize = canvas.scrollWidth / gridSize;

const startX = Math.floor((Math.random() * (canvas.scrollWidth - gridBlockSize)) + 1);
const startY = Math.floor((Math.random() * (canvas.scrollHeight - gridBlockSize)) + 1);;
const tailLength = 3;

const player = new Player.createPlayer(startX, startY, tailLength);

//Draw grid.
function drawGame () {
    
    gameCanvas.fillStyle = "red";
    console.log(canvas.scrollHeight);
    console.log(gridBlockSize);
    gameCanvas.fillRect(player.posX, player.posY, gridBlockSize, gridBlockSize);
    
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
