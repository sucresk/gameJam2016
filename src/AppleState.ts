class AppleState extends State
{
    private _world:AppleWorld;
    private _debugDraw:AppleDebugDraw;
    
    public constructor()
    {
        super();
    }
    
    public init():void
    {
        this._world = new AppleWorld();
        
        this._debugDraw = new AppleDebugDraw(this._world);
        
        var box0:AppleBody = new AppleBody();
        box0.mass = 1;
        box0.velocity.x = 0.1;
        box0.position.x = 200;
        box0.position.y = 200;
        box0.addShape(new AppleRect(100,100));
        
        var box1:AppleBody = new AppleBody();
        box1.mass = 1;
        box1.addShape(new AppleRect(100,100));
        box1.position.x = 400;
        box1.position.y = 200;
        this._world.add(box0);
        this._world.add(box1);
        this.addChild(this._debugDraw);
        
    }
    
    public tick(advancedTime):void
    {
        this._world.tick(advancedTime);
        this._debugDraw.tick(advancedTime);
    }
}