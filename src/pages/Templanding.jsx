import React, { useState } from "react";
import "../App.css";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Modal, Button } from "react-bootstrap";

export default function Templanding() {
    const [phoneModal, showPhoneModal] = useState(false);

    return (
        <>
            <div className="Temp-Landing">
                <div className="Temp-Header">
                    <h1>Hi, I'm Jeff!</h1>
                    <h1>Welcome to my site.</h1>
                </div>
                <br />
                <div className="Temp-Body">
                    <h2>I am a software engineer based in CA.</h2>
                    <h3>
                        Please view my projects on my{" "}
                        <a href="https://gitlab.com/jwpettit" target="blank">
                            Gitlab page
                        </a>
                        .
                    </h3>
                </div>
                <div className="Icons-Box">
                    <IconButton
                        href="https://linkedin.com/in/pettitjw"
                        target="blank"
                    >
                        <LinkedInIcon className="Icons" />
                    </IconButton>
                    <IconButton href="mailto:j@jeffpett.it">
                        <EmailIcon className="Icons" />
                    </IconButton>
                    <IconButton
                        onClick={() => showPhoneModal(true)}
                    >
                        <LocalPhoneIcon className="Icons" />
                    </IconButton>
                </div>
            </div>
            <div>
                <Modal centered show={phoneModal}>
                    <Modal.Header className="Temp-Header">
                        <Modal.Title>Call or Text</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="Temp-Body">
                        <p> 🇺🇸 +1 - 415 - 690 - 0415</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="outline-dark"
                            className="Temp-Body"
                            onClick={() => showPhoneModal(false)}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}
