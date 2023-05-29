import { Todo } from "../../models/TodoModel"
import { TodoCell } from "../Todo/Todo"
import { TodoItemCell } from "../TodoItem/TodoItem"

interface TodoListProps {
    TodoList: Todo[]
}

export const TodoList = ({ TodoList }: TodoListProps) => {
    return (
        <>
            <div className="h-full container flex flex-row py-6 px-4">
                <div className="w-[200] bg-blue-300 flex flex-col border">
                    {TodoList.map(item => <TodoCell Todo={item} key={item.Id} />)}
                </div>
                <div className="w-full h-full py-6 px-4 border">
                    {/* {TodoList[0].TodoItems.map(item => <TodoItemCell todoItem={item} key={item.Id}/>)} */}
                    <table className="table-auto min-w-full text-left text-lg">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="px-6 py-4">Title</th>
                                <th scope="col" className="px-6 py-4">Description</th>
                                <th scope="col" className="px-6 py-4">Is done</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TodoList[0].TodoItems.map(item => <TodoItemCell todoItem={item} key={item.Id}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}