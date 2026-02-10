const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://your-backend-name.onrender.com/api";

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET", // ✅ IMPORTANT
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
    body: options.body ? options.body : null,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
