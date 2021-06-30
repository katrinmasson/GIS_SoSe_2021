var ttt;
(function (ttt) {
    var buttonSchwer = document.getElementById("schwer");
    var cell = [];
    //EventListener ButtonLeicht
    buttonSchwer.addEventListener("click", function () {
        var buttonsAll = document.getElementById("levelButton");
        var board = document.getElementById("board");
        var easy = document.getElementById("containerLeicht");
        var middle = document.getElementById("containerMittel");
        buttonsAll.classList.add("hidden");
        board.classList.remove("hidden");
        easy.classList.add("hidden");
        middle.classList.add("hidden");
        var containerLeicht = document.getElementById("containerSchwer");
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
        for (var i = 0; i < 25; i++) {
            _loop_1(i);
        }
    });
})(ttt || (ttt = {})); //Ende namespace
//# sourceMappingURL=schwer.js.map