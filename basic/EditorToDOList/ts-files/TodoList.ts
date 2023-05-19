interface Todo {
    Id: number,
    Tittle: string,
    Description: string,
    isDone: boolean,
    isEditing: boolean
}

let Todos: Todo[] = [
    {
        Id: 1,
        Tittle: "Shop",
        Description: "Buy bread",
        isDone: false,
        isEditing: false,
    },
    {
        Id: 2,
        Tittle: "Shop",
        Description: "Buy milk",
        isDone: false,
        isEditing: false,
    },
    {
        Id: 3,
        Tittle: "Shop",
        Description: "Buy chocolate",
        isDone: false,
        isEditing: false,
    },
]

const onEditButtonClick = (todoId: number) => {
    console.log("Tdod is" + todoId);
    Todos.forEach(td => td.Id === todoId ? td.isEditing = true : td.isEditing = false)


    rootTodoDiv.innerHTML = todosElements();
    form = document.getElementById("todo-edit-form") as HTMLFormElement;
    form.addEventListener('submit', (event) => { submitFormHandler(event as SubmitEvent, todoId) });
}

const onDeleteHandler = (todoId: number) => {
    Todos = Todos.filter(td => td.Id !== todoId).map((td, index) => {

        return {
            Id: index,
            Tittle: td.Tittle,
            Description: td.Description,
            isDone: td.isDone,
            isEditing: td.isEditing
        }
    })

    console.log(Todos);

    rootTodoDiv.innerHTML = todosElements();
}

const todosElements = (): string => {
    let html: string = ``;

    Todos.forEach(td => {
        html += td.isEditing ? `<form id="todo-edit-form">
        <div class="todo-item">
                <div class="todo-title">Title: <input id="input-edit-tittle" name="title" value="${td.Tittle}" type="text" ></div>
                <div class="todo-description">Description: <input id="input-edit-description" name="description" value="${td.Description}" type="text" ></div>
                <div class="todo-isDone">Is done: <input id="input-edit-isDone" name="isDone" class="todo-checkbox" type="checkbox" ${td.isDone ? "checked" : ""}></div>
                <input type="submit" class="todo-save-button" value="Зберегти">
        </div>
        </form>
        ` :
            `<div class="todo-item">
            <div class="todo-title">Title: <span class="todo-tittle-text">${td.Tittle}</span></div>
            <div class="todo-description">Description: <span class="todo-tittle-text">${td.Description}</span></div>
            <div class="todo-isDone">Is done: <input class="todo-checkbox" type="checkbox" ${td.isDone ? "checked" : ""}></div>
            <button class="todo-edit-button" onclick='onEditButtonClick(${td.Id})'>Редагувати</button>
            <button class="todo-delete-button" onclick='onDeleteHandler(${td.Id})'>Видалити</button>
        </div>`;
    });

    return html;
}