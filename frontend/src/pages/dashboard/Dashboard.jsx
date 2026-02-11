import { useEffect, useState } from "react";
import { apiRequest } from "../../api/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalBills: 0,
  });

  
  const [lowStock, setLowStock] = useState([]);
  const [expiry, setExpiry] = useState([]);

  useEffect(() => {
    apiRequest("/reports/today-sales")
      .then((res) => setStats(res.data))
      .catch(console.error);
  }, []);


  useEffect(() => {
    apiRequest("/reports/low-stock")
      .then((res) => setLowStock(res.data))
      .catch(console.error);

    apiRequest("/reports/expiry-medicines")
      .then((res) => setExpiry(res.data))
      .catch(console.error);
      console.log(expiry)
  }, []);

  // dummy chart data
  const salesData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 2100 },
    { day: "Wed", sales: 800 },
    { day: "Thu", sales: 1600 },
    { day: "Fri", sales: 900 },
    { day: "Sat", sales: 2400 },
  ];

  const stockData = [
    { name: "In Stock", value: 400 },
    { name: "Low Stock", value: 100 },
  ];

  const COLORS = ["#3b82f6", "#ef4444"];

  return (
    <div className="p-4 md:p-6">
      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Today Revenue</p>
          <h2 className="text-2xl font-bold text-blue-600">
            ₹{stats.totalRevenue}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Bills</p>
          <h2 className="text-2xl font-bold">{stats.totalBills}</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Low Stock</p>
          <h2 className="text-2xl font-bold text-red-500">12</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Medicines</p>
          <h2 className="text-2xl font-bold">240</h2>
        </div>
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SALES CHART */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Weekly Sales</h3>

          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={salesData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* STOCK PIE */}
        <div className="bg-white p-5 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Stock Overview</h3>

          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={stockData}
                dataKey="value"
                outerRadius={90}
                label
              >
                {stockData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LOW STOCK */}
      <div className="bg-white rounded-xl shadow p-4 mt-4">
        <h3 className="font-semibold text-lg mb-3 text-red-600">
          Low Stock Medicines
        </h3>

        <div className="max-h-64 overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Medicine</th>
                <th className="p-2 text-left">Stock</th>
              </tr>
            </thead>
            <tbody>
              {lowStock.length > 0 ? (
                lowStock.map((m, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{m.name}</td>
                    <td className="p-2 text-red-600 font-bold">
                      {m.stockQty}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 text-center" colSpan="2">
                    All good 👍
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* EXPIRY ALERT */}
      <div className="bg-white rounded-xl shadow p-4 mt-4">
        <h3 className="font-semibold text-lg mb-3 text-orange-600">
          Expiring Soon
        </h3>

        <div className="max-h-64 overflow-y-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Medicine</th>
                <th className="p-2 text-left">Expiry</th>
              </tr>
            </thead>
            <tbody>
              {expiry.length > 0 ? (
                expiry.map((m, i) => (
                  <tr key={i} className="border-t">
                    <td className="p-2">{m.name}</td>
                    <td className="p-2 text-orange-600 font-semibold">
                      {new Date(m.expiryDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 text-center" colSpan="2">
                    No expiry soon
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
