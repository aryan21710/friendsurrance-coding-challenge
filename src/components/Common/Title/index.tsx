import React from 'react';
import './index.scss';

interface IProps {
    text: string;
    textType?: string;
}
export const Title:React.FC<IProps> = ({ text,textType }) => (
    <span className={textType==="question" ? "question" : "answer"}>
        {text}
    </span>
);
