import { useState } from "react"
import { Todo, TodoItem } from "../../models/TodoModel"
import { TodoItemCell } from "../TodoItem/TodoItem"
import { Modal } from "../Modal/Modal"
import { TodoItemEditForm } from "../forms/todoItemEditFrom/TodoItemEditForm"
import { TodoAddForm } from "../forms/todoAddForm/TodoAddForm"
import { AddButton } from "../button/AddButton"
import { TodoItemAddForm } from "../forms/todoItemAddForm/TodoItemAddForm"
import { useModal } from "./useModal"
import { NavTodos } from "../nav/NavTodos"

interface TodoListProps {
    TodoList: Todo[]
}

export const TodoList = ({ TodoList }: TodoListProps) => {
    const [todos, setTodos] = useState(TodoList)
    const [currentTodo, setTodoId] = useState(TodoList[0].Id);
    const { modal, modalInfo, createModalInfo } = useModal()

    const chooseTodoItems = (todoId: number) => {
        setTodoId(todoId);
    }

    const onEditHandler = (todoItemId: number) => {
        const editTodoItem = todos.find(td => td.Id === currentTodo)?.TodoItems.find(tdI => tdI.Id === todoItemId)!

        createModalInfo({ 
            title: "Edit TODO item", 
            children: <TodoItemEditForm todoItem={editTodoItem} updateTodoItem={updateTodoItem} /> 
        })

        modal.open()
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
        modal.close();
    }

    const addTodoHandler = () => {
        
        createModalInfo({
            title: "Add TODO",
            children: <TodoAddForm AddTodo={handleAddTodo} />
        })
        modal.open();
    }

    const handleAddTodo = (todo: Todo) => {
        modal.close()
        setTodos(prev => [...prev, todo])
        console.log(todos)
    }

    const openAddTodoItem = () => {
        createModalInfo({
            title: "Add TODO item",
            children: <TodoItemAddForm addTodoItem={addTodoItem} />
        })
        modal.open();
    }

    const addTodoItem = (todoItem : TodoItem) => {
        modal.close()

        const newTodos = todos.map(td => td.Id !== currentTodo ? 
            td : 
            td = {...td, TodoItems: [...td.TodoItems, todoItem]})
        setTodos(newTodos);
    }

    return (
        <>
            <div className="h-full container flex flex-row py-6 px-4">

                <NavTodos todos={todos} addTodoHandler={addTodoHandler} chooseTodoItems={chooseTodoItems} />
                
                <div className="w-full flex flex-col items-center h-full py-6 px-4 border">
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
                                    .map(item => <TodoItemCell onEdit={onEditHandler} onDelete={onDeleteHandler} todoItem={item} key={item.Id} />)
                            }
                        </tbody>
                    </table>
                    <AddButton
                        addTodoHandler={openAddTodoItem}
                        classes=" text-center w-1/6 mt-3 font-bold pb-1.5 hover:text-yellow-300  text-2xl border rounded-full bg-red-500 text-white shadow-lg"
                    />
                </div>
            </div>
            {
            modal.modal && 
                <Modal title={modalInfo.title} onClose={modal.close} children={modalInfo.children}/>
            
            }
        </>
    )
}