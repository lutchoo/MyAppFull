import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavBar from "./components/NavBar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import DashBoard from "./components/DashBoard.jsx";
import Movies from "./pages/Movies.jsx";
import Show from "./components/Show.jsx";
import Search from "./components/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashBoard",
    element: <DashBoard />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/show/:id",
    element: <Show />,
  },
  {
    path: "/search/:query",
    element: <Search />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
