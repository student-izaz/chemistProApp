import { useEffect, useState } from "react";
import MedicineForm from "../../components/MedicineForm";
import { apiRequest } from "../../api/api";

const Medicines = () => {
  const [medicines, setMedicines] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    apiRequest("/medicines")
      .then((res) => setMedicines(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Update medicines list when form is closed
  useEffect(() => {
    if (!showForm) {
      apiRequest("/medicines")
        .then((res) => setMedicines(res.data))
        .catch((err) => console.error(err));
    }
  }, [showForm]);


   const filteredMedicines = medicines.filter((med) =>
    med.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Medicines</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Medicine
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search medicine..."
        className="border p-2 rounded w-full md:w-1/3 mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Batch</th>
              <th className="p-3">Stock</th>
              <th className="p-3">MRP</th>
              <th className="p-3">Selling Price</th>
              <th className="p-3">Expiry</th>
            </tr>
          </thead>
          <tbody>
            {filteredMedicines.length > 0 ? (
  filteredMedicines.map((med, index) => (
    <tr key={index} className="border-t">
      <td className="p-3">{med.name}</td>
      <td className="p-3">{med.batchNo}</td>
      <td
        className={`p-3 font-semibold ${
          med.stockQty < 10 ? "text-red-600" : "text-green-600"
        }`}
      >
        {med.stockQty}
      </td>
      <td className="p-3">₹{med.mrp}</td>
      <td className="p-3">₹{med.sellingPrice}</td>
      <td className="p-3">{med.expiryDate}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="5" className="p-3 text-center text-gray-500">
      No medicines found
    </td>
  </tr>
)}

                
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showForm && (
        <MedicineForm onClose={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default Medicines;
