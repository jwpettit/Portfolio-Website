import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Navigation() {
    return (
        <Navbar>
            <Navbar.Collapse>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        Jeff Pettit
                    </Navbar.Brand>
                </Container>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Container className="Navlinks-Box">
                    <Nav.Link className="Navlinks" as={NavLink} to="work/">
                        Work
                    </Nav.Link>
                    <Nav.Link className="Navlinks" as={NavLink} to="about/">
                        About
                    </Nav.Link>
                    <Nav.Link className="Navlinks" as={NavLink} to="contact/">
                        Contact
                    </Nav.Link>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}
