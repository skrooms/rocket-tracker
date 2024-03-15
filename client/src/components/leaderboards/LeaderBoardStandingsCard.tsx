import { Card, Table, Spinner } from "react-bootstrap";
import { Player } from "../../models/player";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as PlayersApi from "../../api/players_api";
import { inherits } from "util";

const LeaderBoardStandingsCard = () => {
    const [queryParams, setQueryParams] = useSearchParams();
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
            return rank.playlist === playlistNameMap.get(selectedPlaylist);
        });

        if (playlistObject[0]) {
            return playlistObject[0].mmr;
        } else {
            return 600;
        }
    }

    const findPlayerGamesPlayedByPlaylist = (player: Player, playlist: string): number => {
        const playlistObject = player.rankedStats.ranks.filter((rank) => {
            return rank.playlist === playlistNameMap.get(selectedPlaylist);
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
                
                let playersToShow: Player[];

                if (sortedPlayers[Number(page) * 20 - 1]) {
                    playersToShow = sortedPlayers.slice((Number(page) - 1) * 20, Number(page) * 20);
                } else {
                    playersToShow = sortedPlayers.slice((Number(page) - 1));
                }
                
                setPlayers(playersToShow);
                setPlayersLoading(false);
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }

        fetchPlayers();
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
                            <td style={tableRowStyle}>{players.indexOf(player) + 1}</td>
                            <td style={tableRowStyle}>
                                <Link to={"/playerprofile?epicUsername=" + player.epicUsername} style={{ color: "inherit", textDecoration: "inherit" }}>
                                    {player.epicUsername}
                                </Link>
                            </td>
                            <td style={tableRowStyle}>{findPlayerRatingByPlaylist(player, selectedPlaylist)}</td>
                            <td style={tableRowStyle}>{findPlayerGamesPlayedByPlaylist(player, selectedPlaylist)}</td>
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
                                    <th>Rank</th>
                                    <th>Player</th>
                                    <th>Rating</th>
                                    <th>Matches Played</th>
                                </thead>
                                { playerTableBody }
                            </Table>
                        </Card.Body>
                    </Card>
                )
            }
        </>
    );
}

export default LeaderBoardStandingsCard;