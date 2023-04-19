import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import ContactLinkedInIcon from "../icons/ContactLinkedIn";
import ContactGitHubIcon from "../icons/ContactGitHub";
import ContactGitLabIcon from "../icons/ContactGitLab";
import ContactPhoneIcon from "../icons/ContactPhone";
import ReactGA from "react-ga";

export default function Contact() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div className="Page-Background-Container">
            <div className="Page-Content-Container-1">
                <div className="H1-Header">
                    <h1>Let's work together!</h1>
                </div>
                <div className="Contact-Container-Flex">
                    <div className="Contact-Column">
                        <div className="H3-Header Contact-Header-Top-Space">
                            <h3>Contact me:</h3>
                        </div>
                        <div className="Contact-Icons-Box Contact-Top-Space">
                            <ContactLinkedInIcon />
                            <ContactGitHubIcon />
                            <ContactGitLabIcon />
                            <ContactPhoneIcon />
                        </div>
                        <div className="Body-Text Contact-Top-Space">
                            <p>
                                Let's talk! Fill out the form to get in touch.
                            </p>
                            <p>
                                I'm currently seeking software
                                engineering/development roles.
                            </p>
                        </div>
                    </div>
                    <div className="Contact-Column">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
