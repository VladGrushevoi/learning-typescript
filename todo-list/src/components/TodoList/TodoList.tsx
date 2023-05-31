import { useState, useContext } from "react"
import { Todo, TodoItem } from "../../models/TodoModel"
import { TodoCell } from "../Todo/Todo"
import { TodoItemCell } from "../TodoItem/TodoItem"
import { ModalContext } from "../../Context/ModalContext"
import { Modal } from "../Modal/Modal"
import { TodoItemEditForm } from "../forms/todoItemEditFrom/TodoItemEditForm"
import { TodoAddForm } from "../forms/todoAddForm/TodoAddForm"

interface TodoListProps {
    TodoList: Todo[]
}

export const TodoList = ({ TodoList }: TodoListProps) => {
    const [todos, setTodos] = useState(TodoList)
    const [currentTodo, setTodoId] = useState(TodoList[0].Id);
    const [todoItemId, setTodoItemId] = useState(0);
    const [typeModal, setTypeModal] = useState({Edit : false, AddTodo : false, AddTodoItem: false})
    const [modalTitle, setModalTitle] = useState("");

    const modal = useContext(ModalContext)

    const chooseTodoItems = (todoId : number) => {
        setTodoId(todoId);
    }
    
    const onEditHandler = (todoItemId : number) => {
        setTodoItemId(todoItemId);
        setTypeModal({...typeModal, Edit: true});
        setModalTitle("Edit todo item")
        modal.open()
    }

    const onDeleteHandler = (todoItemId : number) => {
        const newTodos = todos
            .map(todo => todo.Id !== currentTodo ? todo 
                : todo = {...todo, TodoItems: todo.TodoItems.filter(tdI => tdI.Id !== todoItemId)})

        setTodos(newTodos)
    }

    const updateTodoItem = (upTodoItem : TodoItem) => {
        
        setTodos(prev => prev
            .map(td => td.Id !== currentTodo ? td : 
                td = {Id: td.Id, Title: td.Title, TodoItems : td.TodoItems
                                                            .map(tdI => tdI.Id !== upTodoItem.Id ? tdI : upTodoItem)}))
            modal.close();
            setTypeModal({...typeModal, Edit: false})
    }

    const addTodoHandler = () => {
        setTypeModal({...typeModal, AddTodo: true})
        setModalTitle("Add TODO")
        modal.open();
    }

    const modalClose = () => {
        setTypeModal({Edit : false, AddTodo : false, AddTodoItem: false})
        modal.close()
    }

    const handleAddTodo = (todo : Todo) => {
        setTypeModal({Edit : false, AddTodo : false, AddTodoItem: false})
        modal.close()
        setTodos(prev => [...prev, todo])
        console.log(todos)
    }

    return (
        <>
            <div className="h-full container flex flex-row py-6 px-4">
                <div className="py-8 px-6 w-1/6 bg-blue-300 flex flex-col border">
                    {todos.map(item => <TodoCell todoClick={chooseTodoItems} Todo={item} key={item.Id} />)}
                    <button
                        className="ml-16 mr-16 text-center font-bold pb-1.5 hover:text-yellow-300  text-2xl border rounded-full bg-red-500 text-white shadow-lg"
                        onClick={addTodoHandler}
                    >+</button>
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
                                todos.find(i => i.Id === currentTodo)?.TodoItems
                                .map(item => <TodoItemCell onEdit={onEditHandler} onDelete={onDeleteHandler} todoItem={item}  key={item.Id}/>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {modal.modal && <Modal title={modalTitle} onClose={modalClose}>
                    {
                        typeModal.Edit && <TodoItemEditForm 
                        todoItem={todos.find(i => i.Id === currentTodo)?.TodoItems.find(i => i.Id === todoItemId)!}
                        updateTodoItem={updateTodoItem} 
                    />
                    }
                    {
                        typeModal.AddTodo && <TodoAddForm AddTodo={handleAddTodo} />
                    }
                    {
                        typeModal.AddTodoItem && <h1>Adding todo item</h1>
                    }
                </Modal>}
        </>
    )
}