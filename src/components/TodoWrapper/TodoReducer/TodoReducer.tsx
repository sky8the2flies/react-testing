import { Action } from './interfaces';
import { TodoType } from 'components/TodoWrapper/Todo/interfaces';

export { TodoActions, todoReducer };

const TodoActions = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo',
};

const todoReducer = (todos: Array<TodoType>, action: Action) => {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            if (!action.payload.name) return todos;
            return [...todos, newTodo(action.payload.name)];
        case TodoActions.TOGGLE_TODO:
            return todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            });
        case TodoActions.DELETE_TODO:
            return todos.filter((todo) => todo.id !== action.payload.id);
        default:
            return todos;
    }
};

const newTodo = (name: string): TodoType => {
    return { id: Date.now(), name: name, complete: false };
};
