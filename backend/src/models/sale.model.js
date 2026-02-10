import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    items: [
      {
        medicine: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Medicine",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],

    totalAmount: { type: Number, required: true },
    paymentMode: {
      type: String,
      enum: ["cash", "upi", "card"],
      default: "cash",
    },

    customerName: { type: String },
    customerPhone: { type: String },

    soldBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Sale", saleSchema);
