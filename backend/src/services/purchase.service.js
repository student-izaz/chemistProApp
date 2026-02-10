import Purchase from "../models/purchase.model.js";
import Medicine from "../models/medicine.model.js";
import ApiError from "../utils/ApiError.js";

export const createPurchase = async (data, userId) => {
  const medicine = await Medicine.findById(data.medicine);
  if (!medicine) throw new ApiError(404, "Medicine not found");

  medicine.stockQty += data.quantity;
  await medicine.save();

  const purchase = await Purchase.create({
    ...data,
    createdBy: userId,
  });

  return purchase;
};

export const getPurchases = async () => {
  return Purchase.find()
    .populate("supplier")
    .populate("medicine")
    .sort({ createdAt: -1 });
};
