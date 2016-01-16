class GamePad extends egret.EventDispatcher
{
    private _stage:egret.Stage;
    private _type:string;
    
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
    
    private onTouchBegin():void
    {
        console.log("a")
    }
    
    
}