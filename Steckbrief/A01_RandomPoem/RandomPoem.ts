//1 lege ein Namespace an
namespace Poem {

//Arrays für die Subjekte, Prädikate, Objekte
let subjekt: string[] = ["Spongebob", "Mr. Kraps", "Patrik", "Sandy", "Garry"];
let praedikat: string [] = ["liebt", "hasst", "brutzelt", "lagert", "studiert"];
let objekt: string[] = ["Steine", "Geld", "Burger", "Kampfsport", "Quallen"];

// Subjekte, Prädikate, Objekte in der Konsole zu Kontrolle
//console.log(subjekt,praedikat,objekt);

//For-Schleife die rückwärts zählen soll, ausgehend von der Länge des Arrays
//index > 0 -> rückwärts
//index < 0 -> vorwärts?
//Beim letzten Durchlauf soll die Variable 1 ergeben

for (let index: number = subjekt.length; index > 0; index--) {
    //Wert der Laufvariablen in der Konsole
    //console.log(index) 
    //drei leere Arrays aufrufen aus der Funktion und zurückerhaltenenden Wert einweisen 
    //let name : string = getVerse([], [], []); //-> gibt erst mal nur "Spongebob schwammkopf ein 5x, wegen der Länge der Arrays"
    //console.log(name);
    getVerse (subjekt, praedikat, objekt);
}
//Funktion der drei Werte vom Typ string[] entgegennimmt und eine ausgibt 
function getVerse (_subjekt:string[], _praedikat:string[], _objekt:string[]) {
    //leeres String anlegen
    let satz: string = "";
    //Zufallszahl erzeugen und mit der Länge des übergebenen Subjekt-Arrays multiplizieren 
    let randomSubjekt: number = Math.floor(_subjekt.length * Math.random());
    let randompraedikat: number = Math.floor(_praedikat.length * Math.random());
    let randomObjekt: number = Math.floor(_objekt.length * Math.random());
    //console.log(randomSubjekt); -> sollten Random Zahlen zu sehen sein 
    satz = _subjekt.splice(randomSubjekt, 1)[0] + " " + _praedikat.splice(randompraedikat, 1)[0] + " " + _objekt.splice(randomObjekt, 1)[0];
    console.log(satz);
}   

} //Ende Namespace