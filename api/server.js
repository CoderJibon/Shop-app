import express from "express";
import dotenv from "dotenv";
import color from "colors";
import cors from "cors";
import productCategory from "./routes/productCategory.js";
import productBrand from "./routes/productBrand.js";
import productTag from "./routes/productTag.js";
import products from "./routes/products.js";
import mongodbConnect from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

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
app.use("/api/v1/product", productBrand);
app.use("/api/v1/product", productTag);
app.use("/api/v1/product", products);

//error handler
app.use(errorHandler);

// server listen
app.listen(PORT, () => {
  mongodbConnect();
  console.log(`server running on Port : ${PORT}`.bgGreen.black);
});
