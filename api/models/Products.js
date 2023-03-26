import mongoose from "mongoose";

// create product module
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: String,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//export product module
export default mongoose.model("product", productSchema);
