import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the React frontend app
const __dirname = path.resolve();

dotenv.config();

// Middleware to parse JSON data from incoming requests from frontend or Postman
app.use(express.json());

// Using productRoutes from the productRoutes.js file to handle all the requests
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server running on port: ", PORT);
});
