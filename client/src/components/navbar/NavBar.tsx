import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const NavBar = () => {


    return (
        <Navbar expand="lg" variant="primary" className="navbar">
            <Container>
                <Navbar.Brand className="navbar" as={Link} to="/">Rocket Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="navbar">Home</Nav.Link>
                        <Nav.Link as={Link} to="/leaderboards" className="navbar">Leaderboards</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;