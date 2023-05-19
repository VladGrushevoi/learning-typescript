let rootTodoDiv : HTMLElement = document.getElementsByClassName("todos-container")[0] as HTMLElement;
let form : HTMLFormElement | null;

rootTodoDiv.innerHTML = todosElements();

const submitFormHandler = (e: Event, todoId : number) => {
    e.preventDefault();
    console.log(todoId);
    const title : string = (form.getElementsByTagName("input")[0] as HTMLInputElement).value
    const description : string = (form.getElementsByTagName("input")[1] as HTMLInputElement).value
    const isDone : boolean = (form.getElementsByTagName("input")[2] as HTMLInputElement).checked
 
    Todos.forEach(td => {
        if(td.Id === todoId){
            td.Tittle = title;
            td.Description = description;
            td.isDone = isDone;
            td.isEditing = false;
            console.log("Edit", td)
        }
        return td;
    });
    console.log(Todos);
    rootTodoDiv.innerHTML = todosElements();
}
// form = document.getElementById("todo-edit-form") as HTMLFormElement;
//form.addEventListener('submit',submitFormHandler)