import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `The Database Is Successfully Connected : ${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Error Has Occured While Connecting To DB : ${error}`);
    process.exit(1);
  }
};

export default connectDB;
