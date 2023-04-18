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
                            I'm passionate about crafting great products and
                            experiences.
                        </h3>
                    </div>
                    <br />
                    <div className="Body-Text">
                        <p>
                            Through my experience working as an industrial
                            designer, I’ve come to realize that I am naturally a
                            detail-oriented problem-solver who is passionate
                            about all things tech. From working on
                            human-centered design projects I tend to be very
                            user-focused in my solutions and am always learning
                            new tools and skills. In project work I am very
                            leadership-oriented and have extensive experience
                            managing projects with diverse stakeholders both
                            domestically and abroad.
                        </p>
                        <p>
                            During my time at Hack Reactor, I developed many new
                            technical skills. I'm always learning and lately
                            have been focused on getting into mobile
                            development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
