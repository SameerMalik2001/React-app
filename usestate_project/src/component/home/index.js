import React, {useState} from "react";

function Usehook(){
    let [counter, setcounter] = useState(5)
    let [varaible, setvaraible] = useState(5)

    const increment = () =>{
        if(counter < 30 && counter + varaible <= 30) {
            counter = counter + varaible
            setcounter(counter)
        }
    }
    const decrement = () =>{
        if (counter > 0 && counter - varaible >= 0) {
            counter = counter - varaible
            setcounter(counter)
        }
    }

    const incrementBy = () =>{
        if(varaible < 10) {
            varaible = varaible + 1
            setvaraible(varaible)
        }
    }

    const decrementBy = () =>{
        if(varaible > 0) {
            varaible = varaible - 1
            setvaraible(varaible)
        }
    }

    return(
        <>
            <h1>Increment/Decrement this:-</h1>
            <h3>counter : {counter}</h3>
            <button onClick={increment}>Increment by {varaible}</button>
            <button onClick={decrement}>Decrement by {varaible}</button>
            <h1>control the increment/decrement size below:-</h1>
            <h3>Increment by : {varaible}</h3>
            <button onClick={incrementBy}>Increment</button>
            <button onClick={decrementBy}>Decrement</button>
        </>
    )
}

export default Usehook