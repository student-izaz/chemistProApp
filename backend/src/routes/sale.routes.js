import express from "express";
import { addSale } from "../controllers/sale.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(protect);

router.post("/", addSale);

export default router;
