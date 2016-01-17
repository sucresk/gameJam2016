class GamePad extends egret.EventDispatcher
{
    private _stage:egret.Stage;
    private _type:string;
    private _startX:number;
    private _startY:number;
    private _endX:number;
    private _endY:number;
    private _lastX:number;
    private _lastY:number;
    
    public constructor(stage:egret.Stage, type:string)
    {
        super();
        this._stage = stage;
        this._type = type;
    }
    
    public init():void
    {
        this._stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    }
    
    private onTouchBegin(e:egret.TouchEvent):void
    {
        
        this._startX = e.stageX;
        this._startY = e.stageY;
        this._endX = this._startX;
        this._endY = this._startY;
        
        console.log("touch begin", this._startX, this._startY)
        //var evt0:GamePadEvent = new GamePadEvent("a");
        //var evt1:egret.Event = new egret.Event("a");
        //dispatchEvent(evt1);
        this._stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this._stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }
    
    private onTouchEnd(e:egret.TouchEvent):void
    {
        console.log("touch end")
        
        this._stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        this._stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    }
    private onTouchMove(e:egret.TouchEvent):void
    {
        this._lastX = this._endX;
        this._lastY = this._endY;
        this._endX = e.stageX;
        this._endY = e.stageY;
        
        var deltaX:number = this._endX - this._startX;
        var deltaY:number = this._endY - this._startY;
        console.log("move", deltaX, deltaY);
    }
    
    
}