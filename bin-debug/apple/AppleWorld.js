var AppleWorld = (function (_super) {
    __extends(AppleWorld, _super);
    function AppleWorld() {
        _super.call(this);
        this.steps = 10;
        this._bodies = [];
        this._contacts = [];
    }
    var d = __define,c=AppleWorld,p=c.prototype;
    p.add = function (body) {
        var index = this._bodies.indexOf(body);
        if (index == -1) {
            this._bodies.push(body);
        }
    };
    p.remove = function (body) {
        var index = this._bodies.indexOf(body);
        if (index != -1) {
            this._bodies.splice(index, 1);
        }
    };
    p.tick = function (advancedTime) {
        var passTime = advancedTime / this.steps;
        for (var i = 0; i < this.steps; i++) {
            this.step(passTime);
        }
        this.solveContact();
    };
    p.step = function (passTime) {
        for (var i = 0; i < this._numBody; i++) {
            this._bodies[i].step(passTime);
        }
    };
    p.solveContact = function () {
    };
    return AppleWorld;
})(egret.EventDispatcher);
egret.registerClass(AppleWorld,'AppleWorld');
//# sourceMappingURL=AppleWorld.js.map