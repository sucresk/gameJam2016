class TestState extends State
{
    private _text:egret.TextField;
    
    public constructor()
    {
        super();
    }
    
    public init():void
    {
        this._text = new egret.TextField;
        this._text.text = "hello state";
        this._text.y = 100;
        this.addChild(this._text);
        
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    }
    
    public onEnd(e:egret.TouchEvent):void
    {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        console.log("first end");
        this.next("end");
    }
    
    public tick(advancedTime:number):void
    {
        this._text.text = "test state<" + advancedTime;
    }
    
}