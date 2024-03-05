import React from "react";

interface Props {
    text: string;
    wpm?: number;
    className?: string;
}

const Wpm: React.FC<Props> = ({ text, className, wpm = 238 }) => {
    const wordsCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordsCount / wpm);
    return <span className={className}>{readingTime}</span>;
};

export default Wpm;

