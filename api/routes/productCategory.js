import express from "express";
import { productCategoryMulter } from "../utils/multer.js";
import {
  createCategoryControllers,
  getAllCategoryControllers,
  getSingleCategoryControllers,
  updateSingleCategoryControllers,
  deleteSingleCategoryControllers,
} from "../controllers/productCategoryControllers.js";

// express init
const route = express.Router();

// category routes
route.get("/category", getAllCategoryControllers);
route.post("/category", productCategoryMulter, createCategoryControllers);
route.get("/category/:slug", getSingleCategoryControllers);
route.delete("/category/:id", deleteSingleCategoryControllers);
route.put(
  "/category/:id",
  productCategoryMulter,
  updateSingleCategoryControllers
);

// category routes export
export default route;
