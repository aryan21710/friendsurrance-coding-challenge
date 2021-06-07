import React from 'react';
import './index.scss';
interface IProps {
	onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    bkgColor: string;
    text: string;
    isCardDisabled?: boolean
}
export const Button: React.FC<IProps> = ({ onClickHandler, bkgColor, text, isCardDisabled = false }) => (
    <button disabled={isCardDisabled}
        style={{ background: `${bkgColor}` }}
        className= {isCardDisabled ? 'disabled btn' : 'btn'} onClick={onClickHandler}>
        {text}
    </button>
);
