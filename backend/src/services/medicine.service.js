import Medicine from "../models/medicine.model.js";
import ApiError from "../utils/ApiError.js";

export const addMedicine = async (data, userId) => {
  const medicine = await Medicine.create({
    ...data,
    createdBy: userId,
  });
  return medicine;
};

export const getAllMedicines = async () => {
  return Medicine.find().sort({ createdAt: -1 });
};

export const getLowStockMedicines = async () => {
  return Medicine.find({
    $expr: { $lte: ["$stockQty", "$minStockAlert"] },
  });
};

export const getExpiredMedicines = async () => {
  return Medicine.find({
    expiryDate: { $lt: new Date() },
  });
};
