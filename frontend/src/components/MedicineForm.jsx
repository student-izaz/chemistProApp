const MedicineForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Add Medicine</h2>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Medicine Name"
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Batch Number"
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Stock Quantity"
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full border p-2 rounded"
          />
          <input
            type="date"
            className="w-full border p-2 rounded"
          />

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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MedicineForm;
