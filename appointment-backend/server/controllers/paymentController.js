import getRazorpayInstance from "../config/razorpay.js";
import Doctor from "../models/Doctor.js";
import crypto from "crypto";
import Appointment from "../models/Appointment.js";
import Availability from "../models/Availability.js";

export const createOrder = async (req, res) => {
  try {
    const { doctorId } = req.body;

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const razorpay = getRazorpayInstance(); // ✅ CALL FUNCTION
    const options = {
      amount: doctor.consultationFee * 100, // paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const verifyPayment = async (req, res) => {
  console.log("verify payment api hit");
  console.log(req.body);
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      doctorId,
      date,
      time,
      amount,
    } = req.body;
    console.log("User from Token:", req.user);

    if (!req.user) {
      return res.status(401).json({ message: "User context missing" });
    }
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Payment verification failed" });
    }
    console.log("VERIFY PAYMENT HIT");
    const userId = req.user.id || req.user._id;
    // Lock Slot
    await Availability.updateOne(
      {
        doctorId,
        date: new Date(date),
        "slots.time": time,
      },
      {
        $set: { "slots.$.isBooked": true },
      },
    );

    // Create Appointment
    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }

    const appointment = await Appointment.create({
      doctorId: doctor._id,
      patientId: userId,
      date,
      time,
      amount: req.body.amount,
      paymentStatus: "paid",
      status: "confirmed",
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
    });

    res.json({ success: true, message: "Appointment Confirmed", appointment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
