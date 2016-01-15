class StateManager{
    
    private _parent:egret.DisplayObjectContainer;
    private _stateObj:any;
    private _curState:IState;
    private _prevState:IState;
    
    public constructor(parent:egret.DisplayObjectContainer)
    {
        this._parent = parent;
        this._stateObj = {};
    }
    
    public registerState(name:string, state:IState):void
    {
        this._stateObj[name] = state;
    }
    
    public setCurStateName(name:string):void
    {
        var state:IState = this._stateObj[name];
        if(state)
        {
            this.setCurState(state);
        }
    }
    public setCurState(state:IState):void
    {
        if(this._curState)
        {
            this._curState.removeEventListener(StateEvent.NEXT, this.onNext, this);
            this._prevState = this._curState;
        }
        this._curState = state;
        this._curState.show(this._parent);
        this._curState.addEventListener(StateEvent.NEXT, this.onNext, this);
        
    }
    private onNext(e:StateEvent):void
    {
        var state:IState = this._stateObj[e.data];
        if(state)
        {
            this.setCurState(state);
        }
    }
}