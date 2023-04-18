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
                            Vivamus in porttitor ante. Maecenas ipsum dolor,
                            dapibus vestibulum ante eget
                        </h3>
                    </div>
                    <br />
                    <div className="Body-Text">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec eget dui nec velit mattis dictum.
                            Quisque accumsan malesuada neque, non ornare ligula
                            rutrum vitae. Fusce nec tristique velit. Ut euismod
                            diam orci, ut bibendum dui gravida.
                        </p>
                        <p>
                            Donec eget dui nec velit mattis dictum. Quisque
                            accumsan malesuada neque, non ornare ligula rutrum
                            vitae. Fusce nec tristique velit. Ut euismod diam
                            orci, ut bibendum dui gravida id. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    {/* <div className="About-Flags-Container"> */}
                        {/* <img
                            alt="USA Flag"
                            src={`${process.env.PUBLIC_URL}/flags/Flag_USA.svg`}
                            width="50"
                        /> */}
                        {/* <img
                            alt="Luxembourg Flag"
                            src={`${process.env.PUBLIC_URL}/flags/Flag_Luxembourg.svg`}
                            width="50"
                        /> */}
                        {/* <img
                            alt="LGBTQ Flag"
                            src={`${process.env.PUBLIC_URL}/flags/Flag_LGBT.svg`}
                            width="50"
                        /> */}
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}
