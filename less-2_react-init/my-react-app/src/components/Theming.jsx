import React, { useContext } from "react";
import { ThemeContext, actions } from "../contexts/ThemeContext";

const Theming = () => {
  const { isLight, setIsLight, user, state, dispatch } =
    useContext(ThemeContext);
  const { todos } = state;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: isLight ? "white" : "black",
        color: isLight ? "black" : "white",
      }}
    >
      {JSON.stringify(user)}
      <h1>Theming</h1>
      <button onClick={() => setIsLight(!isLight)}>Change Theme</button>
      <div style={{ marginTop: "30px" }}>
        {todos && todos?.length
          ? todos.map((todo) => (
              <div>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    dispatch({ type: actions.REMOVE_TODO, payload: todo });
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Theming;
