import React, { useContext, useState } from "react";
import { ThemeContext, actions } from "../contexts/ThemeContext";

const Login = () => {
  const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");

  const { dispatch } = useContext(ThemeContext);

  const onSubmit = () => {
    if (name) {
      dispatch({ type: actions.ADD_TODO, payload: name });
      //   const user = { name, email };
      //   setUser(user);
      return;
    }

    alert("name is required");
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Login</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      {/* <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> */}
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Login;
