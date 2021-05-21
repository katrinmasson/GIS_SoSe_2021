var blumenlandschaft;
(function (blumenlandschaft) {
    //Variablen: crc2, Random
    window.addEventListener("load", handleLoad);
    var crc2;
    var golden = 0.42;
    //Funktion zur Erstelleung des Canvas 
    function handleLoad(_event) {
        var canvas = document.querySelector('canvas');
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        var horizon = crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 190, y: 140 });
        drawCloud({ x: 500, y: 125 }, { x: 300, y: 40 });
        drawMountain({ x: -500, y: horizon }, 75, 240, "grey", "white");
        drawMountain({ x: -500, y: horizon }, 50, 170, "black", "lightgrey");
        drawBush({ x: 50, y: 300 }, { x: 100, y: 50 });
        drawFlowerRed(500, -200);
        drawFlowerPink(500, -200);
        drawFlowerPurple(500, -200);
    }
    function drawBackground() {
        console.log("Background");
        var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        var radius1 = 30;
        var radius2 = 150;
        var gradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        var particleNum = 60;
        var radiusParticle = 30;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var draw = 0; draw < particleNum; draw++) {
            crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.fill(particle);
    }
    function drawMountain(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountain");
        var stepMin = 20;
        var stepMax = 70;
        var x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        var gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawBush(_position, _size) {
        console.log("Bush", _position, _size);
        var particleNum = 100;
        var radiusParticle = 30;
        var particle = new Path2D();
        var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0.3, "HSLA(117, 100%, 22%, 0.84)");
        gradient.addColorStop(1, "HSLA(117, 100%, 31%, 0.69)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (var draw = 0; draw < particleNum; draw++) {
            crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.fill(particle);
    }
    function drawFlowerRed(_x, _y) {
        for (var flowers = 0; flowers < 10; flowers++) {
            var x = -240 * Math.random();
            var y = 100 * Math.random();
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
            for (var flowerPetals = 0; flowerPetals < 15; flowerPetals++) {
                crc2.rotate(Math.PI * 2 / 5);
                //Blütenfarbe
                var gradient = crc2.createLinearGradient(0, 0, 0, -40);
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
    function drawFlowerPink(_x, _y) {
        for (var flowers = 0; flowers < 8; flowers++) {
            var x = 200 * Math.random();
            var y = 80 * Math.random();
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
            for (var flowerPetals = 0; flowerPetals < 15; flowerPetals++) {
                crc2.rotate(Math.PI * 2 / 5);
                //Blütenfarbe
                var gradient = crc2.createLinearGradient(0, 0, 0, -40);
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
    function drawFlowerPurple(_x, _y) {
        for (var flowers = 0; flowers < 8; flowers++) {
            var x = 200 * Math.random();
            var y = 80 * Math.random();
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
            for (var flowerPetals = 0; flowerPetals < 15; flowerPetals++) {
                crc2.rotate(Math.PI * 2 / 5);
                //Blütenfarbe
                var gradient = crc2.createLinearGradient(0, 0, 0, -40);
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
})(blumenlandschaft || (blumenlandschaft = {}));
//# sourceMappingURL=Blumenlandschaft.js.map