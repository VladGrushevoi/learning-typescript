class Dll{
    Root : DllNode

    Push(value: number){
        var node = new DllNode(value);

        node.Next = this.Root;
        node.Prev = null;

        if (this.Root != null)
        {
            this.Root.Prev = node;
        }

        this.Root = node;
    }

    AddNode(value : number){
        let node = new DllNode(value);
        let last : DllNode = this.Root;

        node.Next = null;

        if(this.Root === null){
            this.Push(value);
            return;
        }

        while(last?.Next !== null){
            last = last.Next;
        }

        last.Next = node;
        node.Prev = last;
    
    }

    Print(){
        let head = this.Root;
        while(head.Next !== null){
            console.log(head.Value)
            head = head.Next
        }
    }
}