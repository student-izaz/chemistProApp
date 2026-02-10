import * as purchaseService from "../services/purchase.service.js";

export const addPurchase = async (req, res, next) => {
  try {
    const purchase = await purchaseService.createPurchase(
      req.body,
      req.user._id
    );
    res.status(201).json({ success: true, data: purchase });
  } catch (err) {
    next(err);
  }
};

export const listPurchases = async (req, res, next) => {
  try {
    const data = await purchaseService.getPurchases();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
