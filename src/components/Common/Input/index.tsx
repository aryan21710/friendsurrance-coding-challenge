import React from 'react';
import './index.scss';

interface IProps {
	onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
	placeHolderText: string;
	type: string;
}
export const Input: React.FC<IProps> = ({ type, onChangeHandler, placeHolderText }) => (
    <input className='input' type={type} onChange={onChangeHandler} placeholder={placeHolderText} />
);
