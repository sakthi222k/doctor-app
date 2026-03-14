import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    consultationFee: {
        type: Number,
        required: true
    },
    hospitalName: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default: ""
    },
    rating: {
        type : Number,
        default: 0
    },
    totalReviews: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

export default mongoose.model("Doctor", doctorSchema);

