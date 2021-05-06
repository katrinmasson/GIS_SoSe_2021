namespace Canvas {

//Interface für Random Positionen (x,y)
interface Vector {
    x: number;
    y: number; 
}

//Variablen: crc2, Random
window.addEventListener("load", drawField);
var crc2: CanvasRenderingContext2D;

//Funktion zur Erstelleung des Canvas 
function drawField(_event: Event): void {

var canvas : HTMLCanvasElement | null = document.querySelector('canvas')!;
crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

drawQuadrat({x: 300, y: 90});
drawCyrcle({})
}

function drawQuadrat (_position: Vector): void {
    for (let i: number = 0; i < 10; i ++) {
        let positionX : number = crc2.canvas.width * Math.random();
        let positionY : number = crc2.canvas.height * Math.random();
        crc2.beginPath();
        crc2.rect(positionX, positionY, 100, 50);
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.stroke();
        crc2.closePath();
    }
}

function drawCyrcle (_position: Vector)


}