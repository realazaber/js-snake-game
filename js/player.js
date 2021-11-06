import * as Main from "./main.js";

//Snake values.
let playerPosX;
let playerPosY;

let tailLength;

export const player = {
    playerPosX: 0,
    playerPosY: 0,

    tailLength: 0,
}

export function createPlayer(posX, posY, tailLength) {
    this.posX = posX;
    this.posY = posY;
    this.tailLength = tailLength;
}

//Check for collision with food.
export function foodCollision() {
    console.log("Check for food");
}

//Move snake.

