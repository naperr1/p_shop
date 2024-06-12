import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOOSE_URL);
    console.log(`Connecting to ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
