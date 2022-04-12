import { useState,useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);


    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>Add</button>
            <button onClick={() => count !== 0 ? setCount((c) => c - 1) : null}>Subtract</button>
            <button onClick={() => setCount(0)}>Clear</button>
        </div>
    )
}