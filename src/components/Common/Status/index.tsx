import React from 'react';
import './index.scss';
import { GREEN, GREY } from '../../../common/constants';
interface IProps {
    isCardDisabled: boolean;
}
export const Status:React.FC<IProps> = ({ isCardDisabled }) => <div className='status' style={{ background: isCardDisabled ? GREY : GREEN }}></div>;

