var APhysicsEngine = (function (_super) {
    __extends(APhysicsEngine, _super);
    function APhysicsEngine(name, params) {
        if (params === void 0) { params = null; }
        _super.call(this, name, params);
        this._visible = false;
        this._group = 1;
    }
    var d = __define,c=APhysicsEngine,p=c.prototype;
    p.getBody = function () {
        return null;
    };
    d(p, "realDebugView"
        ,function () {
            return this._realDebugView;
        }
    );
    d(p, "view"
        ,function () {
            return this._view;
        }
        ,function (value) {
            this._view = value;
        }
    );
    d(p, "x"
        ,function () {
            return 0;
        }
    );
    d(p, "y"
        ,function () {
            return 0;
        }
    );
    d(p, "z"
        ,function () {
            return 0;
        }
    );
    d(p, "width"
        ,function () {
            return 0;
        }
    );
    d(p, "height"
        ,function () {
            return 0;
        }
    );
    d(p, "depth"
        ,function () {
            return 0;
        }
    );
    d(p, "velocity"
        ,function () {
            return null;
        }
    );
    d(p, "parallax"
        ,function () {
            return 1;
        }
    );
    d(p, "rotation"
        ,function () {
            return 0;
        }
    );
    d(p, "group"
        ,function () {
            return this._group;
        }
        ,function (value) {
            this._group = value;
        }
    );
    d(p, "visible"
        ,function () {
            return this._visible;
        }
        ,function (value) {
            this._visible = value;
        }
    );
    d(p, "animation"
        ,function () {
            return "";
        }
    );
    d(p, "inverted"
        ,function () {
            return false;
        }
    );
    d(p, "offsetX"
        ,function () {
            return 0;
        }
    );
    d(p, "offsetY"
        ,function () {
            return 0;
        }
    );
    d(p, "registration"
        ,function () {
            return "topLeft";
        }
    );
    return APhysicsEngine;
})(BananaObject);
egret.registerClass(APhysicsEngine,'APhysicsEngine');
//# sourceMappingURL=APhysicsEngine.js.map