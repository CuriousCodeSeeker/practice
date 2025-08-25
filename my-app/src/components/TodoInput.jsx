import { useState } from 'react'

const TodoInput = () => {
    const [task, setTask] = useState('');

    const handleAdd = (e) => {
        if(task.trim() === "") return;
        onAdd(task);
        setTask('');
    }

    return (
        <div className="mb-4">
            <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleAdd}
            >
                Add Task
            </button>
        </div>
    )
}
export default TodoInput;
