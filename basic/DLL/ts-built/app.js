import { Dll } from "./DLL";

let dll = new Dll();
for (let i = 0; i < 15; i++) {
    dll.AddNode(Math.random());
}
dll.Print();
