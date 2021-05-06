var Canvas;
(function (Canvas) {
    //Variablen: crc2, Random
    window.addEventListener("load", drawField);
    var crc2;
    //Funktion zur Erstelleung des Canvas 
    function drawField(_event) {
        var canvas = document.querySelector('canvas');
        crc2 = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawQuadrat({ x: 300, y: 90 });
        drawCyrcle({});
    }
    function drawQuadrat(_position) {
        for (var i = 0; i < 10; i++) {
            var positionX = crc2.canvas.width * Math.random();
            var positionY = crc2.canvas.height * Math.random();
            crc2.beginPath();
            crc2.rect(positionX, positionY, 100, 50);
            crc2.fillStyle = "yellow";
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
    }
})(Canvas || (Canvas = {}));
//# sourceMappingURL=Canvas.js.map