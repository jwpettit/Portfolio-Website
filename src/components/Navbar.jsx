import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navigation() {
    return (
        <Navbar>
            <Navbar.Collapse>
                <Navbar.Brand>
                    Jeff Pettit
                </Navbar.Brand>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link>Work</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
