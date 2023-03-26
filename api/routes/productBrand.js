import express from "express";
import {
  createBrandControllers,
  deleteSingleBrandControllers,
  getAllBrandControllers,
  getSingleBrandControllers,
  updateSingleBrandControllers,
} from "../controllers/productBrandControlers.js";
import { productBrandMulter } from "../utils/multer.js";

// express init
const route = express.Router();

// brand routes
route.get("/brand", getAllBrandControllers);
route.post("/brand", productBrandMulter, createBrandControllers);
route.get("/brand/:slug", getSingleBrandControllers);
route.delete("/brand/:id", deleteSingleBrandControllers);
route.put("/brand/:id", productBrandMulter, updateSingleBrandControllers);

// brand routes export
export default route;
