import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";

import User from "../models/User.js";
import GenerateToken from "../utils/GenerateToken.js";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const imageFile = req.file;

  if (!name || !email || !password || !imageFile) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: imageUpload.secure_url,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: "User registration successful",
      token: await GenerateToken(newUser._id),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User registration failed",
    });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User login successful",
      token: await GenerateToken(user._id),
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "User login failed",
    });
  }
};

export const UserData = async (req, res) => {
  const userId = req.id;

  try {
    const data = await User.findById(userId).select("-password");

    if (!data) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      message: "User data fetched successfully",
      userData: data,
    });
  } catch (error) {
    logging;
    return res.json({
      success: false,
      message: "User data fetch failed",
    });
  }
};
