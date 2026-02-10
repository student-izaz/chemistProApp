import { useEffect, useState } from "react";
import SaleForm from "../../components/SaleForm";

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Dummy data (backend connect later)
  useEffect(() => {
    setSales([
      {
        id: 1,
        medicine: "Paracetamol",
        quantity: 2,
        price: 25,
        total: 50,
        date: "2026-02-01",
      },
      {
        id: 2,
        medicine: "Amoxicillin",
        quantity: 1,
        price: 120,
        total: 120,
        date: "2026-02-01",
      },
    ]);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sales</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          + New Sale
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Medicine</th>
              <th className="p-3">Qty</th>
              <th className="p-3">Price</th>
              <th className="p-3">Total</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-t">
                <td className="p-3">{sale.medicine}</td>
                <td className="p-3">{sale.quantity}</td>
                <td className="p-3">₹{sale.price}</td>
                <td className="p-3 font-semibold">₹{sale.total}</td>
                <td className="p-3">{sale.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && <SaleForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default Sales;
