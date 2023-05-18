interface Todo{
    Tittle: string,
    Description: string,
    isDone: boolean,
    isEditing: boolean
}

let Todos: Todo[] = [
    {
        Tittle: "Shop",
        Description: "Buy bread",
        isDone: false,
        isEditing: false,
    },
    {
        Tittle: "Shop",
        Description: "Buy milk",
        isDone: false,
        isEditing: false,
    },
    {
        Tittle: "Shop",
        Description: "Buy chocolate",
        isDone: false,
        isEditing: false,
    },
]

const onEditButtonClick = (todo : Todo) => {
    console.log("allo")
    console.log(todo)
}

const todosElements = () : string => {
    let html : string = ``;

    Todos.forEach(td => {
        html += td.isEditing ? `<form id="todo-edit-form" >
        <div class="todo-item">
                <div class="todo-title">Title: <input name="title" value="${td.Tittle}" type="text" ></div>
                <div class="todo-description">Description: <input name="description" value="${td.Description}" type="text" ></div>
                <div class="todo-isDone">Is done: <input name="isDone" class="todo-checkbox" type="checkbox" ${td.isDone ? "checked" : ""}></div>
                <input type="submit" class="todo-save-button" value="Зберегти">
        </div>
        </form>
        ` :
        `<div class="todo-item">
            <div class="todo-title">Title: <span class="todo-tittle-text">${td.Tittle}</span></div>
            <div class="todo-description">Description: <span class="todo-tittle-text">${td.Description}</span></div>
            <div class="todo-isDone">Is done: <input class="todo-checkbox" type="checkbox" ${td.isDone ? "checked" : ""}></div>
            <button class="todo-edit-button" onclick='onEditButtonClick({title: "${td.Tittle}", description: "${td.Description}", isDone: "${td.isDone}"})'>Редагувати</button>
            <button class="todo-delete-button">Видалити</button>
        </div>`;
    });

    return html;
}