import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const MainSearchBar = () => {
    const [epicUsername, setEpicUsername] = useState("");

    return (
        <Container className="main-search">
            <Form.Group as={Row} className="col-12 main-search" controlId="mainSearch">
                <Col className="col-6">
                    <Form.Control
                        placeholder="Exact Epic Games Username to Search" 
                        size="lg"
                        onChange={(e) => {
                            setEpicUsername(e.target.value);
                        }}/>
                </Col>
                <Col sm="2">
                    <Link to={"/playersearch?epicid=" + epicUsername}>
                        <Button size="lg" className="btn btn-secondary">
                            Search
                        </Button>
                    </Link>
                </Col>
                
            </Form.Group>
        </Container>
    );
}

export default MainSearchBar;