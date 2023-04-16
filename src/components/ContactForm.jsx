import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export default function ContactForm() {
    return (
        <>
            <div>
                <YellowTextField
                    label="Name"
                    id="custom-css-outlined-input"
                    variant="standard"
                    required
                />
            </div>
            <div>
                <YellowTextField
                    label="Email Address"
                    id="custom-css-outlined-input"
                    variant="standard"
                    required
                />
            </div>
            <div>
                {/* GOAL: Make this validate country tel numbers */}
                <YellowTextField
                    label="Phone Number"
                    id="custom-css-outlined-input"
                    variant="standard"
                />
            </div>
            <div>
                <YellowTextField
                    id="standard-multiline-static"
                    label="Message"
                    required
                    multiline
                    rows={5}
                    variant="standard"
                />
            </div>
        </>
    );
}
