var ttt;
(function (ttt) {
    //Variablen zu den verschiedenen Schwierigkeitsgraden
    var buttonLeicht = document.getElementById("leicht");
    var reloadButton = document.getElementById("reloadButton");
    var noButton = document.querySelector(".hidden");
    var player = "O";
    var computer = "X";
    var boardValue = [];
    var game = true;
    var spielerWin = 0;
    var computerWin = 0;
    var nrSpielrunden = 0; //Anfangszahl der Spielrunden
    var nrMaxSielrunden = 3; //Maximal Anzahl der Spielrunden
    var cellArray = []; //Die einzelnen Zellen 
    //EventListener ButtonLeicht
    buttonLeicht.addEventListener("click", function () {
        var buttonsAll = document.getElementById("levelButton");
        var board = document.getElementById("board");
        var middle = document.getElementById("containerMittel");
        var hard = document.getElementById("containerSchwer");
        buttonsAll.classList.add("hidden");
        board.classList.remove("hidden");
        middle.classList.add("hidden");
        hard.classList.add("hidden");
        var containerLeicht = document.getElementById("containerLeicht");
        var _loop_1 = function (i) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            containerLeicht.appendChild(cell);
            cellArray.push(cell);
            //Computer soll beginnen 
            gameComputer();
            //Eventlistener für einzelne Cells zum Ausfüllen Human & Computer
            cell.addEventListener("click", function () {
                if (game == true && cell.innerHTML == "") {
                    cell.innerHTML = player;
                    game = false;
                    console.log(cellArray);
                    gameComputer();
                }
            });
        };
        for (var i = cellArray.length; i < 9; i++) {
            _loop_1(i);
        }
    });
    function gameComputer() {
        console.log("computer");
        var x = Math.floor(Math.random() * 9);
        if (game == false && cellArray[x].innerHTML == "") {
            cellArray[x].innerHTML = computer;
            game = true;
            console.log(x);
        }
        else {
            return;
        }
    }
    //Gewinnmölichkeiten 
    function checkWin() {
        var winningCombi = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        for (var i = 0; i < winningCombi.length; i++) {
            var _a = winningCombi[i], a = _a[0], b = _a[1], c = _a[2];
            if (boardValue[a] && boardValue[b] === boardValue[b] && boardValue[c]) {
                return boardValue[a];
            }
            else {
                return null;
            }
            console.log(winningCombi);
        }
    }
    checkWin();
})(ttt || (ttt = {})); //Ende namespace
//# sourceMappingURL=leicht.js.map