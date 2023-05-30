import { useState, useContext } from "react"
import { Todo, TodoItem } from "../../models/TodoModel"
import { TodoCell } from "../Todo/Todo"
import { TodoItemCell } from "../TodoItem/TodoItem"
import { ModalContext } from "../../Context/ModalContext"
import { Modal } from "../Modal/Modal"
import { TodoItemEditForm } from "../todoItemEditFrom/TodoItemEditForm"

interface TodoListProps {
    TodoList: Todo[]
}

export const TodoList = ({ TodoList }: TodoListProps) => {
    const [todos, setTodos] = useState(TodoList)
    const [todoId, setTodoId] = useState(TodoList[0].Id);
    const [todoItemId, setTodoItemId] = useState(0);

    const { modal, open, close } = useContext(ModalContext)

    const chooseTodoItems = (todoId : number) => {
        setTodoId(todoId);
    }
    
    const onEditHandler = (todoItemId : number) => {
        setTodoItemId(todoItemId);
        open()
    }

    const onDeleteHandler = (todoItemId : number) => {
        console.log("Deleting item " + todoItemId)
    }

    const updateTodoItem = (upTodoItem : TodoItem) => {
        
        setTodos(prev => prev
            .map(td => td.Id !== todoId ? td : td = {Id: td.Id, Title: td.Title, TodoItems : td.TodoItems
                                                                                    .map(tdI => tdI.Id !== upTodoItem.Id ? tdI : upTodoItem)}))
        close();
    }

    return (
        <>
            <div className="h-full container flex flex-row py-6 px-4">
                <div className="py-8 px-6 w-1/6 bg-blue-300 flex flex-col border">
                    {TodoList.map(item => <TodoCell todoClick={chooseTodoItems} Todo={item} key={item.Id} />)}
                </div>
                <div className="w-full h-full py-6 px-4 border">
                    <table className="table-auto min-w-full text-left text-lg">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">Title</th>
                                <th scope="col" className="px-6 py-4">Description</th>
                                <th scope="col" className="px-6 py-4">Is done</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.find(i => i.Id === todoId)?.TodoItems
                                .map(item => <TodoItemCell onEdit={onEditHandler} onDelete={onDeleteHandler} todoItem={item}  key={item.Id}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {modal && <Modal title="Edit todo item" onClose={close}>
                    <TodoItemEditForm 
                        todoItem={todos.find(i => i.Id === todoId)?.TodoItems.find(i => i.Id === todoItemId)!}
                        updateTodoItem={updateTodoItem} 
                    />
                </Modal>}
        </>
    )
}