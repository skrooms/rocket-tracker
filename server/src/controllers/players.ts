import { RequestHandler } from "express";

const getPlayers: RequestHandler = async (req, res, next) => {
    // Get all players
    try {

    } catch (error) {
        next(error);
    }
}

const getPlayerById: RequestHandler = async (req, res, next) => {
    // Get one player via Mongo _id
    try {

    } catch (error) {
        next(error);
    }
}

interface PlayerBody {

}

const createPlayer: RequestHandler<unknown, unknown, PlayerBody, unknown> = async (req, res, next) => {
    // Create new player
    try {

    } catch (error) {
        next(error);
    }
} 

const updatePlayerById: RequestHandler<unknown, unknown, PlayerBody, unknown> = async (req, res, next) => {
    // Update player by Mongo _id
    try {

    } catch (error) {
        next(error);
    }
}

const deletePlayerById: RequestHandler = async (req, res, next) => {
    // Delete a player from database by Mongo _id
    try {

    } catch (error) {
        next(error);
    }
}

export {
    getPlayers,
    getPlayerById,
    createPlayer,
    updatePlayerById,
    deletePlayerById
}
