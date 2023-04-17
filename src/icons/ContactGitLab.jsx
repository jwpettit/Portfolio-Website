import StyledIconButton from "./CustomIconButton";

export default function ContactGitLabIcon() {
    return (
        <StyledIconButton href="https://gitlab.com/jwpettit" target="blank">
            <img
                src={`${process.env.PUBLIC_URL}/gitlab-logo-600.svg`}
                height="45"
            />
        </StyledIconButton>
    );
}
