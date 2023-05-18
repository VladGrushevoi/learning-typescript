let dll: Dll = new Dll();

for(let i = 0; i < 15; i++){
    console.log("Add ==>" + i);
    dll.AddNode(i);
}

dll.Print();