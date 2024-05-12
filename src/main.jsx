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
import MyFood from "./Pages/MyFood";
import UpdateFood from "./Components/UpdateFood";
import FoodRequest from "./Pages/FoodRequest";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
      {
        path: "/myFood",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateFood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood></UpdateFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/update/${params.id}`),
      },
      {
        path: "/request",
        element: (
          <privateRoute>
            <FoodRequest></FoodRequest>
          </privateRoute>
        ),
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
