import { useState } from "react";

export default function Clock() {
    const locale = "us-US";
    const timeZone = { timeZone: "America/Los_Angeles" };
    let time = new Date().toLocaleTimeString(locale, timeZone);

    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString(locale, timeZone);
        setCurrentTime(time);
    };

    setInterval(updateTime, 1000);

    return currentTime;
}
