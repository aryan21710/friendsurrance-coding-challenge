import React from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { Input } from '../Input';
import { Button } from '../Button';
import { Title } from '../Title';
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
    simpleValidator : React.MutableRefObject<SimpleReactValidator>
    optionsArr?: string[]|undefined;
    onSelectHandler: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
    inputValue: string;
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
        simpleValidator,
        onSelectHandler,
        optionsArr,
        inputValue
    } = props;
    return (
        <div className='wrapper'>
            <div className={classname}>
                <section className='titleRow'>
                    <Title textType="question" text={question} />
                    <Title textType="answer" text={answer.length > 0 ? `${answer.charAt(0).toUpperCase()}${answer.substr(1)}` : answer} />
                    <Status statusIconColor={statusIconColor}/>
                </section>
                <section className={toggleExpandedState ? 'descRow' : 'invisible'}>
                    <Title textType="description" text={description} />
                    <Input
                        answer={answer}
                        isCardDisabled={isCardDisabled}
                        type={inputType}
                        placeHolderText={placeHolderText}
                        onChangeHandler={onChangeHandler}
                        optionsArr={optionsArr}
                        onSelectHandler={onSelectHandler}
                        inputValue={inputValue}
                        onBlur={simpleValidator.current.showMessageFor(question)}
                    />

                    {(inputValue.length > 0 && inputType !== 'select') && simpleValidator.current.message(question, inputValue, validation)}
                </section>
                <section className={toggleExpandedState ? 'btnRow' : 'invisible'}>
                    <Button
                        isCardDisabled={isCardDisabled}
                        onClickHandler={onSubmitHandler}
                        bkgColor={inputValue.length > 0 ? submitBtnColor : GREY}
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
