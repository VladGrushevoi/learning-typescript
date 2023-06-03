import { Todo } from "../../models/TodoModel"
import { TodoItemCell } from "../TodoItem/TodoItem"
import { Modal } from "../Modal/Modal"
import { AddButton } from "../button/AddButton"
import { useModal } from "./useModal"
import { NavTodos } from "../nav/NavTodos"
import { useTodo } from "./useTodo"
import { UseTodoItem } from "./useTodoItem"

interface TodoListProps {
    TodoList: Todo[]
}

export const TodoList = ({ TodoList }: TodoListProps) => {
    const modal = useModal()

    const {
        todos,
        currentTodo,
        addTodoHandler,
        chooseTodoItems,
        setTodos
    } = useTodo(TodoList, modal)

    const { onDeleteHandler, openAddTodoItem, onEditHandler } = UseTodoItem({ todos, currentTodo, setTodos }, modal)

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
                        className=" text-center w-1/6 mt-3 font-bold pb-1.5 hover:text-yellow-300  text-2xl border rounded-full bg-red-500 text-white shadow-lg"
                    />
                </div>
            </div>
            {
                modal.modal.modal &&
                <Modal title={modal.modalInfo.title} onClose={modal.modal.close} children={modal.modalInfo.children} />
            }
        </>
    )
}