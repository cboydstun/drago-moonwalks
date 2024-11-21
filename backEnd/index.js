import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
// import testRoute from "./routes/testRoute.js"
import inventoryRoute from "./routes/inventoryRoute.js";
import cors from "cors";
import { v2 as cloudinary } from 'cloudinary';

//Express boiler plate
const app = express();
app.use(express.json());
app.use(cors());

//Routers
app.use(inventoryRoute);

app.listen(process.env.PORT, () => {
    console.log(`App is now listening on port' ${process.env.PORT}.`)
});

//MongoDB boilerplate
mongoose.connect(process.env.MONGODB_CONNECTION_URL);
const db = mongoose.connection;

db.once("open", ()=> {
    console.log("Database is connected")
})


(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'ddfg63i66', 
        api_key: '138177872797538', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();