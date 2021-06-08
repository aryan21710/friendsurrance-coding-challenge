import React, { useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
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
	toggleExpandedHandler: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
	onClickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
	onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export const Card: React.FC<IProps> = (props) => {
    const {
        question,
        description,
        inputType,
        answer,
        isCardDisabled,
        toggleExpandedState,
        placeHolderText,
        submitBtnColor,
        toggleExpandedHandler,
        classname,
        onClickHandler,
        onChangeHandler,
    } = props;
    const simpleValidator = useRef(new SimpleReactValidator());

    return (
        <div className='wrapper'>
            <div className={classname}>
                <section className='titleRow'>
                    <Title text={question} />
                    <Title text={answer.length > 0 ? `${answer.charAt(0).toUpperCase()}${answer.substr(1)}` : answer} />
                    <Status isCardDisabled={isCardDisabled} />
                </section>
                <section className={toggleExpandedState ? 'descRow' : 'invisible'}>
                    <Description text={description} />
                    <Input
                        answer={answer}
                        isCardDisabled={isCardDisabled}
                        type={inputType}
                        placeHolderText={placeHolderText}
                        onChangeHandler={onChangeHandler}
                        onBlur={simpleValidator.current.showMessageFor(question)}
                    />
                    {simpleValidator.current.message(question, answer, 'required|alpha')}
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
                {isCardDisabled ? (
                    <i className={toggleExpandedState ? 'fa fa-minus' : 'fa fa-plus'}></i>
                ) : (
                    <i className={toggleExpandedState ? 'fa fa-minus' : 'fa fa-plus'} onClick={toggleExpandedHandler}></i>
                )}
            </span>
        </div>
    );
};
