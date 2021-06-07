import React from 'react';
import './index.scss';
import { GREEN } from '../../../common/constants';

export const Status = () => <div className='status' style={status}></div>;

const status = {
    background: GREEN,
};
