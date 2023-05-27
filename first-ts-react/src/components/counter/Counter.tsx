import React, { useEffect, useState } from "react"

export const Counter : React.FC<{}> = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `User has been clicked ${count} times`;
    })

    const handleClickCounter = (value : number) => {
        setCount(count + value);
    }

    return(
    <>
    <h1>Count: {count}</h1>
    <button onClick={() => handleClickCounter(1)}>+</button>
    <button onClick={() => handleClickCounter(-1)}>-</button>
    </>)
}