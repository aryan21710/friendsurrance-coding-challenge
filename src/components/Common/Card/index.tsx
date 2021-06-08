import React, { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { Title } from '../Title';
import { Description } from '../Description';
import { Status } from '../Status';
import { IData } from '../../../common/interfaces';

import { BLUE, GREEN, GREY } from '../../../common/constants';
import './index.scss';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

interface IProps extends IData {
    toggleExpandedHandler: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined
}

export const Card: React.FC<IProps> = (props) => {
    const { question, description, inputType, answer, isCardDisabled, toggleExpandedState, placeHolderText, submitBtnColor, toggleExpandedHandler } = props;
    const onClickHandler = () => {
        alert('hi');
    };
    const onChangeHandler = () => {
        alert('hi');
    };
    return (
        <div className='wrapper'>
            <div className={toggleExpandedState ? 'expand' : 'collapse'}>
                <section className='titleRow'>
                    <Title text={question} />
                    <Title text={'YOUR NAME'} />
                    <Status/>
                </section>
                <section className={toggleExpandedState ? 'descRow' : 'invisible'}>
                    <Description text={description} />
                    <Input
                        answer={answer}
                        isCardDisabled={isCardDisabled}
                        type={inputType}
                        placeHolderText={placeHolderText}
                        onChangeHandler={onChangeHandler}
                    />
                </section>
                <section className={toggleExpandedState ? 'btnRow' : 'invisible'}>
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
                <i className={toggleExpandedState ? 'fa fa-minus' : 'fa fa-plus'} onClick={toggleExpandedHandler}></i>
            </span>
        </div>
    );
};
