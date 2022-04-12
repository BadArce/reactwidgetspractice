import { useState } from "react";

export default function Hidden(){
    const [visible, setVisible] = useState(true)
    
    return(
        <div>
            <h1>{visible ? "Hide Me!" : ""}</h1>
            <button onClick={() => setVisible((v) => !v)}>
            {visible ? "DO IT" : "Bring me back!"}
            </button>
        </div>
    )
}