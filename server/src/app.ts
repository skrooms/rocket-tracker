import "dotenv/config";
import express from "express";
import playersRouter from "./routes/players";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/players", playersRouter);

export default app;
