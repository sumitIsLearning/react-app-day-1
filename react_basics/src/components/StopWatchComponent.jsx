import React, { useEffect, useState } from 'react'

const StopWatchComponent = () => {
    const [counter , setCounter] = useState(0);
    const [isStart, setIsStart] = useState(false);
  
  
    useEffect(() => {
      if(isStart) {
        console.log("clock Starts")
        const timeoutId = setInterval(() => {
          setCounter(counter => counter + 1);
        }, 1000);
        return function() {
          console.log("clock Stops")
          clearInterval(timeoutId);
        }
      }
  
    },[isStart])
  
    return(
      <div>
        <h2>{counter}</h2>
        <button onClick={() => setIsStart(true)}>Start</button>
        <button onClick={() => setIsStart(false)}>stop</button>
      </div>
    )
}

export default StopWatchComponent