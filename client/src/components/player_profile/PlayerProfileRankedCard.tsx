import { Card, Table } from "react-bootstrap"
import { Player } from "../../models/player";
import unranked from "../../assets/images/rankicons/unranked.webp";
import bronze1 from "../../assets/images/rankicons/bronze1.webp";
import bronze2 from "../../assets/images/rankicons/bronze2.webp";
import bronze3 from "../../assets/images/rankicons/bronze3.webp";
import silver1 from "../../assets/images/rankicons/silver1.webp";
import silver2 from "../../assets/images/rankicons/silver2.webp";
import silver3 from "../../assets/images/rankicons/silver3.webp";
import gold1 from "../../assets/images/rankicons/gold1.webp";
import gold2 from "../../assets/images/rankicons/gold2.webp";
import gold3 from "../../assets/images/rankicons/gold3.webp";
import plat1 from "../../assets/images/rankicons/plat1.webp";
import plat2 from "../../assets/images/rankicons/plat2.webp";
import plat3 from "../../assets/images/rankicons/plat3.webp";
import diamond1 from "../../assets/images/rankicons/diamond1.webp";
import diamond2 from "../../assets/images/rankicons/diamond2.webp";
import diamond3 from "../../assets/images/rankicons/diamond3.webp";
import champ1 from "../../assets/images/rankicons/champ1.webp";
import champ2 from "../../assets/images/rankicons/champ2.webp";
import champ3 from "../../assets/images/rankicons/champ3.webp";
import gc1 from "../../assets/images/rankicons/gc1.webp";
import gc2 from "../../assets/images/rankicons/gc2.webp";
import gc3 from "../../assets/images/rankicons/gc3.webp";
import ssl from "../../assets/images/rankicons/ssl.webp";

interface PlayerProfileRankedCardProps {
    player: Player | null
}

const PlayerProfileRankedCard = ({ player }: PlayerProfileRankedCardProps) => {

    const rankMap = new Map();
    rankMap.set("Unranked", unranked);
    rankMap.set("Bronze I", bronze1);
    rankMap.set("Bronze II", bronze2);
    rankMap.set("Bronze III", bronze3);
    rankMap.set("Silver I", silver1);
    rankMap.set("Silver II", silver2);
    rankMap.set("Silver III", silver3);
    rankMap.set("Gold I", gold1);
    rankMap.set("Gold II", gold2);
    rankMap.set("Gold III", gold3);
    rankMap.set("Platinum I", plat1);
    rankMap.set("Platinum II", plat2);
    rankMap.set("Platinum III", plat3);
    rankMap.set("Diamond I", diamond1);
    rankMap.set("Diamond II", diamond2);
    rankMap.set("Diamond III", diamond3);
    rankMap.set("Champion I", champ1);
    rankMap.set("Champion II", champ2);
    rankMap.set("Champion III", champ3);
    rankMap.set("Grand Champion I", gc1);
    rankMap.set("Grand Champion II", gc2);
    rankMap.set("Grand Champion III", gc3);
    rankMap.set("Supersonic Legend", ssl);

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
                            <td style={{...tableRowStyle, textAlign: "left"}}>
                                <img src={rankMap.get(playlist.rank)} alt="" width="30px"/>
                            </td>
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
                        <th></th>
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