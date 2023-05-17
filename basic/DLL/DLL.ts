class Dll {
    Root: DllNode = null;

    Push(value: number) {
        var node = new DllNode(value);

        node.Next = this.Root;
        node.Prev = null;

        if (this.Root != null) {
            this.Root.Prev = node;
        }

        this.Root = node;
    }

    AddNode(value: number) {
        let newNode = new DllNode(value);

        let last : DllNode = this.Root;

        newNode.Next = null;

        if (this.Root == null)
        {
            this.Push(value);
            return;
        }

        while (last?.Next != null)
        {
            last = last.Next;
        }

        last.Next = newNode;
        newNode.Prev = last;
    }

    Print() {
        let head = this.Root;
        while (head) {
            console.log(head.Value)
            head = head.Next
        }
    }
}