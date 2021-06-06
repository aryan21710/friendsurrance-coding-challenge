import React from 'react';
import './index.scss';

interface IProps {
    text: string;
}
export const Question:React.FC<IProps> = ({ text }) => (
    <span className="question">
        {text}
    </span>
);
