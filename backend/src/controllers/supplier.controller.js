import * as supplierService from "../services/supplier.service.js";

export const addSupplier = async (req, res, next) => {
  try {
    const supplier = await supplierService.createSupplier(
      req.body,
      req.user._id
    );
    res.status(201).json({ success: true, data: supplier });
  } catch (err) {
    next(err);
  }
};

export const listSuppliers = async (req, res, next) => {
  try {
    const data = await supplierService.getSuppliers();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
