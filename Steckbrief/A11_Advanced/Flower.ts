namespace A_11 {
    export class Flower {

        constructor(_position?: Vector) {
            //leer
        }
  //red Flowers
        draw(_x:number, _y: number): void {

            for (let i: number = 0; i < 10; i++) {
    
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 4, 70);
    
            //leaf
            crc2.moveTo(_x, _y + 50);
            crc2.stroke();
            crc2.fill();
            crc2.save();
    
            //color leafs
            crc2.translate(_x, _y);
            for (let i: number = 0; i < 15; i++) {
                crc2.rotate(Math.PI * 2 / 5);
                crc2.beginPath();
                crc2.moveTo(10, 10);
                crc2.lineTo(-7, -10);
                crc2.bezierCurveTo(-10, -20, 10, -20, 10, -10);
                crc2.closePath();
                crc2.fillStyle = "red";
                crc2.fill();
            }
            crc2.restore();
    
            crc2.save();
            crc2.translate(_x, _y);
            crc2.beginPath();
            crc2.arc(0, 0, 7, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
    
            crc2.restore();
        }
    }
        
    
    
        drawTwo(_x: number, _y: number): void {
            //Stiel
            crc2.beginPath();
            crc2.strokeStyle = "darkgreen";
            crc2.fillStyle = "darkgreen";
            crc2.fillRect(_x, _y, 4, 70);
            crc2.moveTo(_x, _y + 50);
            crc2.stroke();
            crc2.fill();
    
            crc2.save();
            crc2.translate(_x, _y);
            for (let i: number = 80; i > 8; i -= 8) {
                crc2.rotate(45 * Math.PI / 20);
                crc2.beginPath();
                crc2.moveTo(10, 20);
                crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
                crc2.fillStyle = "RGB(232,211,10";
                crc2.strokeStyle = "RGB(232,211,10";
                crc2.fill();
    
                crc2.stroke();
    
            }
            crc2.restore();
    
            //Farbe
            crc2.save();
            crc2.beginPath();
            moveTo(_x + 10, _y + 20);
            crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "RGB(98,47,0";
            crc2.strokeStyle = "RGB(98,47,0";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
        }
    } 
}
        