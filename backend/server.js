import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

// Middleware to parse JSON data from incoming requests from frontend or Postman
app.use(express.json());

// Using productRoutes from the productRoutes.js file to handle all the requests
app.use("/api/products", productRoutes);

app.listen(8000, () => {
  connectDB();
  console.log("Server running on port 8000");
});
