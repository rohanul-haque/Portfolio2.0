import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      `${process.env.DATABASE_CONNECTION_STRING}/portfolio`
    );
    console.log("✅ Database Connection successful.");
  } catch (error) {
    console.error("❎ Database Connection failed!");
    process.exit(1);
  }
};

export default ConnectDB;
