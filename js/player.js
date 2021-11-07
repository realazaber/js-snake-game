export function createPlayer(posX, posY, tailLength) {
    this.posX = posX;
    this.posY = posY;
    this.tailLength = tailLength;
    this.playerPositions = [posX, posY];

    this.velocityX = 0;
    this.velocityY = 0;
    this.isAlive = true;   
}

export class snakeBlock {

    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }
}


export function savePlayerPosition(posX, posY) {
    this.posX = posX;
    this.posY = posY;


}

export function moveLeft(player) {
    console.log("Move left.");

    //Make sure player can't 
    //go opposite direction
    if (player.velocityX != 1) {
        player.velocityX = -1;
        player.velocityY = 0;
    }
}

export function moveRight(player) {
    console.log("Move right.");

    //Make sure player can't 
    //go opposite direction
    if (player.velocityX != -1) {
        player.velocityX = 1;
        player.velocityY = 0;
    }
}

export function moveUp(player) {
    console.log("Move up.");

    if (player.velocityY != 1) {
        player.velocityX = 0;
        player.velocityY = -1;
    }
}

export function moveDown(player) {
    console.log("Move down.");
    if (player.velocityY != -1) {
        player.velocityX = 0;
        player.velocityY = 1;
    }
}

