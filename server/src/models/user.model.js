import mongoose, { Schema } from "mongoose";

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
    turnos: [{ type: Schema.Types.ObjectId, res: "turnos" }],
  },
  {
    timeStamps: true,
  }
);

export default mongoose.model("User", userSchema);
