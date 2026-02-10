import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, required: true },
    batchNo: { type: String, required: true },
    expiryDate: { type: Date, required: true },
    shortDescription: {
      type: String,
      trim: true,
      maxlength: 200,
      default: "",
    },
    mrp: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },

    stockQty: { type: Number, required: true },
    minStockAlert: { type: Number, default: 10 },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

medicineSchema.index(
  { name: 1, batchNo: 1 },
  { unique: true }
);

export default mongoose.model("Medicine", medicineSchema);
