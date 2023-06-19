import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Counter from "./components/Count";
import ReverseString from "./components/ReverseString";
// import Factorial from "./components/Factorial";
import FetchApi from "./components/FetchApi";
import CounterProvider from "./contexts/CounterContext";
import Theming from "./components/Theming";
import Login from "./components/Login";

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{ display: "flex", columnGap: ".5rem", flexDirection: "column" }}
    >
      {/* <input type={showPassword ? "text" : "password"} />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"} Password
      </button> */}
      {/* <Users /> */}
      {/* <Counter /> */}
      {/* <CounterProvider>
        <Counter />
      </CounterProvider> */}
      {/* <ReverseString /> */}
      {/* <Factorial /> */}
      <FetchApi />
      {/* <Login />
      <Theming /> */}
    </div>
  );
};

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
