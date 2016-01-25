class AppleWorld extends egret.EventDispatcher
{
    
    public gravity:egret.Point = new egret.Point(0,0.0001);
    public steps:number = 10;
    
    private _bodies:Array<AppleBody>;
    private _contacts:AppleContact[];
    private _contactPool:AppleContact[];
    
    private _numBody:number = 0;
    
    public constructor()
    {
        super();
        this._bodies = [];
        this._contacts = [];
        this._contactPool = [];
    }
    
    public get bodies():AppleBody[]
    {
        return this._bodies;
    }
    public add(body:AppleBody):void
    {
        var index:number = this._bodies.indexOf(body);
        if(index == -1)
        {
            this._bodies.push(body);
            this._numBody++;
        }
        
    }
    
    public remove(body:AppleBody):void
    {
        var index:number = this._bodies.indexOf(body);
        if(index != -1)
        {
            this._bodies.splice(index,1);
            this._numBody--;
        }
    }
    
    public tick(advancedTime:number):void
    {
        var passTime:number = advancedTime / this.steps;
        for(var i = 0; i < this.steps; i++)
        {
            this.step(passTime);
        }
        this.solveContact();
    }
    
    private step(passTime:number):void
    {
        for(var i:number = 0; i < this._numBody; i++ )
        {
            this._bodies[i].applyForce(this.gravity);
            this._bodies[i].step(passTime);
        }
    }
    
    private solveContact():void
    {
        for(var i:number = 0; i < this._numBody; i++)
        {
            for(var j:number = i + 1; j < this._numBody; j++)
            {
                this.solveBodyContact(this._bodies[i], this._bodies[j]);
            }
        }
    }
    
    private solveBodyContact(bodyA:AppleBody, bodyB:AppleBody):void
    {
        var overlap:number = this.checkBodyContact(bodyA, bodyB);
        var contact:AppleContact = this.findContact(bodyA,bodyB)
        if(overlap > 0)
        {
            if(contact == null)
            {
                bodyA.onStartContact(bodyB);
                bodyB.onStartContact(bodyA);
                contact = this.addContact(bodyA,bodyB);
                this.dispatchEvent(new AppleContactEvent(AppleContactEvent.START, contact));
            }
            else
            {
                bodyA.onStayContact(bodyB);
                bodyB.onStayContact(bodyA);
            }
        }
        else if(contact != null)
        {
            bodyA.onEndContact(bodyB);
            bodyB.onEndContact(bodyA);
            this.removeContact(contact);
            this.dispatchEvent(new AppleContactEvent(AppleContactEvent.END, contact));
        }
    }
    
    private addContact(bodyA:AppleBody, bodyB:AppleBody):AppleContact
    {
        var contact:AppleContact = this.getContact();
        contact.bodyA = bodyA;
        contact.bodyB = bodyB;
        this._contacts.push(contact);
        return contact;
    }
    
    private removeContact(contact:AppleContact):void
    {
        var index:number = this._contacts.indexOf(contact);
        if(index >= 0)
        {
            this._contacts.splice(index,1);
        }
        this._contactPool.push(contact);
    }
    
    private findContact(bodyA:AppleBody, bodyB:AppleBody):AppleContact
    {
        var contact:AppleContact;
        
        for(var i:number = 0, len:number = this._contacts.length; i < len; i++)
        {
            contact = this._contacts[i];
            if(contact.bodyA == bodyA && contact.bodyB == bodyB
               ||contact.bodyA == bodyB && contact.bodyB == bodyA)
            {
                return contact;
            }
        }
        return null;
    }
    
    private checkBodyContact(bodyA:AppleBody, bodyB:AppleBody):number
    {
        for(var i:number = 0, len:number = bodyA.shapes.length; i < len; i++)
        {
            for(var j:number = 0, jLen:number = bodyB.shapes.length; j < jLen; j++)
            {
                var contact:number = this.checkShapeContact(bodyA.shapes[i], bodyB.shapes[i]);
                if(contact > 0)
                {
                    return contact;
                }
            }
        }
        return 0;
    }
    
    private checkShapeContact(shapeA:AppleShape, shapeB:AppleShape):number
    {
        return shapeA.overlap(shapeB);
    }
    
    private getContact():AppleContact
    {
        if(this._contactPool.length > 0)
        {
            return this._contactPool.pop();
        }
        return new AppleContact(null,null);
    }
}