import React from 'react';
import './index.scss';
import { BLUE, GREEN, GREY } from '../../../common/constants';
interface IProps {
	isCardDisabled: boolean;
	isCardSubmitted: boolean;
}
export const Status: React.FC<IProps> = ({ isCardDisabled, isCardSubmitted }) => {
    const deriveStyle = () => {
        if (isCardSubmitted) {
            return { background: GREEN };
        } else {
            return { background: GREY };
        }
    };
    return <div className='status' style={deriveStyle()}></div>;
};
