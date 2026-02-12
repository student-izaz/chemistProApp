const BASE_URL =
   process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api"
      : "https://chemist-pro-app.vercel.app/api";

export default BASE_URL;
