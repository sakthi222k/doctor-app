
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import availabilityRoutes from "./routes/availabilityRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js"
import appointmentRoutes from "./routes/appointmentRoutes.js"


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/availability", availabilityRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/appointments", appointmentRoutes)
app.use("/doctors", express.static("public/doctors"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

  app.get("/", (req, res)=> {
    res.send ("Doctor Appointment API Running");
  })

  export default app;
