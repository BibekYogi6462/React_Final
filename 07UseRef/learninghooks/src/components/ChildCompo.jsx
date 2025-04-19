import React from "react";

const ChildCompo = React.memo(({ buttonName, handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
});

export default ChildCompo;

//React.memo ma wrap garyo vane yo component rerender hudaina unnecesary jaba props change hunxa teti bela matra hunca.

//If you are sending a dunction but React.memo le rerender huna bata bachauna sakdaina.
