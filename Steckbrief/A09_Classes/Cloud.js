var Blumenwiese;
(function (Blumenwiese) {
    var Cloud = /** @class */ (function () {
        function Cloud(_size, _position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Blumenwiese.Vector(50, 150);
            this.velocity = new Blumenwiese.Vector(120, 0);
            this.size = _size;
        }
        Cloud.prototype.move = function (_timeslice) {
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
        Cloud.prototype.draw = function () {
            var nParticles = 140;
            var radiusParticle = 40;
            var particle = new Path2D();
            var gradient = Blumenwiese.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Blumenwiese.crc2.save();
            Blumenwiese.crc2.translate(this.position.x, this.position.y);
            Blumenwiese.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                Blumenwiese.crc2.save();
                Blumenwiese.crc2.translate((Math.random() - 0.5) * this.size.x, -(Math.random() * this.size.y));
                Blumenwiese.crc2.fill(particle);
                Blumenwiese.crc2.restore();
            }
            Blumenwiese.crc2.restore();
        };
        return Cloud;
    }());
    Blumenwiese.Cloud = Cloud;
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Cloud.js.map