import express from "express";
import dotenv from "dotenv";
import color from "colors";

//express init
const app = express();
dotenv.config();

// environment variable
const PORT = process.env.PORT || 9090;
app.use(express.json());

// server listen
app.listen(PORT, () => {
  console.log(`server running on Port : ${PORT}`.bgGreen.black);
});
