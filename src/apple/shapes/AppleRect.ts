class AppleRect extends AppleShape
{
    public width:number;
    public height:number;
    public constructor(width:number, height:number)
    {
        this.width = width;
        this.height = height;
        super();
        this.x = -this.width / 2;
        this.y = -this.height / 2;
    }
    
    public overlap(shape:any):egret.Point
    {
        var rect:AppleRect = <AppleRect> shape;
        if(rect)
        {
            var disX:number = this.width/2 + rect.width/2;
            var disY:number = this.height/2 + rect.height/2;
            var overX:number = Math.abs(this.body.position.x + this.x - rect.body.position.x - rect.x);
            var overY:number = Math.abs(this.body.position.y + this.y - rect.body.position.y - rect.y);
            if(overX < disX )
            {
                this.overPoint.x = disX - overX;
            }
            else
            {
                this.overPoint.x = 0;
            }
            if(overY < disY )
            {
                this.overPoint.y = disY - overY;
            }
            else
            {
                this.overPoint.y = 0;
            }
        }
        return this.overPoint;
    }
}