var Game = (function (_super) {
    __extends(Game, _super);
    function Game() {
        _super.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
    }
    var d = __define,c=Game,p=c.prototype;
    p.onAdded = function (e) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
        this.init();
    };
    p.init = function () {
        console.log("this is a new game!");
        var stateManager = new StateManager(this);
        stateManager.registerState("first", new TestState());
        stateManager.registerState("end", new EndState());
        stateManager.registerState("physics", new PhysicState());
        stateManager.registerState("buoyancy", new BuoyancyState());
        stateManager.setCurStateName("buoyancy");
        stateManager.startTick();
        console.log("aa");
        var pad = new GamePad(this.stage, "");
        pad.radius = 50;
        //pad.init();
        var padBg = new egret.Shape();
        padBg.graphics.beginFill(0xff0000, 0.5);
        padBg.graphics.drawCircle(0, 0, 50);
        var padCircle = new egret.Shape();
        padCircle.graphics.beginFill(0x00ff00, 0.5);
        padCircle.graphics.drawCircle(0, 0, 20);
        //this.addChild(padBg);
        //this.addChild(padCircle);
        pad.bg = padBg;
        pad.pad = padCircle;
    };
    return Game;
})(egret.DisplayObjectContainer);
egret.registerClass(Game,'Game');
//# sourceMappingURL=Game.js.map