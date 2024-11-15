import { Schema, model } from "mongoose";

const inventorySchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
    },
    
    price: {
        type: Number,
        required: true
    },

});

export default model ("Inventory", inventorySchema)