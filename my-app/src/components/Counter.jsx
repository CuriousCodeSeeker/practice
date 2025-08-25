import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Counter Component</h1>
            <p className="text-lg text-gray-600">Current Count: {count}</p>
            <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    )
}
export default Counter;