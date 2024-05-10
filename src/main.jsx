import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Pages/Authentication/Login";
import Register from "./Pages/Authentication/Register";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./Components/ErrorPage";
import AddFood from "./Pages/AddFood";
import FoodDetails from "./Components/FoodDetails";
import PrivateRoute from "./Routes/PrivateRoute";
import AvailableFood from "./Pages/AvailableFood";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/food"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/food/${params.id}`),
      },
      {
        path: "/availableFood",
        element: <AvailableFood></AvailableFood>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
