
import express from 'express';
import { createDoctorProfile,getAllDoctors,getDoctorById } from '../controllers/doctorController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/profile", protect,authorize("doctor"), createDoctorProfile);
router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);

export default router;