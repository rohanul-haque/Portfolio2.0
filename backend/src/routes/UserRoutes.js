import express from "express";
import {
    loginUser,
    registerUser,
    UserData,
} from "../controllers/UserControllers.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import Uploads from "../utils/Uploads.js";

const router = express.Router();

router.post("/register", Uploads.single("image"), registerUser);
router.post("/login", loginUser);
router.get("/data", AuthMiddleware, UserData);

export default router;
