namespace MemoryGame {

    //Variablen: Paare, Buchstaben, Karten, aufgedeckte Karten, Vergleichs der Karten, restlichen Paare
    let pairs: number;
    let letter: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cards: HTMLElement[] = [];
    let turnedCards: number = 0;
    let vergleichArray: HTMLElement[] = [];
    let leftPairs: HTMLElement[] = [];

    // Spielstart 
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let startMemory: HTMLElement = <HTMLElement>document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
   
    // FormData - Objekt : Werte des Formulars auswerten
    let formData: FormData;
    let size: number;
    let backGColor: FormDataEntryValue | null; 
    let backSColor: FormDataEntryValue | null;
    let fontColor: FormDataEntryValue | null;
    let fontStyle: FormDataEntryValue | null;


    //Karten erstellen    
    function createCard(_cardContent: string): void {
        let openCard: HTMLElement = document.createElement("span");

        //Karteninhalt
        openCard.innerHTML = "<p>" + _cardContent + "</p>";
        openCard.classList.add("card");
        openCard.classList.add("hidden");

        cards.push(openCard);
        leftPairs.push(openCard);
        openCard.addEventListener("click", handleCard);

        // Kartengröße
        openCard.style.width = size + "px";
        openCard.style.height = size + "px";

        // Hintergrundfarbe des Spielfelds
        if (backGColor) { 
            openCard.style.backgroundColor = backGColor.toString();
        }
        
        // Hintergrundfarbe der Kartenrückseite
        if (backSColor) { 
            openCard.style.background = backSColor.toString();
        }

        // Schriftfarbe
        if (fontColor) { 
            openCard.style.color = fontColor.toString();
        }

        // Schriftart
        if (fontStyle) { 
            openCard.style.fontFamily = fontStyle.toString();
        }

    }

    function handleCard(_event: Event): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        if (target.classList.contains("card")) {
            turnedCards++;
            if (!(turnedCards > 2) && target.classList.contains("hidden") && target != vergleichArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    vergleichArray.push(target);
                }
            } else {
                turnedCards--;
            }
            if (turnedCards == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    // Vergleich der Karten
    function compareCards(): void {
        if (vergleichArray[0].innerHTML == vergleichArray[1].innerHTML) {
            for (let i: number = 0; i < 2; i++) {
                vergleichArray[i].classList.remove("open");
                vergleichArray[i].classList.add("taken");
            }
            leftPairs.splice(0, 2);
        } else {
            for (let i: number = 0; i < vergleichArray.length; i++) {
                vergleichArray[i].classList.remove("open");
                vergleichArray[i].classList.add("hidden");
            }
        }
        vergleichArray = [];
        turnedCards = 0;
        checkWin();
    }

    function checkWin(): void {
        if (leftPairs.length == 0) {
            alert("Du hast gewonnen! Deine benötigte Zeit: ... !");
        }
    }

    //Funktion zum Mischen der Karten

    function shuffleArray(_array: any[]): any[] {
        for (var i: number = _array.length - 1; i > 0; i--) {
            var j: number = Math.floor(Math.random() * (i + 1));
            var temp: number = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }

    // Funktion zur anzeige der Karten nach Auswertung des Formulars
    function main(_event: Event): void {

        let fieldset: HTMLFormElement = <HTMLFormElement>document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }

        //Karten erzeugen
        for (let i: number = 0; i < pairs; i++) {
            createCard(letter[i]);
            createCard(letter[i]);
        }

        // Karten mischen --> Listener
        shuffleArray(cards);
    }
}