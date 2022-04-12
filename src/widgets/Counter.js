import { useState,useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count < 0) {setCount(0)}
    }, [count]);

    return (
        <div className="Counter">
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>Add</button>
            <button onClick={() => setCount((c) => c - 1)}>Subtract</button>
            <button onClick={() => setCount(0)}>Clear</button>
        </div>
    )
}