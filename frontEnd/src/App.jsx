import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Root from "./routes/root.jsx";
import Inventory from "./components/Inventory.jsx";
import React from 'react'
import Login from "./components/Login.jsx";
import Booking from "./components/Booking.jsx";
import Contact from "./components/Contact.jsx";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useRef } from "react";



//good routing
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>, 
      children: [
        {
          path: "inventory",
          element: <Inventory></Inventory>
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "all",
          element: <Inventory></Inventory>
        },
        {
          path: "booking",
          element: <Booking></Booking>
        },
        {
          path: "contact",
          element: <Contact></Contact>
        }
      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};


export default App

