import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { Question } from '../Question';
import { Description } from '../Description';
import { BLUE, GREEN, GREY } from '../../../common/constants';
import './index.scss';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
export const Card = () => {
    const [toggleHeight, setToggleHeight] = useState<boolean>(false);
    const toggleHeightHandler = () => setToggleHeight(!toggleHeight);

    const onClickHandler = () => {
        return;
    };
    const onChangeHandler = () => {
        return;
    };
    return (
        <div className='wrapper'>
            <div className={toggleHeight ? 'expand' : 'collapse'}>
                <section className='titleRow'>
                    <Question text={'FIRST NAME:-'} />
                    <Input type={'text'} placeHolderText={'Enter Your Name'} onChangeHandler={onChangeHandler} />
                    <Button onClickHandler={onClickHandler} bkgColor={GREEN} text='Submit' />
                </section>
                <section className={toggleHeight ? 'descRow' : 'invisible'}>
                    <Description text={'Please Enter Your First Name:-'} />
                </section>
                <section className={toggleHeight ? 'cancelRow' : 'invisible'}>
                    <Button onClickHandler={onClickHandler} bkgColor={GREY} text='Cancel' />
                </section>
            </div>
            <span className='toggle'>
                <i className={toggleHeight ? 'fa fa-minus' : 'fa fa-plus'} onClick={toggleHeightHandler}></i>
            </span>
        </div>
    );
};
