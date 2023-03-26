import express from "express";
import {
  createTagControllers,
  deleteSingleTagControllers,
  getAllTagControllers,
  getSingleTagControllers,
  updateSingleTagControllers,
} from "../controllers/productTagControlers.js";

// express init
const route = express.Router();

// category routes
route.get("/tag", getAllTagControllers);
route.post("/tag", createTagControllers);
route.get("/tag/:slug", getSingleTagControllers);
route.delete("/tag/:id", deleteSingleTagControllers);
route.put("/tag/:id", updateSingleTagControllers);

// category routes export
export default route;
