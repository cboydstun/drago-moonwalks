import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import inventoryRoute from "./routes/inventoryRoute.js";
import loginRoute from "./routes/loginRoute.js"
import cors from "cors";
import bookingRoute from "./routes/bookingRoute.js";


//Express boiler plate
const app = express();
app.use(express.json());
app.use(cors());

//Routers
app.use(inventoryRoute);
app.use(loginRoute);
app.use(bookingRoute);

app.listen(process.env.PORT, () => {
    console.log(`App is now listening on port' ${process.env.PORT}.`)
});

//MongoDB boilerplate
mongoose.connect(process.env.MONGODB_CONNECTION_URL);
const db = mongoose.connection;

db.once("open", ()=> {
    console.log("Database is connected")
});




