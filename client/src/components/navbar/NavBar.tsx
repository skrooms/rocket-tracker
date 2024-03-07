import { Container, Nav, Navbar } from "react-bootstrap";


const NavBar = () => {


    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Rocket Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;