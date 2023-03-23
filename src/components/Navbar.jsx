import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    return (
        <Navbar>
            <Navbar.Collapse>
                <Navbar.Brand
                    as={NavLink}
                    to="/"
                >
                    Jeff Pettit
                </Navbar.Brand>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={NavLink} to="work/">Work</Nav.Link>
                <Nav.Link as={NavLink} to="about/">About</Nav.Link>
                <Nav.Link as={NavLink} to="contact/">Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
