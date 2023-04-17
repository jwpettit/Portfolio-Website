import StyledIconButton from "./CustomIconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ContactGitHubIcon() {
    return (
        <StyledIconButton href="https://github.com/jwpettit" target="blank">
            <GitHubIcon className="Contact-Icons" />
        </StyledIconButton>
    );
}
