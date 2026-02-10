import express from "express";
import {
  todaySalesReport,
  monthlySalesReport,
  expiredMedicinesReport,
  lowStockReport,
} from "../controllers/report.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.get("/today-sales", todaySalesReport);
router.get("/monthly-sales", monthlySalesReport);
router.get("/expired-medicines", expiredMedicinesReport);
router.get("/low-stock", lowStockReport);

export default router;
