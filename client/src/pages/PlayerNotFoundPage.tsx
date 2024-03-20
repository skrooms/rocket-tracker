import { Container } from "react-bootstrap";
import PlayerNotFoundCard from "../components/playernotfound/PlayerNotFoundCard";


const PlayerNotFoundPage = () => {

    return (
        <div className="page d-flex justify-content-center align-items-center">
            <Container>
                <PlayerNotFoundCard />
            </Container>
        </div>
    );
}

export default PlayerNotFoundPage;