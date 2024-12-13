import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Root from "./routes/root.jsx";
import Inventory from "./components/Inventory.jsx";
import React from 'react'
import Login from "./components/Login.jsx";

import Booking from "./components/Booking.jsx";
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useRef } from "react";



function App () {

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
          path: "booking",
          element: <Booking></Booking>
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

