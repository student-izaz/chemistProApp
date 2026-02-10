import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema(
  {
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
    medicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
      required: true,
    },
    quantity: { type: Number, required: true },
    costPrice: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Purchase", purchaseSchema);
