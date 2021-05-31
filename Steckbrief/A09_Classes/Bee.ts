namespace Blumenwiese { //Zusammenarbeit Aileen Akin
    export class Bee {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            
            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(300, 400); 
                
            this.velocity = new Vector(50, 0); 
            this.velocity.random(120, 20); 
        }

        move(_timeslice: number): void { 
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }


        draw(): void{
            console.log("Bee draw");
            crc2.save();
            crc2.beginPath();
            //körper
            crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#FFCC33";
            crc2.fill();
            crc2.closePath();
            
            //ssreifen
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(this.position.x, this.position.y + 10);
            crc2.lineTo(this.position.x, this.position.y - 10);
            crc2.strokeStyle = "black";
            crc2.lineWidth = 10;
            crc2.stroke();
            crc2.closePath();
            crc2.restore();

            //flügel
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
            //flügel
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