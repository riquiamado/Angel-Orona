import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    turnos: [{ type: mongoose.Schema.ObjectId, res: "turnosModel" }],
  },
  {
    timeStamps: true,
  }
);

export default mongoose.model("User", userSchema);
