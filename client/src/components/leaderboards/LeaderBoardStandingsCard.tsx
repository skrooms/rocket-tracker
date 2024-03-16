import { Card, Table, Spinner } from "react-bootstrap";
import { Player } from "../../models/player";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as PlayersApi from "../../api/players_api";
import LeaderBoardPageSelectButtons from "./LeaderBoardPageSelectButtons";
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
                            <td style={tableRowStyle}>
                                <img src={ssl} width="30px"/>
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
                                    <th className="col-8">Player</th>
                                    <th>Rating</th>
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