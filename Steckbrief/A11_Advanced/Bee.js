var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A_11;
(function (A_11) {
    var Bee = /** @class */ (function (_super) {
        __extends(Bee, _super);
        function Bee(_position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new A_11.Vector(290, 430);
            _this.velocity = new A_11.Vector(1000, 0);
            _this.velocity = A_11.Vector.random(120, 30);
            return _this;
        }
        Bee.prototype.draw = function () {
            A_11.crc2.save();
            A_11.crc2.beginPath();
            //Körper
            A_11.crc2.arc(this.position.x, this.position.y, 10, 0, 2 * Math.PI);
            A_11.crc2.fillStyle = "#FFCC33";
            A_11.crc2.fill();
            A_11.crc2.closePath();
            //Streifen
            A_11.crc2.save();
            A_11.crc2.beginPath();
            A_11.crc2.moveTo(this.position.x, this.position.y + 10);
            A_11.crc2.lineTo(this.position.x, this.position.y - 10);
            A_11.crc2.strokeStyle = "black";
            A_11.crc2.lineWidth = 10;
            A_11.crc2.stroke();
            A_11.crc2.closePath();
            A_11.crc2.restore();
            //Flügel
            A_11.crc2.save();
            A_11.crc2.beginPath();
            A_11.crc2.arc(this.position.x - 2, this.position.y - 9, 5, 0, 2 * Math.PI);
            A_11.crc2.strokeStyle = "darkblue";
            A_11.crc2.fillStyle = "lightblue";
            A_11.crc2.fill();
            A_11.crc2.closePath();
            A_11.crc2.lineWidth = 1;
            A_11.crc2.stroke();
            A_11.crc2.restore();
            //Flügel
            A_11.crc2.save();
            A_11.crc2.beginPath();
            A_11.crc2.arc(this.position.x + 2, this.position.y - 4, 5, 0, 2 * Math.PI);
            A_11.crc2.strokeStyle = "darkblue";
            A_11.crc2.fillStyle = "lightblue";
            A_11.crc2.fill();
            A_11.crc2.lineWidth = 1;
            A_11.crc2.closePath();
            A_11.crc2.stroke();
            A_11.crc2.restore();
            //fühler oder stachel, liegt im auge des Betrachters
            A_11.crc2.save();
            A_11.crc2.beginPath();
            A_11.crc2.moveTo(this.position.x - 8, this.position.y - 2);
            A_11.crc2.lineTo(this.position.x - 15, this.position.y - 5);
            A_11.crc2.strokeStyle = "black";
            A_11.crc2.stroke();
            A_11.crc2.lineWidth = 2;
            A_11.crc2.closePath();
            A_11.crc2.restore();
        };
        return Bee;
    }(A_11.Moveable));
    A_11.Bee = Bee;
})(A_11 || (A_11 = {}));
//# sourceMappingURL=Bee.js.map