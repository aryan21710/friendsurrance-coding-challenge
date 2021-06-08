import React, { useState, useRef } from 'react';
import { Card } from '../Common/Card';
import { data } from '../../common/constants';
import { IData } from '../../common/interfaces';
import { GREEN, GREY } from '../../common/constants';
import SimpleReactValidator from 'simple-react-validator';

const Form: React.FC = () => {
    const [formData, setFormData] = useState<IData[]>(data);
    const simpleValidator = useRef(new SimpleReactValidator());


    const toggleExpandedHandler = (cardid: string) => (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const updatedFormData = formData.map((data) => {
            if (data.question === cardid) {
                return {
                    ...data,
                    toggleExpandedState: !data.toggleExpandedState,
                    classname: !data.toggleExpandedState ? 'expand' : 'collapse',

                };
            } else {
                if (data.isCardSubmitted) {
                    return { ...data, classname: 'collapse', toggleExpandedState: false };
                } else {
                    return { ...data, classname: 'collapse disabled', toggleExpandedState: false };
                }
            }
        });
        setFormData([...updatedFormData]);
    };

    const onCancelHandler = (cardid: string)=>(e: React.MouseEvent<HTMLButtonElement>)=>{
        const updatedFormData = formData.map((data, idx) => {
            if (data.question === cardid) {
                return {
                    ...data,
                    isCardSubmitted: false,
                    submitBtnColor: GREY,
                    answer: '',
                    submitBtnText: 'Submit',
                    statusIconColor: GREY
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);
    };

    const onSubmitHandler = (cardid: string)=>(e: React.MouseEvent<HTMLButtonElement>)=>{
        let nextCard = -1;
        const validationError = cardid==='Gender' ? true : simpleValidator.current.fieldValid(cardid);
        console.log('validationError', validationError);
        const updatedFormData = formData.map((data, idx) => {
            if (data.question === cardid) {
                nextCard = idx + 1;
                return {
                    ...data,
                    isCardSubmitted: validationError ? true : false,
                    submitBtnColor: GREEN,
                    submitBtnText: validationError ? 'Edit' : 'Submit',
                    statusIconColor: validationError ? GREEN : GREY
                };
            } else if (idx === nextCard && validationError) {
                return {
                    ...data,
                    isCardSubmitted: true,
                    isCardDisabled: false,
                    classname: 'collapse'
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);
    };
    const onChangeHandler = (cardid: string)=>(e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedFormData = formData.map((data) => {
            if (data.question === cardid) {
                const element = e.target as HTMLInputElement;
                return {
                    ...data,
                    answer: element.value,
                    placeHolderText: '',
                    submitBtnColor: element.value.length > 0 ? GREEN : GREY
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);
    };

    const onSelectHandler = (cardid: string)=>(e:React.ChangeEvent<HTMLSelectElement>)=>{
        const updatedFormData = formData.map((data) => {
            if (data.question === cardid) {
                return {
                    ...data,
                    answer: e.target.value,
                    submitBtnColor: e.target.value.length > 0 ? GREEN : GREY
                };
            } else {
                return { ...data };
            }
        });
        setFormData([...updatedFormData]);
    };



    return (
        <React.Fragment>
            {formData.map((data, idx) => (
                <Card
                    key={idx}
                    question={data.question}
                    questionCount={idx}
                    classname={data.classname}
                    description={data.description}
                    inputType={data.inputType}
                    answer={data.answer}
                    isCardSubmitted={data.isCardSubmitted}
                    isCardDisabled={data.isCardDisabled}
                    toggleExpandedState={data.toggleExpandedState}
                    placeHolderText={data.placeHolderText}
                    submitBtnColor={data.submitBtnColor}
                    toggleExpandedHandler={toggleExpandedHandler(data.question)}
                    onSubmitHandler={onSubmitHandler(data.question)}
                    onCancelHandler={onCancelHandler(data.question)}
                    onChangeHandler={onChangeHandler(data.question)}
                    submitBtnText={data.submitBtnText}
                    statusIconColor={data.statusIconColor}
                    validation={data.validation}
                    simpleValidator={simpleValidator}
                    onSelectHandler={onSelectHandler(data.question)}
                />
            ))}
        </React.Fragment>
    );
};

export default Form;


