import { TodoItem } from "../../models/TodoModel"

interface TodoItemProps {
    todoItem : TodoItem,
    onEdit : (id : number) => void,
    onDelete : (id : number) => void
}

export const TodoItemCell = ({ todoItem, onEdit, onDelete } : TodoItemProps) => {

    const onEditClickHandler = () => {
        onEdit(todoItem.Id)
    }

    const onDeleteClickHandler = () => {
        onDelete(todoItem.Id)
    }

    return(
        <>
            <tr className="border shadow-sm rounded-lg">
                <td className="whitespace-nowrap px-6 py-4">
                    {todoItem.Title}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                    {todoItem.Description}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                    <input type="checkbox" checked={todoItem.isDone} className="w-6 h-4"/>
                </td>
                <td>
                    <button 
                    className="px-6 py-4 text-xl bg-green-500 border-2 rounded-lg hover:text-yellow-300"
                    onClick={onEditClickHandler}
                    >Edit</button>
                </td>
                <td>
                    <button 
                    className="px-6 py-4 text-xl bg-red-500 border-2 rounded-lg hover:text-yellow-300"
                        onClick={onDeleteClickHandler}
                    >Delete</button>
                </td>
            </tr>
        </>
    )
}