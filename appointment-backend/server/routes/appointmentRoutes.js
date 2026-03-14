import express from "express";
import { getMyAppointments, getDoctorAppointments, getDoctorEarnings } from "../controllers/appointmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/my",protect, getMyAppointments);
router.get("/doctor",protect, getDoctorAppointments);
router.get("/earnings",protect, getDoctorEarnings);

export default router;
