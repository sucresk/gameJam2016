class P2Engine extends APhysicsEngine
{
    private _world:p2.World;
    private _objects:P2PhysicsObject[];
    
    public constructor(name:string, params:any=null)
    {
        super(name,params);
        this._objects = [];
    }
    
    public get world():p2.World
    {
        return this._world;
    }
    
    public initialize(poolObjectParams:any = null):void 
    {
        super.initialize();
        this._world = new p2.World({
            gravity : [0,500]
        })
    }
    
    public add(object:P2PhysicsObject):void
    {
        if(this._objects.indexOf(object) != -1)
        {
            return;
        }
        object.p2 = this;
        if(this._world)
        { 
            this.world.addBody(object.body);
        }
        this._objects.push(object);
    }
    
    public remove(object:P2PhysicsObject):void
    {
        var index:number = this._objects.indexOf(object)
        if(index == -1)
        {
            return;
        }
        object.p2 = null;
        if(this._world)
        { 
            this.world.removeBody(object.body);
        }
        this._objects.splice(index,1);
    }
    
    public tick(advancedTime:number):void
    {
        this._world.step(advancedTime / 1000);
        for(var i:number = 0, len:number = this._objects.length; i < len; i++)
        {
            this._objects[i].tick(advancedTime);
        } 
    }
}