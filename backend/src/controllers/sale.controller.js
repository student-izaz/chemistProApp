import * as saleService from "../services/sale.service.js";

export const addSale = async (req, res, next) => {
  try {
    const sale = await saleService.createSale(
      req.body,
      req.user._id
    );
    res.status(201).json({ success: true, data: sale });
  } catch (err) {
    next(err);
  }
};
