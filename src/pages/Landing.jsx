import HomepageTyping from "../components/TypingAnimation";

export default function Landing() {
    return (
        <div className="Homepage-Container">
            <div>
                <h1 className="Homepage-Intro-Text">Hi,</h1>
                <h1 className="Homepage-Intro-Text">I'm Jeff.</h1>
            </div>
            <div className="Vertical-Line-1" />
            <div className="Vertical-Line-2" />
            <div>
                <h1 className="Homepage-About-Text">I'm</h1>
                <HomepageTyping />
            </div>
        </div>
    );
}
