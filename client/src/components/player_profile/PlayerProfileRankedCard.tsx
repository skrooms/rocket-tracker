import { Card, Table } from "react-bootstrap"
import { Player } from "../../models/player";

interface PlayerProfileRankedCardProps {
    player: Player | null
}

const PlayerProfileRankedCard = ({ player }: PlayerProfileRankedCardProps) => {

    const tableRowStyle = {
        color: "white",
        backgroundColor: "rgba(31, 31, 31, 0.0)",
    };


    const playerCardTableBody = (
        <tbody>
            {
                player?.rankedStats.ranks.map(playlist => {
                    return (
                        <tr>
                            <td style={tableRowStyle}>{playlist.playlist} / {playlist.rank} Division {playlist.division}</td>
                            <td style={tableRowStyle}>{playlist.mmr}</td>
                            <td style={tableRowStyle}>{playlist.played}</td>
                            <td style={tableRowStyle}>{playlist.streak}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    )

    return (
        <Card className="grey-card">
            <Card.Title>
                <h2 className="player-card-title">{player?.epicUsername}'s Ranked Stats</h2>
            </Card.Title>
            <Card.Body>
                <Table>
                    <thead>
                        <th>Playlist / Rank</th>
                        <th>Rating</th>
                        <th>Matches Played</th>
                        <th>Streak</th>
                    </thead>
                    { playerCardTableBody }
                </Table>
            </Card.Body>
        </Card>
    );
}

export default PlayerProfileRankedCard;