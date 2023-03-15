var board;
var playerO = "O";
var playerX = "X";
var currPlayer = playerO;
var gameOver = false;

window.onload = function () {
    setGame();
}
function setGame() {
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]

    for (let r = 0; r < 3; r++) {
        const element = Array[r];
        for (let c = 0; c < 3; c++) {
            // const element = array[c];
            // <div id="0.0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if (r == 0 || r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 0 || c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", setTile);
            document.getElementById("board").append(tile);
        }

    }
}
function setTile() {
    if (gameOver) {
        return;
    }
    let coords = this.id.split("-")//"1-1" - ["1", "1"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    if (board[r][c] != ' ') {
        return;
    }
    board[r][c] = currPlayer;
    this.innerText = currPlayer;

    if (currPlayer == playerO) {
        currPlayer = playerX;

    }
    else {
        currPlayer = playerO;
    }
    checkwinner();
}
// function checkwinner() {
//     //horizontally
//     for (let r = 0; r < 3.length; r++) {
//         //const element = array[r];
//         if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != '  ') {
//             for (let i = 0; i < 3.length; i++) {
//                 //const element = array[i];
//                 let tile = document.getElementById(r.toString() + "-" + i.toString());
//                 tile.classList.add("winner");
//             }
//             gameOver = true;
//             return;
//         }
//     }
// }
