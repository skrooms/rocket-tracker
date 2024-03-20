import { Card } from "react-bootstrap"


const PlayerNotFoundCard = () => {


    return (
        <Card className="grey-card">
            <Card.Header>
                <Card.Title>
                    <h2>
                        Oops, looks like that player doesn't exist
                    </h2>
                </Card.Title>
            </Card.Header>
            <Card.Body>
                We couldn't find any information about that player in the Rocket League database, which is probably the result of a typo. Please make sure you've spelled the player's name correctly (including spaces and punctuation) and try again.
            </Card.Body>
        </Card>
    );
}

export default PlayerNotFoundCard;