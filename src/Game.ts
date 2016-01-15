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
        stateManager.setCurStateName("first");
        console.log("aa")
    }
}