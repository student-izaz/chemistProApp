import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";
import ApiError from "../utils/ApiError.js";

export const registerUser = async (data) => {
  const userExists = await User.findOne({ email: data.email });
  if (userExists) throw new ApiError(400, "User already exists");

  const user = await User.create(data);
  const token = generateToken(user._id);

  return { user, token };
};

export const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new ApiError(401, "Invalid credentials");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new ApiError(401, "Invalid credentials");

  const token = generateToken(user._id);
  return { user, token };
};