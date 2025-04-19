import React from "react";
import { useState } from "react";
import ChildCompo from "../components/ChildCompo";

const Usecallback = () => {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>Count: {count}</div>

      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <div>
        <ChildCompo buttonName="Click me" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Usecallback;
