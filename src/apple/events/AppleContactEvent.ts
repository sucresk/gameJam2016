class AppleContactEvent extends egret.Event
{
    public static START:string = "start";
    public static END:string = "end";
    
    public constructor(type:string,data:AppleContact,bubbles:boolean = false,cancelable:boolean = false)
    {
        super(type,bubbles,cancelable,data)
    }
    
    public get contact():AppleContact
    {
        return <AppleContact>this.data;
    }
}