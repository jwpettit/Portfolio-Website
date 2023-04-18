import Avatar from "@mui/material/Avatar";

export default function AboutMe() {
    return (
        <div className="Page-Content-Container-1">
            <div className="Page-Content-Container-2">
                <div className="Page-Content-Column-1">
                    <div className="Element-Centered">
                        <Avatar
                            alt="Jeff Pettit"
                            src={`${process.env.PUBLIC_URL}/JeffSquare.jpg`}
                            sx={{ width: 450, height: 450 }}
                        />
                    </div>
                </div>
                <div className="Page-Content-Column-1">
                    <div className="H1-Header">
                        <h1>About Me</h1>
                    </div>
                    <br />
                    <div className="H3-Header">
                        <h3>
                            I craft products and experiences.
                        </h3>
                    </div>
                    <br />
                    <div className="Body-Text">
                        <p>
                            I am a detail-oriented problem-solver with a passion
                            for technology and a focus on user-centered design.
                            With a background in industrial design, I have
                            experience managing projects with diverse
                            stakeholders both domestically and abroad. During my
                            time at Hack Reactor, I gained valuable technical
                            skills in software engineering, including experience
                            with JavaScript, React, Python, and Django.
                        </p>
                        <p>
                            More recently, I have been focused on mobile
                            development, learning and exploring frameworks such
                            as SwiftUI and React Native. I am committed to
                            staying up-to-date with the latest trends and
                            technologies in software engineering, and am excited
                            to bring my skills and passion to a new role.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
