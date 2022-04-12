import { useState } from "react";

export default function Resize(){
    const [size, setSize] = useState("50px")
    const fontSize = {
        fontSize: size
    }
    
    return(
        <div>
            <p style={fontSize}>Just ask Alice</p>
            <button onClick={() => setSize("5px")}>Tiny</button>
            <button onClick={() => setSize("30px")}>Small</button>
            <button onClick={() => setSize("50px")}>Medium</button>
            <button onClick={() => setSize("90px")}>Large</button>
        </div>
    )
}