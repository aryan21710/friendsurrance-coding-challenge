import React, { useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Input } from '../Input';
import { Button } from '../Button';
import { Title } from '../Title';
import { Description } from '../Description';
import { Status } from '../Status';
import { IData } from '../../../common/interfaces';

import { GREY } from '../../../common/constants';
import './index.scss';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

interface IProps extends IData {
	toggleExpandedHandler: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSubmitHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onCancelHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChangeHandler: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
    // checkValidationError: (error: boolean)=>void;
    simpleValidator : React.MutableRefObject<SimpleReactValidator>
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
        onSubmitHandler,
        onChangeHandler,
        onCancelHandler,
        submitBtnText,
        statusIconColor,
        validation,
        simpleValidator
        // checkValidationError
    } = props;
    // answer.length > 0 && checkValidationError(question,simpleValidator.current.fieldValid(question));
    return (
        <div className='wrapper'>
            <div className={classname}>
                <section className='titleRow'>
                    <Title text={question} />
                    <Title text={answer.length > 0 ? `${answer.charAt(0).toUpperCase()}${answer.substr(1)}` : answer} />
                    <Status statusIconColor={statusIconColor}/>
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
                    {answer.length > 0 && simpleValidator.current.message(question, answer, validation)}
                </section>
                <section className={toggleExpandedState ? 'btnRow' : 'invisible'}>
                    <Button
                        isCardDisabled={isCardDisabled}
                        onClickHandler={onSubmitHandler}
                        bkgColor={answer.length > 0 ? submitBtnColor : GREY}
                        text={submitBtnText}
                    />
                    <Button onClickHandler={onCancelHandler} bkgColor={GREY} text='Cancel' />
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
