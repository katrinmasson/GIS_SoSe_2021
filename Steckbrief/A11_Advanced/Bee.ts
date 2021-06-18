namespace A_11 {

    export class Bee extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_position?: Vector) {
            super(_position);
            
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(290, 430); 
        
            this.velocity = new Vector(1000, 0); 
            this.velocity.random(120, 30); 
        }

        draw(): void{
            crc2.save();
            crc2.beginPath();
            //Körper
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFCC33";
            crc2.fill();
            crc2.closePath();
            
            //Streifen
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y + 10);
            crc2.lineTo(this.position.x, this.position.y - 10);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 10;
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            //Flügel
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "darkblue";
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.closePath();
            crc2.lineWidth = 1;
            crc2.stroke();
            crc2.restore();
            //Flügel
            crc2.save();
            crc2.beginPath();
            crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            crc2.strokeStyle = "darkblue";
            crc2.fillStyle = "lightblue";
            crc2.fill();
            crc2.lineWidth = 1;
            crc2.closePath();
            crc2.stroke();
            crc2.restore();

            //fühler oder stachel, liegt im auge des Betrachters
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x - 8, this.position.y - 2);
            crc2.lineTo(this.position.x - 15, this.position.y - 5);

            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.lineWidth = 2;
            crc2.closePath();
            crc2.restore();

        }
    }
}