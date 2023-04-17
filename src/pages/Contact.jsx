import ContactForm from "../components/ContactForm";
import ContactLinkedInIcon from "../icons/ContactLinkedIn";
import ContactGitHubIcon from "../icons/ContactGitHub";
import ContactPhoneIcon from "../icons/ContactPhone";

export default function Contact() {
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
                            <ContactPhoneIcon />
                        </div>
                        <div className="Body-Text Contact-Top-Space">
                            <p>
                                I'm interested in chatting with you! Want to get
                                in touch? Fill out the form to contact me!
                            </p>
                            <p>
                                Currently, I'm seeking roles in software
                                engineering/development that are preferably
                                based in California or remote.
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
