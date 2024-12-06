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

//Cloudinary configure
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dowgufc1f',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

cloudinary.uploader.upload
