import * as medicineService from "../services/medicine.service.js";

export const createMedicine = async (req, res, next) => {
  try {
    const medicine = await medicineService.addMedicine(
      req.body,
      req.user._id
    );
    res.status(201).json({ success: true, data: medicine });
  } catch (err) {
    next(err);
  }
};

export const getMedicines = async (req, res, next) => {
  try {
    const data = await medicineService.getAllMedicines();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const lowStockMedicines = async (req, res, next) => {
  try {
    const data = await medicineService.getLowStockMedicines();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const expiredMedicines = async (req, res, next) => {
  try {
    const data = await medicineService.getExpiredMedicines();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
