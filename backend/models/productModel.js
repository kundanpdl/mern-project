import mongoose from "mongoose";

// Creating a schema for product model.
// We use this model to save the product data in MongoDB using mongoose.
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    // For created at and updated at timestamps.

    timestamps: true,
  }
);

// Creating the Product model using the schema we created above.
const Product = mongoose.model("Product", productSchema);

// Exporting so that we can use it in other files.
export default Product;
