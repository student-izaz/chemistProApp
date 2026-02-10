import * as reportService from "../services/report.service.js";

export const todaySalesReport = async (req, res, next) => {
  try {
    const data = await reportService.getTodaySales();
    res.json({ success: true, data: data[0] || {} });
  } catch (err) {
    next(err);
  }
};

export const monthlySalesReport = async (req, res, next) => {
  try {
    const data = await reportService.getMonthlySales();
    res.json({ success: true, data: data[0] || {} });
  } catch (err) {
    next(err);
  }
};

export const expiredMedicinesReport = async (req, res, next) => {
  try {
    const data = await reportService.getExpiredMedicines();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const lowStockReport = async (req, res, next) => {
  try {
    const data = await reportService.getLowStockMedicines();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};
