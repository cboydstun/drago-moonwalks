import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Root from "./routes/root.jsx";
import Inventory from "./components/Inventory.jsx";
import React from 'react'
import Login from "./components/Login.jsx";
// import { Cloudinary } from '@cloudinary/url-gen';
// import { auto } from '@cloudinary/url-gen/actions/resize';
// import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
// import { AdvancedImage } from '@cloudinary/react';

//Cloudinary
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useRef } from "react";

function AppIm() {
  const containerRef = useRef(null); 
  useEffect(() => {
    if(window && containerRef.current) {
      window.Cloudinary.galleryWidget({
        container: containerRef.current, 
        cloudName: "dowgufc1f",
        mediaAssets: [{tag: "gallary-images"}],

      }).render();
    }
  }, []);

  return <div ref={containerRef} style={{ width: "1200px", margin: "auto"}} />;
}
  







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
          element: <Login></Login>
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};


export default App

