import StyledIconButton from "./CustomIconButton";
import DownloadIcon from '@mui/icons-material/Download';

export default function DownloadResumeIcon() {
    return (
        <StyledIconButton
            href={`${process.env.PUBLIC_URL}/Jeff Pettit_Resume_SPRING 23.pdf`}
            download="Jeff Pettit_Resume_SPRING 23.pdf"
        >
            <DownloadIcon className="Resume-Download-Icon" />
        </StyledIconButton>
    );
}
