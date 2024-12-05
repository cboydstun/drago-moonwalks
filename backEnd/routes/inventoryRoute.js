import { json, Router } from "express";
import Inventory from '../models/inventory.js';

const router = Router();

router.get("/inventory/:id", async (req, resp) => {
    const { roomId } = req.params;
    try {
        const messages = await Message.find({ room: roomId });
        
        resp.send({
            response: "Request Successful",
            messages
        });
    } catch (error){
        console.log(error.message)
        resp.status(400).json({
            response: error.message
        });
    }
});

//returns inventory
router.get("/inventory", async (req, res) => {
    try {
        const inventoryItems = await Inventory.find();

        res.send({
            response: "this is the entire inventory",
            inventoryItems
        })
    } catch (error) {
        console.log(error.message);
        res.status(400).send({
            response: "Item Not Found.",
            error: error.message
        });
    }
})

//Creates New Inventory Item
router.post("/addInventory", async (req, res) => {
    try {
        const newInventory = new Inventory ({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        });
        const inventory = await newInventory.save();

        res.send({
            response: "New Item is added!",
            inventory
        });

    } catch (error) { 
        console.log(error.message);
        res.status(400).send({
            response: "Item Not Found.",
            error: error.message
        });
    }
});

//updates existing inventory
router.put("/inventory/:id", async (req, resp) => {
    const { id } = req.params;
    const { body } = req.body; //updates just the body inventory
    try {
        const updateInventory = await Inventory.findByIdAndUpdate(id, { body }, { new: true }); //finds a room by Id, then updates and saves the new body inventory

        resp.send({
            response: "Item has been updated!",
            updateInventory
        });

        if(!updateInventory) {
            resp.send({
                response: "Item was not found!"
            })
        }
    } catch (error) {
        console.log(error.message)
        resp.status(400).json({
            response: error.message
        });
    }
});

//deletes an Item
router.delete("/inventory/:id", async (req, resp) => {
    const { id } = req.params;
    const deleteInventory = await Inventory.findByIdAndDelete(id);

    resp.send({
        response: "Item has been deleted!"
    });

    if (!deleteInventory) {
        resp.send({
            message: "Item was not found!"
        });
    }
});

export default router;
