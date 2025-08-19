import express from "express";
import {
  messageList,
  SendMessage,
} from "../controllers/SendMessageController.js";

const router = express.Router();

router.post("/send", SendMessage);
router.get("/list", messageList);

export default router;
