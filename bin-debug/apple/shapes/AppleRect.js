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
            var disX = Math.abs(this.body.position.x + this.x - rect.body.position.x - rect.x) - this.width - rect.width;
            var disY = Math.abs(this.body.position.y + this.y - rect.body.position.y - rect.y) - this.height - rect.height;
            if (disX < 0 && disY < 0) {
                return -(disX + disY) / 2;
            }
            else if (disX < 0) {
                return -disX;
            }
            else if (disY < 0) {
                return -disY;
            }
            return 0;
        }
        return 0;
    };
    return AppleRect;
})(AppleShape);
egret.registerClass(AppleRect,'AppleRect');
//# sourceMappingURL=AppleRect.js.map