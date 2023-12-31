import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Users from "./components/Users.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch(
            "https://user-system-management-server-pcnp77hpm.vercel.app/users"
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(
            `https://user-system-management-server-pcnp77hpm.vercel.app/users/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
