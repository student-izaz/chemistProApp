import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Supplier", supplierSchema);
