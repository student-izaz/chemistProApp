import { useState } from "react";
import { loginUser } from "../../services/auth.service";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return setError("All fields required");
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      login(res.data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">
            Chemist<span className="text-gray-800">Pro</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Pharmacy Management Login
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter email"
              className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm font-medium">Password</label>

            <div className="relative">
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border p-3 rounded-lg mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                value={form.password}
                onChange={handleChange}
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-4 cursor-pointer text-sm text-gray-500"
              >
                {showPass ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm mt-6">
          Don't have account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
