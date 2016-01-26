var AppleRect = (function (_super) {
    __extends(AppleRect, _super);
    function AppleRect(width, height) {
        this.width = width;
        this.height = height;
        _super.call(this);
        this.x = -this.width / 2;
        this.y = -this.height / 2;
    }
    var d = __define,c=AppleRect,p=c.prototype;
    p.overlap = function (shape) {
        var rect = shape;
        if (rect) {
            var disX = this.width / 2 + rect.width / 2;
            var disY = this.height / 2 + rect.height / 2;
            var overX = Math.abs(this.body.position.x + this.x - rect.body.position.x - rect.x);
            var overY = Math.abs(this.body.position.y + this.y - rect.body.position.y - rect.y);
            if (overX < disX) {
                this.overPoint.x = disX - overX;
            }
            else {
                this.overPoint.x = 0;
            }
            if (overY < disY) {
                this.overPoint.y = disY - overY;
            }
            else {
                this.overPoint.y = 0;
            }
        }
        return this.overPoint;
    };
    return AppleRect;
})(AppleShape);
egret.registerClass(AppleRect,'AppleRect');
//# sourceMappingURL=AppleRect.js.map