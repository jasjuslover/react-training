import React from "react";

const ChildComponent = ({ props }) => {
  return (
    <div>
      <div>This is a Child Component</div>
      <div>It also can receive a {props}</div>
    </div>
  );
};

export default ChildComponent;
