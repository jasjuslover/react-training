import React, { useCallback, useEffect, useState } from "react";

let functionChanged = 0;

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  //   useEffect(() => {
  //     functionChanged++;
  //     console.log("Count changed:", functionChanged);
  //   }, [incrementCounter]);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;
