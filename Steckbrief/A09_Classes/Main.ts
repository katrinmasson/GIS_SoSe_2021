namespace Blumenwiese {

    interface Vector {
        x: number;
        y: number;
    }

    //Thanks for the Help @Lisa

    let imageData: ImageData;
    let cloudArray: Cloud[] = [];
    let beeArray: Bee[] = [];


    //HandleLoad
    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let golden: number = 0.62;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * golden;
        let posMountains: Vector = { x: 0, y: horizon };



        drawBackground();
        drawSun({ x: 850, y: 170 });
        createClouds();
        window.setInterval(moveCloud, 50);
        drawMountains(posMountains, 95, 250, "grey", "white");
        drawMountains(posMountains, 60, 170, "darkgrey", "lightgrey");
        drawTree({ x: 150, y: 400 });
        for (let i: number = 0; i < 10; i++) {
            drawFlowerRed();
            drawFlowerYellow();
        }
        drawHome();

        imageData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createBee();
        window.setInterval(moveBee, 20);

    }

    //Bees
    function createBee(): void {
        for (let i: number = 0; i < 10; i++) {
            let bee: Bee = new Bee(0.8);
            beeArray.push(bee);
        }
    }

    function moveBee(): void {
        for (let bee of beeArray) {
            bee.move(1 / 40);
            bee.draw();
        }
    }

    //Clouds
    function createClouds(): void {
        for (let i: number = 0; i < 1; i++) {
            let cloud: Cloud = new Cloud({ x: 350, y: 95 });
            cloudArray.push(cloud);
        }
    }

    function moveCloud(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        for (let cloud of cloudArray) {
            cloud.move(1 / 50);
            cloud.draw();
        }
    }

    //Background
    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(0.7, "HSL(100, 50%, 50%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }


    //Sun
    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let radius1: number = 30;
        let radius2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);

        gradient.addColorStop(0, "HSLA(60, 80%, 60%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
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

    //Moutains
    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains", _position, _min, _max);
        let stepMin: number = 20;
        let stepMax: number = 100;
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
        gradient.addColorStop(0.1, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();

        crc2.restore();
    }

    //Tree
    function drawTree(_position: Vector): void {

        crc2.save();
        crc2.beginPath();
        crc2.rect(_position.x + 200, _position.y - 20, 40, 250);
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_position.x + 210, _position.y + 30);
        crc2.lineWidth = 10;
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fill();
        crc2.strokeStyle = "RGB(94,47,0)";
        crc2.stroke();
        crc2.closePath();

        crc2.fillStyle = "#487047";
        crc2.beginPath();
        crc2.arc(_position.x + 150, _position.y - 100, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 50, 60, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //unten-rechts
        crc2.beginPath();
        crc2.arc(_position.x + 250, _position.y - 60, 60, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //oben
        crc2.beginPath();
        crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();
        //oben-rechts
        crc2.beginPath();
        crc2.arc(_position.x + 270, _position.y - 105, 50, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.arc(_position.x + 200, _position.y - 100, 40, 0, 2 * Math.PI);
        crc2.fill();
        crc2.closePath();

    }

    //Bienenwaben inspiriert von @Martin 
    function drawHome(): void {
        crc2.restore();

        crc2.beginPath();
        crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        crc2.fillStyle = "RGB(178,134,92)";
        crc2.fill();
        crc2.closePath();
        //
        crc2.beginPath();
        crc2.moveTo(345, 420);
        crc2.lineTo(255, 420);
        crc2.moveTo(350, 400);
        crc2.lineTo(250, 400);
        crc2.moveTo(345, 380);
        crc2.lineTo(255, 380);
        crc2.moveTo(350, 360);
        crc2.strokeStyle = "black";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
        //Loch
        crc2.beginPath();
        crc2.arc(300, 420, 10, 0, 2 * Math.PI);
        crc2.fillStyle = "black";
        crc2.fill();
        crc2.closePath();
        //Ast
        crc2.beginPath();
        crc2.fillStyle = "RGB(94,47,0)";
        crc2.fillRect(250, 440, 100, 10);
        crc2.closePath();

        crc2.save();
    }

    // red Flower
    function drawFlowerRed(): void {
        let horizon: number = crc2.canvas.height * golden;
        let posX: number = Math.floor(Math.random() * crc2.canvas.width);
        let posY: number = horizon + Math.floor(Math.random() * 250);

        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        crc2.fillRect(posX, posY, 4, 70);

        //leaf
        crc2.moveTo(posX, posY + 50);
        crc2.stroke();
        crc2.fill();
        crc2.save();

        //color leafs
        crc2.translate(posX, posY);
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
        crc2.translate(posX, posY);
        crc2.beginPath();
        crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.restore();
    }


    function drawFlowerYellow(): void {
        let horizon: number = crc2.canvas.height * golden;
        let posX: number = Math.floor(Math.random() * crc2.canvas.width);
        let posY: number = horizon + Math.floor(Math.random() * 250);

        //Stiel
        crc2.beginPath();
        crc2.strokeStyle = "darkgreen";
        crc2.fillStyle = "darkgreen";
        crc2.fillRect(posX, posY, 4, 70);
        crc2.moveTo(posX, posY + 50);
        crc2.stroke();
        crc2.fill();

        crc2.save();
        crc2.translate(posX, posY);
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
        moveTo(posX + 10, posY + 20);
        crc2.arc(posX, posY, 5, 0, 2 * Math.PI);
        crc2.fillStyle = "RGB(98,47,0";
        crc2.strokeStyle = "RGB(98,47,0";
        crc2.fill();
        crc2.stroke();
        crc2.restore();
    }
}