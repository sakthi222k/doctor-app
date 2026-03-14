
import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    slots: [
      {
        time: String,
        isBooked: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true },
);

availabilitySchema.index({ doctorId: 1, date: 1 }, { unique: true });

export default mongoose.model("Availability", availabilitySchema);
