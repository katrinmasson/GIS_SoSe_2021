var A_11;
(function (A_11) {
    var Moveable = /** @class */ (function () {
        function Moveable(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new A_11.Vector(500, 0);
            this.velocity = new A_11.Vector(500, 500);
        }
        Moveable.prototype.move = function (_timeslice) {
            var offset = this.velocity.copy();
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += A_11.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += A_11.crc2.canvas.height;
            if (this.position.x > A_11.crc2.canvas.height)
                this.position.x -= A_11.crc2.canvas.width;
            if (this.position.y > A_11.crc2.canvas.height)
                this.position.y -= A_11.crc2.canvas.height;
        };
        Moveable.prototype.draw = function () {
            //console.log("DrawMoveable");
        };
        return Moveable;
    }());
    A_11.Moveable = Moveable;
})(A_11 || (A_11 = {}));
//# sourceMappingURL=Moveable.js.map