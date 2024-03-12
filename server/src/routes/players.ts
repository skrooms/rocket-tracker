import { Router } from "express";
import {
    getPlayers,
    getAndUpdatePlayerByEpicUsername,
    createPlayer
} from "../controllers/players";

const playersRouter = Router();

playersRouter.route("/").get(getPlayers).post(createPlayer);
playersRouter.route("/:id").get(getAndUpdatePlayerByEpicUsername);

export default playersRouter;
