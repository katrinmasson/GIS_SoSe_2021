var A_11;
(function (A_11) {
    window.addEventListener("load", handleLoad);
    var golden = 0.62;
    var imgData;
    var flowerArray = [];
    var moveables = [];
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        A_11.crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var horizon = A_11.crc2.canvas.height * golden;
        drawBackground();
        drawSun(new A_11.Vector(850, 170));
        drawMountains(new A_11.Vector(0, horizon), 95, 250, "grey", "white");
        drawMountains(new A_11.Vector(0, horizon), 60, 170, "darkgrey", "lightgrey");
        drawTree(new A_11.Vector(150, 400));
        createFlower();
        drawFlower();
        drawHome();
        imgData = A_11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        createBee(30);
        createCloud();
        window.setInterval(update, 20);
        nectarAmount();
        window.setInterval(nectarAmount, 200);
    }
    //Background
    function drawBackground() {
        console.log("Background");
        var gradient = A_11.crc2.createLinearGradient(0, 0, 0, A_11.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(0.7, "HSL(100, 50%, 50%)");
        A_11.crc2.fillStyle = gradient;
        A_11.crc2.fillRect(0, 0, A_11.crc2.canvas.width, A_11.crc2.canvas.height);
    }
    //Sun
    function drawSun(_position) {
        console.log("Sun", _position);
        var radius1 = 30;
        var radius2 = 150;
        var gradient = A_11.crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradient.addColorStop(0, "HSLA(60, 80%, 60%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        A_11.crc2.save();
        A_11.crc2.translate(_position.x, _position.y);
        A_11.crc2.fillStyle = gradient;
        A_11.crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.restore();
    }
    //Moutains
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains", _position, _min, _max);
        var stepMin = 20;
        var stepMax = 100;
        var x = 0;
        A_11.crc2.save();
        A_11.crc2.translate(_position.x, _position.y);
        A_11.crc2.beginPath();
        A_11.crc2.moveTo(0, 0);
        A_11.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            A_11.crc2.lineTo(x, y);
        } while (x < A_11.crc2.canvas.width);
        A_11.crc2.lineTo(x, 0);
        A_11.crc2.closePath();
        var gradient = A_11.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0.1, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        A_11.crc2.fillStyle = gradient;
        A_11.crc2.fill();
        A_11.crc2.restore();
    }
    //Tree
    function drawTree(_position) {
        A_11.crc2.save();
        A_11.crc2.beginPath();
        A_11.crc2.rect(_position.x + 200, _position.y - 20, 40, 250);
        A_11.crc2.fillStyle = "RGB(94,47,0)";
        A_11.crc2.fill();
        A_11.crc2.closePath();
        A_11.crc2.beginPath();
        A_11.crc2.moveTo(_position.x + 210, _position.y + 30);
        A_11.crc2.lineWidth = 10;
        A_11.crc2.fillStyle = "RGB(94,47,0)";
        A_11.crc2.fill();
        A_11.crc2.strokeStyle = "RGB(94,47,0)";
        A_11.crc2.stroke();
        A_11.crc2.closePath();
        A_11.crc2.fillStyle = "#487047";
        A_11.crc2.beginPath();
        A_11.crc2.arc(_position.x + 150, _position.y - 100, 50, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.closePath();
        A_11.crc2.beginPath();
        A_11.crc2.arc(_position.x + 200, _position.y - 50, 60, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.closePath();
        //unten-rechts
        A_11.crc2.beginPath();
        A_11.crc2.arc(_position.x + 250, _position.y - 60, 60, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.closePath();
        //oben
        A_11.crc2.beginPath();
        A_11.crc2.arc(_position.x + 220, _position.y - 150, 50, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.closePath();
        //oben-rechts
        A_11.crc2.beginPath();
        A_11.crc2.arc(_position.x + 270, _position.y - 105, 50, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.closePath();
        A_11.crc2.beginPath();
        A_11.crc2.arc(_position.x + 200, _position.y - 100, 40, 0, 2 * Math.PI);
        A_11.crc2.fill();
        A_11.crc2.closePath();
    }
    function createFlower() {
        for (var i_1 = 0; i_1 < 10; i_1++) {
            var flower = new A_11.Flower();
            flowerArray.push(flower);
        }
        for (var i_2 = 0; i_2 < 10; i_2++) {
            var flower2 = new A_11.Flower();
            flowerArray.push(flower2);
        }
    }
    function drawFlower() {
        for (var _i = 0, flowerArray_1 = flowerArray; _i < flowerArray_1.length; _i++) {
            var flower = flowerArray_1[_i];
            var randomX = Math.floor(Math.random() * 1500);
            var randomY = Math.floor(Math.random() * 250);
            flower.draw(randomX + 50, randomY + 450);
        }
        for (var _a = 0, flowerArray_2 = flowerArray; _a < flowerArray_2.length; _a++) {
            var flower2 = flowerArray_2[_a];
            var randomX = Math.floor(Math.random() * 1500);
            var randomY = Math.floor(Math.random() * 250);
            flower2.drawTwo(randomX + 50, randomY + 450);
        }
    }
    function drawHome() {
        A_11.crc2.restore();
        A_11.crc2.beginPath();
        A_11.crc2.arc(300, 400, 50, 0, 2 * Math.PI);
        A_11.crc2.fillStyle = "RGB(178,134,92)";
        A_11.crc2.fill();
        A_11.crc2.closePath();
        //Loch
        A_11.crc2.beginPath();
        A_11.crc2.arc(300, 425, 10, 0, 2 * Math.PI);
        A_11.crc2.fillStyle = "black";
        A_11.crc2.fill();
        A_11.crc2.closePath();
        //Ast
        A_11.crc2.beginPath();
        A_11.crc2.fillStyle = "RGB(94,47,0)";
        A_11.crc2.fillRect(250, 440, 100, 10);
        A_11.crc2.closePath();
        A_11.crc2.save();
    }
    function update() {
        //console.log("update");
        A_11.crc2.clearRect(0, 0, 1000, 750);
        A_11.crc2.putImageData(imgData, 0, 0);
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    //Bees
    function createBee(_amount) {
        for (var i_3 = 0; i_3 < 20; i_3++) {
            var bee = new A_11.Bee();
            moveables.push(bee);
        }
    }
    //Clouds
    function createCloud() {
        for (var i_4 = 0; i_4 < 1; i_4++) {
            var cloud = new A_11.Cloud(1);
            moveables.push(cloud);
        }
    }
    //Bar
    var i = 0;
    function nectarAmount() {
        if (i == 0) {
            i = 1;
            var bar_1 = document.getElementById("bar");
            var width_1 = 1;
            var percent_1 = setInterval(frame, 150);
            function frame() {
                if (width_1 >= 100) {
                    clearInterval(percent_1);
                    i = 100;
                }
                else {
                    width_1++;
                    bar_1.style.width = width_1 + "%";
                    bar_1.innerHTML = width_1 + "%";
                }
            }
        }
    }
})(A_11 || (A_11 = {})); //ende namespace
//# sourceMappingURL=Main.js.map