import { Card, Table } from "react-bootstrap"
import { Player } from "../../models/player";

interface PlayerProfileRankedCardProps {
    player: Player
}

const PlayerProfileRankedCard = ({ player }: PlayerProfileRankedCardProps) => {


    const playerCardTableBody = (
        <tbody>
            {
                player.rankedStats.ranks.map(playlist => {
                    return (
                        <tr>
                            <td>{playlist.playlist} / {playlist.rank} Division {playlist.division}</td>
                            <td>{playlist.mmr}</td>
                            <td>{playlist.played}</td>
                            <td>{playlist.streak}</td>
                        </tr>
                    );
                })
            }
        </tbody>
    )

    return (
        <Card>
            <Card.Title>
                <h2 className="player-card-title">{player.epicUsername}'s Ranked Stats</h2>
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