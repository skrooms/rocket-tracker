import "dotenv/config";
import express from "express";
import playersRouter from "./routes/players";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "https://rocket-tracker.onrender.com"
}

// Middleware
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/api/players", playersRouter);

export default app;
