import express from "express";
import {
  addSupplier,
  listSuppliers,
} from "../controllers/supplier.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", addSupplier);
router.get("/", listSuppliers);

export default router;
