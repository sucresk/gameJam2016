var AppleWorld = (function (_super) {
    __extends(AppleWorld, _super);
    function AppleWorld() {
        _super.call(this);
        this.gravity = new egret.Point(0, 0.0001);
        this.steps = 10;
        this._numBody = 0;
        this._bodies = [];
        this._contacts = [];
        this._contactPool = [];
    }
    var d = __define,c=AppleWorld,p=c.prototype;
    d(p, "bodies"
        ,function () {
            return this._bodies;
        }
    );
    p.add = function (body) {
        var index = this._bodies.indexOf(body);
        if (index == -1) {
            this._bodies.push(body);
            this._numBody++;
        }
    };
    p.remove = function (body) {
        var index = this._bodies.indexOf(body);
        if (index != -1) {
            this._bodies.splice(index, 1);
            this._numBody--;
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
            this._bodies[i].applyForce(this.gravity);
            this._bodies[i].step(passTime);
        }
    };
    p.solveContact = function () {
        for (var i = 0; i < this._numBody; i++) {
            for (var j = i + 1; j < this._numBody; j++) {
                this.solveBodyContact(this._bodies[i], this._bodies[j]);
            }
        }
    };
    p.solveBodyContact = function (bodyA, bodyB) {
        var overlap = this.checkBodyContact(bodyA, bodyB);
        var contact = this.findContact(bodyA, bodyB);
        if (overlap > 0) {
            if (contact == null) {
                bodyA.onStartContact(bodyB);
                bodyB.onStartContact(bodyA);
                contact = this.addContact(bodyA, bodyB);
                this.dispatchEvent(new AppleContactEvent(AppleContactEvent.START, contact));
            }
            else {
                bodyA.onStayContact(bodyB);
                bodyB.onStayContact(bodyA);
            }
        }
        else if (contact != null) {
            bodyA.onEndContact(bodyB);
            bodyB.onEndContact(bodyA);
            this.removeContact(contact);
            this.dispatchEvent(new AppleContactEvent(AppleContactEvent.END, contact));
        }
    };
    p.addContact = function (bodyA, bodyB) {
        var contact = this.getContact();
        contact.bodyA = bodyA;
        contact.bodyB = bodyB;
        this._contacts.push(contact);
        return contact;
    };
    p.removeContact = function (contact) {
        var index = this._contacts.indexOf(contact);
        if (index >= 0) {
            this._contacts.splice(index, 1);
        }
        this._contactPool.push(contact);
    };
    p.findContact = function (bodyA, bodyB) {
        var contact;
        for (var i = 0, len = this._contacts.length; i < len; i++) {
            contact = this._contacts[i];
            if (contact.bodyA == bodyA && contact.bodyB == bodyB
                || contact.bodyA == bodyB && contact.bodyB == bodyA) {
                return contact;
            }
        }
        return null;
    };
    p.checkBodyContact = function (bodyA, bodyB) {
        for (var i = 0, len = bodyA.shapes.length; i < len; i++) {
            for (var j = 0, jLen = bodyB.shapes.length; j < jLen; j++) {
                var contact = this.checkShapeContact(bodyA.shapes[i], bodyB.shapes[i]);
                if (contact > 0) {
                    return contact;
                }
            }
        }
        return 0;
    };
    p.checkShapeContact = function (shapeA, shapeB) {
        return shapeA.overlap(shapeB);
    };
    p.getContact = function () {
        if (this._contactPool.length > 0) {
            return this._contactPool.pop();
        }
        return new AppleContact(null, null);
    };
    return AppleWorld;
})(egret.EventDispatcher);
egret.registerClass(AppleWorld,'AppleWorld');
//# sourceMappingURL=AppleWorld.js.map