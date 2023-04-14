import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Landing() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1 className="Homepage-Intro-Text">Hi,</h1>
                        <h1 className="Homepage-Intro-Text">I'm Jeff.</h1>
                    </Col>
                    <Col>
                        <div className="Homepage-Divider-Line" />
                    </Col>
                    <Col>
                        <h1 className="Homepage-About-Text">I'm</h1>
                        <h1 className="Homepage-About-Text">a software engineer</h1>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
