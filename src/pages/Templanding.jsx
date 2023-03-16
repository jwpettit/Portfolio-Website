import React, { useState } from "react";
import "../App.css";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
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
                    {/* <h3>
                        Please view my projects on my{" "}
                        <a href="https://gitlab.com/jwpettit" target="blank">
                            Gitlab page
                        </a>
                        .
                    </h3> */}
                </div>
                <div className="Icons-Box">
                    <IconButton
                        href="https://linkedin.com/in/pettitjw"
                        target="blank"
                    >
                        <LinkedInIcon className="Icons" />
                    </IconButton>
                    <IconButton
                        href="https://gitlab.com/jwpettit"
                        target="blank"
                    >
                        <GitHubIcon className="Icons" />
                    </IconButton>
                    <IconButton href="mailto:j@jeffpett.it">
                        <EmailIcon className="Icons" />
                    </IconButton>
                    <IconButton onClick={() => showPhoneModal(true)}>
                        <LocalPhoneIcon className="Icons" />
                    </IconButton>
                </div>
                <br />
                <div>
                    <h2>. . .</h2>
                </div>
                <br />
                <div className="Temp-Body">
                    <div>
                        <h3>
                            <b>Selected Project Work</b>
                        </h3>
                    </div>
                    <br />
                    <div>
                        <h3>BrewHop</h3>
                        <h5>An app for discovering new breweries</h5>
                        <h5>
                            <a
                                href="https://brewhoppers.gitlab.io/brew-hop/"
                                target="blank"
                            >
                                Deployed Site
                            </a>
                        </h5>
                        <h5>
                            <a
                                href="https://gitlab.com/brewhoppers/brew-hop"
                                target="blank"
                            >
                                Repository
                            </a>
                        </h5>
                    </div>
                    <br />
                    <div>
                        <h3>Treampardy</h3>
                        <h5>A fun web-game utilizing questions from past episodes of Jeopardy</h5>
                        <h5>
                            <a
                                href="https://treamforce.gitlab.io/treampardy-take-2/"
                                target="blank"
                            >
                                Deployed Site
                            </a>
                        </h5>
                        <h5>
                            <a
                                href="https://gitlab.com/treamforce/treampardy-take-2"
                                target="blank"
                            >
                                Repository
                            </a>
                        </h5>
                    </div>
                    <br />
                    <div>
                        <h3>AutoBahn</h3>
                        <h5>A car dealership manangement app</h5>
                        <h5>
                            <a
                                href="https://gitlab.com/jwpettit/project-beta"
                                target="blank"
                            >
                                Repository
                            </a>
                        </h5>
                    </div>
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
