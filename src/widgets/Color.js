import { useState } from 'react';

export default function Colors() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    let [colors,setColors] = useState(`rgb(${red},${green},${blue})`);
    function changeRed(e){
        setRed(e)
        changeColors()
    }
    function changeGreen(e){
        setGreen(e)
        changeColors()
    }
    function changeBlue(e){
        setBlue(e)
        changeColors()
    }
    function changeColors(){
        const newColor = `rgb(${red},${green},${blue})`
        setColors(newColor)
    }
    function hexify(num){
        return parseInt(num, 10).toString(16).toUpperCase().padStart(2,0)
        }

    return(
        <div>
            <h1 className="styler" style={{color: colors}}>Style me</h1>
            <div className="sliders">
                <div>
                    <input type="range" max="255" value={red} className="slider" id="Red" onInput={e => changeRed(e.target.value)}></input>
                    <h6>Red: {red}</h6>
                </div>
                <div>
                    <input type="range"  max="255" value={green} className="slider" id="Green" onInput={e => changeGreen(e.target.value)}></input>
                    <h6>Green: {green}</h6>
                </div>
                <div>
                    <input type="range"  max="255" value={blue} className="slider" id="Blue" onInput={e => changeBlue(e.target.value)}></input>
                    <h6>Blue: {blue}</h6>
                </div>
            </div>
            <h2>#{hexify(red)+hexify(green)+hexify(blue)}</h2>
        </div>
    )}