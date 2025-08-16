import express from "express";
import {
  loginUser,
  registerUser,
  UserData,
} from "../controllers/UserControllers.js";
import uploads from "../utils/Uplods.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";

const router = express.Router();

router.post("/register", uploads.single("image"), registerUser);
router.post("/login", loginUser);
router.get("/data", AuthMiddleware, UserData);

export default router;
