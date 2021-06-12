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
var A_10_2;
(function (A_10_2) {
    var Cloud = /** @class */ (function (_super) {
        __extends(Cloud, _super);
        function Cloud(_size, _position) {
            var _this = _super.call(this, _position) || this;
            if (_position)
                _this.position = _position;
            else
                _this.position = new A_10_2.Vector(50, 100);
            _this.velocity = new A_10_2.Vector(100, 0);
            _this.size = _size;
            return _this;
        }
        Cloud.prototype.draw = function () {
            var nParticles = 140;
            var radiusParticle = 40;
            var particle = new Path2D();
            var gradient = A_10_2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            A_10_2.crc2.save();
            A_10_2.crc2.translate(this.position.x, this.position.y);
            A_10_2.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                A_10_2.crc2.save();
                A_10_2.crc2.translate((Math.random() - 0.5) * this.position.x, -(Math.random() * this.position.y));
                A_10_2.crc2.fill(particle);
                A_10_2.crc2.restore();
            }
            A_10_2.crc2.restore();
        };
        return Cloud;
    }(A_10_2.Moveable));
    A_10_2.Cloud = Cloud;
})(A_10_2 || (A_10_2 = {}));
//# sourceMappingURL=Cloud.js.map