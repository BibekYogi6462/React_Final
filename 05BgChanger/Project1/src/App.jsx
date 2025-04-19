import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} //pailai duita braces xa tesiale pardaina color lai braces dina
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 pt-3 rounded-3xl">
          <button
            className="outline-none px-4m py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4m py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>

          <button
            className="outline-none px-4m py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
