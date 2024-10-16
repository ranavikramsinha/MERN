import { useState } from "react";
import Display from "./components/display"
import NumberPad from "./components/numberPad"


function App() {

  const [displayVal, setDisplayVal] = useState('');

  return (
    <>
      {/* <div className="text-3xl font-bold">Calculator</div> */}
      {/* <Display textToShow = {displayVal}/> */}
      <NumberPad displayVal = {displayVal} setDisplayVal = {setDisplayVal} />
    </>
  )
}

export default App
