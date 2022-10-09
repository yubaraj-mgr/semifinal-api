import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const constStr = process.env.MONGO_CLIENT;
    if (!constStr) {
      return console.log(
        "There is no connection string available in process.env.MONGO_CLIENT"
      );
    }
    const conn = mongoose.connect(constStr);
    conn && console.log("Mongodb connected");
  } catch (error) {
    console.log(error);
  }
};
