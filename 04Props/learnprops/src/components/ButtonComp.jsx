import React from "react";

const ButtonComp = ({ onButton: click }) => {
  return (
    <div>
      <button className="bg-blue-200" onClick={click}>
        Click
      </button>
    </div>
  );
};

export default ButtonComp;
