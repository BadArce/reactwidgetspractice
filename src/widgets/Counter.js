import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    // const countDesc = {
    //     name: "Counter",
    //     description: "Simple counter widget",
    //     route: "/counter"
    // } !!!! Will try to implement this later !!!!


    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>Add</button>
            <button onClick={() => count !== 0 ? setCount((c) => c - 1) : null}>Subtract</button>
            <button onClick={() => setCount(0)}>Clear</button>
        </div>
    )
}