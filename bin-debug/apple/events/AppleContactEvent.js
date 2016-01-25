var AppleContactEvent = (function (_super) {
    __extends(AppleContactEvent, _super);
    function AppleContactEvent(type, data, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        _super.call(this, type, bubbles, cancelable, data);
    }
    var d = __define,c=AppleContactEvent,p=c.prototype;
    d(p, "contact"
        ,function () {
            return this.data;
        }
    );
    AppleContactEvent.START = "start";
    AppleContactEvent.END = "end";
    return AppleContactEvent;
})(egret.Event);
egret.registerClass(AppleContactEvent,'AppleContactEvent');
//# sourceMappingURL=AppleContactEvent.js.map