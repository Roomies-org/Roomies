import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  otp: {
    code: { type: String },
    expiresAt: { type: Date, default: Date.now, index: { expires: "5m" } },
  },
});

export default mongoose.model("User", userSchema);
