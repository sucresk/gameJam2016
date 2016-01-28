class P2Platform extends P2PhysicsObject
{
    protected _oneWay:boolean = false;
    
    public constructor(name:string, params:any = null)
    {
        super(name, params);
    }
    
    public get oneWay():boolean
    {
        return this._oneWay;
    }
    
    public set oneWay(value:boolean)
    {
        if(this._oneWay == value)
        {
            return;
        }
        this._oneWay = value;
    }
    
    protected defineBody():void
    {
        this._bodyType = p2.Body.STATIC;
    }
    
}