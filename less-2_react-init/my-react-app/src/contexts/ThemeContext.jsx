import { createContext, useEffect, useReducer, useState } from "react";

const ThemeContext = createContext({});

const initialState = {
  todos: [],
};

const actions = {
  ADD_TODO: "add_todo",
  REMOVE_TODO: "remove_todo",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo !== action.payload),
      };

    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  const [user, setUser] = useState(null);

  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const value = {
    isLight,
    user,
    setIsLight,
    setUser,
    state,
    dispatch,
  };

  return (
    <div>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, actions };
export default ThemeProvider;
