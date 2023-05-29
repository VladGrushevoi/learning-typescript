import { TodoItem } from "../../models/TodoModel"

interface TodoItemEditProps {
    todoItem : TodoItem | undefined
}

export const TodoItemEditForm = ({todoItem} : TodoItemEditProps) => {

    return (
        <>
            <input 
                type="text"
                value={todoItem && todoItem.Title}
                className="border py-4 px-6 w-full outline-0" 
            />

            <button
                className="py-2 px-4 font-bold left-0 border rounded-md bg-blue-400 h-1/2 text-center hover:text-green-900"            
            >
                Save
            </button>
        </>
    )
}