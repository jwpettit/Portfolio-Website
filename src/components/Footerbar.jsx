import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Clock from "./Clock";

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
                <Container className="Footer-Flags-Box">
                    <Navbar.Brand href="">
                        <img
                            alt="USA Flag"
                            src={`${process.env.PUBLIC_URL}/flags/Flag_USA.svg`}
                            height="60"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="">
                        <img
                            alt="Luxembourg Flag"
                            src={`${process.env.PUBLIC_URL}/flags/Flag_Luxembourg.svg`}
                            height="60"
                        />
                    </Navbar.Brand>
                    <Navbar.Brand href="">
                        <img
                            alt="LGBTQ Flag"
                            src={`${process.env.PUBLIC_URL}/flags/Flag_LGBT.svg`}
                            height="60"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
};
