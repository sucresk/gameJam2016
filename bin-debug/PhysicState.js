var PhysicState = (function (_super) {
    __extends(PhysicState, _super);
    function PhysicState() {
        _super.call(this);
        this.types = ["box", "circle", "capsule", "line", "particle"];
        this.createWorld();
        this.createGround();
        this.createBodies();
        this.createDebug();
    }
    var d = __define,c=PhysicState,p=c.prototype;
    p.init = function () {
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.addOneBox, this);
    };
    p.tick = function (advancedTime) {
        this.world.step(60 / 1000);
        this.debugDraw.drawDebug();
    };
    p.createWorld = function () {
        var wrd = new p2.World();
        wrd.sleepMode = p2.World.BODY_SLEEPING;
        wrd.gravity = [0, 10];
        this.world = wrd;
    };
    p.createGround = function () {
        var stageHeight = egret.MainContext.instance.stage.stageHeight;
        var groundShape = new p2.Plane();
        var groundBody = new p2.Body();
        groundBody.position[1] = stageHeight - 100;
        groundBody.angle = Math.PI;
        groundBody.addShape(groundShape);
        this.world.addBody(groundBody);
    };
    p.createBodies = function () {
        //var boxShape: p2.Shape = new p2.Rectangle(100, 50);
        var boxShape = new p2.Box({ width: 100, height: 50 });
        var boxBody = new p2.Body({ mass: 1, position: [200, 200] });
        boxBody.addShape(boxShape);
        this.world.addBody(boxBody);
        //var boxShape: p2.Shape = new p2.Rectangle(50, 50);
        var boxShape = new p2.Box({ width: 50, height: 50 });
        var boxBody = new p2.Body({ mass: 1, position: [200, 180], angularVelocity: 1 });
        boxBody.addShape(boxShape);
        this.world.addBody(boxBody);
    };
    p.createDebug = function () {
        //创建调试试图
        this.debugDraw = new p2DebugDraw(this.world);
        var sprite = new egret.Sprite();
        this.addChild(sprite);
        this.debugDraw.setSprite(sprite);
    };
    p.addOneBox = function (e) {
        var positionX = Math.floor(e.stageX);
        var positionY = Math.floor(e.stageY);
        var shape;
        var body = new p2.Body({ mass: 1, position: [positionX, positionY], angularVelocity: 1, collisionResponse: true });
        var shapeType = this.types[Math.floor((Math.random() * this.types.length))];
        //shapeType = "particle";
        switch (shapeType) {
            case "box":
                //shape = new p2.Rectangle(Math.random() * 150 + 50, 100);
                shape = new p2.Box({ width: Math.random() * 150 + 50, height: 100 });
                break;
            case "circle":
                //shape = new p2.Circle(50);
                shape = new p2.Circle({ radius: 50 });
                break;
            case "capsule":
                //shape = new p2.Capsule(50, 10);
                shape = new p2.Capsule({ length: 50, radius: 10 });
                break;
            case "line":
                //shape = new p2.Line(150);
                shape = new p2.Line({ length: 150 });
                break;
            case "particle":
                shape = new p2.Particle();
                break;
        }
        body.addShape(shape);
        this.world.addBody(body);
    };
    return PhysicState;
})(State);
egret.registerClass(PhysicState,'PhysicState');
//# sourceMappingURL=PhysicState.js.map