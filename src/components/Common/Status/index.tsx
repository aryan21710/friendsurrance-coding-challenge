import React from 'react';
import './index.scss';
import { BLUE, GREEN, GREY } from '../../../common/constants';
interface IProps {
	isCardDisabled: boolean;
	isCardSubmitted: boolean;
}
export const Status: React.FC<IProps> = ({ isCardDisabled, isCardSubmitted }) => {
    const deriveStyle = () => {
        if (isCardDisabled) {
            return { background: GREY };
        } else if (isCardSubmitted) {
            return { background: BLUE };
        } else {
            return { background: GREEN };
        }
    };
    return <div className='status' style={deriveStyle()}></div>;
};
