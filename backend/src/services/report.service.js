import Sale from "../models/sale.model.js";
import Medicine from "../models/medicine.model.js";

export const getTodaySales = async () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return Sale.aggregate([
    {
      $match: {
        createdAt: { $gte: start, $lte: end },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalAmount" },
        totalBills: { $sum: 1 },
      },
    },
  ]);
};

export const getMonthlySales = async () => {
  const start = new Date();
  start.setDate(1);
  start.setHours(0, 0, 0, 0);

  return Sale.aggregate([
    {
      $match: {
        createdAt: { $gte: start },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalAmount" },
        totalBills: { $sum: 1 },
      },
    },
  ]);
};

export const getExpiredMedicines = async () => {
  return Medicine.find({
    expiryDate: { $lt: new Date() },
  });
};

export const getLowStockMedicines = async () => {
  return Medicine.find({
    $expr: { $lte: ["$stockQty", "$minStockAlert"] },
  });
};
