import { Todo } from "../../models/TodoModel"
import { TodoCell } from "../Todo/Todo"
import { AddButton } from "../button/AddButton"

interface NavTodosProps {
    todos: Todo[],
    chooseTodoItems : (todoId : number) => void,
    addTodoHandler : (todo : Todo) => void
}

export const NavTodos = ({ todos, chooseTodoItems, addTodoHandler } : NavTodosProps) => {

    return (
        <>
            <div className="py-8 px-6 w-1/6 bg-blue-300 flex flex-col border">
                {
                    todos.map(item => <TodoCell todoClick={chooseTodoItems} Todo={item} key={item.Id} />)
                }
                <AddButton
                    addTodoHandler={addTodoHandler}
                    classes="ml-16 mr-16 text-center font-bold pb-1.5 hover:text-yellow-300  text-2xl border rounded-full bg-red-500 text-white shadow-lg"
                />
            </div>
        </>
    )
}