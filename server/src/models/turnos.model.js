import mongoose from "mongoose";

const turnosSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    users: [{ type: mongoose.Schema.ObjectId, res: "userModel" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("turnos", turnosSchema);
