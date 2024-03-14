import { Container } from "react-bootstrap";
import LeaderBoardPlaylistSelectCard from "../components/leaderboards/LeaderBoardPlaylistSelectCard";
import LeaderBoardStandingsCard from "../components/leaderboards/LeaderBoardStandingsCard";


const LeaderboardsPage = () => {
    

    return (
        <div className="page">
            <Container>
                <LeaderBoardPlaylistSelectCard />
                <LeaderBoardStandingsCard />
            </Container>
        </div>
    );
}

export default LeaderboardsPage;