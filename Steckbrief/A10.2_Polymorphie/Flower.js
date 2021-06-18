var A_10_2;
(function (A_10_2) {
    var Flower = /** @class */ (function () {
        function Flower(_position) {
            //leer
        }
        //red Flowers
        Flower.prototype.draw = function (_x, _y) {
            for (var i = 0; i < 10; i++) {
                //Stiel
                A_10_2.crc2.beginPath();
                A_10_2.crc2.strokeStyle = "darkgreen";
                A_10_2.crc2.fillStyle = "darkgreen";
                A_10_2.crc2.fillRect(_x, _y, 4, 70);
                //leaf
                A_10_2.crc2.moveTo(_x, _y + 50);
                A_10_2.crc2.stroke();
                A_10_2.crc2.fill();
                A_10_2.crc2.save();
                //color leafs
                A_10_2.crc2.translate(_x, _y);
                for (var i_1 = 0; i_1 < 15; i_1++) {
                    A_10_2.crc2.rotate(Math.PI * 2 / 5);
                    A_10_2.crc2.beginPath();
                    A_10_2.crc2.moveTo(10, 10);
                    A_10_2.crc2.lineTo(-7, -10);
                    A_10_2.crc2.bezierCurveTo(-10, -20, 10, -20, 10, -10);
                    A_10_2.crc2.closePath();
                    A_10_2.crc2.fillStyle = "red";
                    A_10_2.crc2.fill();
                }
                A_10_2.crc2.restore();
                A_10_2.crc2.save();
                A_10_2.crc2.translate(_x, _y);
                A_10_2.crc2.beginPath();
                A_10_2.crc2.arc(0, 0, 7, 0, 2 * Math.PI);
                A_10_2.crc2.closePath();
                A_10_2.crc2.fillStyle = "black";
                A_10_2.crc2.fill();
                A_10_2.crc2.restore();
            }
        };
        Flower.prototype.drawTwo = function (_x, _y) {
            //Stiel
            A_10_2.crc2.beginPath();
            A_10_2.crc2.strokeStyle = "darkgreen";
            A_10_2.crc2.fillStyle = "darkgreen";
            A_10_2.crc2.fillRect(_x, _y, 4, 70);
            A_10_2.crc2.moveTo(_x, _y + 50);
            A_10_2.crc2.stroke();
            A_10_2.crc2.fill();
            A_10_2.crc2.save();
            A_10_2.crc2.translate(_x, _y);
            for (var i = 80; i > 8; i -= 8) {
                A_10_2.crc2.rotate(45 * Math.PI / 20);
                A_10_2.crc2.beginPath();
                A_10_2.crc2.moveTo(10, 20);
                A_10_2.crc2.bezierCurveTo(-12, -25, 12, -25, 7, -10);
                A_10_2.crc2.fillStyle = "RGB(232,211,10";
                A_10_2.crc2.strokeStyle = "RGB(232,211,10";
                A_10_2.crc2.fill();
                A_10_2.crc2.stroke();
            }
            A_10_2.crc2.restore();
            //Farbe
            A_10_2.crc2.save();
            A_10_2.crc2.beginPath();
            moveTo(_x + 10, _y + 20);
            A_10_2.crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
            A_10_2.crc2.fillStyle = "RGB(98,47,0";
            A_10_2.crc2.strokeStyle = "RGB(98,47,0";
            A_10_2.crc2.fill();
            A_10_2.crc2.stroke();
            A_10_2.crc2.restore();
        };
        return Flower;
    }());
    A_10_2.Flower = Flower;
})(A_10_2 || (A_10_2 = {}));
//# sourceMappingURL=Flower.js.map