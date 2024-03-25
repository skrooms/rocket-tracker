import { Container } from "react-bootstrap";
import APINotReachableCard from "../components/apioopsie/APINotReachableCard";


const APIOopsiePage = () => {

    return (
        <div className="page d-flex justify-content-center align-items-center">
            <Container>
                <APINotReachableCard />
            </Container>
        </div>
    );
}

export default APIOopsiePage;