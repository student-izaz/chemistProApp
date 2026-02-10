import express from "express";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import medicineRoutes from "./routes/medicine.routes.js";
import supplierRoutes from "./routes/supplier.routes.js";
import purchaseRoutes from "./routes/purchase.routes.js";
import saleRoutes from "./routes/sale.routes.js";
import reportRoutes from "./routes/report.routes.js";
import cors from "cors";


const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://chemist-pro-app.vercel.app/"
    ],
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/reports", reportRoutes);


app.use(errorHandler);

export default app;
