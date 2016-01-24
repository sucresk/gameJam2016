var APhysicsObject = (function (_super) {
    __extends(APhysicsObject, _super);
    function APhysicsObject(name, params) {
        if (params === void 0) { params = null; }
        _super.call(this, name, params);
        this._inverted = false;
        this._parallax = 1;
        this._animation = "";
        this._visible = true;
        this._x = 0;
        this._y = 0;
        this._z = 0;
        this._rotation = 0;
        this._radius = 0;
        this._group = 0;
        this._offsetX = 0;
        this._offsetY = 0;
        this._registration = "center";
    }
    var d = __define,c=APhysicsObject,p=c.prototype;
    p.getBody = function () {
        return null;
    };
    d(p, "view"
        ,function () {
            return this._view;
        }
        ,function (value) {
            this._view = value;
        }
    );
    d(p, "inverted"
        ,function () {
            return this._inverted;
        }
    );
    d(p, "animation"
        /**
         * Animations management works the same way than label whether it uses MovieClip, SpriteSheet or whatever.
         */
        ,function () {
            return this._animation;
        }
    );
    d(p, "visible"
        /**
         * You can easily change if an object is visible or not. It hasn't any impact on physics computation.
         */
        ,function () {
            return this._visible;
        }
        ,function (value) {
            this._visible = value;
        }
    );
    d(p, "parallax"
        ,function () {
            return this._parallax;
        }
        ,function (value) {
            this._parallax = value;
        }
    );
    d(p, "group"
        /**
         * The group is similar to a z-index sorting. Default is 0, 1 is over.
         */
        ,function () {
            return this._group;
        }
        ,function (value) {
            this._group = value;
        }
    );
    d(p, "offsetX"
        /**
         * offsetX allows to move graphics on x axis compared to their initial point.
         */
        ,function () {
            return this._offsetX;
        }
        ,function (value) {
            this._offsetX = value;
        }
    );
    d(p, "offsetY"
        /**
         * offsetY allows to move graphics on y axis compared to their initial point.
         */
        ,function () {
            return this._offsetY;
        }
        ,function (value) {
            this._offsetY = value;
        }
    );
    d(p, "registration"
        /**
         * Flash registration point is topLeft, whereas physics engine use mostly center.
         * You can change the registration point thanks to this property.
         */
        ,function () {
            return this._registration;
        }
        ,function (value) {
            this._registration = value;
        }
    );
    APhysicsObject.CENTER = "conter";
    APhysicsObject.TOPLEFT = "topLeft";
    return APhysicsObject;
})(BananaObject);
egret.registerClass(APhysicsObject,'APhysicsObject');
//# sourceMappingURL=APhysicsObject.js.map