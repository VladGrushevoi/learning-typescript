import { useInput } from "../../hooks/inputHook"
import { TodoItem } from "../../models/TodoModel"

interface TodoItemEditProps {
    todoItem: TodoItem | undefined
}

export const TodoItemEditForm = ({ todoItem }: TodoItemEditProps) => {

    const titleInput = useInput(todoItem?.Title)
    const descriptionInput = useInput(todoItem?.Description)

    return (
        <>
            <form>
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
                    checked={todoItem && todoItem.isDone}
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