class LevelStroy extends State
{
    public imageNames:string[] = ["story0_png","story1_png","story2_png"];
    public images:egret.Bitmap[] = [];
    
    public centerX:number = 300;
    public centerY:number = 480;
    
    private _curIndex:number;
    
    public constructor()
    {
       super();
    }
    
    public init():void
    {
        var i:number;
        var len:number;
        for(i = 0,len = this.imageNames.length; i < len; i++)
        {
            var image:egret.Bitmap = this.createBitmapByName(this.imageNames[i]);
            this.images.push(image);
            image.x = this.centerX;
            image.y = this.centerY;
            this.addChild(image);
            image.visible = false
            
        }
        this._curIndex = 0;
        this.images[this._curIndex].visible = true;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin,this);
    }
    
    private dispose():void
    {
        this.removeChildren();
        this.images.length = 0;
        
         this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin,this);
    }
    private onTouchBegin(e:egret.TouchEvent):void
    {
        this._curIndex++
        if(this._curIndex >= this.imageNames.length)
        {
            this.over();
            return;
        }
        var i:number;
        var len:number;
        for(i = 0,len = this.images.length; i < len; i++)
        {
            var image:egret.Bitmap = this.images[i];
            image.visible = false;
        }
        
        this.images[this._curIndex].visible = true;
    }
    
    private over():void
    {
        this.dispose();
        this.next("level1");
        //this.next("levelOver4");
    }
    
    private createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        
        return result;
    }
}