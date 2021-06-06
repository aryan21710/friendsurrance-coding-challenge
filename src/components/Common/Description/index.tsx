import React from 'react';
import './index.scss';

interface IProps {
	text: string;
}
export const Description: React.FC<IProps> = ({  text }) => (
    <span className='descWrapper'> {text}</span>
);


