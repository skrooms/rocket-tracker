import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import Player from "../models/playerModel";
import env from "../util/validateEnv";

const getPlayers: RequestHandler = async (req, res, next) => {
    // Get all players
    try {
        const players = await Player.find({});
        res.status(StatusCodes.OK).json(players);
    } catch (error) {
        next(error);
    }
}

const getAndUpdatePlayerByEpicUsername: RequestHandler = async (req, res, next) => {
    // Gets a players data from the Rocket League API. If the player already exists in our database, we update that document. If not, we create a new document for that player's data.

    try {
        const url = "https://rocket-league1.p.rapidapi.com/ranks/" + req.params.id;
        const options = {
            method: "GET",
            headers: {
                "User-Agent": "RapidAPI Playground",
                "Accept-Encoding": "identity",
                "X-RapidAPI-Key": env.API_KEY,
                "X-RapidAPI-Host": "rocket-league1.p.rapidapi.com"
            }
        };

        const apiResponse = await fetch(url, options);
        const playerRankedData = await apiResponse.json();
        console.log(playerRankedData);

        const potentialPlayer = await Player.findOne({ epicUsername: req.params.id });
        let player;

        if (potentialPlayer) {
            // If the player already exists in the database, update it
            player = await Player.findOneAndUpdate({ epicUsername: req.params.id }, { rankedStats: playerRankedData }, { new: true });
        } else {
            // If the player doesn't exist, create a new database entry using the response provided from the Rocket League API
            player = await Player.create({ epicUsername: req.params.id, rankedStats: playerRankedData });
        }

        res.status(StatusCodes.OK).json(player);
    } catch (error) {
        next(error);
    }
}

interface PlayerBody {
        epicUsername: string,
        rankedStats: {}
}

const createPlayer: RequestHandler<unknown, unknown, PlayerBody, unknown> = async (req, res, next) => {
    // Create new player (for testing use with POSTMAN)
    try {
        const player = await Player.create(req.body);
        res.status(StatusCodes.CREATED).json(player);
    } catch (error) {
        next(error);
    }
} 

export {
    getPlayers,
    getAndUpdatePlayerByEpicUsername,
    createPlayer
}
