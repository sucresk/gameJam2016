var AppleState = (function (_super) {
    __extends(AppleState, _super);
    function AppleState() {
        _super.call(this);
    }
    var d = __define,c=AppleState,p=c.prototype;
    p.init = function () {
        this._world = new AppleWorld();
        this._debugDraw = new AppleDebugDraw(this._world);
        var box0 = new AppleBody();
        box0.mass = 1;
        box0.velocity.x = 0.1;
        box0.position.x = 200;
        box0.position.y = 200;
        box0.addShape(new AppleRect(100, 100));
        var box1 = new AppleBody();
        box1.mass = 1;
        box1.addShape(new AppleRect(100, 100));
        box1.position.x = 400;
        box1.position.y = 200;
        this._world.add(box0);
        this._world.add(box1);
        this.addChild(this._debugDraw);
    };
    p.tick = function (advancedTime) {
        this._world.tick(advancedTime);
        this._debugDraw.tick(advancedTime);
    };
    return AppleState;
})(State);
egret.registerClass(AppleState,'AppleState');
//# sourceMappingURL=AppleState.js.map