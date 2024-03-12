import { Card, Container } from "react-bootstrap";
import PlayerProfileRankedCard from "../components/player_profile/PlayerProfileRankedCard";
import player from "../utils/dummyPlayer";


const PlayerProfilePage = () => {


    return (
        <div className="page d-flex justify-content-center align-items-center">
            <Container>
                <PlayerProfileRankedCard
                    player={player}
                />
            </Container>
        </div>
    );
}

export default PlayerProfilePage;