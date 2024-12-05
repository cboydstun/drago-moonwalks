import { Schema, model } from "mongoose";

const inventorySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true,
    },
    
    price: {
        type: Number,
        required: true
    },

});

export default model ("Inventory", inventorySchema)