const Reports = () => {
  // Dummy data (backend later)
  const reportData = {
    totalSales: 15420,
    totalOrders: 42,
    topMedicine: "Paracetamol",
    lowStock: 3,
  };

  const salesList = [
    { date: "2026-02-01", amount: 5200 },
    { date: "2026-01-31", amount: 4100 },
    { date: "2026-01-30", amount: 6120 },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Reports</h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card title="Total Sales" value={`₹${reportData.totalSales}`} />
        <Card title="Total Orders" value={reportData.totalOrders} />
        <Card title="Top Medicine" value={reportData.topMedicine} />
        <Card title="Low Stock Items" value={reportData.lowStock} />
      </div>

      {/* SALES TABLE */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-3">Recent Sales</h2>
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Date</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {salesList.map((sale, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{sale.date}</td>
                <td className="p-2 font-semibold">₹{sale.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Export PDF
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Export Excel
        </button>
      </div>
    </div>
  );
};

export default Reports;

const Card = ({ title, value }) => (
  <div className="bg-white rounded-xl shadow p-4">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);
