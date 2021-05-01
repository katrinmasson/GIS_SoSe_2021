var MemoryGame;
(function (MemoryGame) {
    //Variablen: Paare, Buchstaben, Karten, aufgedeckte Karten, Vergleichs der Karten, restlichen Paare
    var pairs;
    var letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    var cards = [];
    var turnedCards = 0;
    var vergleichArray = [];
    var leftPairs = [];
    // Spielstart 
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        var startMemory = document.querySelector(".start");
        startMemory.addEventListener("click", main);
    }
    // FormData - Objekt : Werte des Formulars auswerten
    var formData;
    var size;
    var backGColor;
    var backSColor;
    var fontColor;
    var fontStyle;
    //Karten erstellen    
    function createCard(_cardContent) {
        var openCard = document.createElement("span");
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
    function handleCard(_event) {
        var target = _event.target;
        if (target.classList.contains("card")) {
            turnedCards++;
            if (!(turnedCards > 2) && target.classList.contains("hidden") && target != vergleichArray[0]) {
                if (target.classList.contains("hidden")) {
                    target.classList.remove("hidden");
                    target.classList.add("open");
                    vergleichArray.push(target);
                }
            }
            else {
                turnedCards--;
            }
            if (turnedCards == 2) {
                setTimeout(compareCards, 2000);
            }
        }
    }
    // Vergleich der Karten
    function compareCards() {
        if (vergleichArray[0].innerHTML == vergleichArray[1].innerHTML) {
            for (var i = 0; i < 2; i++) {
                vergleichArray[i].classList.remove("open");
                vergleichArray[i].classList.add("taken");
            }
            leftPairs.splice(0, 2);
        }
        else {
            for (var i = 0; i < vergleichArray.length; i++) {
                vergleichArray[i].classList.remove("open");
                vergleichArray[i].classList.add("hidden");
            }
        }
        vergleichArray = [];
        turnedCards = 0;
        checkWin();
    }
    function checkWin() {
        if (leftPairs.length == 0) {
            alert("Du hast gewonnen! Deine benötigte Zeit: ... !");
        }
    }
    //Funktion zum Mischen der Karten
    function shuffleArray(_array) {
        for (var i = _array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = _array[i];
            _array[i] = _array[j];
            _array[j] = temp;
        }
        return _array;
    }
    // Funktion zur anzeige der Karten nach Auswertung des Formulars
    function main(_event) {
        var fieldset = document.querySelector(".formular");
        if (fieldset.classList.contains("visible")) {
            fieldset.classList.remove("visible");
            fieldset.classList.add("is-hidden");
        }
        //Karten erzeugen
        for (var i = 0; i < pairs; i++) {
            createCard(letter[i]);
            createCard(letter[i]);
        }
        // Karten mischen --> Listener
        shuffleArray(cards);
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=MemoryGame.js.map