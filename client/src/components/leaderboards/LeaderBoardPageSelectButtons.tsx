import { Button, ButtonGroup } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"


const LeaderBoardPageSelectButtons = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    let currentPage: string, playlist: string;
    const queryPage = searchParams.get("page");
    const queryPlaylist = searchParams.get("playlist");

    if (queryPage) {
        currentPage = queryPage;
    } else {
        currentPage = "1";
    }

    if (queryPlaylist) {
        playlist = queryPlaylist;
    } else {
        playlist = "3v3";
    }

    // TODO: Conditionally show the buttons after the current selected page based on how many players are left to show.

    return (
        <ButtonGroup>
            {
                Number(currentPage) - 2 > 0 && (
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setSearchParams({ playlist: playlist, page: String(Number(currentPage) - 2)});
                        }}>{Number(currentPage) - 2}</Button>)
            }
            {
                Number(currentPage) - 1 > 0 && (
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setSearchParams({ playlist: playlist, page: String(Number(currentPage) - 1)});
                        }}>{Number(currentPage) - 1}</Button>)
            }
            <Button variant="secondary" active>{ currentPage }</Button>
            {
                true && (
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setSearchParams({ playlist: playlist, page: String(Number(currentPage) + 1)});
                        }}>{Number(currentPage) + 1}</Button>)
            }
            {
                true && (
                    <Button
                        variant="secondary"
                        onClick={() => {
                            setSearchParams({ playlist: playlist, page: String(Number(currentPage) + 2)});
                        }}>{Number(currentPage) + 2}</Button>)
            }
        </ButtonGroup>
    );
}

export default LeaderBoardPageSelectButtons;