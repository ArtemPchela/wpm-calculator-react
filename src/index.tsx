import React from "react";

interface Props {
    text: string;
    className?: string;
    wpm?: number;
}

const calculateReadingTime = (text: string, wpm: number = 238) => {
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wpm);
};

const Wpm: React.FC<Props> = ({ text, className, wpm }) => {
    const readingTime = calculateReadingTime(text, wpm);
    return <span className={className}>{readingTime} min read</span>;
};

export default Wpm;
