import { Router } from "express";
import {
    getPlayers,
    getAndUpdatePlayerByEpicUsername
} from "../controllers/players";

const playersRouter = Router();

playersRouter.route("/").get(getPlayers);
playersRouter.route("/:id").get(getAndUpdatePlayerByEpicUsername);

export default playersRouter;
