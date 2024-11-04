import React from "react";
import { useReducer, useState } from "react";

const counterReducer = (currentState, action) => {

  let newState = currentState;

  if(action.type === "INCREMENT"){
    return newState + 1;
  }
  else if(action.type === "DECREMENT"){
    if(newState === 0){
      return newState;
    }
    return newState - 1;
  }
};

function App() {
  // const [counterValue, setCounterValue] = useState(0);

  // const handleIncrement = () => {
  //   console.log("Increment Clicked");
  //   setCounterValue(counterValue + 1);
  // }

  // const handleDecrement = () => {
  //   console.log("Decrement Clicked");
  //   if (counterValue > 0){
  //     setCounterValue(counterValue - 1);
  //   }
  // }

  const [counterValue, counterDispatch] = useReducer(counterReducer, 0);

  const handleIncrement = () => {
    console.log("Increment Clicked");

    counterDispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    console.log("Decrement Clicked");

    counterDispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <div className="text-5xl font-bold text-center">
        Count : {counterValue}
      </div>
      <div className="flex flex-wrap justify-center text-xl gap-1 mt-3">
        <button
          className="bg-blue-500 text-white font-semibold px-3 py-1 border border-blue-900 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white font-semibold px-3 py-1 border border-blue-900 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
