import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //   if the database is already connected, don't want to connect again

  if (connected) {
    console.log("MongoDb is already connected...");
    return;
  }

  //Connect to MongoDb
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
