const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-backend.onrender.com/api"
    : "http://localhost:5000/api";

export default BASE_URL;
