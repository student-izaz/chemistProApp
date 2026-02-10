const Purchase = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Purchase</h1>

      <div className="bg-white shadow rounded p-4">
        <p className="text-gray-600 mb-4">
          Add and manage medicine purchases here.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Medicine Name"
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Purchase Price"
            className="border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Supplier Name"
            className="border p-2 rounded md:col-span-2"
          />
          <input
            type="date"
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded md:col-span-3"
          >
            Add Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
