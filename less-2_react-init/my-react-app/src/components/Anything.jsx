import React from "react";

const Anything = ({ name, deleteUser }) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => deleteUser(name)}>Delete User</button>
    </div>
  );
};

export default Anything;
