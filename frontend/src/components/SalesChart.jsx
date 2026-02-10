import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const SalesChart = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow h-80">
      <h3 className="font-semibold mb-2">Weekly Sales</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4f46e5"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
