import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    price: Number,
    manufacturer: String,
    prescriptionRequired: Boolean,
    description: String,
    image: String,
    discount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;