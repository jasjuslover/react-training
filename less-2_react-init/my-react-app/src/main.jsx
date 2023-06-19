import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Users from "./components/Users.jsx";
import DetailDrink from "./components/DetailDrink.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":id",
    element: <DetailDrink />,
  },
  {
    path: "/user",
    children: [
      {
        path: "",
        element: <div>User</div>,
      },
      {
        path: "add",
        element: <div>User Add</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/user" element={<Users />} />
//     </Routes>
//   </BrowserRouter>
// );
