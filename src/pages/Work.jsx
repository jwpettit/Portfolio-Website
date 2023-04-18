export default function Work() {
    return (
        <div className="Page-Background-Container">
            <div className="Page-Content-Container-1">
                <div className="H1-Header">
                    <h1>Work</h1>
                </div>
                <br />
                <div className="H3-Header">
                    <h3>
                        Below are some projects that I have worked on recently.
                        If you have any questions while reviewing them, please
                        don't hesitate to reach out!
                    </h3>
                </div>
                <div className="Horizontal-Section-Divider" />
                <div className="Page-Content-Container-2">
                    <div className="Page-Content-Column-1">
                        <img
                            alt="BrewHop Homepage"
                            src={`${process.env.PUBLIC_URL}/project_screenshots/Screenshot_BrewHop_Homepage.png`}
                        />
                    </div>
                    <div className="Page-Content-Column-1">
                        <div className="H3-Header">
                            <h3>BrewHop</h3>
                        </div>
                        <br />
                        <div className="Body-Text-Bold">
                            <p>
                                BrewHop is a web application to help 21+
                                customers find breweries in areas around the
                                United States.
                            </p>
                        </div>
                        <div className="Body-Text">
                            <p>
                                BrewHop is my Hack Reactor capstone project. I
                                worked on a team of 4 including myself, Holly
                                Quach, Sean Sainz, and Yanning Wang. The project
                                utilizes Yelp's API to search for breweries and
                                present them to the user. The site contains a
                                React front-end, as well as multiple
                                microservice API's which are built using a
                                combination of Django and Postgres SQL. Finally,
                                the project is containerized and runs via
                                Docker.
                            </p>
                            <p>
                                I was responsible for building the login and
                                logout forms, signup form, and implementing
                                refresh-persisting React Hooks which keep the
                                user logged-in through a refresh. I also built
                                the "favorites" microservice which stores a
                                user's favorited breweries in the backend. I
                                took the lead in styling the entire page,
                                largely utilizing Bootstrap components, and
                                designed most of the graphics. Currently, I'm
                                working on developing a wake function which
                                wakes the backend from sleep and indicates
                                progress to the user through visual cues such as
                                a loading bar.
                            </p>
                            <br />
                            <a
                                href="https://gitlab.com/brewhoppers/brew-hop"
                                target="blank"
                            >
                                GitLab Repository
                            </a>
                            <br />
                            <a
                                href="https://brewhoppers.gitlab.io/brew-hop/"
                                target="blank"
                            >
                                Deployed Site
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Horizontal-Section-Divider" />
                <div className="Page-Content-Container-2">
                    <div className="Page-Content-Column-1">
                        <img
                            alt="Treampardy Gameboard"
                            src={`${process.env.PUBLIC_URL}/project_screenshots/Screenshot_Treampaprdy_Game.png`}
                        />
                    </div>
                    <div className="Page-Content-Column-1">
                        <div className="H3-Header">
                            <h3>Treampardy</h3>
                        </div>
                        <br />
                        <div className="Body-Text-Bold">
                            <p>
                                Treampardy is a web game utilizing questions
                                from real episodes of Jeopardy!™
                            </p>
                        </div>
                        <div className="Body-Text">
                            <p>
                                Treampardy was co-developed by Cindy Chiang,
                                Lindsey Carlson, and myself. It is built using
                                React, and pulling game data from the
                                open-source API{" "}
                                <a href="https://jservice.io" target="blank">
                                    jservice.io
                                </a>
                                .
                            </p>
                            <p>
                                The three of us worked collaboratively,
                                group-programming to build most of the game's
                                core functionality. I was personally responsible
                                for the modals which show the game's clues and
                                questions. In the time since, I have worked to
                                maintain it, refactoring some of the
                                data-fetching logic. I've also built out some ui
                                functionality, including a loading bar which
                                appears while game data is being fetched from
                                the API. The game remains a work in progress,
                                and on the to-do list are enhancements such as
                                multi-player functionality, and a game-over
                                page.
                            </p>
                            <br />
                            <a
                                href="https://gitlab.com/treamforce/treampardy-take-2"
                                target="blank"
                            >
                                GitLab Repository
                            </a>
                            <br />
                            <a
                                href="https://treamforce.gitlab.io/treampardy-take-2/"
                                target="blank"
                            >
                                Deployed Site
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Horizontal-Section-Divider" />
                <div className="Page-Content-Container-2">
                    <div className="Page-Content-Column-1">
                        <img
                            alt="AutoBahn Service List"
                            src={`${process.env.PUBLIC_URL}/project_screenshots/Screenshot_AutoBahn_Service-List.png`}
                        />
                    </div>
                    <div className="Page-Content-Column-1">
                        <div className="H3-Header">
                            <h3>AutoBahn</h3>
                        </div>
                        <br />
                        <div className="Body-Text-Bold">
                            <p>
                                AutoBahn is a car dealership app managing sales,
                                inventory, and service appointments.
                            </p>
                        </div>
                        <div className="Body-Text">
                            <p>
                                AutoBahn was a collaborative project between
                                myself and Zoybh Hussein. It is built using a
                                React front-end, a Django-REST API back-end, and
                                a Postgres SQL database. The project also uses a
                                poller to propagate data from the database.
                                Finally, the project is containerized, and runs
                                via Docker.
                            </p>
                            <p>
                                I was responsible for building the service and
                                inventory microservices. I also built much of
                                the visual interface, such as navbar, footer,
                                buttons, tables, etc., and utilized Bootstrap
                                components as well as graphics I custom designed
                                myself.
                            </p>
                            <br />
                            <a
                                href="https://gitlab.com/jwpettit/project-beta"
                                target="blank"
                            >
                                GitLab Repository
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Horizontal-Section-Divider" />
                <div className="Page-Content-Container-2">
                    <div className="Page-Content-Column-1">
                        <img
                            alt="Portfolio Site Homepage"
                            src={`${process.env.PUBLIC_URL}/project_screenshots/Screenshot_Portfolio-Site_Homepage.png`}
                        />
                    </div>
                    <div className="Page-Content-Column-1">
                        <div className="H3-Header">
                            <h3>Portfolio Site</h3>
                        </div>
                        <br />
                        <div className="Body-Text-Bold">
                            <p>
                                My portfolio website was built entirely from
                                scratch utilizing React, CSS, and MaterialUI
                                components.
                            </p>
                        </div>
                        <div className="Body-Text">
                            <p>
                                This portfolio website is my latest project and
                                is currently a work in progress. Next steps
                                include making the site reactive in order to
                                work better on mobile, and adding projects. I
                                welcome all feedback to the site and would love
                                to hear from you!
                            </p>
                            <br />
                            <a
                                href="https://github.com/jwpettit/Portfolio-Website"
                                target="blank"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
