import { Schema, model } from "mongoose";

const inventorySchema = new Schema({


    title: {

        type: String,
        required: true,
        unique: true
    },

    price: {
        type: Number,
        required: true
    },

    public_id: {
        type: String,
        required: true
    },
  
    category: {
        type: String,
        required: true
    },
});

export default model ("Inventory", inventorySchema)