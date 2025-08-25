import Welcome from "../components/Welcome";
import Counter from "../components/Counter";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { useState } from 'react';

const HomePage = () => {
    const [parentCount, setParentCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const addTodo = (task) => {
        setTodos([...todos, task ]);
    }
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Home Page</h1>
            <Welcome name="User" />
            <hr />
            <Counter onCountChange={setParentCount} />
            <hr />
            <TodoInput onAddTodo={addTodo} />
            <hr />
            <TodoList todos={todos} />
        </div>
    )
}
export default HomePage;
