var A_10_2;
(function (A_10_2) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new A_10_2.Vector(500, 500);
            this.velocity = new A_10_2.Vector(500, 0);
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A_10_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A_10_2.crc2.canvas.height;
            if (this.position.x > A_10_2.crc2.canvas.height)
                this.position.x -= A_10_2.crc2.canvas.width;
            if (this.position.y > A_10_2.crc2.canvas.height)
                this.position.y -= A_10_2.crc2.canvas.height;
        };
        Moveable.prototype.draw = function () {
            //console.log("DrawMoveable");
        };
        return Moveable;
    }());
    A_10_2.Moveable = Moveable;
})(A_10_2 || (A_10_2 = {}));
//# sourceMappingURL=Moveable.js.map