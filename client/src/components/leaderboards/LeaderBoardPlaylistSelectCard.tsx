import { Card, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";


const LeaderBoardPlaylistSelectCard = () => {
    const [queryParams, setQueryParams] = useSearchParams();

    return (
        <Card className="grey-card col-6">
            <Card.Body>
                <Form.Select onChange={e => {
                    setQueryParams({ playlist: e.target.value, page: "1" });
                }}>
                    <option value={"3v3"}>Ranked Standard 3v3</option>
                    <option value={"2v2"}>Ranked Doubles 2v2</option>
                    <option value={"1v1"}>Ranked Duel 1v1</option>
                    <option value={"hoops"}>Ranked Hoops</option>
                    <option value={"dropshot"}>Ranked Dropshot</option>
                    <option value={"snowday"}>Ranked Snowday</option>
                    <option value={"rumble"}>Ranked Rumble</option>
                </Form.Select>
            </Card.Body>
        </Card>
    );
}

export default LeaderBoardPlaylistSelectCard;