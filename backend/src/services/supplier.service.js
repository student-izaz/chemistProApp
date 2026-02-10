import Supplier from "../models/supplier.model.js";

export const createSupplier = async (data, userId) => {
  return Supplier.create({ ...data, createdBy: userId });
};

export const getSuppliers = async () => {
  return Supplier.find().sort({ createdAt: -1 });
};
