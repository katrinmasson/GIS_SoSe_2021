var ttt;
(function (ttt) {
    var buttonMittel = document.getElementById("mittel");
    var cell = [];
    //EventListener ButtonLeicht
    buttonMittel.addEventListener("click", function () {
        var buttonsAll = document.getElementById("levelButton");
        var board = document.getElementById("board");
        var easy = document.getElementById("containerLeicht");
        var hard = document.getElementById("containerSchwer");
        buttonsAll.classList.add("hidden");
        board.classList.remove("hidden");
        easy.classList.add("hidden");
        hard.classList.add("hidden");
        var containerLeicht = document.getElementById("containerMittel");
        var _loop_1 = function (i) {
            cell[i] = document.createElement("div");
            cell[i].classList.add("cell");
            containerLeicht.appendChild(cell[i]);
            //Computer
            //Eventlistener für einzelne Cells zum Ausfüllen Human
            cell[i].addEventListener("click", function () {
                var humanSymbol = "X";
                cell[i].innerHTML = humanSymbol;
            });
        };
        for (var i = 0; i < 16; i++) {
            _loop_1(i);
        }
    });
})(ttt || (ttt = {})); //Ende namespace
//# sourceMappingURL=mittel.js.map