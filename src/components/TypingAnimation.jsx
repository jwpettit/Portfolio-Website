import ReactTypingEffect from "react-typing-effect";

export default function HomepageTyping() {
    return (
        <>
            <ReactTypingEffect
                text={
                    [
                        "a software engineer.",
                        "a designer.",
                        "a frontend extraordinaire.",
                        "pretty good at Python and JS.",
                        "American and Luxembourgish.",
                        "a Californian.",
                        "a dog lover.",
                        "a car enthusiast.",
                        "LGBTQ."
                    ]
                }
                className="Homepage-About-Text-Animated"
                speed="100"
                eraseSpeed="50"
                eraseDelay="3000"
                typingDelay="1000"
            />
        </>
    );
};
