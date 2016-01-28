class P2Hero extends P2PhysicsObject
{
    public acceleration:number = 30;
    public maxVelocity:number = 240;
    public jumpHeight:number = 100;
    public jumpAcceleration:number = 9;
    public killVelocity:number = -90;
    public enemySpringHeight:number = 240;
    public enemySpringJumpHeight:number = 270;
    public hurtDuration:number = 1000;
    public hurtVelocityX:number = 180;
    public hurtVelocityY:number = 300;
    public canDuck:boolean = true;
    public inputChannel:number = 0;
    
    protected _groundContacts = [];// Used to determine if he's on ground or not.
    protected _enemyClass:any;
    protected _onGround:boolean = false;
    protected _springOffEnemy:number = -1;
    protected _hurtTimeoutID:number;
    protected _hurt:boolean = false;
    protected _dynamicFriction:number = 300;
    protected _staticFriction:number = 1.2;
    protected _playerMovingHero:boolean = false;
    protected _controlsEnabled:boolean = true;
    protected _ducking:boolean = false;
    protected _combinedGroundAngle:number = 0;
        
    private _isDoing:any;
    private _justDid:any;
    
    public constructor(name:string, params:any = null)
    {
        super(name, params);
        this._isDoing = {};
        this._justDid = {};
    }
    
    public get onGround():boolean {
        return this._onGround;
    }
    
    public set enemyClass(value:any) 
    {
        this._enemyClass = value;
    }
    
    public get dynamicFriction():number {
        return this._dynamicFriction;
    }
    
    public set dynamicFriction(value:number) { 
        this._dynamicFriction = value;
    }
    
    public get staticFriction():number {
        return this._staticFriction;
    }
    
    public set staticFriction(value:number) {
        this._staticFriction = value;
    }
    
    public get controlsEnabled():boolean
    {
        return this._controlsEnabled;
    }
    
    public setIsDoing(action:string, value:boolean):void
    {
        this._isDoing[action] = value;
    }
    
    public setJustDid(action:string, value:boolean):void
    {
        this._justDid[action] = value;
    }
    public isDoing(action:string):boolean
    {
        return this._isDoing[action];
    }
    public justDid(action:string):boolean
    {
        return this._justDid[action];
    }
    
    public tick(advancedTime:number):void
    {
        super.tick(advancedTime);
        var velocity:number[] = this._body.velocity;
        if (this.controlsEnabled)
        {
            var moveKeyPressed:boolean = false;
            
            //_ducking = (_ce.input.isDoing("duck", inputChannel) && _onGround && canDuck);
            
            if (this.isDoing("right"))
            {
                velocity[0] += this.acceleration;
                moveKeyPressed = true;
            }
            
            if (this.isDoing("left"))
            {
                //velocity.subeq(getSlopeBasedMoveAngle());
                velocity[0] -= this.acceleration;
                moveKeyPressed = true;
            }
            
            //If player just started moving the hero this tick.
            if (moveKeyPressed && !this._playerMovingHero)
            {
                this._playerMovingHero = true;
                //_material.dynamicFriction = 0; //Take away friction so he can accelerate.
                //_material.staticFriction = 0;
            }
            //Player just stopped moving the hero this tick.
            else if (!moveKeyPressed && this._playerMovingHero)
            {
                this._playerMovingHero = false;
                //_material.dynamicFriction = _dynamicFriction; //Add friction so that he stops running
                //_material.staticFriction = _staticFriction;
                if(velocity[0] > 0 && velocity[0] > this._dynamicFriction)
                {
                    velocity[0] -= this._dynamicFriction;
                }
                else if(velocity[0] < 0 && velocity[0] < -this._dynamicFriction)
                {
                    velocity[0] -= this._dynamicFriction;
                }
                else
                {
                    velocity[0] = 0;
                }
                
            }
            
            if (this.justDid("jump"))
            {
                velocity[1] = -this.jumpHeight;
                //onJump.dispatch();
            }
            
            if (this.isDoing("jump") && !this._onGround && velocity[1] < 0)
            {
                velocity[1] -= this.jumpAcceleration;
            }
            
            if (this._springOffEnemy != -1)
            {
                if (this.isDoing("jump"))
                    velocity[1] = -this.enemySpringJumpHeight;
                else
                    velocity[1] = -this.enemySpringHeight;
                this._springOffEnemy = -1;
            }
            
            //Cap velocities
            if (velocity[0] > (this.maxVelocity))
                velocity[0] = this.maxVelocity;
            else if (velocity[0] < (-this.maxVelocity))
                velocity[0] = -this.maxVelocity;
            
            //update physics with new velocity
            this._body.velocity = velocity;
        }
    }
    
}