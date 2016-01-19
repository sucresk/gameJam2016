var TestState = (function (_super) {
    __extends(TestState, _super);
    function TestState() {
        _super.call(this);
    }
    var d = __define,c=TestState,p=c.prototype;
    p.init = function () {
        this._text = new egret.TextField;
        this._text.text = "hello state";
        this._text.y = 100;
        this.addChild(this._text);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    };
    p.onEnd = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        console.log("first end");
        this.next("end");
    };
    p.tick = function (advancedTime) {
        this._text.text = "test state<" + advancedTime;
    };
    return TestState;
})(State);
egret.registerClass(TestState,'TestState');
//# sourceMappingURL=TestState.js.map