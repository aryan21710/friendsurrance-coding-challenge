import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { Title } from '../Title';
import { Description } from '../Description';
import { Status } from '../Status';

import { BLUE, GREEN, GREY } from '../../../common/constants';
import './index.scss';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
interface IProps {
	isCardDisabled?: boolean;
	toggleHeight: boolean;
	toggleHeightHandler: () => void;
}
export const Card: React.FC<IProps> = ({ isCardDisabled, toggleHeight, toggleHeightHandler }) => {
    const onClickHandler = () => {
        alert('hi');
    };
    const onChangeHandler = () => {
        alert('hi');
    };
    return (
        <div className='wrapper'>
            <div className={toggleHeight ? 'expand' : 'collapse'}>
                <section className='titleRow'>
                    <Title text={'FIRST NAME:-'} />
                    <Title text={'YOUR NAME'} />
                    <Status/>
                </section>
                <section className={toggleHeight ? 'descRow' : 'invisible'}>
                    <Description text={'Please Enter Your First Name:-'} />
                    <Input
                        isCardDisabled={isCardDisabled}
                        type={'text'}
                        placeHolderText={'Enter Your Name'}
                        onChangeHandler={onChangeHandler}
                    />
                </section>
                <section className={toggleHeight ? 'btnRow' : 'invisible'}>
                    <Button
                        isCardDisabled={isCardDisabled}
                        onClickHandler={onClickHandler}
                        bkgColor={isCardDisabled ? GREY : GREEN}
                        text='Submit'
                    />
                    <Button onClickHandler={onClickHandler} bkgColor={GREY} text='Cancel' />
                </section>
            </div>
            <span className='toggle'>
                <i className={toggleHeight ? 'fa fa-minus' : 'fa fa-plus'} onClick={toggleHeightHandler}></i>
            </span>
        </div>
    );
};
