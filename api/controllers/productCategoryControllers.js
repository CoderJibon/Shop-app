import category from "../models/Category.js";
import { removeCategoryPhoto } from "../utils/removePhoto.js";

//get category controllers
export const getAllCategoryControllers = async (req, res) => {
  try {
    const data = await category.find();
    res.status(200).json({
      categories: data,
      message: "get all data success..",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//get category controllers
export const createCategoryControllers = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const filename = req.file ? req.file.filename : "";
    const data = await category.create({
      name,
      slug,
      photo: filename,
    });
    res.status(200).json({
      category: data,
      message: "data Create success..",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//get Single category controllers
export const getSingleCategoryControllers = async (req, res) => {
  try {
    const { slug } = req.params;
    const data = await category.findOne({ slug });
    res.status(200).json({
      category: data,
      message: "get Single Category success..",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//Delete Single category controllers
export const deleteSingleCategoryControllers = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await category.findByIdAndDelete(id);

    //remove category photo
    removeCategoryPhoto(data.photo);

    res.status(200).json({
      message: "Delete Category success..",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//Update Single category controllers
export const updateSingleCategoryControllers = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const newFileName = req.file ? req.file.filename : "";

    //find by id old image
    const oldPhoto = await category.findById(id);

    let fileName = "";
    if (newFileName) {
      //remove category old photo
      removeCategoryPhoto(oldPhoto.photo);
      //set new category photo
      fileName = newFileName;
    } else {
      fileName = oldPhoto.photo;
    }

    // update category
    const data = await category.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo: fileName,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Update Category success..",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};
