import React, { useState } from 'react'


const ToggleComponent = () => {
    const [isVisible , setIsvisible] = useState(true); // => defining a new state varialbe
    // when the value of a state variable changes the component using the state variable re-renders
  
    return(
      <div>
        <button onClick={() => setIsvisible(!isVisible)}>Toggle Message</button>
        {isVisible &&  <h3>This message is being conditionally rendered</h3>}
      </div>
    )
}

export default ToggleComponent