import { Todo } from "../../models/TodoModel"

interface TodoProps {
    Todo : Todo
}

export const TodoCell = ({ Todo } : TodoProps) => {

    return (
        <>
            <button className="py-4 px-2 border bg-yellow-400">
                {Todo.Title}
            </button>
        </>
    )
}