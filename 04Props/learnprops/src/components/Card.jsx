import React from "react";
import ButtonComp from "./ButtonComp";

const Card = ({ username, cardnum = "Default" }) => {
  const myfunction = () => {
    alert("Hello World");
  };

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-yellow-100">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-green-400">
          Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">Card {cardnum}</h2>
      </div>
      <p className="text-black-300">This is the first card</p>
      <p>{username}</p>
      <ButtonComp onButton={myfunction} />
    </div>
  );
};

export default Card;
