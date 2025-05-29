import { useState } from 'react';

// Component 1: Todo List with prompt and state
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h2>

            {/* Prompt */}
            <p className="text-gray-600 mb-4">
                Add your daily tasks and check them off as you complete them!
            </p>

            {/* Input section */}
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                    placeholder="Enter a new task..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={addTodo}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    Add
                </button>
            </div>

            {/* Todo list */}
            <div className="space-y-2">
                {todos.map(todo => (
                    <div key={todo.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            className="w-4 h-4"
                        />
                        <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                            {todo.text}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="px-2 py-1 text-red-500 hover:bg-red-100 rounded text-sm"
                        >
                            Delete
                        </button>
                    </div>
                ))}
                {todos.length === 0 && (
                    <p className="text-gray-500 text-center py-4">No tasks yet. Add one above!</p>
                )}
            </div>

            {/* State display */}
            <div className="mt-4 p-2 bg-blue-50 rounded text-sm">
                <strong>State:</strong> {todos.length} tasks, {todos.filter(t => t.completed).length} completed
            </div>
        </div>
    );
}

export default TodoList;