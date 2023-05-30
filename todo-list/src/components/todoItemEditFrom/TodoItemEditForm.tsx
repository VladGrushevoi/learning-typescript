import { useCheckbox } from "../../hooks/checkboxHook"
import { useInput } from "../../hooks/inputHook"
import { TodoItem } from "../../models/TodoModel"

interface TodoItemEditProps {
    todoItem: TodoItem,
    updateTodoItem: (todoItem : TodoItem) => void
}

export const TodoItemEditForm = ({ todoItem, updateTodoItem }: TodoItemEditProps) => {

    const titleInput = useInput(todoItem?.Title)
    const descriptionInput = useInput(todoItem?.Description)
    const isDoneCheckbox = useCheckbox(todoItem?.isDone)

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
        const newTodoItem : TodoItem = {
            Id: todoItem && todoItem?.Id,
            Title: titleInput.value,
            Description: descriptionInput.value,
            isDone: isDoneCheckbox.checked 
        }

        updateTodoItem(newTodoItem);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="text-lg" htmlFor="editTitle">Title</label>
                <input
                    id="editTitle"
                    type="text"
                    placeholder="Enter the title..."
                    {...titleInput}
                    className="border py-4 px-6 m-4 w-2/3 block outline-1"
                />

                <label className="text-lg" htmlFor="editDescription">Description</label>
                <input
                    id="editDescription"
                    type="text"
                    placeholder="Enter the description..."
                    {...descriptionInput}
                    className="border py-4 px-6 m-4 w-2/3 block outline-1"
                />

                <label className="text-lg" htmlFor="edotIsDone">Is done</label>
                <input
                    id="edotIsDone"
                    type="checkbox"
                    placeholder="Enter the title..."
                    {...isDoneCheckbox}
                    className="border py-4 px-6 m-4"
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