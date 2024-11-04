import React from "react";
import { useReducer, useState, useRef } from "react";

// const counterReducer = (currentState, action) => {
//   console.log("Paint Reducer", currentState, action);

//   let newState = currentState;

//   if (action.type === "INCREMENT") {
//     return (newState += 1);
//   } else if (action.type === "DECREMENT") {
//     if (newState === 0) {
//       return newState;
//     }
//     return (newState -= 1);
//   }

//   return newState;
// };

const counterReducer = (currentState, action) => {
  console.log("Paint Reducer", currentState, action);

  let newState = currentState;

  switch (action.type) {
    case "INCREMENT":
      newState += 1;
      break;
    case "DECREMENT":
      if (newState > 0) {
        newState -= 1;
      }
      break;
    case "RESET":
      newState = 0;
      break;
    case "DOUBLE":
      newState *= 2;
      break;
    case "changeBy":
      // newState += parseInt(action.payload.value);
      newState = parseInt(action.payload.value);
      break;
    default:
      break;
  }

  return newState;
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

  const initialValue = 0;
  const [counterValue, counterDispatch] = useReducer(
    counterReducer,
    initialValue
  );

  const changeByInputRef = useRef(null);

  const handleIncrement = () => {
    // console.log("Increment Clicked");

    counterDispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    // console.log("Decrement Clicked");

    counterDispatch({ type: "DECREMENT" });
  };

  const handleChangeByInput = () => {

    const value = changeByInputRef.current.value;
    changeByInputRef.current.value = "";

    counterDispatch({
      type: "changeBy",
      // payload: {
      //   value: changeByInputRef.current.value,
      // }
      payload: { value},
    })
  }

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
        <button
          className="bg-blue-500 text-white font-semibold px-3 py-1 border border-blue-900 rounded"
          onClick={() => counterDispatch({ type: "DOUBLE" })}
        >
          Double
        </button>
        <button
          className="bg-blue-500 text-white font-semibold px-3 py-1 border border-blue-900 rounded"
          onClick={() => counterDispatch({ type: "RESET" })}
        >
          Reset
        </button>
        <button
          className="bg-blue-500 text-white font-semibold px-3 py-1 border border-blue-900 rounded"
          onClick={handleChangeByInput}
        >
          Change By
        </button>
        <input type="text" placeholder="Enter The Number" id="changeByInput" name="changeByInput" ref={changeByInputRef} className="text-black rounded border border-black px-3"/>
      </div>
    </>
  );
}

export default App;
