import { useState } from "react";

export default function Swapi(){
    const [query,setQuery] = useState({})
    const [world,setWorld] = useState({})
    const [qInput,setQInput] = useState(1)
    const [submitted,setSubmitted] = useState(false)
    // let failure = false

    const FormattedQuery = () => {
        // if (failure === true) {
        //     return(<h2>I'm sorry, that number is out of range. Please try a different number(Between 1-83)</h2>)
        // }

        //  else {
            return(
             <div className="grid-3">
                    <h2>Name: {query.name}</h2>
                    <h2>Gender: {query.gender}</h2>
                    <h2>Height: {query.height}</h2>
                    <h2>Mass: {query.mass}</h2>
                    <h2>Birth Year: {query.birth_year}</h2>
                    <h2>Homeworld: {world.name}</h2>
                    <button onClick={() => setSubmitted(false)}>Reset</button>
                </div>
            )}
    

    async function worldQuery(qry) {
        const foundWorld = await fetch(qry.result.properties.homeworld)
            .then(res => res.json())
            .catch(err => console.log(err))
        setWorld(foundWorld.result.properties)
    }

    async function getQuery(event,qry){
        event.preventDefault()
        const found = await fetch(`https://www.swapi.tech/api/people/${qry}`)
            .then(res => res.json())
            .catch(err => console.log(err))
        setQuery(found.result.properties)
        
        await worldQuery(found)

        setSubmitted(true)
    }

    return(
        <div className="swapi-container">
            <h1>Swapi Query</h1>
            <form onSubmit={(e) => getQuery(e, qInput)}>
                <label>Please input a number: 
                <input type="number" value={qInput} onChange={e => setQInput(e.target.value)} disabled={submitted}/>
                </label>
                <input type="submit" value="submit" disabled={submitted}/>
            </form>
                {submitted  && <FormattedQuery />}
        </div>
    )
}