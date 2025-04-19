import React from "react";
import Card from "./components/Card";
import ButtonComp from "./components/ButtonComp";

const App = () => {
  // let myobj = {
  //   username: "Bibek",
  //   class: "hellow",
  // };
  // let array = [12, 2535];
  return (
    <div className="flex p-2 m-1 gap-5">
      <Card username="Bibek" cardnum={1} />
      <Card username="Rahul" cardnum={2} />
    </div>
  );
};

export default App;
