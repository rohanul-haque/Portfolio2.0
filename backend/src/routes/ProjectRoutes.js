import express from "express";

import {
    addProject,
    deleteProject,
    projectList,
} from "../controllers/AddProjectController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import Uploads from "../utils/Uploads.js";

const router = express.Router();

router.post("/add", AuthMiddleware, Uploads.single("image"), addProject);
router.delete("/delete", AuthMiddleware, deleteProject);
router.get("/list", projectList);

export default router;
