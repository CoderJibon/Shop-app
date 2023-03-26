import multer from "multer";
import path from "path";

const __dirname = path.resolve();

//multerStorage
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == "category_photo") {
      cb(null, path.join(__dirname, "api/public/product/category/"));
    }
    if (file.fieldname == "brand_photo") {
      cb(null, path.join(__dirname, "api/public/product/brand"));
    }
    if (file.fieldname == "product_gallery") {
      cb(null, path.join(__dirname, "api/public/product/productsPhoto/"));
    }
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
  storage: multerStorage,
}).single("category_photo");

// Brand photo
export const productBrandMulter = multer({
  storage: multerStorage,
}).single("brand_photo");

// products photo
export const productsMulter = multer({
  storage: multerStorage,
}).single("product_gallery");
