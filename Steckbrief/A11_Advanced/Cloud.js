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
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_size, _position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new A_11.Vector(50, 80);
            _this.velocity = new A_11.Vector(100, 0);
            _this.size = _size;
            return _this;
        }
        Cloud.prototype.draw = function () {
            var grd = A_11.crc2.createLinearGradient(0, 0, 0, 250); //create Gradient
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#A9E2F3");
            A_11.crc2.save();
            A_11.crc2.translate(this.position.x, this.position.y);
            A_11.crc2.scale(this.size, this.size);
            A_11.crc2.beginPath();
            A_11.crc2.arc(this.position.x, this.position.y, 60, Math.PI * 0.5, Math.PI * 1.5);
            A_11.crc2.arc(this.position.x + 70, this.position.y - 60, 70, Math.PI * 1, Math.PI * 1.85);
            A_11.crc2.arc(this.position.x + 152, this.position.y - 45, 50, Math.PI * 1.37, Math.PI * 1.91);
            A_11.crc2.arc(this.position.x + 200, this.position.y, 60, Math.PI * 1.5, Math.PI * 0.5);
            A_11.crc2.moveTo(this.position.x + 200, this.position.y + 60);
            A_11.crc2.lineTo(this.position.x, this.position.y + 60);
            //crc2.strokeStyle = "white";
            A_11.crc2.stroke();
            A_11.crc2.fillStyle = grd;
            A_11.crc2.fill();
            A_11.crc2.restore();
        };
        return Cloud;
    }(A_11.Moveable));
    A_11.Cloud = Cloud;
})(A_11 || (A_11 = {}));
//# sourceMappingURL=Cloud.js.map