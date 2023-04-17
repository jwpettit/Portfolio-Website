import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div className="Page-Background-Container">
            <div className="Contact-Container-1">
                <div className="H1-Header">
                    <h1>Let's work together!</h1>
                </div>{" "}
                <div className="H3-Header">
                    <h3>Contact me:</h3>
                </div>
                <ContactForm />
            </div>
        </div>
    );
}
