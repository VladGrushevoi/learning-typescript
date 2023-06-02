import { useState } from "react";
import { Todo } from "../../models/TodoModel";
import { ModalInfo } from "./useModal";
import { TodoAddForm } from "../forms/todoAddForm/TodoAddForm";

export interface TodoManager {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    currentTodo : number
}

export const useTodo = (todoType : Todo[], modalInfo : ModalInfo ) => {
    const [todos, setTodos] = useState(todoType)
    const [currentTodo, setTodoId] = useState(todoType[0].Id);

    const chooseTodoItems = (todoId: number) => {
        setTodoId(todoId);
    }


    const addTodoHandler = () => {
        
        modalInfo.createModal({
            title: "Add TODO",
            children: <TodoAddForm AddTodo={handleAddTodo} />
        })
        modalInfo.modal.open();
    }

    const handleAddTodo = (todo: Todo) => {
        modalInfo.modal.close()
        setTodos(prev => [...prev, todo])
    }

    return {
        todos,
        currentTodo,
        setTodos,
        chooseTodoItems,
        addTodoHandler,
        handleAddTodo
    }
}