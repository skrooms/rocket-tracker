import { Card, Table, Spinner } from "react-bootstrap";
import { Player } from "../../models/player";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as PlayersApi from "../../api/players_api";
import LeaderBoardPageSelectButtons from "./LeaderBoardPageSelectButtons";
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

const LeaderBoardStandingsCard = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const [sortedPlayers, setSortedPlayers] = useState<Player[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [playersLoading, setPlayersLoading] = useState(true);

    const playlistNameMap = new Map();
    playlistNameMap.set("1v1", "Duel (Ranked)");
    playlistNameMap.set("2v2", "Doubles (Ranked)");
    playlistNameMap.set("3v3", "Standard (Ranked)");
    playlistNameMap.set("hoops", "Hoops");
    playlistNameMap.set("rumble", "Rumble");
    playlistNameMap.set("dropshot", "Dropshot");
    playlistNameMap.set("snowday", "Snow Day");

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

    let selectedPlaylist: string;
    const queryPlaylist = queryParams.get("playlist");

    if (queryPlaylist) {
        selectedPlaylist = queryPlaylist;
    } else {
        setQueryParams({ playlist: "3v3" });
        selectedPlaylist = "3v3";
    }

    let page: string;
    const queryPage = queryParams.get("page");

    if (queryPage) {
        page = queryPage;
    } else {
        page = "1";
    }

    const findPlayerRatingByPlaylist = (player: Player, playlist: string): number => {
        const playlistObject = player.rankedStats.ranks.filter((rank) => {
            return rank.playlist === playlistNameMap.get(playlist);
        });

        if (playlistObject[0]) {
            return playlistObject[0].mmr;
        } else {
            return 600;
        }
    }

    const findPlayerRankNameByPlaylist = (player: Player, playlist: string): string => {
        const playlistObject = player.rankedStats.ranks.filter((rank) => {
            return rank.playlist === playlistNameMap.get(playlist);
        });

        if (playlistObject[0]) {
            return playlistObject[0].rank
        } else {
            return "Unranked";
        }
    }

    const findPlayerGamesPlayedByPlaylist = (player: Player, playlist: string): number => {
        const playlistObject = player.rankedStats.ranks.filter((rank) => {
            return rank.playlist === playlistNameMap.get(playlist);
        });

        if (playlistObject[0]) {
            return playlistObject[0].played;
        } else {
            return 0;
        }
    }

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const players = await PlayersApi.fetchPlayers();

                const sortedPlayers = players.sort((a, b) => {
                    return findPlayerRatingByPlaylist(b, selectedPlaylist) - findPlayerRatingByPlaylist(a, selectedPlaylist);
                });

                setSortedPlayers(sortedPlayers);
                
                let playersToShow: Player[];

                if (sortedPlayers[Number(page) * 20 - 1]) {
                    playersToShow = sortedPlayers.slice((Number(page) - 1) * 20, Number(page) * 20);
                } else {
                    playersToShow = sortedPlayers.slice((Number(page) - 1) * 20);
                }
                
                setPlayers(playersToShow);
                setPlayersLoading(false);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }

        fetchPlayers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedPlaylist, page]);

    const tableRowStyle = {
        color: "white",
        backgroundColor: "rgba(31, 31, 31, 0.0)",
    };

    const playerTableBody = (
        <tbody>
            {
                players.map(player => {
                    return (
                        <tr key={player.epicUsername}>
                            <td style={tableRowStyle}>{sortedPlayers.indexOf(player) + 1}</td>
                            <td style={tableRowStyle}>
                                <Link to={"/playerprofile?epicUsername=" + player.epicUsername} style={{ color: "inherit", textDecoration: "inherit" }}>
                                    {player.epicUsername}
                                </Link>
                            </td>
                            <td style={{...tableRowStyle, textAlign: "left"}}>
                                <img src={rankMap.get(findPlayerRankNameByPlaylist(player, selectedPlaylist))} alt="" width="30px"/>
                            </td>
                            <td style={tableRowStyle}>
                                {findPlayerRatingByPlaylist(player, selectedPlaylist)}
                            </td>
                            <td style={{...tableRowStyle, textAlign: "center"}}>{findPlayerGamesPlayedByPlaylist(player, selectedPlaylist)}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )


    
    return (
        <>
            {
                playersLoading ? (
                    <Spinner animation="border" variant="secondary" />
                ) : (
                    <Card className="grey-card">
                        <Card.Body>
                            <Table>
                                <thead>
                                    <th className="col-1">Rank</th>
                                    <th className="col-7">Player</th>
                                    <th className="col-1"></th>
                                    <th style={{textAlign: "left"}}>Rating</th>
                                    <th style={{textAlign: "right"}}>Matches Played</th>
                                </thead>
                                { playerTableBody }
                            </Table>
                        </Card.Body>
                    </Card>
                )
            }
            <div className="card-container d-flex justify-content-center">
                <LeaderBoardPageSelectButtons sizeOfPlayersArray={sortedPlayers.length}/>
            </div>
        </>
    );
}

export default LeaderBoardStandingsCard;