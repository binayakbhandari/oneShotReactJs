import { useState } from "react"
import Button from "../../components/Button"

function About(){
    const name = "Binayak"
    var count = 0

    const [number, setNumber] = useState(0)

    const increase = ()=>{
        setNumber(number+1)
    }
    const decrease = ()=>{
        setNumber(number-1)
    }
    return(
        <>
            <div>
                <h1>Welcome to About page</h1>
                <Button type="Learn More" />

                <h1>{number}</h1>
                <button onClick={decrease}>-</button>
                <button onClick={increase}>+</button>
            </div>
        </>
    )
}

export default About