import React from "react";
import Anything from "./Anything";

const HelloWorldItem = () => {
  return <div>HelloWorld</div>;
};

const HelloWorld = ({ name }) => {
  const fruits = ["Apple", "Banana", "Cherry"];
  return (
    <div>
      <h1>Fruits</h1>
      <div>
        {fruits.map((fruit) => (
          <Anything name={fruit} />
        ))}
      </div>
    </div>
  );
};

export default HelloWorld;
