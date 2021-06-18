namespace A_11 {

    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    export let crc2: CanvasRenderingContext2D;
    let golden: number = 0.62;
    let imgData: ImageData;
    let flowerArray: Flower [] = [];
    let moveables: Moveable[] = [];

    function handleLoad(_event:Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun(new Vector(850, 170));
        drawMountains(new Vector(0, horizon), 95, 250, "grey", "white");
        drawMountains(new Vector(0, horizon), 60, 170, "darkgrey", "lightgrey");
        drawTree(new Vector(150,400));
        createFlower();
        drawFlower();
        drawHome();
        
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBee(30);

        createCloud();
        window.setInterval(update, 20);

        nectarAmount();
        window.setInterval(nectarAmount, 200);
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

        function createFlower(): void {

            for (let i: number = 0; i < 10; i++) {
                let flower: Flower = new Flower();
                flowerArray.push(flower);  
            } 
            for (let i: number = 0; i < 10; i++) {
                let flower2: Flower = new Flower();
                flowerArray.push(flower2);  
            }
        }

        function drawFlower(): void {
            for (let flower of flowerArray) {
                let randomX: number = Math.floor(Math.random() * 1500);
                let randomY: number = Math.floor(Math.random() * 250);
                flower.draw(randomX + 50, randomY + 450)
            }
            for (let flower2 of flowerArray) {
                let randomX: number = Math.floor(Math.random() * 1500);
                let randomY: number = Math.floor(Math.random() * 250);
                flower2.drawTwo(randomX + 50, randomY + 450);
            }
        }

        function drawHome(): void {
            crc2.restore();
    
            crc2.beginPath();
            crc2.arc(300, 400, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "RGB(178,134,92)";
            crc2.fill();
            crc2.closePath();
           
            //Loch
            crc2.beginPath();
            crc2.arc(300, 425, 10, 0, 2 * Math.PI);
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

        function update(): void {
            //console.log("update");
            crc2.clearRect(0, 0, 1000, 750);
            crc2.putImageData(imgData, 0, 0);
    
            for (let moveable of moveables) {
                moveable.move(1/50);
                moveable.draw();
            }
        }  
   
    //Bees
    function createBee(_amount: number): void {
        for (let i: number = 0; i < 20; i++) {
            let bee: Moveable = new Bee();
            moveables.push(bee);
        }
    }

    //Clouds
function createCloud(): void {
    for(let i: number = 0; i < 1; i++) {
        let cloud: Moveable = new Cloud(1);
        moveables.push(cloud);
    }
}

    //Bar
    let i: number = 0;
    function nectarAmount(): void {
        if (i ==0) {
            i = 1;
            let bar = document.getElementById("bar");
            let width = 1;
            let percent = setInterval(frame, 150);
            function frame(): void {
                if(width >= 100) {
                    clearInterval(percent);
                    i = 100;
                } else {
                    width++;
                    bar.style.width = width + "%";
                    bar.innerHTML = width + "%";
                }
            }
        }
    }

}//ende namespace