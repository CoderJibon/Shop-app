import multer from "multer";
import path from "path";

const __dirname = path.resolve();

//categoryStorage
const CategoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "api/public/product/category/"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + Math.round(Math.random() * 1e9) + file.originalname
    );
  },
});

// category photo
export const productCategoryMulter = multer({
  storage: CategoryStorage,
}).single("category_photo");
