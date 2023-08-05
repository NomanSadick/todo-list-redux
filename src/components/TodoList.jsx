// eslint-disable-next-line react/prop-types
import { deleteTodo, toggleTodo } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';


function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <ul className="list-decimal ml-6">
            {todos.map((todo) => (
                <li key={todo.id} className="mb-2 flex items-center">
                    <input
                        type="checkbox"
                        className="mr-2"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
                    <button
                        className="bg-red-500 text-white px-2 py-1 ml-2"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
