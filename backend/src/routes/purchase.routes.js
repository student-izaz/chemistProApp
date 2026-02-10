import express from "express";
import {
  addPurchase,
  listPurchases,
} from "../controllers/purchase.controller.js";

import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", addPurchase);
router.get("/", listPurchases);

export default router;
