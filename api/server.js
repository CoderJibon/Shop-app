import express from "express";
import dotenv from "dotenv";
import color from "colors";
import cors from "cors";
import productCategory from "./routes/productCategory.js";
import mongodbConnect from "./config/db.js";

//express init
const app = express();
dotenv.config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// environment variable
const PORT = process.env.PORT || 9090;

// static public
app.use(express.static("api/public"));

// routes
app.use("/api/v1/product", productCategory);

// server listen
app.listen(PORT, () => {
  mongodbConnect();
  console.log(`server running on Port : ${PORT}`.bgGreen.black);
});
