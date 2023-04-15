import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <Navbar sticky="bottom" className="Footer-Visual">
            <Navbar.Collapse>
                <Container>
                    <Navbar.Brand className="Footer-Text">
                        It is currently 17:05:49 in California, where Jeff is
                        based.
                    </Navbar.Brand>
                </Container>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
                <Container className="Navlinks-Box">
                <Navbar.Brand
                    href=""
                >
                    <img
                        alt="USA"
                        src={`${process.env.PUBLIC_URL}/flags/Flag_USA.svg`}
                        height="60"
                        className="d-inline-block align-middle"
                    />
                </Navbar.Brand>
                <Navbar.Brand
                    href=""
                >
                    <img
                        alt="USA"
                        src={`${process.env.PUBLIC_URL}/flags/Flag_Luxembourg.svg`}
                        height="60"
                        className="d-inline-block align-middle"
                    />
                </Navbar.Brand>
                <Navbar.Brand
                    href=""
                >
                    <img
                        alt="USA"
                        src={`${process.env.PUBLIC_URL}/flags/Flag_LGBT.svg`}
                        height="60"
                        className="d-inline-block align-middle"
                    />
                </Navbar.Brand>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}
