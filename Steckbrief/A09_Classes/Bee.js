var Blumenwiese;
(function (Blumenwiese) {
    var Bee = /** @class */ (function () {
        function Bee(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Blumenwiese.Vector(300, 400);
            this.velocity = new Blumenwiese.Vector(50, 0);
            this.velocity.random(120, 20);
        }
        Bee.prototype.move = function (_timeslice) {
            var offset = new Blumenwiese.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Blumenwiese.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Blumenwiese.crc2.canvas.height;
            if (this.position.x > Blumenwiese.crc2.canvas.width)
                this.position.x -= Blumenwiese.crc2.canvas.width;
            if (this.position.y > Blumenwiese.crc2.canvas.height)
                this.position.y -= Blumenwiese.crc2.canvas.height;
        };
        Bee.prototype.draw = function () {
            console.log("Bee draw");
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            //körper
            Blumenwiese.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            Blumenwiese.crc2.fillStyle = "#FFCC33";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.closePath();
            //ssreifen
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.position.x, this.position.y + 10);
            Blumenwiese.crc2.lineTo(this.position.x, this.position.y - 10);
            Blumenwiese.crc2.strokeStyle = "black";
            Blumenwiese.crc2.lineWidth = 10;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.restore();
            //flügel
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            Blumenwiese.crc2.strokeStyle = "darkblue";
            Blumenwiese.crc2.fillStyle = "lightblue";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.lineWidth = 1;
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
            //flügel
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            Blumenwiese.crc2.strokeStyle = "darkblue";
            Blumenwiese.crc2.fillStyle = "lightblue";
            Blumenwiese.crc2.fill();
            Blumenwiese.crc2.lineWidth = 1;
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.beginPath();
            Blumenwiese.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            Blumenwiese.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            Blumenwiese.crc2.strokeStyle = "black";
            Blumenwiese.crc2.stroke();
            Blumenwiese.crc2.lineWidth = 2;
            Blumenwiese.crc2.closePath();
            Blumenwiese.crc2.restore();
        };
        return Bee;
    }());
    Blumenwiese.Bee = Bee;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Bee.js.map