import React from "react";
import Try from "./try";

const App = () => {
  const username = "Bibek";
  return (
    <>
      <Try />
      <h1>Hello world</h1>
      <p>Hello world 1</p>
      <p>{username}</p>
    </>
  );
};

export default App;
