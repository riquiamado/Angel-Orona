import mongoose from "mongoose";

const turnosSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      
    },
    hour: {
      type: String,
      required: true,
      // unique: true,
    },
    
    state: {
      type: String,
      enum: ["reservado", "confirmado", "cancelado", "pendiente"],
    },
    users: [{ type: mongoose.Schema.ObjectId, res: "userModel" }],
    services: [{ type: mongoose.Schema.ObjectId, res: "servicesModel" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("turnos", turnosSchema);
