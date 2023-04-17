import StyledIconButton from "./CustomIconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactLinkedInIcon() {
    return (
        <>
            <StyledIconButton
                href="https://linkedin.com/in/pettitjw"
                target="blank"
            >
                <LinkedInIcon className="Contact-Icons" />
            </StyledIconButton>
        </>
    );
}
