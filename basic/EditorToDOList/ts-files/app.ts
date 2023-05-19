let rootTodoDiv : HTMLElement = document.getElementsByClassName("todos-container")[0] as HTMLElement;
let addForm : HTMLFormElement = document.getElementById("form-add-todo") as HTMLFormElement;
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

const addTodoSubmitHandler = (e: SubmitEvent) => {
    e.preventDefault();
    const title : string = (addForm.getElementsByTagName("input")[0] as HTMLInputElement).value
    const description : string = (addForm.getElementsByTagName("input")[1] as HTMLInputElement).value

    const todo : Todo = {
        Id: Todos.length + 1,
        Tittle: title,
        Description: description,
        isDone: false,
        isEditing: false
    }

    Todos.push(todo);

    rootTodoDiv.innerHTML = todosElements();
}
addForm.addEventListener('submit', addTodoSubmitHandler)
// form = document.getElementById("todo-edit-form") as HTMLFormElement;
//form.addEventListener('submit',submitFormHandler)