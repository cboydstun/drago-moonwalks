import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Root from "./routes/root.jsx";
import Inventory from "./components/Inventory.jsx";
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

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
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App


  const cld = new Cloudinary({ cloud: { cloudName: 'ddfg63i66' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);