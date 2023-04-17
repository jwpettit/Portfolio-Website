import ContactForm from "../components/ContactForm";
import ContactLinkedInIcon from "../icons/ContactLinkedIn";

export default function Contact() {
    return (
        <div className="Page-Background-Container">
            <div className="Page-Content-Container-1">
                <div className="H1-Header">
                    <h1>Let's work together!</h1>
                </div>
                <div className="H3-Header">
                    <h3>Contact me:</h3>
                </div>
                <div className="Contact-Container-Flex">
                    <div className="Contact-Column">
                        <div className="Contact-Icons-Box">
                            <ContactLinkedInIcon />
                        </div>
                        <div>
                            <p className="Body-Text">
                                I'm currently seeking roles in software
                                engineering/development that are based in
                                California or remote. Also interested to chat
                                with anyone! Want to get in touch? Fill out the
                                form to contact me!
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
