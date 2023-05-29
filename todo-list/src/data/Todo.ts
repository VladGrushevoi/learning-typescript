import { Todo } from "../models/TodoModel";

export const Todos : Todo[] = [
    {
        Id : Math.random(),
        Title : 'Shopping',
        TodoItems : [
            {
                Id : Math.random(),
                Title : 'Buy chocalate',
                Description: 'Get a white choclate',
                isDone : false
            },
            {
                Id : Math.random(),
                Title : 'Buy bread',
                Description: 'Get a white bread',
                isDone : false
            },
        ],
    },
    {
        Id : Math.random(),
        Title : 'Home',
        TodoItems : [
            {
                Id : Math.random(),
                Title : 'Clean bathroom',
                Description: 'At 12:00 began',
                isDone : false
            },
            {
                Id : Math.random(),
                Title : 'Coocked dinner',
                Description: 'Spagetti with kotlets',
                isDone : false
            },
        ]
    }
]