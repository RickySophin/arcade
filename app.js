const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

let currentPlayer = "X";

function markXO () {
    for (let i = 0; i <= 8; i++) {
        const boxes = document.getElementsByClassName("box")[i];
        boxes.addEventListener("click", () => {
            if(boxes.innerHTML === "" && currentPlayer === "X") {
                boxes.innerHTML = "X";
                currentPlayer = "O";
                gameResult(); 
            } else if (boxes.innerHTML === "" && currentPlayer === "O") {
                boxes.innerHTML = "O";
                currentPlayer = "X";
                gameResult(); 
            }
        })
    }            
}
markXO();

function gameResult () {
    for (let i = 0; i <= 7; i++) {
        const boxes = document.getElementsByClassName("box");
        if (boxes[waysToWin[i][0]].innerHTML === "X" && boxes[waysToWin[i][1]].innerHTML === "X"
            && boxes[waysToWin[i][2]].innerHTML === "X") {
            document.getElementsByClassName("result")[0].innerHTML = "X WINS!";
            return;
        } else if (boxes[waysToWin[i][0]].innerHTML === "O" && boxes[waysToWin[i][1]].innerHTML === "O"
        && boxes[waysToWin[i][2]].innerHTML === "O") {
            document.getElementsByClassName("result")[0].innerHTML = "O WINS!";
            return;
        } else if (boxes[0] !== "" && boxes[1] !== "" && boxes[3] !== "" && boxes[4] !== "" && 
        boxes[5] !== "" && boxes[6] !== "" && boxes[7] !== "" && boxes[8] !== "") {
            document.getElementsByClassName("result")[0].innerHTML = "DRAW!";
        }
    }
}
console.log(gameResult());

function restartGame () {
    let restart = document.getElementsByClassName("restart-game")[0];
    restart.addEventListener("click", () => {
        const boxes = document.getElementsByClassName("box");
        for (let i = 0; i <= 8; i++){
            boxes[i].innerHTML = "";
        }
        currentPlayer = "X";
    })
}
restartGame();




