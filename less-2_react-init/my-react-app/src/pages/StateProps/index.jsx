import React from "react";

const StateProps = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State Props - Counter App</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default StateProps;
