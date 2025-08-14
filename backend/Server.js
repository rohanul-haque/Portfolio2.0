import express from "express";
import "dotenv/config";
import ConnectDB from "./src/db/ConnectDB.js";

const app = express();

app.get("/", (req, res) => res.send("API Working"));

ConnectDB();

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}.`);
});
