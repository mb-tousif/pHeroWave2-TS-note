import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL as any;
mongoose.set("strictQuery", true);

const ConnectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("🗂️ MongoDB Server is Running");
  } catch (error) {
    console.log("💥 Error while connecting with DB 🚦");
    // console.log(error);
  }
};

export default ConnectDB;