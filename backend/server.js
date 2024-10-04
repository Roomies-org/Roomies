import express from "express";
import config from "./config.js";
import dbConnection from "./db/dbConnection.js";
import authRouter from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// KEEP ALIVE FOR CRONJOB OPERATION TO KEEP THE SERVER ALIVE
app.get("/alive", (req, res) => {
  res.json({ status: "alive", message: "Server is alive" });
});

// ROUTES

app.use("/api/v1/auth", authRouter);

// DATABASE CONNECTION

dbConnection();
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
