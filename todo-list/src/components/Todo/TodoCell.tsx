import { Todo } from "../../models/TodoModel"

interface TodoProps {
    Todo : Todo,
    todoClick : (todoId : number) => void,
    active : number,
    setActiveTodo : (todoId : number) => void
}

export const TodoCell = ({ Todo, todoClick, active, setActiveTodo } : TodoProps) => {
    const todoNameClickHandler = () => {
        todoClick(Todo.Id);
        setActiveTodo(Todo.Id)
    }

    return (
        <>
            <button 
            className={`py-4 px-2 mb-4 text-xl font-bold border ${Todo.Id === active ? 'bg-green-400' : 'bg-yellow-400'}  hover:text-blue-400`}
            onClick={todoNameClickHandler}
            >
                {Todo.Title}
            </button>
        </>
    )
}