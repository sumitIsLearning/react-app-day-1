import React, { useState } from "react";

const Counter = () => {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(++count);
    }

    function decrement() {
        setCount(--count);
    }
    return (
        <div>
        <h2>{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;
