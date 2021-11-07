import * as Main from "./main.js";

let posX;
let posY;

//Food values.
export function createFood(posX, posY) {
    this.posX = posX;
    this.posY = posY;
}

//Respawn food
export function respawnFood(food) {
    food.posX = Math.floor((Math.random() * (Main.canvas.scrollWidth - Main.gridBlockSize)) + 1);
    food.posY = Math.floor((Math.random() * (Main.canvas.scrollWidth - Main.gridBlockSize)) + 1);
}