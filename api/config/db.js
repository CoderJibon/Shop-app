import mongoose from "mongoose";

//create mongodb co
const mongodbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connection Successfully..".bgCyan.black);
  } catch (error) {
    console.log("Database connection Failed..".bgRed.white);
  }
};

// database export
export default mongodbConnect;
