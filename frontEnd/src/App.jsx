import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Root from "./routes/root.jsx";
import Inventory from "./components/Inventory.jsx";
import React from 'react'
import Login from "./components/Login.jsx";

//Cloudinary
import { useEffect, useRef } from "react";

import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import {fill} from "@cloudinary/url-gen/actions/resize";
import OneImage from "./components/OneImage.jsx";






//good routing
function App() {

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dowgufc1f"
    }
  });

  const myImage = cld.image('yellow_and_black_dragos_moonwalks_xm1kc5').format('auto').quality('auto').resize(auto().gravity(autoGravity()).width(500).height(500));



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
          element: <Login></Login>
        },
        {
          path: "all",
          element: <OneImage></OneImage>
        },
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

