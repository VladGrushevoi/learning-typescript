import { winnerConditions } from "./constants.js";
const gameCells = document.getElementsByClassName("cell");
let gameData = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let isWon = false;
Array.from(gameCells).forEach((cell, index) => {
    cell.innerHTML = gameData[index];
    cell.addEventListener('click', () => {
        if (player === "X") {
            gameData[index] = player;
            cell.innerHTML = player;
            player = "O";
        }
        else {
            gameData[index] = player;
            cell.innerHTML = player;
            player = "X";
        }
        winnerConditions.forEach(winCondition => {
            const a = gameData[winCondition[0]];
            const b = gameData[winCondition[1]];
            const c = gameData[winCondition[2]];
            if (a === b && a === c) {
                isWon = true;
            }
            alert("Player " + player + " is win");
        });
    });
});
