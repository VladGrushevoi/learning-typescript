class DllNode{
    Value : number
    Prev : DllNode | null
    Next : DllNode | null

    constructor(value: number){
        this.Value = value;
        this.Prev = null;
        this.Next = null;
    }
}