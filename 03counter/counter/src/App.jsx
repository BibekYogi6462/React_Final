import React from "react";
import { useState } from "react";

const App = () => {
  // let counter = 5;

  const [counter, setCounter] = useState(15);
  const incrementValue = () => {
    setCounter(counter + 1);
  };
  const decrementValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Counter Value: {counter}</h1>
      <br />
      <button onClick={incrementValue}>Increment Value</button>
      <button onClick={decrementValue}>Decrement Value</button>
    </div>
  );
};

export default App;
