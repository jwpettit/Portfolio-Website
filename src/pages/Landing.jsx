import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Landing() {
    return (
        <div>
            <div className="Homepage-Container">
                <div>
                    <h1 className="Homepage-Intro-Text">Hi,</h1>
                    <h1 className="Homepage-Intro-Text">I'm Jeff.</h1>
                </div>
                <div className="Vertical-Line" />
                <div>
                    <h1 className="Homepage-About-Text">I'm</h1>
                    <h1 className="Homepage-About-Text">a software engineer</h1>
                </div>
            </div>
        </div>
    );
}
