import React from 'react';
import './index.scss';

interface IProps {
	onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
	placeHolderText: string;
	type: string;
	isCardDisabled?: boolean;
	answer: string;
	onBlur: any;
}
export const Input: React.FC<IProps> = ({ answer, type, onChangeHandler, placeHolderText, isCardDisabled = false }) => (
    <input disabled={isCardDisabled} className={isCardDisabled ? 'disabled input' : 'input'} type={type} value={answer}
        onChange={onChangeHandler} placeholder={placeHolderText} />
);
