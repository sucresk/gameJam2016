class AppleWorld extends egret.EventDispatcher
{
    public steps:number = 10;
    
    private _bodies:Array<AppleBody>;
    private _contacts:AppleContact[];
    
    private _numBody:number;
    
    public constructor()
    {
        super();
        this._bodies = [];
        this._contacts = [];
    }
    
    public add(body:AppleBody):void
    {
        var index:number = this._bodies.indexOf(body);
        if(index == -1)
        {
            this._bodies.push(body);
        }
    }
    
    public remove(body:AppleBody):void
    {
        var index:number = this._bodies.indexOf(body);
        if(index != -1)
        {
            this._bodies.splice(index,1);
        }
    }
    
    public tick(advancedTime:number):void
    {
        var passTime:number = advancedTime / this.steps;
        for(var i = 0; i < this.steps; i++)
        {
            this.step(passTime);
        }
        this.solveContact();
    }
    
    private step(passTime:number):void
    {
        for(var i:number = 0; i < this._numBody; i++ )
        {
            this._bodies[i].step(passTime);
        }
    }
    
    private solveContact():void
    {
        
    }
}