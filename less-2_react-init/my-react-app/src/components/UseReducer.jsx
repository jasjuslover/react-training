import React, { useReducer } from "react";

const initialState = { count: 0 };

const actions = {
  INCREMENT_COUNTER: "increment_counter",
  DECREMENT_COUNTER: "decrement_counter",
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };
    case actions.DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>UseReducer</h1>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({ type: actions.INCREMENT_COUNTER })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: actions.DECREMENT_COUNTER })}>
        Increment
      </button>
    </div>
  );
};

export default UseReducer;
