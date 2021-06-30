namespace ttt {
     let buttonMittel: HTMLElement = document.getElementById("mittel");

     var cell: HTMLDivElement []= [];

      //EventListener ButtonLeicht
    buttonMittel.addEventListener("click", function(): void {
        let buttonsAll: HTMLElement = document.getElementById("levelButton");
        let board:HTMLElement = document.getElementById("board");
        let easy: HTMLElement = document.getElementById("containerLeicht");
        let hard: HTMLElement = document.getElementById("containerSchwer");
        buttonsAll.classList.add("hidden");
        board.classList.remove("hidden");
        easy.classList.add("hidden");
        hard.classList.add("hidden");
        var containerLeicht: HTMLElement = document.getElementById("containerMittel");

        for (let i = 0; i < 16; i++) {
            cell[i] = document.createElement("div");
            cell[i].classList.add("cell");
            containerLeicht.appendChild(cell[i]);
            //Computer
    
            //Eventlistener für einzelne Cells zum Ausfüllen Human
            cell[i].addEventListener("click", function(): void {
                let humanSymbol: string = "X";
                cell[i].innerHTML = humanSymbol;
            })
        }},)
} //Ende namespace