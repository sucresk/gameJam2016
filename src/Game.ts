class Game extends egret.DisplayObjectContainer
{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
    }
    
    private onAdded(e:egret.Event):void
    {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAdded, this);
        this.init();
    }
    private init():void
    {
        console.log("this is a new game!");
        
        var stateManager:StateManager = new StateManager(this);
        stateManager.registerState("first",new TestState());
        stateManager.registerState("end",new EndState());
        stateManager.registerState("physics",new PhysicState());
        stateManager.registerState("buoyancy",new BuoyancyState());
        stateManager.setCurStateName("buoyancy");
        stateManager.startTick();
        console.log("aa")
        var pad:GamePad = new GamePad(this.stage,"");
        pad.radius = 50;
        //pad.init();
        
        var padBg:egret.Shape = new egret.Shape();
        padBg.graphics.beginFill(0xff0000,0.5);
        padBg.graphics.drawCircle(0,0,50);
        var padCircle:egret.Shape = new egret.Shape();
        padCircle.graphics.beginFill(0x00ff00,0.5);
        padCircle.graphics.drawCircle(0,0,20);
        
        //this.addChild(padBg);
        //this.addChild(padCircle);
        
        pad.bg = padBg;
        pad.pad = padCircle;
        
        var gesture:GestureController = new GestureController(this.stage);
        
    }
}