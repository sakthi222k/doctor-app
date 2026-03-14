

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    password: String,
    role: {
        type: String,
        enum: ["patient", "doctor", "admin"],
        default: "patient"
    },
    phone: String,
    isVerified: {type: Boolean, default: false}
}, {timestamps: true});

export default mongoose.model("User", userSchema);