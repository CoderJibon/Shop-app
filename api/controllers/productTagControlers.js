import tag from "../models/Tag.js";
import createError from "../utils/createError.js";

//get tag controllers
export const getAllTagControllers = async (req, res, next) => {
  try {
    const data = await tag.find();
    res.status(200).json({
      tags: data,
      message: "get all data success..",
    });
  } catch (error) {
    next(createError("can not get data", 400));
  }
};

//Create tag controllers
export const createTagControllers = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const data = await tag.create({
      name,
      slug,
    });
    res.status(201).json({
      tag: data,
      message: "data Create success..",
    });
  } catch (error) {
    next(createError("data can not create", 400));
  }
};

//get Single Tag controllers
export const getSingleTagControllers = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await tag.findOne({ slug });
    if (data) {
      res.status(200).json({
        tag: data,
        message: "get Single tag success..",
      });
    } else {
      next(createError("Data Not Found", 404));
    }
  } catch (error) {
    next(createError("can not get single", 400));
  }
};

//Delete Single tag controllers
export const deleteSingleTagControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const data = await tag.findByIdAndDelete(id);

    res.status(200).json({
      message: "Delete Tag success..",
    });
  } catch (error) {
    next(createError("can not delete tag", 400));
  }
};

//Update Single Tag controllers
export const updateSingleTagControllers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;

    // update tag
    const data = await tag.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );
    res.status(200).json({
      tag: data,
      message: "Update tag success..",
    });
  } catch (error) {
    next(createError("can not Update tag", 400));
  }
};
