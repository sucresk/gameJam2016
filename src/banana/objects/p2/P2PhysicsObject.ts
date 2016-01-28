class P2PhysicsObject extends APhysicsObject
{
    protected _p2:P2Engine;
    protected _bodyType:number;
    protected _body:p2.Body;
    protected _material:p2.Material;
    protected _shape:p2.Shape;
    protected _width:number = 30;
    protected _height:number = 30;
    
    public points:number[];
    
    public constructor(name:string, params:any = null)
    {
        super(name,params);
    }
    
    public set p2(value:P2Engine)
    {
        this._p2 = value;
    }
    public initialize(poolObjectParams:any = null):void 
    {
        super.initialize(poolObjectParams);
        this.defineBody();
		this.createBody();
		this.createMaterial();
		this.createShape();
		this.createFilter();
		this.createConstraint();
    }
    
    public destroy():void
    {
        this._p2.world.removeBody(this._body);
        super.destroy();
    }
    
    protected defineBody():void {
        
        this._bodyType = p2.Body.DYNAMIC;
    }
    protected createBody():void {
        
        this._body = new p2.Body({mass:10});
        this._body.fixedRotation = true;
        this._body.angle = 0;
        this._body.type = this._bodyType;
    }
    protected createMaterial():void {
        
    }
    protected createShape():void {
        
        if (this.points && this.points.length > 1) {
                       
        } else {
            if (this._radius != null && this._radius != 0)
                this._shape = new p2.Circle({radius: this._radius})
            else
                this._shape = new p2.Box({width: this._width, height:  this._height });
        }
        this._body.addShape(this._shape,[0,0],0);
    }
    protected createFilter():void {
        
        //_body.setShapeFilters(new InteractionFilter(PhysicsCollisionCategories.Get("Level"), PhysicsCollisionCategories.GetAll()));
    }
    protected createConstraint():void {
        
        //_body.space = _nape.space;			
        //_body.cbTypes.add(PHYSICS_OBJECT);
        
    }
    
    public get x():number
    {
        if (this._body)
            return this._body.position[0];
        else
            return this._x;
    }
    
    public set x(value:number)
    {
        this._x = value;
        
        if (this._body)
        {
            this._body.position[0] = value;
        }
    }
        
    public get y():number
    {
        if (this._body)
            return this._body.position[1];
        else
            return this._y;
    }
    
    public set y(value:number)
    {
        this._y = value;
        
        if (this._body)
        {
            this._body.position[1] = value;
        }
    }
    
    public get z():number {
        return 0;
    }
    
    public get rotation():number
    {
        if (this._body)
            return this._body.angle * 180 / Math.PI;
        else
            return this._rotation * 180 / Math.PI;
    }
    
    public set rotation(value:number)
    {
        this._rotation = value * Math.PI / 180;
        
        if (this._body)
            this._body.angle = value * Math.PI / 180;
    }
    
    /**
     * This can only be set in the constructor parameters. 
     */		
    public get width():number
    {
        return this._width;
    }
    
    public set width(value:number)
    {
       this. _width = value;
        
        if (this._initialized)
        {
            console.log("Warning: You cannot set " + this + " width after it has been created. Please set it in the constructor.");
        }
    }
    
    /**
     * This can only be set in the constructor parameters. 
     */	
    public get height():number
    {
        return this._height;
    }
    
    public set height(value:number)
    {
        this._height = value;
        
        if (this._initialized)
        {
            console.log("Warning: You cannot set " + this + " height after it has been created. Please set it in the constructor.");
        }
    }
    
    /**
     * No depth in a 2D Physics world.
     */
    public get depth():number {
        return 0;
    }
    
    /**
     * This can only be set in the constructor parameters. 
     */	
    public get radius():number
    {
        return this._radius;
    }
    
    /**
     * The object has a radius or a width and height. It can't have both.
     */
    public set radius(value:number)
    {
        this._radius = value;
        
        if (this._initialized)
        {
            console.log("Warning: You cannot set " + this + " radius after it has been created. Please set it in the constructor.");
        }
    }
    
    public get body():p2.Body {
        return this._body;
    }
    
    public getBody():any
    {
        return this._body;
    }
    
    public get velocity():number[] {
        return [this._body.velocity[0], this._body.velocity[1], 0];
    }
    
    public set velocity(value:number[])
    {
        this._body.velocity[0] = value[0];
        this._body.velocity[1] = value[1];
    }
}