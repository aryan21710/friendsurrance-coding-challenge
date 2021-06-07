import React from 'react';
import './index.scss';

interface IProps {
	onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
	placeHolderText: string;
	type: string;
	isCardDisabled?: boolean
}
export const Input: React.FC<IProps> = ({ type, onChangeHandler, placeHolderText, isCardDisabled = false }) => (
    <input disabled={isCardDisabled} className={isCardDisabled ? 'disabled input' : 'input'} type={type} onChange={onChangeHandler} placeholder={placeHolderText} />
);
