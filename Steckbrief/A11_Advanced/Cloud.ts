namespace A_11 {
    export class Cloud extends Moveable {
        //public position: Vector;
        //public velocity: Vector;
        public size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(50, 80); 
                
            this.velocity = new Vector(100, 0); 
            this.size = _size;
        }

        public draw(): void {
            let grd = crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.beginPath();
            crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            crc2.moveTo(this.position.x + 200, this.position.y + 60);
            crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            crc2.stroke();
            crc2.fillStyle = grd;
            crc2.fill();
            
            crc2.restore();
        }
    } 
}