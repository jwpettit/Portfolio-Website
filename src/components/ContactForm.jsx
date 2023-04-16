import React, { useState, useRef } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";

const YellowTextField = styled(TextField)({
    // Controls the label above the text box when active
    "& label.Mui-focused": {
        fontFamily: "DIN-Regular",
        color: "#FFE443",
    },
    // Controls the underline when active
    "& .MuiInput-underline:after": {
        borderBottomColor: "#FFE443",
    },
    // Controls the underline when inactive
    "& .MuiInput-underline:before": {
        borderBottomColor: "#FFFFFF",
    },
    "& .MuiInput-underline:hover:before": {
        borderBottomColor: "#FFE443",
    },
    // Controls the underline when hovering
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottomColor: "#FFE443",
    },
    "& .MuiInput-root.Mui-disabled": {
        color: "gray",
    },
    "& .MuiInput-input": {
        color: "#FFFFFF",
        fontFamily: "DIN-Regular",
        "&::placeholder": {
            color: "#FFFFFF",
        },
    },
    "& .MuiInputLabel-root": {
        fontFamily: "DIN-Regular",
        color: "#FFFFFF",
    },
    "& .MuiInput-input.Mui-disabled": {
        color: "gray",
    },
});

const YellowButton = styled(Button)({
    fontFamily: "DIN-Bold",
    textTransform: "none",
    color: "#0F1120",
    backgroundColor: "#FFE443",
    "&:hover": {
        backgroundColor: "#FFEE8E",
    },
});

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [message, setMessage] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const emailData = {
            from_name: name,
            from_email: email,
            from_phone_no: phoneNo,
            message: message,
        };

        const serviceKey = process.env.REACT_APP_EMAILJS_SERVICE_KEY;
        const templateKey = process.env.REACT_APP_EMAILJS_TEMPLATE_KEY;
        const userKey = process.env.REACT_APP_EMAILJS_USER_KEY;

        emailjs.send(serviceKey, templateKey, emailData, userKey).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <YellowTextField
                    type="text"
                    label="Name"
                    variant="standard"
                    fullWidth
                    required
                    name="from_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <YellowTextField
                    type="email"
                    label="Email Address"
                    variant="standard"
                    fullWidth
                    required
                    name="from_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                {/* GOAL: Make this validate country tel numbers */}
                <YellowTextField
                    type="text"
                    label="Phone Number"
                    variant="standard"
                    fullWidth
                    name="from_phone_no"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                />
            </div>
            <div>
                <YellowTextField
                    type="text"
                    label="Message"
                    required
                    multiline
                    fullWidth
                    rows={5}
                    variant="standard"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div>
                <YellowButton variant="contained" type="submit" value="Send">
                    Submit
                </YellowButton>
            </div>
        </form>
    );
}
