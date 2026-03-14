import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    date: Date,
    time: String,
    amount: Number,
    paymentId: String,
    status: {
      type: String,
      enum: ["confirmed", "cancelled", "completed"],
      default: "confirmed",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    createdAt: Number,
    razorpayOrderId: String,
    razorpayPaymentId: String,
  },
  { timestamps: true },
);

export default mongoose.model("Appointment", appointmentSchema);