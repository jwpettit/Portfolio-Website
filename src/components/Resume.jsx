import DownloadResumeIcon from "../icons/ResumeDownload";

export default function Resume() {
    return (
        <div className="Page-Content-Container-1">
            <div className="Resume-Title-Icon-Container">
                <div className="H3-Header" style={{ marginRight: "10px" }}>
                    <h3>Current Resume</h3>
                </div>
                <div>
                    <DownloadResumeIcon />
                </div>
            </div>

            <div className="Resume-Body-Container">
                <div className="Resume-Main-Column">
                    <div className="H4-Header">
                        <h4>Application Development Experience</h4>
                    </div>
                    <div className="H4-Header">
                        <h4>Professional Experience</h4>
                    </div>
                </div>

                <div className="Resume-Secondary-Column">
                    <div className="H4-Header">
                        <h4>Education</h4>
                    </div>
                    <div className="H4-Header">
                        <h4>Technical Skills</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
