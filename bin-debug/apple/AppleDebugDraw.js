var AppleDebugDraw = (function (_super) {
    __extends(AppleDebugDraw, _super);
    function AppleDebugDraw(world) {
        _super.call(this);
        this._world = world;
    }
    var d = __define,c=AppleDebugDraw,p=c.prototype;
    p.tick = function (advancedTime) {
        this.graphics.clear();
        var bodies = this._world.bodies;
        for (var i = 0, len = bodies.length; i < len; i++) {
            this.drawBody(bodies[i]);
        }
    };
    p.drawBody = function (body) {
        for (var i = 0, len = body.shapes.length; i < len; i++) {
            this.drawShape(body.shapes[i]);
        }
    };
    p.drawShape = function (shape) {
        if (shape instanceof AppleRect) {
            this.drawRect(shape);
        }
    };
    p.drawRect = function (rect) {
        this.graphics.beginFill(0x0000ff, 0.5);
        this.graphics.drawRect(rect.x + rect.body.position.x, rect.y + rect.body.position.y, rect.width, rect.height);
        this.graphics.endFill();
    };
    p.drawCircle = function (circle) {
        this.graphics.beginFill(0x00ff00, 0.5);
        this.graphics.drawCircle(circle.body.position.x, circle.body.position.y, circle.radius);
        this.graphics.endFill();
    };
    return AppleDebugDraw;
})(egret.Sprite);
egret.registerClass(AppleDebugDraw,'AppleDebugDraw');
//# sourceMappingURL=AppleDebugDraw.js.map