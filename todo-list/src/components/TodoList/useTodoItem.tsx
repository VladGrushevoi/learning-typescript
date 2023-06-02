import { TodoItem } from "../../models/TodoModel"
import { TodoItemAddForm } from "../forms/todoItemAddForm/TodoItemAddForm"
import { TodoItemEditForm } from "../forms/todoItemEditFrom/TodoItemEditForm"
import { ModalInfo } from "./useModal"
import { TodoManager } from "./useTodo"

export const UseTodoItem = ({ todos, currentTodo, setTodos } : TodoManager, modal : ModalInfo) => {

    const onEditHandler = (todoItemId: number) => {
        
        const todoItemEdit = todos.find(i => i.Id === currentTodo)?.TodoItems.find(i => i.Id === todoItemId)!
        modal.createModal({
            title: "Edit TODO item",
            children: <TodoItemEditForm todoItem={todoItemEdit} updateTodoItem={updateTodoItem} />
        });
        modal.modal.open()
    }

    const onDeleteHandler = (todoItemId: number) => {
        const newTodos = todos
            .map(todo => todo.Id !== currentTodo ? todo
                : todo = { ...todo, TodoItems: todo.TodoItems.filter(tdI => tdI.Id !== todoItemId) })

        setTodos(newTodos)
    }

    const updateTodoItem = (upTodoItem: TodoItem) => {

        setTodos(prev => prev
            .map(td => td.Id !== currentTodo ? td :
                td = {
                    Id: td.Id, Title: td.Title, TodoItems: td.TodoItems
                        .map(tdI => tdI.Id !== upTodoItem.Id ? tdI : upTodoItem)
                }))
        modal.modal.close();
    }


    const openAddTodoItem = () => {
        modal.createModal({
            title: "Add TODO item",
            children: <TodoItemAddForm addTodoItem={addTodoItem} />
        })
        modal.modal.open();
    }

    const addTodoItem = (todoItem: TodoItem) => {
        modal.modal.close()

        const newTodos = todos.map(td => td.Id !== currentTodo ?
            td :
            td = { ...td, TodoItems: [...td.TodoItems, todoItem] })
        setTodos(newTodos);
    }

    return {
        onDeleteHandler,
        openAddTodoItem,
        onEditHandler
    }
}