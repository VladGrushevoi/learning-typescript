import { useCheckbox } from "../../../hooks/checkboxHook"
import { useInput } from "../../../hooks/inputHook"
import { TodoItem } from "../../../models/TodoModel"
import { CheckBox } from "../../input/Checkbox"
import { Input } from "../../input/Input"

interface TodoItemEditProps {
    todoItem: TodoItem,
    updateTodoItem: (todoItem: TodoItem) => void
}

export const TodoItemEditForm = ({ todoItem, updateTodoItem }: TodoItemEditProps) => {

    const titleInput = useInput(todoItem?.Title)
    const descriptionInput = useInput(todoItem?.Description)
    const isDoneCheckbox = useCheckbox(todoItem?.isDone)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTodoItem: TodoItem = {
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
                <Input
                    label="Title"
                    labelClasses="text-lg"
                    inputType="text"
                    inputId="editTitle"
                    inputClasses="border py-4 px-6 m-4 w-2/3 block outline-1"
                    inputHook={titleInput}
                    inputPlaceholder="Enter the title..."
                />
                <Input
                    label="Description"
                    labelClasses="text-lg"
                    inputType="text"
                    inputId="editDescription"
                    inputClasses="border py-4 px-6 m-4 w-2/3 block outline-1"
                    inputHook={descriptionInput}
                    inputPlaceholder="Enter the description..."
                />
                <CheckBox 
                    label="Is done"
                    labelClasses="text-lg"
                    checkboxId="edotIsDone"
                    checkboxType="checkbox"
                    checkboxClasses="border py-4 px-6 m-4"
                    checkboxHook={isDoneCheckbox}
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