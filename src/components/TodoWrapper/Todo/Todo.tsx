import { TodoActions } from 'components/TodoWrapper/TodoReducer/TodoReducer';
import { Props } from './interfaces';

const Todo = (props: Props) => {
    const { todo, dispatch } = props;

    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>
            <button
                onClick={() =>
                    dispatch({
                        type: TodoActions.TOGGLE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Toggle
            </button>
            <button
                onClick={() =>
                    dispatch({
                        type: TodoActions.DELETE_TODO,
                        payload: { id: todo.id },
                    })
                }
            >
                Delete
            </button>
        </div>
    );
};

export default Todo;
