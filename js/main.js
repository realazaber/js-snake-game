
//Get the game canvas.
const canvas = document.getElementById("gameView");
const gameCanvas = canvas.getContext("2d");

//How many grid blocks per row and column.
const gridSize = 15;

//Size of each grid block.
const gridBlockSize = canvas.scrollWidth / gridSize;



//Draw grid.
function drawGrid (gridSize) {
    for (let row = 0; row < gridSize; row++) {
        for (let column = 0; column < gridSize; column++) {
            
            
        }
        
    }
}



//Detect if player is out of bounds.


//Run the game.

function run() {
    drawGrid(gridSize);
}