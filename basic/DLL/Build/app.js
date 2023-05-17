class Dll {
    constructor() {
        this.Root = null;
    }
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
        let newNode = new DllNode(value);
        let last = this.Root;
        newNode.Next = null;
        if (this.Root == null) {
            this.Push(value);
            return;
        }
        while ((last === null || last === void 0 ? void 0 : last.Next) != null) {
            last = last.Next;
        }
        last.Next = newNode;
        newNode.Prev = last;
    }
    Print() {
        let head = this.Root;
        while (head) {
            console.log(head.Value);
            head = head.Next;
        }
    }
}
class DllNode {
    constructor(value) {
        this.Value = value;
        this.Prev = null;
        this.Next = null;
    }
}
let dll = new Dll();
for (let i = 0; i < 15; i++) {
    console.log("Add ==>" + i);
    dll.AddNode(i);
}
dll.Print();
//# sourceMappingURL=app.js.map