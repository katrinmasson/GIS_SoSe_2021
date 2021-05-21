namespace blumenlandschaft {

    //Interface für Random Positionen (x,y)
    interface Vector {
        x: number;
        y: number;
    }

    //Variablen: crc2, Random
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let golden: number = 0.42;

    //Funktion zur Erstelleung des Canvas 
    function handleLoad(_event: Event): void {

        let canvas: HTMLCanvasElement | null = document.querySelector('canvas');
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({ x: 190, y: 140 });
        drawCloud({ x: 500, y: 125 }, { x: 300, y: 40 });
        drawMountain({ x: -500, y: horizon }, 75, 240, "grey", "white");
        drawMountain({ x: -500, y: horizon }, 50, 170, "black", "lightgrey");
        drawBush({ x: 50, y: 300 }, { x: 100, y: 50 });
        drawFlowersRed(500, -200);
        drawFlowersPink(500, -200);
        drawFlowersPurple(500, -200);
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let radius1: number = 30;
        let radius2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let particleNum: number = 60;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let draw: number = 0; draw < particleNum; draw++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.fill(particle);
    }

    function drawMountain(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountain");
        let stepMin: number = 20;
        let stepMax: number = 70;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    function drawBush(_position: Vector, _size: Vector): void {
        console.log("Bush", _position, _size);

        let particleNum: number = 100;
        let radiusParticle: number = 30;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0.3, "HSLA(117, 100%, 22%, 0.84)");
        gradient.addColorStop(1, "HSLA(117, 100%, 31%, 0.69)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let draw: number = 0; draw < particleNum; draw++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.fill(particle);
    }

    function drawFlowersRed(_x: number, _y: number): void {
        for (let flowers: number = 0; flowers < 10; flowers++) {
            let x: number = -240 * Math.random();
            let y: number = 100 * Math.random();

            //Stiel
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -30);
            crc2.closePath();
            crc2.strokeStyle = "darkgreen";
            crc2.stroke();
            crc2.save();
            // Blüten
            crc2.translate(0, -40);

            for (let flowerPetals: number = 0; flowerPetals < 15; flowerPetals++) {
                crc2.rotate(Math.PI * 2 / 5);
                //Blütenfarbe
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
                gradient.addColorStop(0.1, "red");
                gradient.addColorStop(0.7, "black");
                // Blüten
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-5, -10);
                crc2.bezierCurveTo(-10, -20, 10, -20, 10, -10);
                crc2.closePath();
                crc2.fillStyle = gradient;
                crc2.fill();
            }
            crc2.restore();
            // Mitte
            crc2.save();
            crc2.translate(0, -40);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "black";
            crc2.fill();
        }
    }

    function drawFlowersPink(_x: number, _y: number): void {
        for (let flowers: number = 0; flowers < 8; flowers++) {
            let x: number = 200 * Math.random();
            let y: number = 80 * Math.random();

            //Stiel
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -30);
            crc2.closePath();
            crc2.strokeStyle = "darkgreen";
            crc2.stroke();
            crc2.save();
            // Blüten
            crc2.translate(0, -40);

            for (let flowerPetals: number = 0; flowerPetals < 15; flowerPetals++) {
                crc2.rotate(Math.PI * 2 / 5);
                //Blütenfarbe
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
                gradient.addColorStop(0.5, "pink");
                gradient.addColorStop(0.8, "white");
                // Blüten
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-5, -10);
                crc2.bezierCurveTo(-10, -20, 10, -20, -10, -10);
                crc2.closePath();
                crc2.fillStyle = gradient;
                crc2.fill();
            }
            crc2.restore();
            // Mitte
            crc2.save();
            crc2.translate(0, -40);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "yellow";
            crc2.fill();
        }
    }

    function drawFlowersPurple(_x: number, _y: number): void {
        for (let flowers: number = 0; flowers < 8; flowers++) {
            let x: number = 200 * Math.random();
            let y: number = 80 * Math.random();

            //Stiel
            crc2.translate(x, y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -30);
            crc2.closePath();
            crc2.strokeStyle = "darkgreen";
            crc2.stroke();
            crc2.save();
            // Blüten
            crc2.translate(0, -40);

            for (let flowerPetals: number = 0; flowerPetals < 15; flowerPetals++) {
                crc2.rotate(Math.PI * 2 / 5);
                //Blütenfarbe
                let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
                gradient.addColorStop(0.1, "purple");
                gradient.addColorStop(0.8, "white");
                // Blüten
                crc2.beginPath();
                crc2.moveTo(0, 0);
                crc2.lineTo(-5, -10);
                crc2.bezierCurveTo(-10, -20, 10, -20, 10, -10);
                crc2.closePath();
                crc2.fillStyle = gradient;
                crc2.fill();
            }
            crc2.restore();
            // Mitte
            crc2.save();
            crc2.translate(0, -40);
            crc2.beginPath();
            crc2.arc(0, 0, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "orange";
            crc2.fill();
        }
    }
}