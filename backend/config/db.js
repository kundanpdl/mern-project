import mongoose from "mongoose";

// Function to connect to MongoDB using Mongoose
export const connectDB = async () => {
  // async function used because we are waiting for a connection
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error: ", error.message);
    process.exit(1); // code 1 indicates a failure
  }
};
