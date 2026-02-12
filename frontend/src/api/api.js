import BASE_URL from "./config";

export const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(options.headers || {}),
    },
    body: options.body ? JSON.stringify(options.body) : null,
  });

  // 👉 first read text safely
  const text = await res.text();

  // 👉 handle empty response (Render sleep etc.)
  if (!text) {
    throw new Error("Server returned empty response (maybe server sleeping)");
  }

  let data;
  try {
    data = JSON.parse(text);
  } catch (err) {
    console.error("❌ Non-JSON response:", text);
    throw new Error("Server returned invalid JSON");
  }

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
};
