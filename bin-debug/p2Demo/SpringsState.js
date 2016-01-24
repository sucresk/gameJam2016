var SpringsState = (function (_super) {
    __extends(SpringsState, _super);
    function SpringsState() {
        _super.call(this);
    }
    var d = __define,c=SpringsState,p=c.prototype;
    p.init = function () {
        this.createGameScene();
    };
    p.createGameScene = function () {
        this.initWorld();
        this.createDebug();
    };
    p.initWorld = function () {
        var world = new p2.World({
            gravity: [0, -5]
        });
        this.world = world;
        world.solver.tolerance = 0.001;
        // Create ground
        var planeShape = new p2.Plane();
        var plane = new p2.Body({
            position: [0, -2]
        });
        plane.addShape(planeShape);
        world.addBody(plane);
        // Create connected boxes
        var box1 = new p2.Body({
            mass: 1,
            position: [-3, 3],
        });
        var box2 = new p2.Body({
            mass: 1,
            position: [-4, 3],
            angularVelocity: -2
        });
        box1.addShape(new p2.Box({ width: 1, height: 1 }));
        box2.addShape(new p2.Box({ width: 1, height: 1 }));
        world.addBody(box1);
        world.addBody(box2);
        var s = new p2.LinearSpring(box1, box2, {
            restLength: 1,
            stiffness: 10,
            localAnchorA: [0, 0.5],
            localAnchorB: [0, 0.5],
        });
        world.addSpring(s);
        // Create capsule
        var capsuleShape = new p2.Capsule({ length: 1, radius: 0.25 });
        var capsuleBody = new p2.Body({
            mass: 1,
            position: [4, 1]
        });
        capsuleBody.addShape(capsuleShape);
        world.addBody(capsuleBody);
        var s = new p2.LinearSpring(capsuleBody, plane, {
            restLength: 1,
            stiffness: 10,
            localAnchorA: [-capsuleShape.length / 2, 0],
            worldAnchorB: [4 - capsuleShape.length / 2, 2],
        });
        world.addSpring(s);
        // Create capsules connected with angular spring
        var capsuleShapeA = new p2.Capsule({ length: 1, radius: 0.2 });
        var capsuleShapeB = new p2.Capsule({ length: 1, radius: 0.2 });
        var capsuleBodyA = new p2.Body({
            mass: 1,
            position: [0, 0]
        });
        var capsuleBodyB = new p2.Body({
            mass: 1,
            position: [1, 0]
        });
        capsuleBodyA.addShape(capsuleShapeA);
        capsuleBodyB.addShape(capsuleShapeB);
        world.addBody(capsuleBodyA);
        world.addBody(capsuleBodyB);
        var rotationalSpring = new p2.RotationalSpring(capsuleBodyA, capsuleBodyB, {
            stiffness: 10,
            damping: 0.01
        });
        world.addSpring(rotationalSpring);
        var revolute = new p2.RevoluteConstraint(capsuleBodyA, capsuleBodyB, {
            localPivotA: [0.5, 0],
            localPivotB: [-0.5, 0]
        });
        world.addConstraint(revolute);
    };
    p.tick = function (advancedTime) {
        this.world.step(1 / 60);
        this.debugDraw.drawDebug();
    };
    p.createDebug = function () {
        //创建调试试图
        this.debugDraw = new p2DebugDraw(this.world);
        var sprite = new egret.Sprite();
        this.addChild(sprite);
        this.debugDraw.setSprite(sprite);
        this.debugDraw.setLineWidth(0.02);
        sprite.x = this.stage.stageWidth / 2;
        sprite.y = this.stage.stageHeight / 2;
        sprite.scaleX = 50;
        sprite.scaleY = -50;
        this.dragHelper = new DragHelper(this.stage, sprite, this.world);
    };
    return SpringsState;
})(State);
egret.registerClass(SpringsState,'SpringsState');
//# sourceMappingURL=SpringsState.js.map