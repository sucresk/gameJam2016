class APhysicsObject extends BananaObject
{
    public static CENTER:String = "conter";
    public static TOPLEFT:String = "topLeft";
    
    protected _view:any;
    protected _inverted:boolean = false;
    protected _parallax:number = 1;
    protected _animation:string = "";
    protected _visible:boolean = true;
    protected _x:number = 0;
    protected _y:number = 0;
    protected _z:number = 0;
    protected _rotation:number = 0;
    protected _radius:number = 0;

    private _group:number = 0;
    private _offsetX:number = 0;
    private _offsetY:number = 0;
    private _registration:string = "center";
    
    public constructor(name:string, params:any = null)
    {
        super(name,params);
        
    }
    
    public getBody():any
    {
        return null;
    }
    
    public get view():any
    {
        return this._view;
    }
    
    public set view(value:any)
    {
        this._view = value;
    }
    
    public get inverted():boolean {
        return this._inverted;
    }
    
    /**
     * Animations management works the same way than label whether it uses MovieClip, SpriteSheet or whatever.
     */
    public get animation():string {
        return this._animation;
    }
    
    /**
     * You can easily change if an object is visible or not. It hasn't any impact on physics computation.
     */
    public get visible():boolean {
        return this._visible;
    }

    public set visible(value:boolean) {
        this._visible = value;
    }
    
    public get parallax():number {
        return this._parallax;
    }

    public set parallax(value:number) {
        this._parallax = value;
    }
    
    /**
     * The group is similar to a z-index sorting. Default is 0, 1 is over.
     */
    public get group():number {
        return this._group;
    }
    
    public set group(value:number) {
        this._group = value;
    }
    
    /**
     * offsetX allows to move graphics on x axis compared to their initial point.
     */
    public get offsetX():number {
        return this._offsetX;
    }

    public set offsetX(value:number) {
        this._offsetX = value;
    }
    
    /**
     * offsetY allows to move graphics on y axis compared to their initial point.
     */
    public get offsetY():number {
        return this._offsetY;
    }

    public set offsetY(value:number) {
        this._offsetY = value;
    }
    
    /**
     * Flash registration point is topLeft, whereas physics engine use mostly center.
     * You can change the registration point thanks to this property.
     */
    public get registration():string {
        return this._registration;
    }

    public set registration(value:string) {
        this._registration = value;
    }
}