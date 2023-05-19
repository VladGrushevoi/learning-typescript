let Todos = [
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
];
const onEditButtonClick = (todoId) => {
    console.log("Tdod is" + todoId);
    Todos.forEach(td => td.Id === todoId ? td.isEditing = true : td.isEditing = false);
    rootTodoDiv.innerHTML = todosElements();
    form = document.getElementById("todo-edit-form");
    form.addEventListener('submit', (event) => { submitFormHandler(event, todoId); });
};
const todosElements = () => {
    let html = ``;
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
            <button class="todo-delete-button">Видалити</button>
        </div>`;
    });
    return html;
};
let rootTodoDiv = document.getElementsByClassName("todos-container")[0];
let form;
rootTodoDiv.innerHTML = todosElements();
const submitFormHandler = (e, todoId) => {
    e.preventDefault();
    console.log(todoId);
    const title = form.getElementsByTagName("input")[0].value;
    const description = form.getElementsByTagName("input")[1].value;
    const isDone = form.getElementsByTagName("input")[2].checked;
    Todos.forEach(td => {
        if (td.Id === todoId) {
            td.Tittle = title;
            td.Description = description;
            td.isDone = isDone;
            td.isEditing = false;
            console.log("Edit", td);
        }
        return td;
    });
    console.log(Todos);
    rootTodoDiv.innerHTML = todosElements();
};
//# sourceMappingURL=app.js.map