let rootTodoDiv : HTMLElement = document.getElementsByClassName("todos-container")[0] as HTMLElement;
let form : HTMLFormElement | null;

rootTodoDiv.innerHTML = todosElements();

const submitFormHandler = (e: FormDataEvent) => {
    e.preventDefault();
    const title : string = (form.getElementsByTagName("input")[0] as HTMLInputElement).value
    const description : string = (form.getElementsByTagName("input")[1] as HTMLInputElement).value
    const isDone : boolean = (form.getElementsByTagName("input")[2] as HTMLInputElement).checked

    console.log(title + " " + description + " " + isDone)
    
}
// form = document.getElementById("todo-edit-form") as HTMLFormElement;
// form.addEventListener('submit',submitFormHandler)