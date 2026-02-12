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
    body: options.body ? JSON.stringify(options.body) : null, // stringify here only
  });

  const text = await res.text();

  if (!text) throw new Error("Empty response");

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    console.error("Server returned:", text);
    throw new Error("Invalid JSON from server");
  }

  if (!res.ok) {
    throw new Error(data.message || "API error");
  }

  return data;
};
