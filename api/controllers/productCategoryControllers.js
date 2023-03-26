import category from "../models/Category.js";
import createError from "../utils/createError.js";

import { removeCategoryPhoto } from "../utils/removePhoto.js";

//get category controllers
export const getAllCategoryControllers = async (req, res, next) => {
  try {
    const data = await category.find();
    res.status(200).json({
      categories: data,
      message: "get all data success..",
    });
  } catch (error) {
    next(createError("can not get data", 400));
  }
};

//Create category controllers
export const createCategoryControllers = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const filename = req.file ? req.file.filename : "";
    const data = await category.create({
      name,
      slug,
      photo: filename,
    });
    res.status(201).json({
      category: data,
      message: "data Create success..",
    });
  } catch (error) {
    next(createError("data can not create", 400));
  }
};

//get Single category controllers
export const getSingleCategoryControllers = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await category.findOne({ slug });
    if (data) {
      res.status(200).json({
        category: data,
        message: "get Single Category success..",
      });
    } else {
      next(createError("Data Not Found", 404));
    }
  } catch (error) {
    next(createError("can not get single", 400));
  }
};

//Delete Single category controllers
export const deleteSingleCategoryControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await category.findByIdAndDelete(id);

    //remove category photo
    removeCategoryPhoto(data.photo);

    res.status(200).json({
      message: "Delete Category success..",
    });
  } catch (error) {
    next(createError("can not delete Category", 400));
  }
};

//Update Single category controllers
export const updateSingleCategoryControllers = async (req, res, next) => {
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
    next(createError("can not Update Category", 400));
  }
};
