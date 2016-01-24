var BananaObject = (function () {
    function BananaObject(name, params) {
        if (params === void 0) { params = null; }
        this.kill = false;
        this.type = "classicObject";
        this._initialized = false;
        this.name = name;
        this._params = params;
        this.initialize();
    }
    var d = __define,c=BananaObject,p=c.prototype;
    p.initialize = function (poolObjectParams) {
        if (poolObjectParams === void 0) { poolObjectParams = null; }
        if (poolObjectParams)
            this._params = poolObjectParams;
        if (this._params)
            this.setParams(this, this._params);
        else
            this._initialized = true;
    };
    p.tick = function (advancedTime) {
    };
    p.destroy = function () {
        this._initialized = false;
    };
    p.setParams = function (object, params) {
        for (var param in params) {
            try {
                if (params[param] == "true")
                    object[param] = true;
                else if (params[param] == "false")
                    object[param] = false;
                else
                    object[param] = params[param];
            }
            catch (e) {
                if (!BananaObject.hideParamWarnings)
                    console.log("Warning: The parameter " + param + " does not exist on " + this);
            }
        }
        this._initialized = true;
    };
    BananaObject.hideParamWarnings = false;
    return BananaObject;
})();
egret.registerClass(BananaObject,'BananaObject');
//# sourceMappingURL=BananaObject.js.map