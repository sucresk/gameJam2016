var EndState = (function (_super) {
    __extends(EndState, _super);
    function EndState() {
        _super.call(this);
    }
    var d = __define,c=EndState,p=c.prototype;
    p.init = function () {
        console.log("end start");
        var t = new egret.TextField();
        t.text = "end state";
        this.addChild(t);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    };
    p.onEnd = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        console.log("end");
        this.next("first");
    };
    return EndState;
})(State);
egret.registerClass(EndState,'EndState');
//# sourceMappingURL=EndState.js.map