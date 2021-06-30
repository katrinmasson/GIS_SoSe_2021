namespace ttt {
    //Variablen zu den verschiedenen Schwierigkeitsgraden
    let buttonLeicht: HTMLElement = document.getElementById("leicht");
    const reloadButton: HTMLElement = document.getElementById("reloadButton");
    const noButton: HTMLElement = document.querySelector(".hidden");

    const player: string = "O";
    const computer: string = "X";

    let boardValue: any = [];
    let game: boolean = true;
    let spielerWin: number = 0;
    let computerWin: number = 0;
    let nrSpielrunden: number = 0; //Anfangszahl der Spielrunden
    let nrMaxSielrunden: number = 3; //Maximal Anzahl der Spielrunden
    let cellArray: HTMLDivElement [] = []; //Die einzelnen Zellen 

    //EventListener ButtonLeicht
    buttonLeicht.addEventListener("click", function(): void {
        let buttonsAll: HTMLElement = document.getElementById("levelButton");
        let board: HTMLElement = document.getElementById("board");
        let middle: HTMLElement = document.getElementById("containerMittel");
        let hard: HTMLElement = document.getElementById("containerSchwer");
        buttonsAll.classList.add("hidden");
        board.classList.remove("hidden");
        middle.classList.add("hidden");
        hard.classList.add("hidden");
        var containerLeicht: HTMLElement = document.getElementById("containerLeicht");
        for (let i: number = cellArray.length; i < 9; i++) {
            let cell: HTMLDivElement = document.createElement("div");
            cell.classList.add("cell");
            containerLeicht.appendChild(cell);
            cellArray.push(cell);
            //Computer soll beginnen 
            gameComputer();
            //Eventlistener für einzelne Cells zum Ausfüllen Human & Computer
            cell.addEventListener("click", function(): void {
            if (game == true && cell.innerHTML == "") {
            cell.innerHTML = player;
            game = false;
            console.log(cellArray);
            gameComputer();
            }});
        }
});

    function gameComputer (): void {
        console.log("computer");
        let x: number = Math.floor(Math.random() * 9);
        if (game == false && cellArray[x].innerHTML == "") {
            cellArray[x].innerHTML = computer;
            game = true;
            console.log(x); 
    } else {
        return;
    }
}

    //Gewinnmölichkeiten 
    function checkWin (): void {
        let winningCombi: any = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
        for (let i: number = 0; i < winningCombi.length; i++) {
        let [a, b, c] = winningCombi[i];
        if (boardValue[a] && boardValue [b] === boardValue[b] && boardValue[c]){
            return boardValue[a];
        } else {
            return null;
    }
        console.log(winningCombi);
}}


    checkWin();
    

} //Ende namespace
