import { useEffect } from "react";
import GoHomeButton from "../components/GoHomeButton";
import ReactGA from "react-ga";

export default function Invalid() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <div className="Invalid-Container">
            <div className="H1-Header">
                <h1>Well Shoot!</h1>
            </div>
            <div className="H3-Header">
                <h3>This page does not exist.</h3>
            </div>
            <br />
            <div>
                <img
                    alt="A Greyhound named Rocky"
                    src={`${process.env.PUBLIC_URL}/rocky/rocky1.png`}
                    height="300"
                />
            </div>
            <br />
            <div className="H3-Header">
                <h3>Please enjoy this image of Rocky!</h3>
            </div>
            <br />
            <GoHomeButton />
        </div>
    );
}
