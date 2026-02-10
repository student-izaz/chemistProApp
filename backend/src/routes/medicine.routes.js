import express from "express";
import {
  createMedicine,
  getMedicines,
  lowStockMedicines,
  expiredMedicines,
} from "../controllers/medicine.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", createMedicine);
router.get("/", getMedicines);
router.get("/low-stock", lowStockMedicines);
router.get("/expired", expiredMedicines);

export default router;
