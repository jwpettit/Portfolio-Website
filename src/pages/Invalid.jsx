import GoHomeButton from "../components/Button";

export default function Invalid() {
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
                    height="400"
                />
            </div>
            <br />
            <div className="H3-Header">
                <h3>Please enjoy this image of Rocky!</h3>
            </div>
            <br />
            <GoHomeButton/>
        </div>
    );
};
