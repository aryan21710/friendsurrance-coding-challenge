import React from 'react';
import './index.scss';

interface IProps {
	onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
	placeHolderText: string;
	type: string;
	isCardDisabled?: boolean;
	answer: string;
	onBlur: any;
	optionsArr: string[]|undefined;
	onSelectHandler: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
	inputValue: string;
}
export const Input: React.FC<IProps> = ({ optionsArr, onSelectHandler, inputValue, type, onChangeHandler, placeHolderText, isCardDisabled = false }) => type === 'select' && optionsArr? (
    <select
        value={inputValue}
        onChange={onSelectHandler}
    >
        {optionsArr.map((options)=><option value={options}>{options}</option>)}
    </select>
) : (
    <input disabled={isCardDisabled} className={isCardDisabled ? 'disabled input' : 'input'} type={type} value={inputValue}
        onChange={onChangeHandler} placeholder={placeHolderText} />
);