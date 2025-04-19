import React from "react";
import { useRef } from "react";

const Useref = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value, password.current);
  };
  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input type="text" name="" id="username" ref={username} />
      <br />
      <input type="text" name="" id="password" ref={password} />
      <br />
      <button>Submit</button>
    </form>
  );
};

export default Useref;
