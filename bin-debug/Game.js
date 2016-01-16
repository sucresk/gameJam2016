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
        stateManager.setCurStateName("first");
        console.log("aa");
        var pad = new GamePad(this.stage, "");
        pad.init();
    };
    return Game;
})(egret.DisplayObjectContainer);
egret.registerClass(Game,'Game');
//# sourceMappingURL=Game.js.map