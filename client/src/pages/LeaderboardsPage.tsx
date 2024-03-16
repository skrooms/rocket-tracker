import { Container } from "react-bootstrap";
import LeaderBoardPlaylistSelectCard from "../components/leaderboards/LeaderBoardPlaylistSelectCard";
import LeaderBoardStandingsCard from "../components/leaderboards/LeaderBoardStandingsCard";
import LeaderBoardPageSelectButtons from "../components/leaderboards/LeaderBoardPageSelectButtons";


const LeaderboardsPage = () => {
    

    return (
        <div className="page-leaderboard">
            <Container>
                <div className="card-container">
                    <LeaderBoardPlaylistSelectCard />
                </div>
                <div className="card-container">
                    <LeaderBoardStandingsCard />
                </div>
            </Container>
        </div>
    );
}

export default LeaderboardsPage;