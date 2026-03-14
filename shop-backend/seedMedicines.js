import mongoose from "mongoose";
import dotenv from "dotenv";
import medicines from "./data/medicines.js";
import Medicine from "./models/medicine.js";

dotenv.config();

const seedMedicines = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    await Medicine.deleteMany();
    console.log("Old medicines removed");

    await Medicine.insertMany(medicines);
    console.log("Medicines inserted successfully");

    process.exit();
  } catch (error) {
    console.error("Seeding Failed:", error.message);
    process.exit(1);
  }
};

seedMedicines();
