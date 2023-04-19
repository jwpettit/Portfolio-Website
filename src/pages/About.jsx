import { useEffect } from "react";
import AboutMe from "../components/AboutMe";
import Resume from "../components/Resume";
import ReactGA from "react-ga";

export default function About() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div className="Page-Background-Container">
            <div className="Page-Content-Container">
                <AboutMe />
                <div className="Horizontal-Section-Divider" />
                <Resume />
            </div>
        </div>
    );
}
