import { useState } from "react";

export default function Clock() {

    const locale = 'us-PT'
    let time = new Date().toLocaleTimeString(locale);
    
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString(locale);
        setCurrentTime(time)
    }

    setInterval(updateTime, 1000)

    return (currentTime)
}
