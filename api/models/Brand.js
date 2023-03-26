import mongoose from "mongoose";

// create brand module
const brandSchema = mongoose.Schema(
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

//export brand module
export default mongoose.model("brand", brandSchema);
