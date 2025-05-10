import Product from "../models/productModel.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    // Find all the products in the database using the Product model. ({)) means find all the products
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // Data sent by user
  if (!product.name || !product.price || !product.image) {
    res.status(400).json({ message: "Please fill in all the fields" });
  }
  // Create new product with the schema created in productModel.js
  const newProduct = new Product(product);

  try {
    // Save the product in the database asynchronously
    await newProduct.save();
    // If save is successful, send success response
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  // We get id from the request prameters. It is equivalent to const id = req.params.id;
  const { id } = req.params;
  // We get the product data from the request body.
  const product = req.body;

  // Check if the id is valid using mongoose.Types.ObjectId.isValid method. If not, send 404 error
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }
  try {
    // The new:true option is used to return the updated document instead of the original document
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error in updating product: ", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  // We get id from the request prameters. It is equivalent to const id = req.params.id;
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid ID" });
  }
  try {
    // Wait for the product to be deleted using the id and findByIdAndDelete method
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Deletion successful" });
  } catch (error) {
    console.log("Error in deleting Product: ", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
