

export interface Todo {
    Id : number,
    Title : string,
    TodoItems: TodoItem[],
}

export interface TodoItem {
    Id : number,
    Title : string,
    Description : string,
    isDone : boolean
}