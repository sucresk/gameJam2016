var AppleShape = (function () {
    function AppleShape() {
        this.overPoint = new egret.Point();
    }
    var d = __define,c=AppleShape,p=c.prototype;
    p.overlap = function (shape) {
        return this.overPoint;
    };
    return AppleShape;
})();
egret.registerClass(AppleShape,'AppleShape');
//# sourceMappingURL=AppleShape.js.map