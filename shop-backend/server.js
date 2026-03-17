

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import medicineRoutes from "./routes/medicineRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static("public/images"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/medicines", medicineRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
})