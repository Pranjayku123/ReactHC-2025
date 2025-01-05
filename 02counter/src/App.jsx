import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 10;
  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log("clicked", counter);
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>Chai aur counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
