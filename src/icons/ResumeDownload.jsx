import StyledIconButton from "./CustomIconButton";
import DownloadIcon from '@mui/icons-material/Download';

export default function DownloadResumeIcon() {
    return (
        <StyledIconButton
            href={`${process.env.PUBLIC_URL}/flags/Flag_USA.svg`}
            download=""
        >
            <DownloadIcon className="Resume-Download-Icon" />
        </StyledIconButton>
    );
}
