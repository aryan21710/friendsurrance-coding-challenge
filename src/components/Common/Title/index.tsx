import React from 'react';
import './index.scss';

interface IProps {
	text: string;
	textType?: string;
}
export const Title: React.FC<IProps> = ({ text, textType }) => {
    const deriveClassName = () => {
        switch (textType) {
        case 'question':
            return 'question';
        case 'answer':
            return 'answer';
        case 'description':
            return 'description';
        }
    };
    return <span className={deriveClassName()}>{text}</span>;
};
