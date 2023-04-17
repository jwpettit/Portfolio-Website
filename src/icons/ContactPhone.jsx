import { useState } from "react";
import StyledIconButton from "./CustomIconButton";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Modal } from "react-bootstrap";

const YellowButton = styled(Button)({
    fontFamily: "DIN-Bold",
    textTransform: "none",
    color: "#0F1120",
    backgroundColor: "#FFE443",
    "&:hover": {
        backgroundColor: "#FFEE8E",
    },
});

export default function ContactPhoneIcon() {
    const [phoneModal, showPhoneModal] = useState(false);

    return (
        <>
            <StyledIconButton onClick={() => showPhoneModal(true)}>
                <LocalPhoneIcon className="Contact-Icons" />
            </StyledIconButton>
            <Modal centered show={phoneModal}>
                <Modal.Header className="Phone-Modal-Header">
                    <Modal.Title>Call or Text</Modal.Title>
                </Modal.Header>
                <Modal.Body className="Phone-Modal-Body">
                    <p> 🇺🇸 +1 - 415 - 690 - 0415</p>
                </Modal.Body>
                <Modal.Footer>
                    <YellowButton
                        variant="contained"
                        onClick={() => showPhoneModal(false)}
                    >
                        Close
                    </YellowButton>
                </Modal.Footer>
            </Modal>
        </>
    );
}
