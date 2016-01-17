var GamePad = (function (_super) {
    __extends(GamePad, _super);
    function GamePad(stage, type) {
        _super.call(this);
        this._stage = stage;
        this._type = type;
    }
    var d = __define,c=GamePad,p=c.prototype;
    p.init = function () {
        this._stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    };
    p.onTouchBegin = function (e) {
        this._startX = e.stageX;
        this._startY = e.stageY;
        this._endX = this._startX;
        this._endY = this._startY;
        console.log("touch begin", this._startX, this._startY);
        //var evt0:GamePadEvent = new GamePadEvent("a");
        var evt1 = new egret.Event("a");
        dispatchEvent(evt1);
        this._stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this._stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    p.onTouchEnd = function (e) {
        console.log("touch end");
        this._stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this._stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    p.onTouchMove = function (e) {
        this._lastX = this._endX;
        this._lastY = this._endY;
        this._endX = e.stageX;
        this._endY = e.stageY;
        var deltaX = this._endX - this._startX;
        var deltaY = this._endY - this._startY;
        console.log("move", deltaX, deltaY);
    };
    return GamePad;
})(egret.EventDispatcher);
egret.registerClass(GamePad,'GamePad');
//# sourceMappingURL=GamePad.js.map