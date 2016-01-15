class EndState extends State{
    
    public constructor()
    {
        super();
    }
   
    public init():void
    {
        console.log("end start")
        var t:egret.TextField = new egret.TextField();
        t.text = "end state";
        this.addChild(t);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    }
    
    public onEnd(e:egret.TouchEvent):void
    {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        console.log("end");
        this.next("first");
    }
}