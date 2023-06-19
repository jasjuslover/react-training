import { createContext, useState } from "react";

const CounterContext = createContext({});

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (
    <div>
      <CounterContext.Provider value={value}>
        {children}
      </CounterContext.Provider>
    </div>
  );
};

export { CounterContext };
export default CounterProvider;
