import React from "react";

const Anything = ({ name, deleteUser, button }) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => deleteUser(name)}>Delete User</button>
      {button}
    </div>
  );
};

export default Anything;
