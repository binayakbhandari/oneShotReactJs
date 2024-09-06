import { useState } from "react"
import Button from "../../components/Button"

function About(){
    const name = "Binayak"
    var count = 0
    console.log(useState())
    // const firstItem = useState()[0]
    // const secondItem = useState()[0]
    // const [firstItem, secondItem] = useState(100)
    // const [number, setNumber] = useState(0)
    const state = useState({})
    const number = state()[0]
    const setNumber = state(0)[1]
    
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