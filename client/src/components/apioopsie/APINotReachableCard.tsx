import { Card } from "react-bootstrap"


const APINotReachableCard = () => {
    return (
        <Card className="grey-card">
            <Card.Header>
                <Card.Title>
                    <h2>
                        The Rocket League API is not reachable at the moment
                    </h2>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                The Rocket League API seems to be making a bit of an oopsie daisy at the moment. This is not something I have any control over. While this is going on, searching for players and updating their ratings/leaderboard positions will not function properly.
                Thank you for understanding.
            </Card.Body>
        </Card>
    );
}

export default APINotReachableCard;