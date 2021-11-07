import * as Player from "./player.js";
import * as Food from "./food.js";


//Get the game canvas.
export let canvas = document.getElementById("gameView");
let gameCanvas = canvas.getContext("2d");
//How many grid blocks per row and column.
const gridSize = 15;
//Size of each grid block.
export const gridBlockSize = canvas.scrollWidth / gridSize;

//Player score.
let score = 0;
document.getElementById("score").innerHTML = score;

let startX = Math.floor((Math.random() * (canvas.scrollWidth - gridBlockSize)) + 3);
let startY = Math.floor((Math.random() * (canvas.scrollHeight - gridBlockSize)) + 3);
let tailLength = 0;

let speed = 15;
const player = new Player.createPlayer(startX, startY, tailLength);


startX = Math.floor((Math.random() * (canvas.scrollWidth - gridBlockSize)) + 3);
startY = Math.floor((Math.random() * (canvas.scrollHeight - gridBlockSize)) + 3);
const food = new Food.createFood(startX, startY);




//Save old player positions.
function recordPosition() {
    

    let tmpPos = player.playerPositions.at(-1);

    player.playerPositions.push(new Player.snakeBlock(player.posX, player.posY));    
    
    
}

//Respawn food
function respawnFood(food) {
    Food.respawnFood(food);
}


//Reset the game
function resetGame() {
        //Clear the screen.
        gameCanvas.fillStyle = 'black';
        gameCanvas.fillRect(0, 0, canvas.width, canvas.height);
        
        //Draw player head.
        player.posX = startX;
        player.posY = startY;
        player.velocityX = 0;
        player.velocityY = 0;

        score = 0;
        document.getElementById("score").innerHTML = 0;
        document.getElementById("scoreMsg").innerHTML = "";
        gameCanvas.fillStyle = "red";
        gameCanvas.fillRect(player.posX, player.posY, gridBlockSize, gridBlockSize);

        //Draw food.
        Food.respawnFood(food);
        gameCanvas.fillStyle = "yellow";
        gameCanvas.fillRect(food.posX, food.posY, gridBlockSize, gridBlockSize);
}

//Draw grid.
function drawGame () {

    //Hit the wall
    if (player.posX <= 0 || player.posX > canvas.width - gridBlockSize || player.posY <= 0 || player.posY > canvas.height - gridBlockSize) {
        alert("Dead");
        resetGame();
    }

    for (let i = 0; i < player.playerPositions.length; i++) {
        let snakePart = player.playerPositions[i];

        if (player.velocityX != 0 || player.velocityY != 0) {
            if (snakePart.posX == player.posX && snakePart.posY == player.posY) {
                alert("Hit your own tail.");
                resetGame();
            }
        }
        
    }

    //Clear the screen.
    gameCanvas.fillStyle = 'black';
    gameCanvas.fillRect(0, 0, canvas.width, canvas.height);
    
    //Draw player head.
    gameCanvas.fillStyle = "red";
    gameCanvas.fillRect(player.posX, player.posY, gridBlockSize, gridBlockSize);


    //Player ate food.
    if (
        player.posX < food.posX + gridBlockSize &&
        player.posX + gridBlockSize > food.posX &&
        player.posY < food.posY + gridBlockSize &&
        player.posY + gridBlockSize > food.posY      
        ) 
        {
        console.log("ate food");
        tailLength++;
        Food.respawnFood(food);
        score++;
        document.getElementById("score").innerHTML = score;



        }


        if (score >= 5) {
            
        let speedIncrease = score / 100;
        speed = speed + speedIncrease;
        scoreMsg();
        }

    //Draw the tail.
    
        for (let index = 0; index < tailLength; index++) {
            gameCanvas.fillStyle = "green";
            let tmpPos = player.playerPositions.at(-index);
            
            gameCanvas.fillRect(tmpPos.posX, tmpPos.posY, gridBlockSize, gridBlockSize);
            console.log("draw tail at X: " + tmpPos.posX + " Y: " + tmpPos.posY);


            
        }



    //Draw food.
    gameCanvas.fillStyle = "yellow";
    gameCanvas.fillRect(food.posX, food.posY, gridBlockSize, gridBlockSize);

}

//Show score message 
function scoreMsg() {

    let msg = "";


    switch (true) {
        case (score >= 30):
            msg = "Hacker";
            break;
        case (score >= 25):
            msg = "MLG";
            break;
        case (score >= 20):
            msg = "Cracked";
            break;
        case (score >= 15):
            msg = "Now we talking";
            break;
        case (score >= 10):
            msg = "Not bad";
            break;
        case (score >= 5):
            msg = "You can do better than that!";
            break;
        default:
            msg = "";
            break;
    }




    document.getElementById("scoreMsg").innerHTML = msg;
}


//Move player.
function movePlayer() {
   

    //Save position.
    var interval = window.setInterval(function() {

        if (player.velocityX != 0) {
            player.posX = player.posX + (player.velocityX * speed); 
            recordPosition();            
        }   
        
        if (player.velocityY != 0) {
            player.posY = player.posY + (player.velocityY * speed); 
            recordPosition();
        } 

        drawGame();
        

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

document.getElementById("btnLeft").addEventListener("click", () => {
    Player.moveLeft(player);
});

document.getElementById("btnRight").addEventListener("click", () => {
    Player.moveRight(player);
});

document.getElementById("btnUp").addEventListener("click", () => {
    Player.moveUp(player);
});

document.getElementById("btnDown").addEventListener("click", () => {
    Player.moveDown(player);
});


//Detect if player is out of bounds.


//Run the game.

function run() {

    
    movePlayer();    

}

run();


