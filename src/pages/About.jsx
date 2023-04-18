import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";

export default function About() {
    return (
        <div className="Page-Background-Container">
            <div className="Page-Content-Container">
                <AboutMe />
                <div className="Horizontal-Section-Divider"/>
                <Resume />
            </div>
        </div>
    );
}
