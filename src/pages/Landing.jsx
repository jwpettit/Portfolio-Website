import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Landing() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Hi, I'm Jeff.</h1>
                    </Col>
                    <Col>
                        <h3>
                            A full-stack software engineer based in California.
                        </h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
