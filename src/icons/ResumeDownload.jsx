import StyledIconButton from "./CustomIconButton";
import DownloadIcon from '@mui/icons-material/Download';

export default function DownloadResumeIcon() {
    return (
        <StyledIconButton
            href="https://linkedin.com/in/pettitjw"
            target="blank"
        >
            <DownloadIcon className="Resume-Download-Icon" />
        </StyledIconButton>
    );
}
