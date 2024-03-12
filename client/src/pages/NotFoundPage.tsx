import { Card } from "react-bootstrap";
import NavBar from "../components/navbar/NavBar";


const NotFoundPage = () => {


    return (
        <>
            <NavBar />
            <div className="page d-flex justify-content-center align-items-center">
                <Card>
                    <Card.Body>
                        <h3>Hmm, looks like something went wrong</h3>
                        <p>The page you're looking for doesn't seem to exist</p>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default NotFoundPage;
