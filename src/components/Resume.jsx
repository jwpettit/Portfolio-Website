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
                            <div className="Resume-Body-Text-Bold">
                                <p>BrewHop</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <a
                                    href="https://gitlab.com/brewhoppers/brew-hop"
                                    target="blank"
                                >
                                    gitlab.com/brewhoppers/brew-hop
                                </a>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2022</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <p>App to discover new breweries</p>
                        <ul className="Resume-List-Margin">
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
                            <div className="Resume-Body-Text-Bold">
                                <p>Treampardy</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <a
                                    href="https://gitlab.com/treamforce/treampardy-take-2"
                                    target="blank"
                                >
                                    gitlab.com/treamforce/treampardy-take-2
                                </a>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2022</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <p>App to discover new breweries</p>
                        <ul className="Resume-List-Margin">
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
                            <div className="Resume-Body-Text-Bold">
                                <p>AutoBahn</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <a
                                    href="https://gitlab.com/jwpettit/project-beta"
                                    target="blank"
                                >
                                    gitlab.com/jwpettit/project-beta
                                </a>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2022</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <p>App to discover new breweries</p>
                        <ul className="Resume-List-Margin">
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

                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Resume-Body-Text-Bold">
                                <p>Code for San Francisco</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Volunteer Software Engineer</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2021-2022</p>
                        </div>
                    </div>

                    <div className="Resume-Body-Text">
                        <ul className="Resume-List-Margin">
                            <li>
                                Currently working on project iWalk to build
                                React charts for the app's admin panel
                            </li>
                        </ul>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Resume-Body-Text-Bold">
                                <p>Days United</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Lead Product Design Engineer</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Mountain View, CA</p>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2021-2022</p>
                        </div>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Resume-Body-Text-Bold">
                                <p>Days United</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Business Consultant</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Mountain View, CA</p>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2020-2021</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <ul className="Resume-List-Margin">
                            <li>
                                Led design, engineering, prototyping, and
                                manufacturing for a startup subscription box
                                service
                            </li>
                            <li>
                                Introduced new production techniques such as
                                machined aluminum and ceramics,
                            </li>
                            <li>
                                Managed project management system by setting
                                milestones, sharing updates with stakeholders
                                and tracking development progress against
                                timelines
                            </li>
                        </ul>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Resume-Body-Text-Bold">
                                <p>Super7</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Product Design Engineer</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2018-2021</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <ul className="Resume-List-Margin">
                            <li>
                                Introduced advanced prototyping techniques, such
                                as: in-house 3D modeling, 3D printing, and
                                mechanical stress-testing, defined detailed
                                manufacturing specifications, and implemented
                                development best-practices in order to lower
                                product defect rates, deliver product on-time
                                and on-budget
                            </li>
                            <li>
                                Led transition to new bigger production
                                facility, after reviewing the current supply
                                chain strategy, in order to benefit from
                                improved efficiencies through increased
                                automation{" "}
                            </li>
                            <li>
                                Directed manufacturers to follow strict brand
                                guidelines, ensuring the highest quality of
                                licensed product lines with Disney,
                                NBCUniversal, 21st Century Fox, MLB, NBA, and
                                more
                            </li>
                        </ul>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Resume-Body-Text-Bold">
                                <p>Piper</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Lead Industrial Designer</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2017-2018</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <ul className="Resume-List-Margin">
                            <li>
                                Led entire product development of the 2nd
                                generation Piper Computer Kit: from identifying
                                common product failure points from extensive
                                user-testing, through innovative hardware UX,
                                resulting in a successful relaunch of the
                                product
                            </li>
                            <li>
                                Conducted frequent user-testing of Piper’s
                                proprietary mechanical build and software
                                experiences including games, coding, and
                                engineering principles of physics, mechanics,
                                electronics, and circuits
                            </li>
                            <li>
                                Created end-to-end user journey through visual
                                documentation consisting of highly-annotated
                                technical drawings presented in an accessible,
                                easy-to-understand blueprint
                            </li>
                            <li>
                                Partnered closely with contract manufacturers,
                                traveling multiple times overseas, to produce
                                and ship in time to meet the demand of the 2018
                                holiday season
                            </li>
                        </ul>
                    </div>
                    <div className="Resume-Header-Container">
                        <div className="Resume-Header-Title-Container">
                            <div className="Resume-Body-Text-Bold">
                                <p>KiwiCo (Tinker Crate)</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Industrial Designer</p>
                            </div>
                            <div className="Resume-Text-Divider" />
                            <div className="Resume-Body-Text">
                                <p>Mountain View, CA</p>
                            </div>
                        </div>
                        <div className="Resume-Body-Text-Right">
                            <p>2015-2017</p>
                        </div>
                    </div>
                    <div className="Resume-Body-Text">
                        <ul className="Resume-List-Margin">
                            <li>
                                Designed, engineered, and prototyped STEM
                                products and experiences for the Tinker Crate
                                brand under a 6-month product development
                                lifecycle
                            </li>
                            <li>
                                Shipped 17+ products in a 3-year time span,
                                value-engineering against aggressive margin
                                goals, while conducting extensive user testing
                                to achieve consistently high NPS scores
                            </li>
                            <li>
                                Managed editorial team to publish technical
                                instructions, supplementing the products to
                                ensure a positive experience for end users age
                                9+
                            </li>
                        </ul>
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
