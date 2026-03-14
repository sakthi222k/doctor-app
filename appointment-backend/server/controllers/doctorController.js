import Doctor from "../models/Doctor.js";

export const createDoctorProfile = async (req, res) => {
  try {
    const existing = await Doctor.findOne({ userId: req.user.id });
    if (existing) {
      return res.status(400).json({ message: "Profile Already Exists" });
    }

    const doctor = await Doctor.create({
      userId: req.user.id,
      ...req.body,
    });

    res.status(201).json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("userId", "name email phone");
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate(
      "userId",
      "name email phone",
    );

    if (!doctor) {
      return res.status(404).json({ message: "Doctor Not Found" });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

