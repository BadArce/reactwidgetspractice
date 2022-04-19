import { useState } from "react";

export default function Exponents(){
    const [root,setRoot] = useState(1);
    const [exp,setExp] = useState(1);
    const [frames,setFrames] = useState(0);
    const [disabled, setDisabled] = useState(false)

    function toggleFrames(){
        if (frames === 0) {
            setFrames(1)
            setDisabled(true)
        }
        else {
            setFrames(0)
            setRoot(0)
            setExp(0)
            setDisabled(false)
        }
    }

    
    function GetResult(){
        const Product = () => {
            let prod = 1;
            for (let i = 0; i < exp; i++){
                prod = prod*root
            }
            console.log(prod)
            return prod
        };

        if (exp < 0){
            return "Exponent cannot be less than 0, please try again."
        }
        else {
            return(
                <div>
                    <h3>result</h3>
                    <Product className="Result" />
                </div>
            )

        }
}

    return(
        <div className="exponent-calculator">
            <div style={{gridColumn:1}}>
                <h3>Root</h3>
                <input type="number" disabled={disabled} value={root} onChange={(e) => setRoot(e.target.value)}></input>
            </div>
            <div style={{gridColumn:2}}>
                <h3>Exponent</h3>
                <input type="number" disabled={disabled} value={exp} onChange={(e) => setExp(e.target.value)}></input>
            </div>
            <div style={{gridColumn:3}}>
                {frames === 0 ? "" : <GetResult />}
                <button onClick={() => toggleFrames()}>{frames === 0 ? "Submit" : "Reset"}</button>
            </div>
        </div>
    )
}