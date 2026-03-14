import Doctor from "../models/Doctor.js";
import Availability from "../models/Availability.js";
import { generateSlots } from "../utils/generatesSlots.js";

export const setAvailability = async (req, res) => {
  try {
    const { date, startTime, endTime, duration } = req.body;

    const doctor = await Doctor.findOne({ userId: req.user.id });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor Profile Not Found" });
    }

    const existing = await Availability.findOne({
      doctorId: doctor._id,
      date: new Date(date),
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "Availability Already Set For This Date" });
    }

    const slots = generateSlots(startTime, endTime, duration);

    const availability = await Availability.create({
      doctorId: doctor._id,
      date,
      slots,
    });

    res.status(201).json(availability);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAvailabilityByDoctor = async (req, res) => {
    try {
        const {doctorId, date} = req.query;

        const availability = await Availability.findOne({
            doctorId,
            date: new Date(date)
        });

        if(!availability){
            return res.json({ slots: []});
        }
        res.json(availability);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}