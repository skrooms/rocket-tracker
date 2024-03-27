import { Player } from "../models/player";
import fetchData from "../utils/fetchData";


export async function fetchPlayerByEpicUsername(epicUsername: string): Promise<Player> {
    const response = await fetchData("https://rocket-tracker.onrender.com/api/players/" + epicUsername, { method: "GET" });
    return response.json();
}

export async function fetchPlayers(): Promise<Player[]> {
    const response = await fetchData("https://rocket-tracker.onrender.com/api/players", { method: "GET" });
    return response.json();
}