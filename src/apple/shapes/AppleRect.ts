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
    
    public overlap(shape:any):number
    {
        var rect:AppleRect = <AppleRect> shape;
        if(rect)
        {
            var disX:number = Math.abs(this.body.position.x + this.x - rect.body.position.x - rect.x) - this.width - rect.width;
            var disY:number = Math.abs(this.body.position.y + this.y - rect.body.position.y - rect.y) - this.height - rect.height;
            if(disX < 0 && disY < 0)
            {
                return -(disX + disY) / 2;
            }
            else if(disX < 0)
            {
                return -disX;
            }
            else if(disY < 0)
            {
                return -disY;
            }
            return 0;  
        }
        return 0;
    }
}