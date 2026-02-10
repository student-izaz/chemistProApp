import Sale from "../models/sale.model.js";
import Medicine from "../models/medicine.model.js";
import ApiError from "../utils/ApiError.js";

export const createSale = async (saleData, userId) => {
  let total = 0;

  for (const item of saleData.items) {
    const medicine = await Medicine.findById(item.medicine);

    if (!medicine)
      throw new ApiError(404, "Medicine not found");

    if (medicine.stockQty < item.quantity)
      throw new ApiError(
        400,
        `Insufficient stock for ${medicine.name}`
      );

    medicine.stockQty -= item.quantity;
    await medicine.save();

    total += item.quantity * item.price;
  }

  const sale = await Sale.create({
    ...saleData,
    totalAmount: total,
    soldBy: userId,
  });

  return sale;
};
