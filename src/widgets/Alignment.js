import { useState } from "react";

export default function Alignment(){
    const [align, setAlign] = useState("center")
    const alignment = {
        textAlign: align
    }

    return(
        <div>
            <h1 style={alignment}>Cha Cha Real Smooth</h1>
            <button onClick={() => setAlign("left")}>Left</button>
            <button onClick={() => setAlign("center")}>Center</button>
            <button onClick={() => setAlign("right")}>Right</button>
        </div>
    )
}