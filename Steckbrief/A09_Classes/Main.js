var Blumenwiese;
(function (Blumenwiese) {
    //Thanks for the Help @Lisa
    var imageData;
    var cloudArray = [];
    var beeArray = [];
    //HandleLoad
    window.addEventListener("load", handleLoad);
    Blumenwiese.golden = 0.62;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Blumenwiese.crc2 = canvas.getContext("2d");
        var horizon = Blumenwiese.crc2.canvas.height * Blumenwiese.golden;
        var posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 850, y: 170 });
        createClouds();
        window.setInterval(moveCloud, 50);
        drawMountains(posMountains, 95, 250, "grey", "white");
        drawMountains(posMountains, 60, 170, "darkgrey", "lightgrey");
        drawTree({ x: 150, y: 400 });
        for (var i = 0; i < 10; i++) {
            drawFlowerRed();
            drawFlowerYellow();
        }
        drawHome();
        imageData = Blumenwiese.crc2.getImageData(0, 0, Blumenwiese.crc2.canvas.width, Blumenwiese.crc2.canvas.height);
        createBee();
        window.setInterval(moveBee, 20);
    }
    //Bees
    function createBee() {
        for (var i = 0; i < 10; i++) {
            var bee = new Blumenwiese.Bee(0.8);
            beeArray.push(bee);
        }
    }
    function moveBee() {
        for (var _i = 0, beeArray_1 = beeArray; _i < beeArray_1.length; _i++) {
            var bee = beeArray_1[_i];
            bee.move(1 / 40);
            bee.draw();
        }
    }
    //Clouds
    function createClouds() {
        for (var i = 0; i < 1; i++) {
            var cloud = new Blumenwiese.Cloud({ x: 350, y: 95 });
            cloudArray.push(cloud);
        }
    }
    function moveCloud() {
        Blumenwiese.crc2.clearRect(0, 0, Blumenwiese.crc2.canvas.width, Blumenwiese.crc2.canvas.height);
        Blumenwiese.crc2.putImageData(imageData, 0, 0);
        for (var _i = 0, cloudArray_1 = cloudArray; _i < cloudArray_1.length; _i++) {
            var cloud = cloudArray_1[_i];
            cloud.move(1 / 50);
            cloud.draw();
        }
    }
    //Background
    function drawBackground() {
        console.log("Background");
        var gradient = Blumenwiese.crc2.createLinearGradient(0, 0, 0, Blumenwiese.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(Blumenwiese.golden, "white");
        gradient.addColorStop(0.7, "HSL(100, 50%, 50%)");
        Blumenwiese.crc2.fillStyle = gradient;
        Blumenwiese.crc2.fillRect(0, 0, Blumenwiese.crc2.canvas.width, Blumenwiese.crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        var radius1 = 30;
        var radius2 = 150;
        var gradient = Blumenwiese.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradient.addColorStop(0, "HSLA(60, 80%, 60%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(_position.x, _position.y);
        Blumenwiese.crc2.fillStyle = gradient;
        Blumenwiese.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
    }
    function drawBush(_position, _size) {
        console.log("Bush", _position, _size);
        var particleNum = 100;
        var radiusParticle = 30;
        var particle = new Path2D();
        var gradient = Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0.3, "HSLA(117, 100%, 22%, 0.84)");
        gradient.addColorStop(1, "HSLA(117, 100%, 31%, 0.69)");
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(_position.x, _position.y);
        Blumenwiese.crc2.fillStyle = gradient;
        for (var draw = 0; draw < particleNum; draw++) {
            Blumenwiese.crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            Blumenwiese.crc2.translate(x, y);
            Blumenwiese.crc2.fill(particle);
            Blumenwiese.crc2.restore();
        }
        Blumenwiese.crc2.fill(particle);
    }
    //Moutains
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        var stepMin = 20;
        var stepMax = 100;
        var x = 0;
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(_position.x, _position.y);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(0, 0);
        Blumenwiese.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            Blumenwiese.crc2.lineTo(x, y);
        } while (x < Blumenwiese.crc2.canvas.width);
        Blumenwiese.crc2.lineTo(x, 0);
        Blumenwiese.crc2.closePath();
        var gradient = Blumenwiese.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0.1, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Blumenwiese.crc2.fillStyle = gradient;
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
    }
    //Tree
    function drawTree(_position) {
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.rect(_position.x + 200, _position.y - 20, 40, 250);
        Blumenwiese.crc2.fillStyle = "RGB(94,47,0)";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(_position.x + 210, _position.y + 30);
        Blumenwiese.crc2.lineWidth = 10;
        Blumenwiese.crc2.fillStyle = "RGB(94,47,0)";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.strokeStyle = "RGB(94,47,0)";
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.fillStyle = "#487047";
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(_position.x + 150, _position.y - 100, 50, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(_position.x + 200, _position.y - 50, 60, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        //unten-rechts
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(_position.x + 250, _position.y - 60, 60, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        //oben
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        //oben-rechts
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(_position.x + 270, _position.y - 105, 50, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(_position.x + 200, _position.y - 100, 40, 0, 2 * Math.PI);
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
    }
    //Bienenwaben inspiriert von @Martin 
    function drawHome() {
        Blumenwiese.crc2.restore();
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        Blumenwiese.crc2.fillStyle = "RGB(178,134,92)";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        //
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.moveTo(345, 420);
        Blumenwiese.crc2.lineTo(255, 420);
        Blumenwiese.crc2.moveTo(350, 400);
        Blumenwiese.crc2.lineTo(250, 400);
        Blumenwiese.crc2.moveTo(345, 380);
        Blumenwiese.crc2.lineTo(255, 380);
        Blumenwiese.crc2.moveTo(350, 360);
        Blumenwiese.crc2.strokeStyle = "black";
        Blumenwiese.crc2.lineWidth = 2;
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.closePath();
        //Loch
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(300, 420, 10, 0, 2 * Math.PI);
        Blumenwiese.crc2.fillStyle = "black";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.closePath();
        //Ast
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.fillStyle = "RGB(94,47,0)";
        Blumenwiese.crc2.fillRect(250, 440, 100, 10);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.save();
    }
    // red Flower
    function drawFlowerRed() {
        var horizon = Blumenwiese.crc2.canvas.height * Blumenwiese.golden;
        var posX = Math.floor(Math.random() * Blumenwiese.crc2.canvas.width);
        var posY = horizon + Math.floor(Math.random() * 250);
        //Stiel
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.strokeStyle = "darkgreen";
        Blumenwiese.crc2.fillStyle = "darkgreen";
        Blumenwiese.crc2.fillRect(posX, posY, 4, 70);
        //leaf
        Blumenwiese.crc2.moveTo(posX, posY + 50);
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.save();
        //color leafs
        Blumenwiese.crc2.translate(posX, posY);
        for (var i = 0; i < 15; i++) {
            Blumenwiese.crc2.rotate(Math.PI * 2 / 5);
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(10, 10);
            Blumenwiese.crc2.lineTo(-7, -10);
            Blumenwiese.crc2.bezierCurveTo(-10, -20, 10, -20, 10, -10);
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.fillStyle = "red";
            Blumenwiese.crc2.fill();
        }
        Blumenwiese.crc2.restore();
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(posX, posY);
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
        Blumenwiese.crc2.closePath();
        Blumenwiese.crc2.fillStyle = "black";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.restore();
    }
    function drawFlowerYellow() {
        var horizon = Blumenwiese.crc2.canvas.height * Blumenwiese.golden;
        var posX = Math.floor(Math.random() * Blumenwiese.crc2.canvas.width);
        var posY = horizon + Math.floor(Math.random() * 250);
        //Stiel
        Blumenwiese.crc2.beginPath();
        Blumenwiese.crc2.strokeStyle = "darkgreen";
        Blumenwiese.crc2.fillStyle = "darkgreen";
        Blumenwiese.crc2.fillRect(posX, posY, 4, 70);
        Blumenwiese.crc2.moveTo(posX, posY + 50);
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.translate(posX, posY);
        for (var i = 80; i > 8; i -= 8) {
            Blumenwiese.crc2.rotate(45 * Math.PI / 20);
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(10, 20);
            Blumenwiese.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
            Blumenwiese.crc2.fillStyle = "RGB(232,211,10";
            Blumenwiese.crc2.strokeStyle = "RGB(232,211,10";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.stroke();
        }
        Blumenwiese.crc2.restore();
        //Farbe
        Blumenwiese.crc2.save();
        Blumenwiese.crc2.beginPath();
        moveTo(posX + 10, posY + 20);
        Blumenwiese.crc2.arc(posX, posY, 5, 0, 2 * Math.PI);
        Blumenwiese.crc2.fillStyle = "RGB(98,47,0";
        Blumenwiese.crc2.strokeStyle = "RGB(98,47,0";
        Blumenwiese.crc2.fill();
        Blumenwiese.crc2.stroke();
        Blumenwiese.crc2.restore();
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Main.js.map