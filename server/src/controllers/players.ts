import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import Player from "../models/playerModel";

const getPlayers: RequestHandler = async (req, res, next) => {
    // Get all players
    try {

    } catch (error) {
        next(error);
    }
}

const getAndUpdatePlayerByEpicUsername: RequestHandler = async (req, res, next) => {
    // TODO: Get player data from Rocket League API

    try {
        const player = await Player.findOne({ epicUsername: req.params.id });

        if (player) {
            // If the player already exists in the database, update it
        } else {
            // If the player doesn't exist, create a new database entry using the response provided from the Rocket League API
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
    // Create new player
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
