import React from 'react';
import './index.scss';
interface IProps {
	onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
	bkgColor: string;
}
export const Button: React.FC<IProps> = ({ onClickHandler, bkgColor }) => (
    <button className='btn' style={{ background: `${bkgColor}` }} onClick={onClickHandler}>
		Submit
    </button>
);
