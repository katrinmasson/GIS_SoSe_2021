namespace ttt {
        let buttonSchwer: HTMLElement = document.getElementById("schwer");

        var cell: HTMLDivElement []= [];

         //EventListener ButtonLeicht
        buttonSchwer.addEventListener("click", function(): void {
        let buttonsAll: HTMLElement = document.getElementById("levelButton");
        let board:HTMLElement = document.getElementById("board");
        let easy: HTMLElement = document.getElementById("containerLeicht");
        let middle: HTMLElement = document.getElementById("containerMittel");
        buttonsAll.classList.add("hidden");
        board.classList.remove("hidden");
        easy.classList.add("hidden");
        middle.classList.add("hidden");
        var containerLeicht: HTMLElement = document.getElementById("containerSchwer");

        for (let i = 0; i < 25; i++) {
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