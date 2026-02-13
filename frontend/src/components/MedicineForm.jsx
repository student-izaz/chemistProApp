import { useState } from "react";
import { apiRequest } from "../api/api";

const MedicineForm = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    batchNo: "",
    expiryDate: "",
    shortDescription: "",
    mrp: "",
    sellingPrice: "",
    stockQty: "",
    minStockAlert: 10,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiRequest("/medicines", {
        method: "POST",
        body: form,
      });

      alert("Medicine added");
      onSuccess && onSuccess();
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Add Medicine</h2>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Name */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Medicine Name"
            className="w-full border p-2 rounded"
            required
          />

          {/* Company */}
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            type="text"
            placeholder="Company"
            className="w-full border p-2 rounded"
            required
          />

          {/* Batch */}
          <input
            name="batchNo"
            value={form.batchNo}
            onChange={handleChange}
            type="text"
            placeholder="Batch Number"
            className="w-full border p-2 rounded"
            required
          />

          {/* Expiry */}
          <input
            name="expiryDate"
            value={form.expiryDate}
            onChange={handleChange}
            type="date"
            className="w-full border p-2 rounded"
            required
          />

          {/* Description */}
          <textarea
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full border p-2 rounded"
          />

          {/* Prices */}
          <div className="grid grid-cols-2 gap-3">
            <input
              name="mrp"
              value={form.mrp}
              onChange={handleChange}
              type="number"
              placeholder="MRP"
              className="border p-2 rounded"
              required
            />
            <input
              name="sellingPrice"
              value={form.sellingPrice}
              onChange={handleChange}
              type="number"
              placeholder="Selling Price"
              className="border p-2 rounded"
              required
            />
          </div>

          {/* Stock */}
          <div className="grid grid-cols-2 gap-3">
            <input
              name="stockQty"
              value={form.stockQty}
              onChange={handleChange}
              type="number"
              placeholder="Stock Quantity"
              className="border p-2 rounded"
              required
            />
            <input
              name="minStockAlert"
              value={form.minStockAlert}
              onChange={handleChange}
              type="number"
              placeholder="Min Stock Alert"
              className="border p-2 rounded"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicineForm;
