class APhysicsEngine extends BananaObject
{
    protected _visible:boolean = false;
	protected _group:number = 1;
	protected _view:any;
	protected _realDebugView:any;
    
    public constructor(name:string, params:any = null)
    {
        super(name, params);
    }
    
    public getBody():any{
        return null;
    }
    
    public get realDebugView():any {
        return this._realDebugView;
    }
    
    public get view():any {
        return this._view;
    }
    
    public set view(value:any) {
        this._view = value;
    }
    
    public get x():number {
        return 0;
    }

    public get y():number {
        return 0;
    }
    
    public get z():number {
        return 0;
    }
    
    public get width():number {
        return 0;
    }
    
    public get height():number {
        return 0;
    }
    
    public get depth():number {
        return 0;
    }
    
    public get velocity():egret.Point {
        return null;
    }

    public get parallax():number {
        return 1;
    }

    public get rotation():number {
        return 0;
    }

    public get group():number {
        return this._group;
    }

    public set group(value:number) {
        this._group = value;
    }

    public get visible():boolean {
        return this._visible;
    }

    public set visible(value:boolean) {
        this._visible = value;
    }
    
    public get animation():string {
        return "";
    }

    public get inverted():boolean {
        return false;
    }

    public get offsetX():number {
        return 0;
    }

    public get offsetY():number {
        return 0;
    }

    public get registration():string {
        return "topLeft";
    }
}