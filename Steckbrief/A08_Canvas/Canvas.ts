namespace Canvas {

//Interface für Random Positionen (x,y)
interface Vector {
    x: number;
    y: number; 
}

//Variablen: crc2, Random
window.addEventListener("load", drawField);
var crc2: CanvasRenderingContext2D;
var crc3: CanvasRenderingContext2D;

//Funktion zur Erstelleung des Canvas 
function drawField(_event: Event): void {

var canvas : HTMLCanvasElement | null = document.querySelector('canvas');
crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
crc3 = <CanvasRenderingContext2D>canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawQuadrat({x: 300, y: 90});
drawKreis();
drawDreieck();
}

function drawQuadrat (_position: Vector): void {
    for (let i: number = 0; i < 10; i ++) {
        let positionX : number = crc2.canvas.width * Math.random();
        let positionY : number = crc2.canvas.height * Math.random();
        let green : number = Math.floor(Math.random()* 350);
        let yellow : number = Math.floor(Math.random()* 350);
        let red : number = Math.floor(Math.random()* 350);
        crc2.beginPath();
        crc2.rect(positionX, positionY, 100, 50);
        crc2.fillStyle = "rgb( " + green + ", " + yellow + ", " + red + ")"
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
}

function drawKreis (): void {
    for (let i: number = 0; i < 10; i ++) {
        let green : number = Math.floor(Math.random()* 350);
        let yellow : number = Math.floor(Math.random()* 350);
        let red : number = Math.floor(Math.random()* 350);
        crc2.beginPath();
        crc2.arc(Math.floor(Math.random() * (500) + 1), (Math.random() * (500) + 1), (Math.random() * (90) + 1), 0, 5 + Math.PI);
        crc2.fillStyle = "rgb( " + green + ", " + yellow + ", " + red + ")"
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
}

function drawDreieck (): void {
    for (let i: number = 0; i < 10; i ++) {
        let green : number = Math.floor(Math.random()* 250);
        let yellow : number = Math.floor(Math.random()* 250);
        let red : number = Math.floor(Math.random()* 250);

        crc3.beginPath();
        crc3.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (300) + 1));
        crc3.lineTo(Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (300) + 1));
        crc3.lineTo(Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (350) + 1));

        crc3.fillStyle = "rgb( " + green + ", " + yellow + ", " + red + ")";
        crc3.fill();
        crc3.closePath();
        crc3.stroke();
    }
}

let reloadButton: HTMLElement = <HTMLElement>document.querySelector(".reload");

reloadButton.addEventListener("click", function (): void {
    location.reload();
});
}