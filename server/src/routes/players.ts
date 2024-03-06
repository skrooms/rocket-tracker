import { Router } from "express";
import {
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayerById,
    deletePlayerById
} from "../controllers/players";

const playersRouter = Router();

playersRouter.route("/").get(getPlayers).post(createPlayer);
playersRouter.route("/:id").get(getPlayerById).patch(updatePlayerById).delete(deletePlayerById);

export default playersRouter;
