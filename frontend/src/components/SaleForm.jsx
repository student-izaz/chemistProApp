const SaleForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">New Sale</h2>

        <form className="space-y-3">
          <select className="w-full border p-2 rounded">
            <option>Select Medicine</option>
            <option>Paracetamol</option>
            <option>Amoxicillin</option>
          </select>

          <input
            type="number"
            placeholder="Quantity"
            className="w-full border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Price per unit"
            className="w-full border p-2 rounded"
          />

          <input
            type="date"
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Save Sale
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SaleForm;
