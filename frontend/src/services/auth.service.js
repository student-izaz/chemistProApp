import { apiRequest } from "../api/api.js";

export const registerUser = (data) => {
  return apiRequest("/auth/register", {
    method: "POST",
    body: data,
  });
};

export const loginUser = (data) => {
  return apiRequest("/auth/login", {
    method: "POST",
    body: data,
  });
};
