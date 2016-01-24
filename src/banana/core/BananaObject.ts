class BananaObject
{
    public static hideParamWarnings:boolean = false;
    
    public name:string;
    public kill:boolean = false;
    public type: string = "classicObject";
    
    protected _initialized:boolean = false;
    protected _params:any;
    
    public constructor(name:string,params:any = null)
    {
        this.name = name;
        this._params = params;
        this.initialize();
    }
    
    public initialize(poolObjectParams:any = null):void 
    {
			
        if (poolObjectParams)
            this._params = poolObjectParams;
        
        if (this._params)
            this.setParams(this, this._params);
        else
            this._initialized = true;					
    }
    
    public tick(advancedTime:number):void
    {
        
    }
    
    public destroy():void
    {
        this._initialized = false;			
    }
    
    public setParams(object:any, params:any):void
		{
			for (var param in params)
			{
				try
				{
					if (params[param] == "true")
						object[param] = true;
					else if (params[param] == "false")
						object[param] = false;
					else
						object[param] = params[param];
				}
				catch (e)
				{
					if (!BananaObject.hideParamWarnings)
						console.log("Warning: The parameter " + param + " does not exist on " + this);
				}
			}
			this._initialized = true;
		}
}