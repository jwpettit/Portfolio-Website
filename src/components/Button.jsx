import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const YellowButton = styled(Button)({
    fontFamily: "DIN-Regular",
    textTransform: "none",
    color: "#0F1120",
    backgroundColor: "#FFE443",
    "&:hover": {
        backgroundColor: "#FFEE8E",
    },
});

export default function GoHomeButton() {
    const navigate = useNavigate();

    return (
        <YellowButton variant="contained" onClick={() => navigate("/")}>
            Go Home
        </YellowButton>
    );
}
