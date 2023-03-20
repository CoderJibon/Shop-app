import { unlinkSync } from "fs";
import path from "path";
const __dirname = path.resolve();

// Remove category Photo
export const removeCategoryPhoto = (pathUrl) => {
  if (pathUrl !== "") {
    unlinkSync(path.join(__dirname, `api/public/product/category/${pathUrl}`));
  }
};
