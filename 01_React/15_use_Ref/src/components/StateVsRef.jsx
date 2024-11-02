import React, { useState, useRef } from 'react'

const StateVsRef = () => {

    console.log("Repaint StateVsRef Component");

    const [stateClick, setStateClick] = useState(0);
    const refClick = useRef(0);

    const onStateClickHandler = () => {
        console.log("State Clicked");
        // setStateClick(stateClick + 1);
        setStateClick(currentValue => currentValue + 1);
    }
    
    const onRefClickHandler = () => {
        console.log("Ref Clicked");
        refClick.current++;
    }

  return (
    <>
        <div className="text-center mt-3">
            <h1>State Clicked: {stateClick}</h1>
            <h1>Ref Clicked: {refClick.current}</h1>
            <button onClick={onStateClickHandler}>State</button>
            <button onClick={onRefClickHandler}>Ref</button>
    </div>
    </>
  )
}

export default StateVsRef