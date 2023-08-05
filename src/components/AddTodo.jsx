import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

function AddTodo() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                className="border p-2 w-full"
                placeholder="Add a new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-2"
                onClick={handleAddTodo}
            >
                Add Todo
            </button>
        </div>
    );
}

export default AddTodo;
