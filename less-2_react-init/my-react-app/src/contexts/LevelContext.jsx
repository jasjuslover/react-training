import { createContext } from "react";

const LevelContext = createContext(1);

const LevelProvider = ({ level, children }) => {
  return (
    <div>
      <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
    </div>
  );
};

export { LevelContext };
export default LevelProvider;
