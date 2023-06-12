import React from "react";
import Anything from "./Anything";
import useUsers from "../hooks/useUsers";

const Users = () => {
  const { users, deleteUser } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {users.map((user) => (
          <Anything name={user} deleteUser={deleteUser} />
        ))}
      </div>
    </div>
  );
};

export default Users;
