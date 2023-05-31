import { useInput } from "../../../hooks/inputHook"
import { Todo } from "../../../models/TodoModel"
import { Input } from "../../input/Input"

interface AddTodoProps {
    AddTodo: (Todo: Todo) => void
}

export const TodoAddForm = ({ AddTodo }: AddTodoProps) => {

    const titleInput = useInput("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const newTodo: Todo = {
            Id: Math.random(),
            Title: titleInput.value,
            TodoItems: []
        }

        AddTodo(newTodo)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Tdod title"
                    labelClasses="text-lg"
                    inputType="text"
                    inputId="AddTitle"
                    inputClasses="border py-4 px-6 m-4 w-2/3 block outline-1"
                    inputHook={titleInput}
                    inputPlaceholder="Enter the title..."
                />
                <button
                    type="submit"
                    className="py-2 px-4 w-1/3 m-auto block font-bold left-0 border rounded-md bg-blue-400 h-1/2 text-center hover:text-yellow-400"
                >
                    Save
                </button>
            </form>
        </>
    )
}