export class Dll {
    Push(value) {
        var node = new DllNode(value);
        node.Next = this.Root;
        node.Prev = null;
        if (this.Root != null) {
            this.Root.Prev = node;
        }
        this.Root = node;
    }
    AddNode(value) {
        let node = new DllNode(value);
        let last = this.Root;
        node.Next = null;
        if (this.Root === null) {
            this.Push(value);
            return;
        }
        while ((last === null || last === void 0 ? void 0 : last.Next) !== null) {
            last = last.Next;
        }
        last.Next = node;
        node.Prev = last;
    }
    Print() {
        let head = this.Root;
        while (head.Next !== null) {
            console.log(head.Value);
            head = head.Next;
        }
    }
}
