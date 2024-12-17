import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Root from "./routes/root.jsx";
import Inventory from "./components/Inventory.jsx";
import React from 'react'
import Login from "./components/Login.jsx";
import Contact from "./components/Contact.jsx";
import Booking from "./components/Booking.jsx";
import Admin from "./components/Admin.jsx";

function App () {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>, 
      children: [
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "booking",
          element: <Booking></Booking>
        },
        {
          path: "all",
          element: <Inventory></Inventory>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        },
        {
          path: "admin",
          element: <Admin></Admin>
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router}>
      {/* <AdvancedImage cldImg={myImage}></AdvancedImage> */}

    </RouterProvider>
  );
};


export default App

