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
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Body-Text-Bold">
                                <p>BrewHop</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Body-Text">
                                <a
                                    href="https://gitlab.com/brewhoppers/brew-hop"
                                    target="blank"
                                >
                                    gitlab.com/brewhoppers/brew-hop
                                </a>
                            </div>
                        </div>
                        <div className="Body-Text-Right">
                            <p>2022</p>
                        </div>
                    </div>
                    <div className="Body-Text">
                        <p>App to discover new breweries</p>
                        <ul>
                            <li>
                                Built Log-in/out forms, Nav, and Signup forms
                                from Bootstrap components and implemented
                                refresh-persisting hooks to ensure login status
                                is not lost during refresh
                            </li>
                            <li>
                                Built entire backend for favorites microservice
                                utilizing FastAPI
                            </li>
                            <li>
                                Built backend wake function with MaterialUI GUI
                                to indicate microservice start-up
                            </li>
                        </ul>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Body-Text-Bold">
                                <p>Treampardy</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Body-Text">
                                <a
                                    href="https://gitlab.com/treamforce/treampardy-take-2"
                                    target="blank"
                                >
                                    gitlab.com/treamforce/treampardy-take-2
                                </a>
                            </div>
                        </div>
                        <div className="Body-Text-Right">
                            <p>2022</p>
                        </div>
                    </div>
                    <div className="Body-Text">
                        <p>App to discover new breweries</p>
                        <ul>
                            <li>
                                Built integration with third-party jservice.io
                                API to supply app’s questions and categories
                            </li>
                            <li>
                                Built logic for question to answer with scoring
                                pipeline utilizing modals and React Hooks
                            </li>
                            <li>
                                Took lead on styling app utilizing Bootstrap,
                                and custom-designed logos/graphics
                            </li>
                        </ul>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Body-Text-Bold">
                                <p>AutoBahn</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Body-Text">
                                <a
                                    href="https://gitlab.com/jwpettit/project-beta"
                                    target="blank"
                                >
                                    gitlab.com/jwpettit/project-beta
                                </a>
                            </div>
                        </div>
                        <div className="Body-Text-Right">
                            <p>2022</p>
                        </div>
                    </div>
                    <div className="Body-Text">
                        <p>App to discover new breweries</p>
                        <ul>
                            <li>
                                Built service and inventory microservices,
                                constructing RESTful APIs in Django, and
                                connecting with a React front-end
                            </li>
                            <li>
                                Took lead on styling app utilizing Bootstrap and
                                custom-designed logos/graphics
                            </li>
                        </ul>
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
