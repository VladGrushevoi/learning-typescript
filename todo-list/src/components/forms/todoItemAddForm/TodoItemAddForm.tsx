import { useInput } from "../../../hooks/inputHook"
import { TodoItem } from "../../../models/TodoModel";
import { SubmitButton } from "../../button/SubminButton"
import { Input } from "../../input/Input";

interface TodoItemAddFormProps {
    addTodoItem : (todoItem : TodoItem) => void
}

export const TodoItemAddForm = (props: TodoItemAddFormProps) => {

    const titleTdItem = useInput("");
    const descriptionTdItem = useInput("");

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();

        const todoItem : TodoItem = {
            Id: Math.random(),
            Description : descriptionTdItem.value,
            Title: titleTdItem.value,
            isDone: false
        }

        props.addTodoItem(todoItem);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Input
                    label="Title"
                    labelClasses="text-lg"
                    inputType="text"
                    inputId="addTitle"
                    inputClasses="border py-4 px-6 m-4 w-2/3 block outline-1"
                    inputHook={titleTdItem}
                    inputPlaceholder="Enter the title..."
                />

                <Input
                    label="Description"
                    labelClasses="text-lg"
                    inputType="text"
                    inputId="addDescription"
                    inputClasses="border py-4 px-6 m-4 w-2/3 block outline-1"
                    inputHook={descriptionTdItem}
                    inputPlaceholder="Enter the title..."
                />

                <SubmitButton
                    text="Save"
                    type="submit"
                    className="py-2 px-4 w-1/3 m-auto block font-bold left-0 border rounded-md bg-blue-400 h-1/2 text-center hover:text-yellow-400"
                />
            </form>
        </>
    )
}