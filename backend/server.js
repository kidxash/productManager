import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";
import product from "../Productmodels.js";
import cors from "cors";

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());


// Create product
app.post("/products", async (req, res) => {
    const info = req.body;
    if (!info) {
        return res.status(400).json({ success: false, message: "Give Title" });
    }
    const newitem = product(info);
    try {
        await newitem.save();
        res.status(201).json({ success: true, data: newitem });
    } catch (error) {
        console.error("Error in creating new item", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Delete product
app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Item deleted" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// Get all products
app.get("/products", async (req, res) => {
    try {
        const item = await product.find({});
        res.status(200).json({ success: true, data: item });
    } catch (error) {
        console.log("error", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});



app.listen(5000, () => {
    connectDB();
    console.log("Server started")

})
