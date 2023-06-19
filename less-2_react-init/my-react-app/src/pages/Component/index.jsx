import React from "react";
import ChildComponent from "../../components/ChildComponent";

const Component = () => {
  return (
    <div>
      <h1>Simple Component</h1>
      <p>This is a Parent Component</p>
      <ChildComponent />
    </div>
  );
};

export default Component;
