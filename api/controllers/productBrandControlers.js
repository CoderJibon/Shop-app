import brand from "../models/Brand.js";
import createError from "../utils/createError.js";
import { removeBrandPhoto } from "../utils/removePhoto.js";

//get brand controllers
export const getAllBrandControllers = async (req, res, next) => {
  try {
    const data = await brand.find();
    res.status(200).json({
      brands: data,
      message: "get all data success..",
    });
  } catch (error) {
    next(createError("can not get data", 400));
  }
};

//Create brand controllers
export const createBrandControllers = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const filename = req.file ? req.file.filename : "";
    const data = await brand.create({
      name,
      slug,
      photo: filename,
    });
    res.status(201).json({
      brand: data,
      message: "data Create success..",
    });
  } catch (error) {
    next(createError("data can not create", 400));
  }
};

//get Single brand controllers
export const getSingleBrandControllers = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await brand.findOne({ slug });
    if (data) {
      res.status(200).json({
        brand: data,
        message: "get Single brand success..",
      });
    } else {
      next(createError("Data Not Found", 404));
    }
  } catch (error) {
    next(createError("can not get single", 400));
  }
};

//Delete Single brand controllers
export const deleteSingleBrandControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await brand.findByIdAndDelete(id);

    //remove brand photo
    removeBrandPhoto(data.photo);

    res.status(200).json({
      message: "Delete brand success..",
    });
  } catch (error) {
    next(createError("can not delete Category", 400));
  }
};

//Update Single brand controllers
export const updateSingleBrandControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const newFileName = req.file ? req.file.filename : "";

    //find by id old image
    const oldPhoto = await brand.findById(id);

    let fileName = "";
    if (newFileName) {
      //remove brand old photo
      removeBrandPhoto(oldPhoto.photo);
      //set new brand photo
      fileName = newFileName;
    } else {
      fileName = oldPhoto.photo;
    }

    // update brand
    const data = await brand.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo: fileName,
      },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: "Update brand success..",
    });
  } catch (error) {
    next(createError("can not Update brand", 400));
  }
};
