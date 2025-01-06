import { json, Router } from "express";
import Inventory from '../models/inventory.js';

const router = Router();

// Gets inventory by ID
router.get("/inventory/:id", async (req, resp) => {
    const { id } = req.params;
    try {
        const inventory = await Inventory.findById(id);
        
        if (!inventory) {
            return resp.status(404).json({
                response: "Item not found"
            });
        }

        resp.json({
            response: "Request Successful",
            inventory
        });
    } catch (error) {
        console.log(error.message);
        resp.status(400).json({
            response: error.message
        });
    }
});

// Gets all inventory items
router.get("/inventory", async (req, res) => {
    try {
        const inventoryItems = await Inventory.find();
      
        res.json({
            response: "This is the entire inventory",
            inventoryItems
        });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error fetching items.",
            error: error.message
        });
    }
});

// Creates a new inventory item
router.post("/addInventory", async (req, res) => {
    try {
        const newInventory = new Inventory({
            title: req.body.title,
            price: req.body.price,
            public_id: req.body.public_id,
            category: req.body.category,
        });

        const inventory = await newInventory.save();

        res.json({
            response: "New item added!",
            inventory
        });

    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            response: "Error adding item.",
            error: error.message
        });
    }
});

// Updates an existing inventory item
router.put("/inventory/:id", async (req, resp) => {
    const { id } = req.params;
    const { title, price, public_id } = req.body;

    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(id, {
            title,
            price,
            public_id,
            category,
        }, { new: true });

        if (!updatedInventory) {
            return resp.status(404).json({
                response: "Item not found"
            });
        }

        resp.json({
            response: "Item has been updated!",
            updatedInventory
        });

    } catch (error) {
        console.log(error.message);
        resp.status(400).json({
            response: error.message
        });
    }
});

//Gets Inventory by category

router.get("/inventory/category/:category", async (req, res) => {
    const { category } = req.params;
    try {
        const inventoryItems = await Inventory.find({ category });

        if (inventoryItems.length === 0) {
            console.log(`No inventory found for category: ${category}`)
        }
        res.json({
            response: `Inventory items in category: ${category}`,
            inventoryItems
        });
    } catch(error) {
        console.log(error.message)
        res.status(400).json({
            response: "Error fetching items by category.",
            error: error.message
        });
    }
});

// Deletes an inventory item
router.delete("/inventory/:id", async (req, resp) => {
    const { id } = req.params;

    try {
        const deleteInventory = await Inventory.findByIdAndDelete(id);

        if (!deleteInventory) {
            return resp.status(404).json({
                message: "Item was not found"
            });
        }

        resp.json({
            response: "Item has been deleted!"
        });
    } catch (error) {
        console.log(error.message);
        resp.status(400).json({
            response: "Error deleting item.",
            error: error.message
        });
    }
});

export default router;

