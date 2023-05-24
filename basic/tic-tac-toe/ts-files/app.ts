window.addEventListener("DOMContentLoaded", () => {
    const cells = Array.from(document.querySelectorAll(".cell"));
    const playerDisplay = document.querySelector(".player");
    const resetButton = document.getElementById("reset");
    const winnerInfo = document.querySelector(".winner-info");
    
    let gameData: string[] = ["", "", "", "", "", "", "", "", ""];
    let player: string = "X"
    let isGameActive: boolean = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    const isValidAction = (cell : Element) : Boolean => {
        if(cell.innerHTML !== ""){
            return false;
        }

        return true;
    }

    const updateGameData = (index: number) => {
        gameData[index] = player;
    }

    const changePlayer = () => {
        player = player === "X" ? "O" : "X";
        playerDisplay.innerHTML = `Player <span>${player}</span>`;
    }


    const showWinner = (type : string) => {
        switch(type){
            case PLAYERX_WON:
                winnerInfo.innerHTML = `Winner <span>X</span>`;
                break;
            case PLAYERO_WON:
                winnerInfo.innerHTML = `Winner <span>O</span>`;
                break;
            case TIE:
                winnerInfo.innerHTML = "TIE";
        }

        winnerInfo.classList.remove("hidden");
    }

    const handleResultValidation = () => {
        let roundWon : boolean = false;
        for(let i = 0; i < winnerConditions.length; i++){
            const item = winnerConditions[i];
            const a = gameData[item[0]];
            const b = gameData[item[1]];
            const c = gameData[item[2]];

            if(a === "" || b === "" || c === ""){
                continue;
            }
            if(a === b && a === c){
                roundWon = true;
            }
        }

        if(roundWon){
            showWinner(player === "X" ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

        if(gameData.filter(item => item === "").length === 0){
            showWinner(TIE);
        }
    }

    const clickCellHandler = (cell : Element, index : number) => {
        if(isValidAction(cell) && isGameActive){
            cell.innerHTML = player;
            updateGameData(index);
            handleResultValidation();
            changePlayer();
        }
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => clickCellHandler(cell, index));
    })

    const resetBoard = () => {
        gameData = ["", "", "", "", "", "", "", "", ""];
        isGameActive = true;
        winnerInfo.classList.add("hidden")

        if(player === "O"){
            changePlayer();
        }

        cells.forEach(cell => {
            cell.innerHTML = "";
        })
    }

    resetButton.addEventListener('click', resetBoard)
})
