var Canvas;
(function (Canvas) {
    //Variablen: crc2, Random
    window.addEventListener("load", drawField);
    var crc2;
    var crc3;
    //Funktion zur Erstelleung des Canvas 
    function drawField(_event) {
        var canvas = document.querySelector('canvas');
        crc2 = canvas.getContext("2d");
        crc3 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawQuadrat({ x: 300, y: 90 });
        drawKreis();
        drawDreieck();
    }
    function drawQuadrat(_position) {
        for (var i = 0; i < 10; i++) {
            var positionX = crc2.canvas.width * Math.random();
            var positionY = crc2.canvas.height * Math.random();
            var green = Math.floor(Math.random() * 350);
            var yellow = Math.floor(Math.random() * 350);
            var red = Math.floor(Math.random() * 350);
            crc2.beginPath();
            crc2.rect(positionX, positionY, 100, 50);
            crc2.fillStyle = "rgb( " + green + ", " + yellow + ", " + red + ")";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
    }
    function drawKreis() {
        for (var i = 0; i < 10; i++) {
            var green = Math.floor(Math.random() * 350);
            var yellow = Math.floor(Math.random() * 350);
            var red = Math.floor(Math.random() * 350);
            crc2.beginPath();
            crc2.arc(Math.floor(Math.random() * (500) + 1), (Math.random() * (500) + 1), (Math.random() * (90) + 1), 0, 5 + Math.PI);
            crc2.fillStyle = "rgb( " + green + ", " + yellow + ", " + red + ")";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
    }
    function drawDreieck() {
        for (var i = 0; i < 10; i++) {
            var green = Math.floor(Math.random() * 250);
            var yellow = Math.floor(Math.random() * 250);
            var red = Math.floor(Math.random() * 250);
            crc3.beginPath();
            crc3.moveTo(Math.floor(Math.random() * (1000) + 1), Math.floor(Math.random() * (300) + 1));
            crc3.lineTo(Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (300) + 1));
            crc3.lineTo(Math.floor(Math.random() * (300) + 1), Math.floor(Math.random() * (350) + 1));
            crc3.fillStyle = "rgb( " + green + ", " + yellow + ", " + red + ")";
            crc3.fill();
            crc3.closePath();
            crc3.stroke();
        }
    }
    var reloadButton = document.querySelector(".reload");
    reloadButton.addEventListener("click", function () {
        location.reload();
    });
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map