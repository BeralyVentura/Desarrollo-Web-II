import {useState } from "react"

const CounterApp=({initialValue})=>{
    const [counter,setCounter]= useState(initialValue);

    function handleAdd(){
        setCounter(counter+1);
    }

    function handleSubstract(){
        setCounter(counter-1);
    }

    function handleReset(){
        setCounter(initialValue);
    }

    return(
        <>
            <h1> {counter} </h1>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleSubstract}>-1</button>
            <button>Reset</button>
        </>
    )
}

export default CounterApp;
