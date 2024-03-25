import { Container, Spinner } from "react-bootstrap";
import PlayerProfileRankedCard from "../components/player_profile/PlayerProfileRankedCard";
import { useEffect, useState } from "react";
import { Navigate, redirect, useSearchParams } from "react-router-dom";
import * as PlayersApi from "../api/players_api";
import { Player } from "../models/player";


const PlayerProfilePage = () => {

    const [player, setPlayer] = useState<Player | null>(null);
    const [isPlayerLoading, setIsPlayerLoading] = useState(true);
    let [searchParams] = useSearchParams();
    const epicUsernameSearchParam = searchParams.get("epicUsername");
    let epicUsername: string;

    if (epicUsernameSearchParam) {
        epicUsername = epicUsernameSearchParam;
    } else {
        epicUsername = "";
    }

    useEffect(() => {
        const fetchPlayer = async () => {
            try {
                console.log(epicUsername);
                const player = await PlayersApi.fetchPlayerByEpicUsername(epicUsername);

                if (player) {
                    if ("messages" in player) {
                        redirect("/apioopsie");
                    }
                    setPlayer(player);
                    setIsPlayerLoading(false);
                } else {
                    setIsPlayerLoading(false);
                }

            } catch (error) {
                console.error(error);
                alert(error);
            }
        }

        fetchPlayer();
    }, [epicUsername]);


    return (
        <div className="page d-flex justify-content-center align-items-center">
            <Container>
                {
                    isPlayerLoading ? (
                        <Spinner animation="border" variant="secondary" />
                    ) : (
                        (player && Object.keys(player).length === 0) ? (
                            <Navigate to="/playernotfound" />
                            ) : (
                            <PlayerProfileRankedCard player={player} />
                            )
                    )
                }
                
            </Container>
        </div>
    );
}

export default PlayerProfilePage;