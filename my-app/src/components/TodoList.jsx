

const TodoList = ({ todos }) => {

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Todo List</h2>
            <ul className="list-disc pl-5">
                {todos.map((todo,index) => (
                    <li key={todo.id} className="mb-2">
                        {todo.task}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;

