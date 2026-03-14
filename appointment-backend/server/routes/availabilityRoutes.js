
import express from 'express';
import { getAvailabilityByDoctor,setAvailability } from '../controllers/availabilityController.js';
import {protect,authorize} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
    "/set",
    protect,
    authorize("doctor"),
    setAvailability
);

router.get("/", getAvailabilityByDoctor);

export default router;

