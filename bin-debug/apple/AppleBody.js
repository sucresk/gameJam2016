var AppleBody = (function () {
    function AppleBody(type, position) {
        if (type === void 0) { type = AppleBody.DYNAMIC; }
        if (position === void 0) { position = new egret.Point(); }
        this.mass = 1;
        this.rotation = 0;
        this.type = type;
        switch (this.type) {
            case AppleBody.STATIC:
                this._isStatic = true;
                break;
            case AppleBody.DYNAMIC:
                this._isDynamic = true;
                break;
            case AppleBody.KINEMATIC:
                this._isKinematic = true;
                break;
        }
        this.position = position;
        this.velocity = new egret.Point();
        this._force = new egret.Point();
        this._acceleration = new egret.Point();
        this.shapes = [];
    }
    var d = __define,c=AppleBody,p=c.prototype;
    p.addShape = function (shape) {
        shape.body = this;
        this.shapes.push(shape);
    };
    p.step = function (passTime) {
        //vt = v0 + at
        this.velocity.x += this._acceleration.x * passTime;
        this.velocity.y += this._acceleration.y * passTime;
        //st = s0 + vt 
        this.position.x += this.velocity.x * passTime;
        this.position.y += this.velocity.y * passTime;
    };
    p.setVelocity = function (vx, vy) {
        this._force.x = vx;
        this._force.y = vy;
        this._acceleration.x = this._force.x / this.mass;
        this._acceleration.y = this._force.y / this.mass;
    };
    d(p, "bounds"
        ,function () {
            return null;
        }
    );
    d(p, "isSleeping"
        ,function () {
            return false;
        }
    );
    p.applyForce = function (force) {
        this._acceleration.x = force.x / this.mass;
        this._acceleration.y = force.y / this.mass;
    };
    p.applyImpulse = function (impulse) {
        //fs =mv;
    };
    p.isDynamic = function () {
        return this._isDynamic;
    };
    p.isKinematic = function () {
        return this._isKinematic;
    };
    p.isStatic = function () {
        return this._isStatic;
    };
    p.rotate = function (angle) {
    };
    p.onStartContact = function (bodyB) {
    };
    p.onStayContact = function (bodyB) {
    };
    p.onEndContact = function (bodyB) {
    };
    AppleBody.DYNAMIC = "dynamic";
    AppleBody.KINEMATIC = "kinematic";
    AppleBody.STATIC = "static";
    return AppleBody;
})();
egret.registerClass(AppleBody,'AppleBody');
//# sourceMappingURL=AppleBody.js.map