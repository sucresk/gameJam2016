class AppleDebugDraw extends egret.Sprite
{
    private _world:AppleWorld;
    
    public constructor(world:AppleWorld)
    {
        super();
        this._world = world;
    }
    
    public tick(advancedTime:number):void
    {
        this.graphics.clear();
        var bodies = this._world.bodies;
        for(var i:number = 0, len:number = bodies.length; i < len; i++)
        {
            this.drawBody(bodies[i]);
        }
    }
    
    private drawBody(body:AppleBody):void
    {
        for(var i:number = 0, len:number = body.shapes.length; i < len; i++)
        {
            this.drawShape(body.shapes[i]);
        }
    }
    
    private drawShape(shape:AppleShape):void
    {
        if(shape instanceof AppleRect)
        {
            this.drawRect(<AppleRect> shape);
        }
    }
    
    private drawRect(rect:AppleRect):void
    {
        this.graphics.beginFill(0x0000ff,0.5);
        this.graphics.drawRect(rect.x + rect.body.position.x,
                               rect.y + rect.body.position.y,
                               rect.width,
                               rect.height);
        this.graphics.endFill();
    }
    
    private drawCircle(circle:AppleCircle):void
    {
        this.graphics.beginFill(0x00ff00,0.5);
        this.graphics.drawCircle(circle.body.position.x,
                                 circle.body.position.y,
                                 circle.radius);
        this.graphics.endFill();
    }
}