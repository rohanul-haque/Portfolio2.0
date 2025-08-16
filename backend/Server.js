import cors from "cors";
import "dotenv/config";
import express from "express";

import ConnectDB from "./src/db/ConnectDB.js";
import ProjectRoutes from "./src/routes/ProjectRoutes.js";
import UserRoutes from "./src/routes/UserRoutes.js";
import ConnectCloudinary from "./src/utils/ConnectCloudinary.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API Working"));
app.use("/user", UserRoutes);
app.use("/project", ProjectRoutes);

ConnectDB();
ConnectCloudinary();

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`🌐 Server running on http://localhost:${PORT}.`);
});
