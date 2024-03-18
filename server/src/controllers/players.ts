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

    const epicUsername = req.params.id.toLowerCase();

    try {
        const url = "https://rocket-league1.p.rapidapi.com/ranks/" + epicUsername;
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

        // The Rocket League API returns an empty json object if the player does not exist, so we check to see if the response object is empty, and if so we return that.
        if (Object.keys(playerRankedData).length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json(playerRankedData);
        }

        const potentialPlayer = await Player.findOne({ epicUsername: epicUsername });
        let player;

        if (potentialPlayer) {
            // If the player already exists in the database, update it
            player = await Player.findOneAndUpdate({ epicUsername: epicUsername }, { rankedStats: playerRankedData }, { new: true });
        } else {
            // If the player doesn't exist, create a new database entry using the response provided from the Rocket League API
            player = await Player.create({ epicUsername: epicUsername, rankedStats: playerRankedData });
        }

        res.status(StatusCodes.OK).json(player);
    } catch (error) {
        next(error);
    }
}
export {
    getPlayers,
    getAndUpdatePlayerByEpicUsername
}
