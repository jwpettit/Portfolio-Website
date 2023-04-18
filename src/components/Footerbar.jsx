import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Clock from "./Clock";
import CurrentYear from "./CurrentYear";

export default function Footer() {
    return (
        <Navbar sticky="bottom" className="Footer-Visual">
            <Navbar.Collapse>
                <Container>
                    <Navbar.Brand className="Footer-Text">
                        It is currently <Clock /> in California, where Jeff is
                        based.
                    </Navbar.Brand>
                </Container>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Container className="Footer-Copyright-Box">
                    <Navbar.Brand className="Footer-Text">
                        ©<CurrentYear /> Jeff Pettit
                    </Navbar.Brand>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}
