namespace A_10_2 {
    export class Cloud extends Moveable {
        position: Vector;
        velocity: Vector;
        size: number;

        constructor(_size: number, _position?: Vector) {
            super(_position);

            if (_position) 
                this.position = _position;
            else
                this.position = new Vector(50, 100); 
                
            this.velocity = new Vector(100, 0); 
            this.size = _size;
        }

        draw(): void {

            let nParticles: number = 140;
            let radiusParticle: number = 40;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;
    
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                crc2.translate((Math.random() - 0.5) * this.position.x, - (Math.random() * this.position.y));
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();   
        }
    } 
}