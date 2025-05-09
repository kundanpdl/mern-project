import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

// Creating a router that will handle all the requests to the different endpoints
const router = express.Router();

// To display all the products in the database
router.get("/", getProducts);

// Async function because we wait for user to send data
router.post("/", createProduct);

router.put("/:id", updateProduct);

//Async function because we wait for user to send id for deletion of a product
router.delete("/:id", deleteProduct);

export default router;
