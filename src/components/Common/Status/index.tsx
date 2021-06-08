import React from 'react';
import './index.scss';
interface IProps {
	statusIconColor: string
}
export const Status: React.FC<IProps> = ({ statusIconColor }) => <div className='status' style={{background: statusIconColor}}></div>;

