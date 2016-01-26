class AppleShape
{
    public x:number;
    public y:number;
    public body:AppleBody;
    protected overPoint:egret.Point;
    
    public constructor()
    {
        this.overPoint = new egret.Point();
    }
    
    public overlap(shape:any):egret.Point
    {
        return this.overPoint;
    }
}