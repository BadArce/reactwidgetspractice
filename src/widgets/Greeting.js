import { useState } from "react";

export default function Counter() {
    const [greeting,setGreeting] = useState("Hello There!")

    return(
        <div className="greeting-wrapper">
            <h1>{greeting}</h1>
            <button onClick={() => setGreeting(g => g === "Hello There!" ? "Goodbye :(" : "Hello There!")}>Toggle Me</button>
        </div>
    )
}
