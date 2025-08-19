import express from "express";
import {
  messageList,
  SendMessage,
} from "../controllers/SendMessageController.js";

const router = express.Router();

router.post("/send", SendMessage);
router.post("/list", messageList);

export default router;
