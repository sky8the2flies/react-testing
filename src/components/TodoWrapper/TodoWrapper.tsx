import React, { useState, useReducer } from 'react';

import { TodoActions, todoReducer } from './TodoReducer/TodoReducer';
import Todo from './Todo/Todo';
//Add commit
const TodoWrapper = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch({ type: TodoActions.ADD_TODO, payload: { name: name } });
        setName('');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </form>
            {todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
            })}
        </>
    );
};

export default TodoWrapper;
