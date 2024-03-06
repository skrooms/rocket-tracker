import express from "express";
import playersRouter from "./routes/players";

const app = express();

// Routes
app.use("/players", playersRouter);

export default app;
