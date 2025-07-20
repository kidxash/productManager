import express from "express"
import dotenv from "dotenv"
import connectDB from "./database.js";

dotenv.config();



const app = express();


app.post("/", async  (req res) => {
    const body = req.body;
    



})


app.listen(5000, () => {
    connectDB();
    console.log("Server started")

})
