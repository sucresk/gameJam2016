class AppleWorld extends egret.EventDispatcher
{
    
    public gravity:egret.Point = new egret.Point(0,0);
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
            this._bodies[i].applyGravity(this.gravity);
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
        var v:egret.Point = new egret.Point();
        v.x = bodyA.velocity.x - bodyB.velocity.x;
        v.y = bodyA.velocity.y - bodyB.velocity.y;
        
        var overlap:egret.Point = this.checkBodyContact(bodyA, bodyB, v);
        var contact:AppleContact = this.findContact(bodyA,bodyB)
        if(overlap)
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
            this.reponseContact(bodyA, bodyB, overlap);
        }
        else if(contact != null)
        {
            bodyA.onEndContact(bodyB);
            bodyB.onEndContact(bodyA);
            this.removeContact(contact);
            this.dispatchEvent(new AppleContactEvent(AppleContactEvent.END, contact));
        }
    }
    
    private reponseContact(bodyA:AppleBody, bodyB:AppleBody, overlap:egret.Point):void
    {
        if(!bodyA.collisionResponse || !bodyB.collisionResponse)
        {
            return;
        }
        if(bodyA.type == AppleBody.DYNAMIC && bodyB.type == AppleBody.DYNAMIC)
        {
            var overlap1:egret.Point = new egret.Point();
            overlap1.x = overlap.x / 2;
            overlap1.y = overlap.y / 2;
            this.reposeBodyOverlap(bodyA, overlap1);
            this.reposeBodyOverlap(bodyB, overlap1);
        }
        else if(bodyA.type == AppleBody.DYNAMIC)
        {
            this.reposeBodyOverlap(bodyA, overlap);
        }
        else if(bodyB.type == AppleBody.DYNAMIC)
        {
            this.reposeBodyOverlap(bodyB, overlap);
        }
    }
    
    private reposeBodyOverlap(body:AppleBody, overlap:egret.Point):void
    {
            if(body.velocity.x != 0 && body.velocity.y != 0)
            {
                if(overlap.x < overlap.y)
                {
                    if(body.velocity.x > 0)
                    {
                        body.position.x -= overlap.x;
                    }
                    else
                    {
                        body.position.x += overlap.x;
                    }
                }
                else
                {
                    if(body.velocity.y > 0)
                    {
                        body.position.y -= overlap.y;
                    }
                    else
                    {
                        body.position.y += overlap.y;
                    }
                }
            }
            else if(body.velocity.x != 0)
            {
                if(body.velocity.x > 0)
                {
                    body.position.x -= overlap.x;
                }
                else
                {
                    body.position.x += overlap.x;
                }
            }
            else if(body.velocity.y != 0)
            {
                if(body.velocity.y > 0)
                {
                    body.position.y -= overlap.y;
                }
                else
                {
                    body.position.y += overlap.y;
                }
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
    
    private checkBodyContact(bodyA:AppleBody, bodyB:AppleBody, v:egret.Point):egret.Point
    {
        for(var i:number = 0, len:number = bodyA.shapes.length; i < len; i++)
        {
            for(var j:number = 0, jLen:number = bodyB.shapes.length; j < jLen; j++)
            {
                var contact:egret.Point = this.checkShapeContact(bodyA.shapes[i], bodyB.shapes[i], v);
                if(contact.x > 0 && contact.y > 0)
                {
                    return contact;
                }
            }
        }
        return null;
    }
    
    private checkShapeContact(shapeA:AppleShape, shapeB:AppleShape, velocity:egret.Point):egret.Point
    {
        return shapeA.overlap(shapeB, velocity);
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