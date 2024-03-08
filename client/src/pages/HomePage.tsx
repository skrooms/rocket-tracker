import { Container } from "react-bootstrap";
import MainSearchBar from "../components/homepage/MainSearchBar";


const HomePage = () => {


    return (
        <div className=" main-search-bar d-flex align-items-center justify-content-center">
            <Container>
                <MainSearchBar />
            </Container>
        </div>
    );
}

export default HomePage;