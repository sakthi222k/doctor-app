import Appointment from "../models/Appointment.js";
import Doctor from "../models/Doctor.js";
import mongoose from "mongoose";

export const getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({
      patientId: req.user.id,
    })
      .populate({
        path: "doctorId",
        populate: {
          path: "userId",
          select: "name",
        },
      })
      .sort({ date: -1 });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDoctorAppointments = async (req, res) => {
  try {

    const doctor = await Doctor.findOne({
      userId: new mongoose.Types.ObjectId(req.user.id),
    });
    console.log("Logged in user:", req.user.id);
    console.log("User:", req.user);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    const appointments = await Appointment.find({
      doctorId: doctor._id,
    })
      .populate("patientId", "name email phone")
      .sort({ date: -1 });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getDoctorEarnings = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ userId: req.user.id });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const appointments = await Appointment.find({
      doctorId: doctor._id,
      paymentStatus: "paid",
    });

    const totalAppointments = appointments.length;

    const totalEarnings = appointments.reduce(
      (sum, appt) => sum + appt.amount,
      0,
    );

    res.json({
      totalAppointments,
      totalEarnings,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
